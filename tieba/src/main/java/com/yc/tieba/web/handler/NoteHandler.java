package com.yc.tieba.web.handler;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.service.NoteService;


@Controller("noteHandler")
@RequestMapping("note")
public class NoteHandler {
	
	@Autowired
	private NoteService noteService;
	
	
	//@RequestMapping(value="find/{noteName}",method=RequestMethod.GET)
	//查询
	@RequestMapping(value="find")
	@ResponseBody
	public PaginationBean<NoteInfo> listFind(String page, String rows,String options){
		System.out.println("进来了listFind==>"+"page: "+page+"   rows: "+rows+"   options: "+options);
		//return null;
		System.out.println(noteService.findNote(page,rows,options));
		return noteService.findNote(page,rows,options);
	}
	
	@RequestMapping(value="/{ids}")
	@ResponseBody
	public boolean deleteNote(@PathVariable("ids") String ids){
		System.out.println("ids ===>"+ ids);
		
		return noteService.deleteNote(ids)>0;
	}
	

	@RequestMapping(value="/update")
	@ResponseBody
	public boolean updateNote(@RequestBody NoteInfo rowData ){
	
		System.out.println("noteinfo"+rowData);
		
		return noteService.updateNote(rowData)>0;
	}
}
