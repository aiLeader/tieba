package com.yc.tieba.web.handler;


import java.io.UnsupportedEncodingException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.service.NoteService;


@Controller("noteHandler")
@RequestMapping("/note")
public class NoteHandler {
	
	@Autowired
	private NoteService noteService;
	
	//查询
	@RequestMapping(value="find")
	@ResponseBody
	public PaginationBean<NoteInfo> listFind(String page, String rows,@RequestParam("options")String options) throws UnsupportedEncodingException{
		options = new String(options.getBytes("ISO-8859-1"),"UTF-8");
		System.out.println("page==>"+page+"rows==>"+rows+"options===>"+options);
		return noteService.findNote(page,rows,options);
	}
	
	@RequestMapping(value="/{ids}")
	@ResponseBody
	public boolean deleteNote(@PathVariable("ids") String ids){
		return noteService.deleteNote(ids)>0;
	}

	@RequestMapping(value="/update")
	@ResponseBody
	public boolean updateNote(@RequestBody NoteInfo rowData ){
		return noteService.updateNote(rowData)>0;
	}
	
	@RequestMapping("listindex")
	@ResponseBody
	public PaginationBean<NoteInfo> listIndexNote(@RequestParam("page")String page,@RequestParam("totalPage")String totalpage){
		return noteService.indexfindNote(page,totalpage,"5");
	}
	/**
	 * sh
	 */
	//显示首页右边贴吧热议榜
	@RequestMapping(value="listOrderByNum")
	@ResponseBody
	public List<NoteInfo> listNoteOrderByNum(){
		return noteService.listNoteOrderByNum();
	}
	@RequestMapping("getNoteById")
	@ResponseBody
	public NoteInfo findNoteById(@RequestParam("nid")String nid){
		return noteService.findNoteById(nid);
	}
	//显示用户的全部帖子
	@RequestMapping(value="showByUserid")
	@ResponseBody
	public PaginationBean<NoteInfo> listFind(String userid,String page){
		System.out.println(noteService.showByUserid(userid,page,"5"));
		return noteService.showByUserid(userid,page,"5");
	}
	
	//存入帖子
	@RequestMapping(value="insertNote")
	@ResponseBody
	public boolean insertNote(String title,String userid,String tid,String nconent){
		return noteService.insertNote(title,userid,tid,nconent)>0;
	}
	//点赞+1
	/*@RequestMapping(value="plusNum")
	@ResponseBody
	public boolean plus(String nid){
		return noteService.plusNum(nid);
	}*/
	@RequestMapping(value="findNote")
	@ResponseBody
	public PaginationBean<NoteInfo> findNote(String page, String rows,String ftype,String fparem){
		return noteService.ManagerfindNote(page,rows,ftype,fparem);
	}
	
	@RequestMapping(value="SendNote")
	@ResponseBody
	public Integer SendNote(String nid){
		return noteService.sendNote(nid);
	}
	@RequestMapping(value="CancelSendNote")
	@ResponseBody
	public boolean CancelSendNote(String nid){
		return noteService.CanclesendNote(nid);
	}
	@RequestMapping(value="findSendNote")
	@ResponseBody
	public List<NoteInfo> findSendNotes(){
		return noteService.findSendNotes();
	}
}
