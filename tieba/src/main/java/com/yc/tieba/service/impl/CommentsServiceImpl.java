package com.yc.tieba.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yc.tieba.entity.Comments;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.QueryEntity;
import com.yc.tieba.mapper.CommentsMapper;
import com.yc.tieba.service.CommentsService;

@Service("commentsService")
public class CommentsServiceImpl implements CommentsService {
	@Autowired
	private CommentsMapper commentsMapper;

	@Override
	public List<Comments> listAllComm() {
		return commentsMapper.findAllComment();
	}

	@Override
	public Comments findCommById(String cid) {
		return commentsMapper.findCommById(cid);
	}

	@Override
	public List<Comments> findCommByUid(String param,String status) {
		return commentsMapper.findCommByUid(new QueryEntity(param, Integer.parseInt(status)));
	}

	@Override
	public List<Comments> findCommByNid(String param,String status) {

		return commentsMapper.findCommByNid(new QueryEntity(param, Integer.parseInt(status)));
	}

	@Override
	public boolean banCommn(String cid) {
		if(cid==null){
			return false;
		}
		return commentsMapper.banComm(cid)>0;
	}

	@Override
	public boolean letComm(String cid) {
		if(cid==null){
			return false;
		}
		return commentsMapper.letComm(cid)>0;
	}

	@Override
	public List<Comments> findBanComm() {
		return commentsMapper.findBanComm();
	}

	@Override
	public PaginationBean<Comments> findComByNid(String nid, String page,String totalPage) {
		int currPage=1;
		int tpage=-1;
		if(totalPage!=null&&!totalPage.equals("nop")){
			tpage=Integer.parseInt(totalPage);
		}
		if(page!=null){
			currPage=Integer.parseInt(page);
			if(currPage<=0){
				currPage=1;
			}
			if(tpage!=-1&&currPage>tpage){
				currPage=tpage;
			}
		}
		Map<String,String> map = new HashMap<String,String>();
		map.put("currPage", String.valueOf(currPage));
		map.put("pageSize", "5");
		map.put("noteid", nid);
		return commentsMapper.findComByNid(map);
	}

	@Transactional
	@Override
	public int addNewComm(Comments comments) {
		if(comments.getUserid()==""||comments.getUserid()==null){
			return 5;
		}else if(commentsMapper.JBanUser(comments.getUserid()).getStatus()>0){
			if(commentsMapper.JBanNote(comments.getNid()).getStatus()>0){
				if(commentsMapper.addAComnum(comments.getNid())>0){
					return commentsMapper.addNewComm(comments);
				}else{
					return 2;
				}
			}else{
				return 3;
			}
		}else{
			return 4;
		}
	}
}
