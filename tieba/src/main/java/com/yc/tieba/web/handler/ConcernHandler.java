package com.yc.tieba.web.handler;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.service.ConcernService;

@Controller
@RequestMapping("concern")
public class ConcernHandler {
	@Autowired
	private ConcernService concernService;
	
	@RequestMapping(value="dfs")
	@ResponseBody
	public PaginationBean<NoteInfo> showConcernById(String userid){
		
		
		return concernService.showConcernById(userid);
	}
}
