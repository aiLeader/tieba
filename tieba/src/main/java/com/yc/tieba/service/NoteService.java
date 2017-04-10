package com.yc.tieba.service;

import java.util.List;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface NoteService {

	//管理员界面的全帖子打印
	PaginationBean<NoteInfo> findNote(String page, String rows, String options);
	
	PaginationBean<NoteInfo> indexfindNote(String page,String totalPage, String rows);

	int deleteNote(String ids);

	int updateNote(NoteInfo rowData);

	List<NoteInfo> listNoteOrderByNum();

	NoteInfo findNoteById(String nid);
	
	PaginationBean<NoteInfo> showByUserid(String userid, String page, String rows);

	Integer insertNote(String title,String userid, String tid, String nconent);

	Integer collectNote(String userid, String nid);

}
