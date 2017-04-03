package com.yc.tieba.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Types;
import com.yc.tieba.mapper.TypesMapper;
import com.yc.tieba.service.TypesService;

@Service("typesService")
public class TypesSericeImpl implements TypesService {
	@Autowired
	private TypesMapper typesMapper;

	@Override
	public PaginationBean<Types> listTypes(String rows ,String page) {
		PaginationBean<Types> pb=null;
		int pageSize = 30;
		int currPage = 1;
		
		if(rows != null){
			pageSize = Integer.parseInt(rows);
		}
		
		if(page != null){
			currPage = Integer.parseInt(page);
			if(currPage <= 0){
				currPage = 1;
			}
		}
		pb = new PaginationBean<Types>();
		pb.setCurrPage(currPage);
		pb.setPageSize(pageSize);
		pb = typesMapper.listTypes(pb);
		return pb;
	}

	@Override
	public int addTypes(Types types) {
		
		return typesMapper.addTypes(types);
	}

	@Override
	public int modifyTypes(Types types) {
		return typesMapper.modifyTypes(types);
	}

	@Override
	public int deleteTypes(Types types) {
		return typesMapper.deleteTypes(types);
	}

}
