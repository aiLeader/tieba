package com.yc.tieba.service;


import com.yc.tieba.entity.Concern;
import com.yc.tieba.entity.PaginationBean;

public interface ConcernService {

	PaginationBean<Concern> showConcernById(String userida, String page, String string);

}
