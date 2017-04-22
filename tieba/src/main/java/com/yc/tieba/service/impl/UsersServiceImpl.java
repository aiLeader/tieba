package com.yc.tieba.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Users;
import com.yc.tieba.mapper.UsersMapper;
import com.yc.tieba.service.UsersService;
import com.yc.tieba.util.Encrypt;
@Service("usersService")
public class UsersServiceImpl implements UsersService {
	
	@Autowired
	private UsersMapper usersMapper;
	
	@Override
	public Users login(Users user) {
		user.setPassword(Encrypt.md5AndSha(user.getPassword()));
		return usersMapper.login(user);
	}
	@Override
	public Users tellogin(Users user) {
		return usersMapper.tellogin(user);
	}
	
	//手机短信快捷登录 手机号码已经注册的直接登录   没注册则直接创建一个账号注册登录
	@Override
	public Users codelogin(Users user) {
		Users users=usersMapper.telselect(user);
		return users;
	}
	
	
	
	
	
	//分页操作
	@Override
	public PaginationBean<Users> listuser(String rows, String page,String option) {
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
		map.put("currPage", page);
		map.put("pageSize",rows);
		map.put("options", option);
		return usersMapper.listUsers(map);
	}
	//删除用户 更改状态值 禁言
	@Override
	public boolean deleteUser(String userid) {
		return usersMapper.deleteUser(userid)>0;
	}
	//更新用户信息 管理员没有权限 只有用户自己能更改时
	@Override
	public boolean updateUser(Users users) {
		return usersMapper.updateUser(users)>0;
	}
	//注册用户
	@Override
	public int  insertUser(Users users) {
		users.setPassword(Encrypt.md5AndSha(users.getPassword()));
		return usersMapper.insertUser(users);
	}
	//手机注册用户
	@Override
	public int insertUser1(Users users) {
		users.setPassword(Encrypt.md5AndSha(users.getPassword()));
		return usersMapper.telinsertUser(users);
	}
	//手机快速注册
	@Override
	public int fastregister(Users user) {
		user.setPassword(Encrypt.md5AndSha(user.getPassword()));
		return usersMapper.insertTel(user);
	}
	
	
	
	@Override
	public boolean updateUserPic(Users users) {
		return usersMapper.updateUserPic(users)>0;
	}
	@Override
	public boolean insertnpwd(Users users) {
		users.setPassword(Encrypt.md5AndSha(users.getPassword()));
		return usersMapper.insertnpwd(users)>0;
	}
	@Override
	public Users selectuser(String userid) {
		return usersMapper.selectUserById(userid);
	}
	@Override
	public List<Users> selectAddress() {
		return usersMapper.selectAddress();
	}
	@Override
	public boolean JugleBanUser(String userid) {
		return usersMapper.jugleBanUser(userid)!=null;
	}


	

	
}
