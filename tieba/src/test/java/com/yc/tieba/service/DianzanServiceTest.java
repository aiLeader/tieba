package com.yc.tieba.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class DianzanServiceTest {

	@Autowired 
	private DianzanService dianzanService;
	@Test
	public void testInsert() {
		int r = dianzanService.insert("1000", "10048");
		System.out.println(r);
		assertEquals(r,1);
	}

}
