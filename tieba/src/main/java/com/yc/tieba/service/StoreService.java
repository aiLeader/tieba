package com.yc.tieba.service;

import java.util.List;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface StoreService {

	PaginationBean<NoteInfo> showStoreByUserid(String userid, String page, String string);

	List<NoteInfo> getStoreByUserid(String userid);

}
