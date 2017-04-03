package com.yc.tieba.service;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface NoteService {

	PaginationBean<NoteInfo> findNote(String page, String rows, String options);

	int deleteNote(String ids);

	int updateNote(NoteInfo rowData);

}
