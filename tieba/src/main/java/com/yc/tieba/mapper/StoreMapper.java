package com.yc.tieba.mapper;

import java.util.List;
import java.util.Map;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface StoreMapper {

	PaginationBean<NoteInfo> findStoreNoteByUserid(Map<String, String> map);

	List<NoteInfo> getStoreByUid(String userid);

}
