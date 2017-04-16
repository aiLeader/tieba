package com.yc.tieba.web.handler;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Types;
import com.yc.tieba.service.NoteService;
import com.yc.tieba.service.TypesService;

@Controller
@RequestMapping("types")
public class TypesHandler {
	@Autowired
	private TypesService typesService;
	
	@Autowired
	private NoteService noteService;
	@RequestMapping(value="")
	@ResponseBody
	public PaginationBean<Types> list(String rows,String page){
		//System.out.println(typesService.listTypes());
		return typesService.listTypes(rows ,page);
		
	}
	@RequestMapping(value="add",produces="application/json;charset=utf-8")
	@ResponseBody
	public boolean addTypes(Types types){
		System.out.println(types);
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
		return typesService.findNotesByTid(tid,page);
	}
	
	@RequestMapping(value="insertNote",produces="application/json;charset=utf-8")
	@ResponseBody
	public Integer  insetIntoNote(String ntitle, String topcontent,String userid,String tid){ 
		if(userid.isEmpty()){
			return 9;
		}else if(ntitle.isEmpty()||topcontent.isEmpty()){
			return 8;
		}
		return noteService.insertNote(ntitle,userid,tid,topcontent);
	}
	//根据板块id显示板块名字和板块格言
	@RequestMapping(value="showTypesinfo")
	@ResponseBody
	public List<Types> showTypesinfo(String tid){
		return typesService.showTypesinfo(tid);
	}
	//统计板块帖子数量
	@RequestMapping(value="compare")
	@ResponseBody
	public List<Types> typeCompare(){
		return typesService.typeCompare();
	}
}
