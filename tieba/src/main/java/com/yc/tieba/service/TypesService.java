package com.yc.tieba.service;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Types;

public interface TypesService {

	PaginationBean<Types> listTypes(String rows, String page);

	int addTypes(Types types);

	int modifyTypes(Types types);

	int deleteTypes(Types types);

	PaginationBean<NoteInfo> findNotes(String page, String rows,String typesName);

	PaginationBean<NoteInfo> findNotesByTid(String tid, String page);

	Types showTypesinfo(String tid);

}
