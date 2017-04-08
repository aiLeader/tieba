package com.yc.tieba.service;

import static org.junit.Assert.*;
import java.util.List;
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
		PaginationBean<Comments> pb = cs.findComByNid("10019", "1","nop");
		System.out.println(pb);
		assertNotNull(pb);
	}

}
