package com.yc.tieba.mapper;

import java.util.List;
import java.util.Map;

public interface ConcernMapper {

	List<String> findUseridb(String userida);

	int findConcernStatus(Map<String, String> smap);
	
	int addConcernUser(Map<String, String> dmap);

	int deleteConcernUser(Map<String, String> dmap);

	int concernUser(Map<String, String> map);

	

}
