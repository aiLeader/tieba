package com.yc.tieba.web.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tieba.service.DianzanService;

@Controller
@RequestMapping("dianzan")
public class DianzanHandler {
	@Autowired
	private DianzanService dianzanService;
	
	@RequestMapping(value="insert")
	@ResponseBody
	public boolean insert(String userid,String nid){
		System.out.println("userid:"+userid+"    nid:"+nid);
		if(userid.isEmpty()||nid.isEmpty()||userid == null||nid == null){
			return false;
		}
		return dianzanService.insert(userid,nid)>0;
		
	}
}
