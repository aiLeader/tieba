package com.yc.tieba.web.handler;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.entity.Users;
import com.yc.tieba.service.UsersService;
import com.yc.tieba.util.RandomNumUtil;
import com.yc.tieba.util.SendMailutil;
import com.yc.tieba.util.ServletUtil;

@Controller("usersHandler")
@RequestMapping("user")
@SessionAttributes({ServletUtil.LOGIN_USER,ServletUtil.ERROR_MESSAGE})
public class UsersHandler {
	@Autowired
	private UsersService usersService;
	
	@RequestMapping(value="login",method=RequestMethod.POST)
	public String login(Users user,ModelMap map){
		user= usersService.login(user);
		if(user!=null){
			map.addAttribute(ServletUtil.LOGIN_USER, user);
			return "redirect:../index.jsp";
		}else{
			map.addAttribute(ServletUtil.ERROR_MESSAGE,"用户名或密码错误!");
			return "redirect:../login.jsp";
		}
	}
	
	@RequestMapping(value="list")
	@ResponseBody
	private PaginationBean<Users> doFindUser(String page,String rows,String options) throws IOException {
		System.out.println("page==>"+page+" options==>"+options+"  rows==>"+rows);

		return usersService.listuser(rows,page,options);
	}
	@RequestMapping(value="/{userid}",method=RequestMethod.GET)
	@ResponseBody
	private boolean doDeleteUser(@PathVariable("userid") String userid) throws IOException {
		System.out.println("===>"+userid);
		return usersService.deleteUser(userid);
	}
	
	@RequestMapping(value="update",method=RequestMethod.POST)
	@ResponseBody
	private boolean doUpdateUser(Users users) throws IOException {
		System.out.println("更新我进来了。。。==>"+users);
		//return true;
		return usersService.updateUser(users);
	}
	
	
	@Autowired
	private JavaMailSender mailSender;
	@RequestMapping("sendMail")
	public void sendMail(ModelMap map,String email,PrintWriter out,HttpServletRequest request){
		//System.out.println("email==>"+email);
		LogManager.getLogger().debug(email);
		Integer yzm = RandomNumUtil.getRandomNumber();//生成六位不重复随机数
		request.getSession().setAttribute("yzm",yzm.toString());
		SendMailutil.activeAccountMail(mailSender,"贴吧注册验证信息",
				"您的验证码是："+yzm+",请认真确认后在是您的操作之后，在执行操作","18273474977@163.com",email);
		out.print(yzm);
		out.flush();
		out.close();
	}
	
	
	@RequestMapping(value="register")
	public String register(Users users){
		//System.out.println("re我进来了");
		if(usersService.insertUser(users)>0){
			return "redirect:/login.jsp"; //重定向
		}else{
			return "/register.jsp"; //转发
		}
	}

		
}
