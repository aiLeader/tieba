package com.yc.tieba.mapper;

import java.util.List;
import java.util.Map;

import com.yc.tieba.entity.Comments;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.QueryEntity;

public interface CommentsMapper {
	PaginationBean<Comments> findAllComment(PaginationBean<Comments> pb);
	
	PaginationBean<Comments> findBanComm(PaginationBean<Comments> pb);

	Comments findCommById(String cid);

	List<Comments> findCommByUid(QueryEntity queryEntity);

	List<Comments> findCommByNid(QueryEntity queryEntity);

	int banComm(String cid);
	
	int letComm(String cid);

	PaginationBean<Comments> findComByNid(Map<String, String> map);

	int addNewComm(Comments comments);
	
	int addAComnum(String nid);

	QueryEntity JBanUser(String userid);

	QueryEntity JBanNote(String nid);
}
