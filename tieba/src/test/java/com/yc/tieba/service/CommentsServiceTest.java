package com.yc.tieba.service;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.tieba.entity.Comments;
import com.yc.tieba.entity.PaginationBean;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class CommentsServiceTest {
	@Autowired
	private CommentsService cs;

	@Test
	public void testFindComByNid() {
		PaginationBean<Comments> pb = cs.findComByNid("10020", "1","nop");
		System.out.println(pb);
		assertNotNull(pb);
	}
	
	@Test
	public void testlistAllComm() {
		PaginationBean<Comments> pb = cs.listAllComm("1", "10");
		System.out.println(pb);
		assertNotNull(pb);
	}
	
	@Test
	public void testlistBanComm() {
		PaginationBean<Comments> pb = cs.findBanComm("1", "10");
		System.out.println(pb);
		assertNotNull(pb);
	}
	
	@Test
	public void testAddNewComment() {
		Comments cm = new Comments();
		cm.setUserid("1000");
		cm.setNid("10000");
		cm.setCcontent("1111");
		int pb = cs.addNewComm(cm);
		System.out.println(pb);
		assertNotNull(pb);
	}
}
