package com.yc.tieba.mapper;

import java.util.List;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

public interface ConcernMapper {

	PaginationBean<NoteInfo> showConcernById(String userid);

	List<String> findConcernById(String userid);

}
