package com.yc.tieba.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.mapper.ConcernMapper;
import com.yc.tieba.service.ConcernService;

@Service("concernService")
public class ConcernServiceImpl implements ConcernService {
	@Autowired
	private ConcernMapper concernMapper;

	@Override
	public PaginationBean<NoteInfo> showConcernById(String userid) {
		List<String>  noteUsIds= concernMapper.findConcernById(userid);
		return concernMapper.showConcernById(userid);
	}

	

}
