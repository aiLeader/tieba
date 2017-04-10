package com.yc.tel.conn;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.tieba.util.sendMobileCode;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class TelConn {
	@Test
	public void testSendCode() {
	sendMobileCode sendcode=new sendMobileCode();
	sendcode.sendMobileCoder("18273474977");
	}
}