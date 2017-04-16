package com.yc.tieba.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.mapper.StoreMapper;
import com.yc.tieba.service.StoreService;

@Service("storeService")
public class StoreServiceImpl implements StoreService {
	@Autowired
	private StoreMapper storeMapper;
	
	@Override
	public PaginationBean<NoteInfo> showStoreByUserid(String userid, String page, String rows) {
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
		PaginationBean<NoteInfo> noteInfo = storeMapper.findStoreNoteByUserid(map);
		int totalPage = noteInfo.getTotalPage();
		if(currPage>totalPage){
			currPage = totalPage;
			map.put("currPage",String.valueOf(currPage));
		}
		return storeMapper.findStoreNoteByUserid(map);
	}

	@Override
	public List<NoteInfo> getStoreByUserid(String userid) {
		return storeMapper.getStoreByUid(userid);
	}

}
