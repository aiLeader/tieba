package com.yc.tieba.service;


import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.tieba.entity.Admin;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class AdminServiceTest {
	
	@Autowired
	private AdminService adminService;
	@Test
	public void testUpdatePwd() {
		Admin admin=new Admin();
		admin.setAid("1000");
		admin.setApassword("a");
		boolean r = adminService.updatePwd(admin);
		System.out.println(r);
		assertEquals(r,true);
	}
	@Test
	public void testSelectPwd() {
		Admin admin=new Admin();
		admin.setAid("1000");
		Admin r = adminService.selectPwd(admin);
		System.out.println(r);
		assertNotNull(r);
	}
}
