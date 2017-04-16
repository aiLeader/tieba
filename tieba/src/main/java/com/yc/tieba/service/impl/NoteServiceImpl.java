package com.yc.tieba.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.mapper.NoteMapper;
import com.yc.tieba.service.NoteService;
import com.yc.tieba.util.SensitivewordFilter;

@Service("noteService")
public class NoteServiceImpl implements NoteService {
	@Autowired
	private NoteMapper noteMapper;

	@Override
	public PaginationBean<NoteInfo> findNote(String page, String rows,
			String options) {
		int pageSize=10; //条数
		int currPage=1; //当前页
		if(rows!=null){
			pageSize=Integer.parseInt(rows);
		} 
		if(page!=null){
			currPage=Integer.parseInt(page);
			if(currPage<=0){
				currPage=1;
			}
		}	
		Map<String, String> map = new HashMap<String, String>();
		map.put("pageSize", String.valueOf(pageSize));
		map.put("currPage",String.valueOf(currPage));

		if(options.startsWith("username")){
			options =  options.replace("username", "");
			options = noteMapper.findUsId(options);
			if(options != null){
				map.put("options", options);
				return noteMapper.findNoteUs(map);
			}
			return new PaginationBean<NoteInfo>();
		}else if(options.startsWith("other")){
			options =  options.replace("other", "");
			map.put("options", options);
			return noteMapper.findNote(map);
		}else 	if(options.startsWith("typesname")){
			options =  options.replace("typesname", "");
			options =noteMapper.findTyId(options);
			if(options != null){
				map.put("options", options);
				return noteMapper.findNoteTy(map);
			}
			return new PaginationBean<NoteInfo>();
		} else{
			return noteMapper.findNote(map);
		}
	}

	@Override
	public int deleteNote(String ids) {
		return noteMapper.deleteNote( ids);
	}

	@Override
	public int updateNote(NoteInfo rowData) {
		return noteMapper.updateNote(rowData);
	}

	@Override
	public PaginationBean<NoteInfo> indexfindNote(String page,String totalPage,String rows) {
		int pageSize = 5;
		int currPage = 1;
		int tpage=-1;
		if(totalPage!=null&&!totalPage.equals("nop")){
			tpage=Integer.parseInt(totalPage);
		}
		if(rows!=null){
			pageSize=Integer.parseInt(rows);
		}
		if(page!=null&&!page.equals("nop")){
			currPage=Integer.parseInt(page);
			if(currPage<=0){
				currPage=1;
			}
			if(tpage!=-1&&currPage>tpage){
				currPage=tpage;
			}
		}
		PaginationBean<NoteInfo> pb= new PaginationBean<NoteInfo>();
		pb.setCurrPage(currPage);
		pb.setPageSize(pageSize);
		return noteMapper.indexListNote(pb);
	}
	public List<NoteInfo> listNoteOrderByNum() {
		return noteMapper.listNoteOrderByNum();
	}

	@Override
	public NoteInfo findNoteById(String nid) {
		return noteMapper.findNoteById(nid);
	}
	public PaginationBean<NoteInfo> showByUserid(String userid, String page, String rows) {
		int pageSize=10; //条数
		int currPage=1; //当前页
		if(rows!=null){
			pageSize=Integer.parseInt(rows);
		} 
		if(page!=null){
			currPage=Integer.parseInt(page);
			if(currPage<=0){
				currPage=1;
			}
		}
		rows=String.valueOf(pageSize);
		page=String.valueOf(currPage);
		Map<String,String> map=new HashMap<String,String>();
		map.put("pageSize", String.valueOf(pageSize));
		map.put("currPage",String.valueOf(currPage));
		map.put("options", userid);
		PaginationBean<NoteInfo> noteInfo = noteMapper.findNoteUs(map);
		int totalPage = noteInfo.getTotalPage();
		if(currPage>totalPage){
			currPage = totalPage;
			map.put("currPage",String.valueOf(currPage));
		}
		return noteMapper.findNoteUs(map);
	}

	//发帖
	@Override
	public Integer insertNote(String title,String userid, String tid, String nconent) {
		SensitivewordFilter filter = new SensitivewordFilter();
		  long beginTime = System.currentTimeMillis();
	        Set<String> set = filter.getSensitiveWord(nconent, 1);
	        Set<String> settitle = filter.getSensitiveWord(title, 1);
	        long endTime = System.currentTimeMillis();
	        if(set.isEmpty()&&settitle.isEmpty()){
	        	System.out.println("没有敏感词");
			}else{
				System.out.println("有敏感词");
				return 6;
			}
		Map<String,String> map=new HashMap<String,String>();
		int status = noteMapper.findBanPStaus(userid);
		System.out.println("status:"+status);
		if(status == 1){
			return 5;
		}
		if(title!=null && userid!=null && tid!=null && nconent!=null ){
			tid = tid.replace(",tid=", "");
			System.out.println("  ntitle:"+title+"  topcontent:"+nconent+"  userid:"+userid+" tid:"+tid);
			map.put("title", title);
			map.put("userid", userid);
			map.put("tid",tid);
			map.put("nconent", nconent);
			noteMapper.addNoteNum(tid);
			return noteMapper.insertNote(map);
			//return 1;
		}else{
			return null;
		}
	}


	//收藏帖子
	@Override
	public Integer collectNote(String userid, String nid) {
		boolean nidHave = false;
			List<String> tnids  = noteMapper.findCollectNid(userid);
			for(String tnid:tnids){
				if(tnid.equals(nid)){
					nidHave = true;
					break;
				}
			}
			if(nidHave){
				System.out.println("已经有记录了");
					Map<String,String> smap=new HashMap<String,String>();
					smap.put("userid", userid);
					smap.put("nid", nid);
					int status = noteMapper.findCollectStatus(smap);
					if(status == 1){//已经收藏
						System.out.println("已经收藏,取消收藏");
						Map<String,String> dmap=new HashMap<String,String>();
						dmap.put("userid", userid);
						dmap.put("nid", nid);
						int a= noteMapper.deleteCollectNote(dmap);
						return 2;
					}else{//还没有收藏
						System.out.println("还没有收藏,点击收藏");
						Map<String,String> dmap=new HashMap<String,String>();
						dmap.put("userid", userid);
						dmap.put("nid", nid);
						int b =  noteMapper.addCollectNote(dmap);
						return 3;
					}
			}else{
				Map<String,String> map=new HashMap<String,String>();
				map.put("userid", userid);
				map.put("nid", nid);
				return noteMapper.collectNote(map);
			}
	}
	
	



	@Override
	public PaginationBean<NoteInfo> ManagerfindNote(String page, String rows, String ftype, String fparem) {
		int pageSize=10;
		int currPage=1;
		if(rows!=null){
			pageSize=Integer.parseInt(rows);
		} 
		if(page!=null){
			currPage=Integer.parseInt(page);
			if(currPage<=0){
				currPage=1;
			}
		}	
		try {
			Integer.parseInt(fparem);
		} catch (Exception e) {
			fparem="";
		}
		if(ftype.equals("nop")){
			ftype="";
		}
		System.out.println("====>"+ftype+"===>"+fparem);
		Map<String,String> map = new HashMap<String,String>();
		map.put("pageSize",String.valueOf(pageSize));
		map.put("currPage",String.valueOf(currPage));
		map.put("ftype", ftype);
		map.put("fparem",String.valueOf(fparem));
		return noteMapper.manageFindNote(map);
	}

	@Override
	public int sendNote(String nid) {
		System.out.println("countSendNote==>"+noteMapper.getCountSendNote().getTotal());
		if(noteMapper.getCountSendNote().getTotal()<10){
			System.out.println("noteSendJugle==>"+noteMapper.noteSendJugle(nid).getTotal());
			if(noteMapper.noteSendJugle(nid).getTotal()<=0){
				return noteMapper.sendNote(nid);
			}else{
				return 2;
			}
		}else{
			return 3;
		}
	}

	@Override
	public boolean CanclesendNote(String nid) {
		return noteMapper.cancelSend(nid)>0;
	}

	@Override
	public List<NoteInfo> findSendNotes() {
		return noteMapper.findSendNotes();
	}
}







