package com.yc.tieba.web.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.service.NoteService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class NoteServiceTest {

	@Autowired
	NoteService noteService;
	
	@Test
	public void testFindNote() {
		
		System.out.println(noteService.findNote("1", "10",null));
		assertNotNull(noteService.findNote("1", "10", null));
	}
	
	@Test
	public void testFindNoteTyID() {
		
		System.out.println(noteService.findNote("1", "10","贴主莱因哈特"));
		assertNotNull(noteService.findNote("1", "10", "贴主莱因哈特"));
	}
	
	@Test
	public void testUpdateNote() {
		NoteInfo rowData = new NoteInfo();
		rowData.setNstatus(0);
		rowData.setNstates(0);
		rowData.setNid("10004");
		noteService.updateNote(rowData);
	}
	
	@Test
	public void testListNoteByNum() {
		System.out.println(noteService.listNoteOrderByNum());
		assertNotNull(noteService.listNoteOrderByNum());
	}
	
	@Test
	public void testNoteById() {
		NoteInfo pb = noteService.findNoteById("10020");
		System.out.println(pb);
		assertNotNull(pb);
	}
	@Test
	public void testShowByUserid() {
		System.out.println(noteService.showByUserid("1001", "1", "5"));
		assertNotNull(noteService.showByUserid("1001", "1", "5"));
	}
	//添加帖子的测试
/*	@Test
	public void testInsertNote() {
		System.out.println(noteService.insertNote("沈慧", "1000", "101", "我不知道说什么了"));
		assertEquals(noteService.insertNote("沈慧", "1000", "101", "我不知道说什么了"), 1);
	}*/
	
	@Test
	public void testFindNoteByUserid() {
		PaginationBean<NoteInfo>  pb =noteService.findNote("1", "3", "usernamea");
		System.out.println(pb);
		assertNotNull(pb);
	}
}
