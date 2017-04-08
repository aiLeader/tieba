package com.yc.tieba.web.service;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Users;
import com.yc.tieba.service.UsersService;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class UsersServiceTest {
	@Autowired
	private UsersService userService;
	@Test
	public void testListUsers() {
		PaginationBean<Users> users=userService.listuser("10", "1","1000");
		System.out.println(users);
		assertNotNull(users);
	}
	@Test
	public void testDeleteUsers() {
		Boolean user=userService.deleteUser("1001");
		System.out.println(user);
		assertNotNull(user);
	}
	@Test
	public void testUpdateUsers() {
		Users users=new Users();
		users.setNum(10);
		users.setUname("hh");
		users.setUserid("1000");
		Boolean user=userService.updateUser(users);
		System.out.println(user);
		assertNotNull(user);
	}
	@Test
	public void testInsertUsers() {
		Users user=new Users();
		user.setUname("dww");
		user.setBirthday("1995-11-02");
		user.setEmail("285462395@qq.com");
		user.setPassword("aa");
		user.setTelephone("18874474987");
		user.setPicPath("");
		user.setSex("女");
		user.setAddress("湖南岳阳");
		user.setSigns("岳阳是个好地方。。。");
		int users=userService.insertUser(user);
		System.out.println(users);
		assertNotNull(users);
	}
	@Test
	public void testTelUsers() {
		Users user=new Users();
		user.setUname("wrt");
		user.setPassword("aa");
		user.setTelephone("18804474987");
		int users=userService.insertUser1(user);
		System.out.println(users);
		assertNotNull(users);
	}
}
