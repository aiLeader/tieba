package com.yc.tieba.web.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.service.StoreService;

@Controller
@RequestMapping("store")
public class StoreHandler {
	@Autowired
	private StoreService storeService;
	
	//显示用户收藏的帖子
	@RequestMapping(value="showStoreByUserid")
	@ResponseBody
	public PaginationBean<NoteInfo> listFind(String userid,String page){
		return storeService.showStoreByUserid(userid,page,"5");
	}
}
