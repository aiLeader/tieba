package com.yc.tieba.service;

import static org.junit.Assert.assertEquals;
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
	public void testAddComm() {
		Comments comments=new Comments();
		comments.setNid("10020");
		comments.setUserid("1000");
		comments.setCcontent("o");
		boolean sn =cs.addNewComm(comments);
		System.out.println(sn);
		assertEquals(sn,true);
	}

}
