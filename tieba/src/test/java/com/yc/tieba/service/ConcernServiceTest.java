package com.yc.tieba.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.tieba.entity.Concern;
import com.yc.tieba.entity.PaginationBean;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class ConcernServiceTest {

	@Autowired
	private ConcernService concernService;
	@Test
	public void testShowConcernById() {
		PaginationBean<Concern> pb = concernService.showConcernById("1001", "1", "5");
		System.out.println(pb);
		assertNotNull(pb);
	}

}
