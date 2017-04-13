package com.yc.tieba.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class ConcernServiceTest {

	@Autowired
	private ConcernService concernService;
	
	
	@Test
	public void testAttentionUserb() {
		int attention =concernService.attentionUserb("1002", "1001");
		System.out.println("attention: "+attention);
	}

}
