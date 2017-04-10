package com.yc.tieba.service;

import java.util.List;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface ConcernService {

	PaginationBean<NoteInfo> showConcernById(String userid);

	





}
