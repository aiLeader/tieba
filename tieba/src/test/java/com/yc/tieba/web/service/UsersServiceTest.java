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
		PaginationBean<Users> users=userService.listuser("10", "1","uname","dw");
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
	public void testSelectUsers() {
		Users user=userService.selectuser("1141");
		System.out.println(user);
		assertNotNull(user);
	}
	@Test
	public void testUpdateUsers() {
		Users users=new Users();
		users.setStatus(1);
		users.setUserid("1141");
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
		user.setPassword("a");
		user.setTelephone("18804474987");
		int users=userService.insertUser1(user);
		System.out.println(users);
		assertNotNull(users);
	}
	@Test
	public void testselectUsers() {
		Users user=new Users();
		user.setTelephone("18804474987");
		Users users=userService.codelogin(user);
		System.out.println(users);
		assertNotNull(users);
	}
	@Test
	public void testtelinsertUsers() {
		Users user=new Users();
		user.setTelephone("18804474977");
		user.setPassword("a");
		int users=userService.fastregister(user);
		System.out.println(users);
		assertNotNull(users);
	}
}
