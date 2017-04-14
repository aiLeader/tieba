package com.yc.tieba.service;


import com.yc.tieba.entity.Concern;
import com.yc.tieba.entity.PaginationBean;

public interface ConcernService {

	Integer attentionUserb(String userida, String useridb);

	PaginationBean<Concern> showConcernById(String userida, String page, String string);

}
