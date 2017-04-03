package com.yc.tieba.util;

import javax.mail.internet.MimeMessage;


import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

public class SendMailutil {

	public static void activeAccountMail(JavaMailSender mailSender,String subject, String content,String from,String to) {
		try {
			MimeMessage mm= mailSender.createMimeMessage();
			MimeMessageHelper mmh=new MimeMessageHelper(mm, true,"utf-8");
			mmh.setTo(to);//设置邮件接收者
			mmh.setFrom(from);
			mmh.setSubject(subject);//设置主题
			mmh.setText(content,true);//设置内容
			mailSender.send(mm);//发送邮件
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
