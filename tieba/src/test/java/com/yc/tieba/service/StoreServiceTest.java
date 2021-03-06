package com.yc.tieba.service;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class StoreServiceTest {
	@Autowired
	private StoreService storeSerivce;
	
	@Test
	public void testShowStoreByUserid() {
		PaginationBean<NoteInfo> pb = storeSerivce.showStoreByUserid("1000", "1", "5");
		System.out.println(pb);
		assertNotNull(pb);
	}
	@Test
	public void testgetStoreByUserid() {
		List<NoteInfo> pb =storeSerivce.getStoreByUserid("1000");
		System.out.println(pb);
		assertNotNull(pb);
	}
}
