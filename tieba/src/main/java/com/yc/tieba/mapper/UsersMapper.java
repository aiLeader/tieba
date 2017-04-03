package com.yc.tieba.mapper;

import java.util.Map;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Users;


public interface UsersMapper {
	PaginationBean<Users> listUsers(Map b);
	int deleteUser(String userid);
	int updateUser(Users users);
	int insertUser(Users users);
	Users login(Users user);
	int updateUserPic(Users users);
}
