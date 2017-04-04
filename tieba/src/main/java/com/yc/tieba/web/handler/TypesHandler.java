package com.yc.tieba.web.handler;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Types;
import com.yc.tieba.service.TypesService;

@Controller
@RequestMapping("types")
public class TypesHandler {
	@Autowired
	private TypesService typesService;
	
	@RequestMapping(value="")
	@ResponseBody
	public PaginationBean<Types> list(String rows,String page){
		//System.out.println(typesService.listTypes());
		return typesService.listTypes(rows ,page);
		
	}
	@RequestMapping(value="add",produces="application/json;charset=utf-8")
	@ResponseBody
	public boolean addTypes(Types types){
		return typesService.addTypes(types)>0;
	}
	@RequestMapping(value="modify",produces="application/json;charset=utf-8")
	@ResponseBody
	public boolean modifyTypes(Types types){
		return typesService.modifyTypes(types)>0;
	}
	@RequestMapping(value="delete",produces="application/json;charset=utf-8")
	@ResponseBody
	public boolean deleteTypes(Types types){ 
		return typesService.deleteTypes(types)>0;
	}
	
	@RequestMapping(value="findNote",produces="application/json;charset=utf-8")
	@ResponseBody
	public PaginationBean<NoteInfo>  findTypesNote(String page, String tid){ 
		System.out.println("  page  : "+page+" tid   :  "+tid);
		return typesService.findNotesByTid(tid,page);
	}
	
	
}
