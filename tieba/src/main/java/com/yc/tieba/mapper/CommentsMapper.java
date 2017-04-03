package com.yc.tieba.mapper;

import java.util.List;

import com.yc.tieba.entity.Comments;
import com.yc.tieba.entity.QueryEntity;

public interface CommentsMapper {
	List<Comments> findAllComment();
	
	List<Comments> findBanComm();

	Comments findCommById(String cid);

	List<Comments> findCommByUid(QueryEntity queryEntity);

	List<Comments> findCommByNid(QueryEntity queryEntity);

	int banComm(String cid);
	
	int letComm(String cid);
}
