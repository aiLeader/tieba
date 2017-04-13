package com.yc.tieba.mapper;

import java.util.List;
import java.util.Map;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Store;

public interface NoteMapper {
	PaginationBean<NoteInfo> findNote(Map<String, String> map);

	String findTyId(String options);

	PaginationBean<NoteInfo> findNoteTy(Map<String, String> map);

	String findUsId(String options);

	PaginationBean<NoteInfo> findNoteUs(Map<String, String> map);

	int deleteNote(String ids);

	int updateNote(NoteInfo rowData);

	PaginationBean<NoteInfo> indexListNote(PaginationBean<NoteInfo> pb);
	
	List<NoteInfo> listNoteOrderByNum();

	NoteInfo findNoteById(String nid);
	
	int insertNote(Map<String, String> map);


	int collectNote(Map<String, String> map);

	List<String> findCollectNid(String userid);

	Integer deleteCollectNote(Map<String, String> dmap);

	int findCollectStatus(Map<String, String> smap);

	Integer addCollectNote(Map<String, String> dmap);

	int addNoteNum(String tid);

	int plusNum(String nid);

	int findBanPStaus(String userid);

	PaginationBean<NoteInfo> manageFindNote(Map<String, String> map);

	int sendNote(String nid);

	PaginationBean<Object> getCountSendNote();
	
	PaginationBean<Object> noteSendJugle(String nid);

	int cancelSend(String nid);

	List<NoteInfo> findSendNotes();
}
