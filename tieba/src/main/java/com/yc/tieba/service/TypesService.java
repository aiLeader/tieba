package com.yc.tieba.service;



import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Types;

public interface TypesService {

	PaginationBean<Types> listTypes(String rows, String page);

	int addTypes(Types types);

	int modifyTypes(Types types);

	int deleteTypes(Types types);

}
