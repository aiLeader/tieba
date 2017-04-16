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
import com.yc.tieba.entity.Types;
import com.yc.tieba.service.TypesService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class TypesServiceTest {
	@Autowired
	private TypesService typesService;

	@Test
	public void testListTypes() {
		PaginationBean<Types> types = typesService.listTypes("5", "1");
		System.out.println(types);
		assertNotNull(types);
	}
	@Test
	public void testAddTypes() {
		Types types = new Types();
		types.setTname("王源");
		types.setTdesc("王牌对王牌");
		int t = typesService.addTypes(types);
		System.out.println(t);
		assertEquals(1, t);
	}
	@Test
	public void testModifyTypes() {
		Types types = new Types();
		types.setTid("100");
		types.setTname("三生三世");
		types.setTdesc("杨洋");
		types.setTstate(1);
		int t = typesService.modifyTypes(types);
		System.out.println(t);
		assertEquals(1, t);
	}
	@Test
	public void testDeleteTypes() {
		Types types = new Types();
		types.setTid("113");
		//List<String> tids = Arrays.asList("113","114");
		//List<String> ids = new ArrayList<String>();
		int t = typesService.deleteTypes(types);
		System.out.println(t);
		assertEquals(1, t);
	}
	
	@Test
	public void testTFindNote() {
		
		System.out.println(typesService.findNotes("1","10","bbssbqnc"));
		assertNotNull(typesService.findNotes("1","10","bbssbqnc"));
	}
	
	
	@Test
	public void testTFindNoteBytid() {
		PaginationBean<NoteInfo> pb = typesService.findNotesByTid("101", "1");
		System.out.println(pb);
		assertNotNull(pb);
	}
	
	@Test
	public void testShowTypesinfo(){
		List<Types> result = typesService.showTypesinfo("101");
		System.out.println(result);
		assertNotNull(result);
	}
	@Test
	public void testTypeCompare(){
		List<Types> r = typesService.typeCompare();
		System.out.println(r);
		assertNotNull(r);
	}
}
