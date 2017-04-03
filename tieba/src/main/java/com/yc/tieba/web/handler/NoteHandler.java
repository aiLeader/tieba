package com.yc.tieba.web.handler;


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
@RequestMapping("note")
public class NoteHandler {
	
	@Autowired
	private NoteService noteService;
	
	//查询
	@RequestMapping(value="find")
	@ResponseBody
	public PaginationBean<NoteInfo> listFind(String page, String rows,String options){
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
	public PaginationBean<NoteInfo> listIndexNote(@RequestParam("page")String page){
		return noteService.indexfindNote(page,"5");
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
}
