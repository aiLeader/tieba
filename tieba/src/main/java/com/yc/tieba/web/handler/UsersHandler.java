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
		return usersService.listuser(rows,page,options);
	}
	@RequestMapping(value="/{userid}",method=RequestMethod.GET)
	@ResponseBody
	private boolean doDeleteUser(@PathVariable("userid") String userid) throws IOException {
		return usersService.deleteUser(userid);
	}
	
	@RequestMapping(value="update",method=RequestMethod.POST)
	@ResponseBody
	private boolean doUpdateUser(Users users,ModelMap map) throws IOException {
		if(usersService.updateUser(users)){
			map.addAttribute(ServletUtil.LOGIN_USER, users);
			return true;
		}else{
			return false;
		}
	}
	@RequestMapping(value="updatePic",method=RequestMethod.POST)
	@ResponseBody
	private boolean doUpdateUserPic(Users users,ModelMap map,@RequestParam("picData")MultipartFile picData) throws IOException {
		String picPath=null;
		if(picData!=null&& !picData.isEmpty()){//判断是否有文件上传
			//上传文件
			try {
				picData.transferTo(ServletUtil.getUploadFile(picData.getOriginalFilename()));
				picPath=ServletUtil.VIRTUAL_UPLOAD_DIR+picData.getOriginalFilename();
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		users.setPicPath(picPath);
		if(usersService.updateUserPic(users)){
			map.addAttribute(ServletUtil.LOGIN_USER, users);
			return true;
		}else{
			return false;
		}
	}
	
	
	
	@Autowired
	private JavaMailSender mailSender;
	@RequestMapping("sendMail")
	public void sendMail(ModelMap map,String email,PrintWriter out,HttpServletRequest request){
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
		if(usersService.insertUser(users)>0){
			return "redirect:/login.jsp"; //重定向
		}else{
			return "/register.jsp"; //转发
		}
	}
	@RequestMapping(value="updatepwd",method=RequestMethod.POST)
	@ResponseBody
	public boolean updatePwd(@RequestBody Users user){
		user= usersService.login(user);
		if(user!=null){
			return true;
		}else{
			return false;
		}
	}
	@RequestMapping(value="insertpwd",method=RequestMethod.POST)
	@ResponseBody
	public boolean insertPwd(@RequestBody Users user){
		LogManager.getLogger().debug("修改密码。。。user==>"+user);
		return usersService.insertnpwd(user);
	}
		
}
