package com.yc.tieba.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.mapper.ConcernMapper;
import com.yc.tieba.service.ConcernService;

@Service("concernService")
public class ConcernServiceImpl implements ConcernService {

	@Autowired
	private ConcernMapper concernMapper;
	
	@Override
	public Integer attentionUserb(String userida, String useridb) {
		boolean nidHave = false;
		List<String> tuserids  = concernMapper.findUseridb(userida);//有没有关注过b
		for(String tuserid:tuserids){
			if(tuserid.equals(useridb)){
				nidHave = true;
				break;
			}
		}
		if(nidHave){
			System.out.println("已经有记录了");
				Map<String,String> smap=new HashMap<String,String>();
				smap.put("userida", userida);
				smap.put("useridb", useridb);
				int status = concernMapper.findConcernStatus(smap);//已经有记录了查询关注状态
				if(status == 0){//已经关注
					System.out.println("已经关注,取消关注");
					Map<String,String> dmap=new HashMap<String,String>();
					dmap.put("userida", userida);
					dmap.put("useridb", useridb);
					int a= concernMapper.deleteConcernUser(dmap);
					return 2;
				}else{//还没有关注
					System.out.println("还没有关注,点击关注");
					Map<String,String> dmap=new HashMap<String,String>();
					dmap.put("userida", userida);
					dmap.put("useridb", useridb);
					int b =  concernMapper.addConcernUser(dmap);
					return 3;
				}
		}else{//还没有关注记录，添加关注记录
			Map<String,String> map=new HashMap<String,String>();
			map.put("userida", userida);
			map.put("useridb", useridb);
			return concernMapper.concernUser(map);
		}
	}

}
