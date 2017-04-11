package com.yc.tieba.mapper;

import java.util.Map;

import com.yc.tieba.entity.Concern;
import com.yc.tieba.entity.PaginationBean;

public interface ConcernMapper {

	PaginationBean<Concern> findConcernNoteByUserid(Map<String, String> map);

}
