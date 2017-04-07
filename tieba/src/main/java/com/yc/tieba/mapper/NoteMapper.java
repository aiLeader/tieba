package com.yc.tieba.mapper;

import java.util.List;
import java.util.Map;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface NoteMapper {
	PaginationBean<NoteInfo> findNote(Map<String, String> map);

	int findTyId(String options);

	PaginationBean<NoteInfo> findNoteTy(Map<String, String> map);

	int findUsId(String options);

	PaginationBean<NoteInfo> findNoteUs(Map<String, String> map);

	int deleteNote(String ids);

	int updateNote(NoteInfo rowData);

	PaginationBean<NoteInfo> indexListNote(PaginationBean<NoteInfo> pb);
	
	List<NoteInfo> listNoteOrderByNum();

	NoteInfo findNoteById(String nid);
	
	int insertNote(Map<String, String> map);

}
