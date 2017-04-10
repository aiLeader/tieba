package com.yc.tieba.service;


import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface ConcernService {

	PaginationBean<NoteInfo> showConcernById(String userid);

}
