package com.yc.tieba.mapper;



import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Types;

public interface TypesMapper {

	PaginationBean<Types> listTypes(PaginationBean<Types> pb);

	int addTypes(Types types);

	int modifyTypes(Types types);

	int deleteTypes(Types types);

}
