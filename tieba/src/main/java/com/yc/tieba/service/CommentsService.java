package com.yc.tieba.service;

import java.util.List;

import com.yc.tieba.entity.Comments;
import com.yc.tieba.entity.PaginationBean;

public interface CommentsService {
	List<Comments> listAllComm();

	List<Comments> findBanComm();

	Comments findCommById(String cid);

	List<Comments> findCommByUid(String param, String status);

	List<Comments> findCommByNid(String param, String status);

	boolean banCommn(String cid);

	boolean letComm(String cid);

	PaginationBean<Comments> findComByNid(String nid, String page);
}
