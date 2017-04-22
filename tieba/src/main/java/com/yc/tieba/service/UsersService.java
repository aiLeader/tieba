package com.yc.tieba.service;

import java.util.List;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Users;

public interface UsersService {
	PaginationBean<Users> listuser(String rows, String page,String options);
	boolean deleteUser(String userid);
	boolean updateUser(Users users);
	int insertUser(Users users);
	Users login(Users user);
	boolean updateUserPic(Users users);
	boolean insertnpwd(Users user);
	int insertUser1(Users users);
	Users codelogin(Users user);
	int fastregister(Users user);
	Users tellogin(Users user);
	Users selectuser(String userid);
	List<Users> selectAddress();
	boolean JugleBanUser(String userid);
	Users showStatus(String userid);
}
