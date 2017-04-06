package com.yc.tieba.mapper;

import java.util.Map;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface StoreMapper {

	PaginationBean<NoteInfo> findStoreNoteByUserid(Map<String, String> map);

}
