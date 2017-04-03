package com.yc.tieba.service;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface NoteService {

	//管理员界面的全帖子打印
	PaginationBean<NoteInfo> findNote(String page, String rows, String options);
	
	PaginationBean<NoteInfo> indexfindNote(String page, String rows);

	int deleteNote(String ids);

	int updateNote(NoteInfo rowData);

}
