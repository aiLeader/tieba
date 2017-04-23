package com.yc.tieba.web.handler;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.apache.logging.log4j.LogManager;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Users;
import com.yc.tieba.service.UsersService;
import com.yc.tieba.util.RandomNumUtil;
import com.yc.tieba.util.SendMailutil;
import com.yc.tieba.util.ServletUtil;
import com.yc.tieba.util.sendMobileCode;
import com.yc.tieba.util.sendMobileCode1;

@Controller("usersHandler")
@RequestMapping("user")
@SessionAttributes({ ServletUtil.LOGIN_USER, ServletUtil.ERROR_MESSAGE })
public class UsersHandler {
	@Autowired
	private UsersService usersService;
	private int code;
	private int code2;

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public String login(Users user, ModelMap map) {
		user = usersService.login(user);
		if (user != null) {
			map.addAttribute(ServletUtil.LOGIN_USER, user);
			return "redirect:../index.jsp";
		} else {
			map.addAttribute(ServletUtil.ERROR_MESSAGE, "用户名或密码错误!");
			return "redirect:../login.jsp";
		}
	}

	@RequestMapping(value = "codelogin", method = RequestMethod.POST)
	public String codelogin(Users user, ModelMap map) {
		int code1 = Integer.parseInt(user.getPassword());
		if (code1 == code2) {
			// 1.该手机号码在数据库则表示已经注册，直接登录
			// 2.手机号不在数据库 则创建一个账号 密码为发送的验证码 登录
			Users users = usersService.codelogin(user);
			if (users != null) { // 手机号在数据库中存在 直接登录
				map.addAttribute(ServletUtil.LOGIN_USER, users);
				return "redirect:../index.jsp";
			} else { // 创建账号 将验证码当密码登录
				int result = usersService.fastregister(user);
				if (result == 1) { // 如果注册成功 直接手机号登录
					user = usersService.tellogin(user);
					if (user != null) {
						map.addAttribute(ServletUtil.LOGIN_USER, user);
						return "redirect:../index.jsp";
					} else {
						return "redirect:../login.jsp";
					}
				}
				return "redirect:../login.jsp";
			}
		} else {
			return "redirect:../login.jsp";
		}
	}

	@RequestMapping(value = "list")
	@ResponseBody
	private PaginationBean<Users> doFindUser(String page, String rows, String options) throws IOException {
		return usersService.listuser(rows, page, options);
	}

	@RequestMapping(value = "/{userid}", method = RequestMethod.GET)
	@ResponseBody
	private boolean doDeleteUser(@PathVariable("userid") String userid) throws IOException {
		return usersService.deleteUser(userid);
	}

	@RequestMapping(value = "/userinfo", method = RequestMethod.POST)
	@ResponseBody
	private Users doSelectUser(String userid) throws IOException {
		return usersService.selectuser(userid);
	}

	@RequestMapping(value ="update", method = RequestMethod.POST)
	@ResponseBody
	private boolean doUpdateUser(Users users, ModelMap map) throws IOException {
		System.out.println(users);
		if (usersService.updateUser(users)) {
			map.addAttribute(ServletUtil.LOGIN_USER, users);
			return true;
		}
		return false;

	}

	@RequestMapping(value = "updatePic", method = RequestMethod.POST)
	@ResponseBody
	private boolean doUpdateUserPic(Users users, ModelMap map, @RequestParam("picData") MultipartFile picData)
			throws IOException {
		String picPath = null;
		if (picData != null && !picData.isEmpty()) {// 判断是否有文件上传
			// 上传文件
			try {
				picData.transferTo(ServletUtil.getUploadFile(picData.getOriginalFilename()));
				picPath = ServletUtil.VIRTUAL_UPLOAD_DIR + picData.getOriginalFilename();
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		users.setPicPath(picPath);
		if (usersService.updateUserPic(users)) {
			map.addAttribute(ServletUtil.LOGIN_USER, users);
			return true;
		} else {
			return false;
		}
	}

	@Autowired
	private JavaMailSender mailSender;

	@RequestMapping("sendMail")
	public void sendMail(ModelMap map, String email, PrintWriter out, HttpServletRequest request) {
		LogManager.getLogger().debug(email);
		Integer yzm = RandomNumUtil.getRandomNumber();// 生成六位不重复随机数
		request.getSession().setAttribute("yzm", yzm.toString());
		SendMailutil.activeAccountMail(mailSender, "注册验证信息", "您的验证码是：" + yzm + ",请认真确认后在是您的操作之后，再执行操作",
				"18273474977@163.com", email);
		System.out.println(yzm);
		out.print(yzm);
		out.flush();
		out.close();
	}

	@RequestMapping(value = "sendTel", method = RequestMethod.POST)
	@ResponseBody
	public boolean sendTele(String telephone) {
		LogManager.getLogger().debug("发送的手机号码为：" + telephone);
		sendMobileCode sendcode;
		try {
			sendcode = new sendMobileCode();
			sendcode.sendMobileCoder(telephone);
			code = sendcode.getCode();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	// 手机快速登录
	@RequestMapping(value = "sendTel1", method = RequestMethod.POST)
	@ResponseBody
	public boolean sendTele1(String telephone) {
		LogManager.getLogger().debug("发送的手机号码为：" + telephone);
		sendMobileCode1 sendcode1;
		try {
			sendcode1 = new sendMobileCode1();
			sendcode1.sendMobileCoder(telephone);
			code2 = sendcode1.getCode();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@RequestMapping(value = "telregister")
	@ResponseBody
	public boolean tregister(Users users, String jihuo) {
		LogManager.getLogger().debug("用户注册信息users====" + users);
		LogManager.getLogger().debug("获取输入的验证码====" + jihuo);
		Integer code1 = Integer.parseInt(jihuo);
		if (code1 == code) {
			return usersService.insertUser1(users) > 0;
		}

		return false;
	}

	@RequestMapping(value = "emailregister")
	public String eregister(Users users) {
		if (usersService.insertUser(users) > 0) {
			return "redirect:/login.jsp"; // 重定向
		} else {
			return "/register.jsp"; // 转发
		}
	}

	@RequestMapping(value ="updatepwd", method = RequestMethod.POST)
	@ResponseBody
	public boolean updatePwd(@RequestBody Users user) {
		user = usersService.login(user);
		if (user != null) {
			return true;
		} else {
			return false;
		}
	}

	@RequestMapping(value = "insertpwd", method = RequestMethod.POST)
	@ResponseBody
	public boolean insertPwd(@RequestBody Users user) {
		LogManager.getLogger().debug("修改密码。。。user==>" + user);
		return usersService.insertnpwd(user);
	}
	
	//统计用户地址
	@RequestMapping(value="countusers")
	@ResponseBody
	public List<Users> selectAddress(){
		return usersService.selectAddress();
	}
	
	//查询用户状态
	@RequestMapping(value="status")
	@ResponseBody
	public Users  showStatus(String userid,String tid){
		if(userid == null||userid==""||tid == null||tid==""){
			Users user = new Users();
			user.setStatus(2);
			return user ;
		}
		System.out.println("tstates"+usersService.showtypeSatus(tid).getTstate());
		if(usersService.showtypeSatus(tid).getTstate()<1){
			Users user = new Users();
			user.setStatus(-1);
			return user ; 
		}
		return usersService.showStatus(userid);
	}
}
