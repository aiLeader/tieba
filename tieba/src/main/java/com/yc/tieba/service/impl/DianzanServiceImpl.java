package com.yc.tieba.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.Dianzan;
import com.yc.tieba.mapper.DianzanMapper;
import com.yc.tieba.service.DianzanService;

@Service("dianzanService")
public class DianzanServiceImpl implements DianzanService {
	@Autowired
	private DianzanMapper dianzanMapper;
	
	@Override
	public int insert(String userid, String nid) {
		boolean nidHave = false;
		List<String> tnids  = dianzanMapper.findDZNid(userid);
		for(String tnid:tnids){
			if(tnid.equals(nid)){
				nidHave = true;
				break;
			}
		}
		if(nidHave){
				Map<String,String> smap=new HashMap<String,String>();
				smap.put("userid", userid);
				smap.put("nid", nid);
				int status = dianzanMapper.findDZStatus(smap);
				if(status == 1){//已经点赞
					Map<String,String> dmap=new HashMap<String,String>();
					dmap.put("userid", userid);
					dmap.put("nid", nid);
					dianzanMapper.deleteDZNote(dmap);
					dianzanMapper.deleteNoteDz(nid);//给帖子的点赞数减一
					return 2;
				}else{//还没有点赞
					Map<String,String> dmap=new HashMap<String,String>();
					dmap.put("userid", userid);
					dmap.put("nid", nid);
					dianzanMapper.addDZNote(dmap);//点赞
					dianzanMapper.addNoteDz(nid);//给帖子的点赞数加一
					return 3;
				}
		}else{//还没有记录，添加记录并记录点赞
			
			dianzanMapper.addNoteDz(nid);//给帖子的点赞数加一
			Dianzan dianzan = new Dianzan();
			dianzan.setNid(nid);
			dianzan.setuserid(userid);
			return dianzanMapper.insert(dianzan);//添加点赞记录
		}
		
	}

}


/**/
