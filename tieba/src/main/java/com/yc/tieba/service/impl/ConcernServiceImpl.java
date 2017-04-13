package com.yc.tieba.service.impl;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.Concern;
import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.mapper.ConcernMapper;
import com.yc.tieba.service.ConcernService;

@Service("concernService")
public class ConcernServiceImpl implements ConcernService {
	@Autowired
	private ConcernMapper concernMapper;

	@Override
	public PaginationBean<Concern> showConcernById(String userida, String page, String rows) {
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
		map.put("options", userida);
		PaginationBean<Concern> noteInfo = concernMapper.findConcernNoteByUserid(map);
		int totalPage = noteInfo.getTotalPage();
		if(currPage>totalPage){
			currPage = totalPage;
			map.put("currPage",String.valueOf(currPage));
		}
		return concernMapper.findConcernNoteByUserid(map);
	}

	

}
