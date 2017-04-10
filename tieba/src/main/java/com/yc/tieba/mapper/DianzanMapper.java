package com.yc.tieba.mapper;

import java.util.List;
import java.util.Map;

import com.yc.tieba.entity.Dianzan;

public interface DianzanMapper {


	int insert(Dianzan dianzan);

	List<String> findDZNid(String userid);

	int deleteDZNote(Map<String, String> dmap);

	int DZNote(Map<String, String> map);

	int findDZStatus(Map<String, String> smap);

	int addDZNote(Map<String, String> dmap);

	int addNoteDz(String nid);

	int deleteNoteDz(String nid);


}
