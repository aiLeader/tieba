package com.yc.tieba.service;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Users;

public interface UsersService {
	PaginationBean<Users> listuser(String rows, String page,String options);
	boolean deleteUser(String userid);
	boolean updateUser(Users users);
	int insertUser(Users users);
	Users login(Users user);
	boolean updateUserPic(Users users);
}
