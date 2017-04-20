package com.yc.tieba.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.yc.tieba.entity.Concern;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.mapper.ConcernMapper;
import com.yc.tieba.service.ConcernService;

@Service("concernService")
public class ConcernServiceImpl implements ConcernService {
	@Autowired
	private ConcernMapper concernMapper;

	//显示关注
	@Override
	public PaginationBean<Concern> showConcernById(String userida, String page, String rows) {
		int pageSize=10; //条数
		int currPage=1; //当前页
		if(rows!=null){
			pageSize=Integer.parseInt(rows);
		} 
		if(page!=null){
			currPage=Integer.parseInt(page);
			if(currPage<=0){
				currPage=1;
			}
		}
		rows=String.valueOf(pageSize);
		page=String.valueOf(currPage);
		Map<String,String> map=new HashMap<String,String>();
		map.put("pageSize", String.valueOf(pageSize));
		map.put("currPage",String.valueOf(currPage));
		map.put("options", userida);
		PaginationBean<Concern> noteInfo = concernMapper.findConcernNoteByUserid(map);
		int totalPage = noteInfo.getTotalPage();
		if(currPage>totalPage){
			currPage = totalPage;
			map.put("currPage",String.valueOf(currPage));
		}
		return concernMapper.findConcernNoteByUserid(map);
	}

	
	//关注的方法
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
					concernMapper.deleteConcernUser(dmap);
					return 2;
				}else{//还没有关注
					System.out.println("还没有关注,点击关注");
					Map<String,String> dmap=new HashMap<String,String>();
					dmap.put("userida", userida);
					dmap.put("useridb", useridb);
					concernMapper.addConcernUser(dmap);
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
