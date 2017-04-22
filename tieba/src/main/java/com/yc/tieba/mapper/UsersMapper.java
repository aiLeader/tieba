package com.yc.tieba.mapper;

import java.util.List;
import java.util.Map;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Users;


public interface UsersMapper {
	PaginationBean<Users> listUsers(Map<String,String> b);
	int deleteUser(String userid);
	int updateUser(Users users);
	int insertUser(Users users);
	Users login(Users user);
 	int updateUserPic(Users users);
	int insertnpwd(Users users);
	int telinsertUser(Users users);
	Users telselect(Users user);
	int insertTel(Users user);
	Users tellogin(Users user);
	Users selectUserById(String userid);
	List<Users> selectAddress();
	List<Users> findusername(String keyword);
	Users jugleBanUser(String userid);
}
