package com.yc.tieba.web.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.service.NoteService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class NoteServiceTest {

	@Autowired
	NoteService noteService;
	
	@Test
	public void testFindNote() {
		
		System.out.println(noteService.findNote("10", "1",null));
		assertNotNull(noteService.findNote("10", "1", null));
	}
	
	@Test
	public void testFindNoteTyID() {
		
		System.out.println(noteService.findNote("10", "1","贴主莱因哈特"));
		assertNotNull(noteService.findNote("10", "1", "贴主莱因哈特"));
	}
	
	@Test
	public void testUpdateNote() {
		NoteInfo rowData = new NoteInfo();
		rowData.setNstatus(0);
		rowData.setNstates(0);
		rowData.setNid("100");
		noteService.updateNote(rowData);
	}
	
	@Test
	public void testListNoteByNum() {
		System.out.println(noteService.listNoteOrderByNum());
		assertNotNull(noteService.listNoteOrderByNum());
	}
}
