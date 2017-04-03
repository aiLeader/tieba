package com.yc.tieba.service;

import java.util.List;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface NoteService {

	PaginationBean<NoteInfo> findNote(String page, String rows, String options);

	int deleteNote(String ids);

	int updateNote(NoteInfo rowData);

	List<NoteInfo> listNoteOrderByNum();

}
