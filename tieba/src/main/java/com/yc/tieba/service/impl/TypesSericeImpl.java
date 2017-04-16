package com.yc.tieba.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Types;
import com.yc.tieba.mapper.TypesMapper;
import com.yc.tieba.service.TypesService;

@Service("typesService")
public class TypesSericeImpl implements TypesService {
	@Autowired
	private TypesMapper typesMapper;

	@Override
	public PaginationBean<Types> listTypes(String rows ,String page) {
		PaginationBean<Types> pb=null;
		int pageSize = 30;
		int currPage = 1;

		if(rows != null){
			pageSize = Integer.parseInt(rows);
		}

		if(page != null){
			currPage = Integer.parseInt(page);
			if(currPage <= 0){
				currPage = 1;
			}
		}
		pb = new PaginationBean<Types>();
		pb.setCurrPage(currPage);
		pb.setPageSize(pageSize);
		pb = typesMapper.listTypes(pb);
		return pb;
	}

	@Override
	public int addTypes(Types types) {

		return typesMapper.addTypes(types);
	}

	@Override
	public int modifyTypes(Types types) {
		return typesMapper.modifyTypes(types);
	}

	@Override
	public int deleteTypes(Types types) {
		return typesMapper.deleteTypes(types);
	}

	@Override
	public PaginationBean<NoteInfo> findNotes(String page, String rows,String typesName) {

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
		if(typesName == null){
			return null;
		}
		int typesId = typesMapper.findId(typesName);
		map.put("typesId", String.valueOf(typesId));
		return typesMapper.findNotes(map);
	}

	@Override
	public PaginationBean<NoteInfo> findNotesByTid(String tid, String page) {
		int pageSize=5; //条数
		int currPage=1; //当前页
		if(page!=null){
			currPage=Integer.parseInt(page);
			if(currPage<=0){
				currPage=1;
			}
		}	
		Map<String ,String> map = new HashMap<String, String>();
		map.put("pageSize", String.valueOf(pageSize));
		map.put("currPage",String.valueOf(currPage));
		map.put("typesId", tid);
		PaginationBean<NoteInfo> noteInfo = typesMapper.findNotes(map);
		int totalPage = noteInfo.getTotalPage();
		if(currPage>totalPage){
			currPage = totalPage;
			map.put("currPage",String.valueOf(currPage));
		}
		return typesMapper.findNotes(map);
	}

	@Override
	public List<Types> showTypesinfo(String tid) {
		return typesMapper.showTypesinfo(tid);
	}

	@Override
	public List<Types> typeCompare() {
		return typesMapper.typeCompare();
	}

}
