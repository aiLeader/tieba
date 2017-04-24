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
import com.yc.tieba.service.NoteService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class NoteServiceTest {

	@Autowired
	private NoteService noteService;
	
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
	public void testIndexListNote() {
		PaginationBean<NoteInfo> pb = new PaginationBean<NoteInfo>();
		pb = noteService.indexfindNote("1","nop" ,"5");
		System.out.println(pb);
		assertNotNull(pb);
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
	public void testShowByUserid() {
		System.out.println(noteService.showByUserid("1001", "1", "5"));
		assertNotNull(noteService.showByUserid("1001", "1", "5"));
	}
	//添加帖子的测试
	@Test
	public void testInsertNote() {
		int b = noteService.insertNote("沈慧", "1000", "101", "我不知道说什么了");
		System.out.println(b);
		assertEquals(b, 1);
	}
	//收藏的测试
	@Test
	public void testcollectNote() {
		System.out.println(noteService.collectNote("1002", "10004"));
	}
	
	@Test
	public void testManagerfindNote() {
		PaginationBean<NoteInfo> pb = new PaginationBean<NoteInfo>();
		pb = noteService.ManagerfindNote("1", "3", "nop", "nop");
		System.out.println(pb);
		assertNotNull(pb);
	}
	@Test
	public void testSendNote() {
		int s =noteService.sendNote("10000");
		System.out.println(s);
		assertNotNull(s);
	}
	
	@Test
	public void testSearchNote() {
		PaginationBean<NoteInfo>  s =noteService.searchNote("1", "巧克力");
		System.out.println(s);
		assertNotNull(s);
	}
	
	@Test
	public void testfindListNoteName() {
		List<NoteInfo> s = noteService.findListNoteName("u");
		System.out.println(s);
		assertNotNull(s);
	}
}
