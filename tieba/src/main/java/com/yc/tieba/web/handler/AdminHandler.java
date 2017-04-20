package com.yc.tieba.web.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.yc.tieba.entity.Admin;
import com.yc.tieba.service.AdminService;
import com.yc.tieba.util.ServletUtil;

@Controller("adminHandler")
@RequestMapping("admin")
@SessionAttributes({ ServletUtil.LOGIN_ADMIN, ServletUtil.ERROR_MESSAGE })
public class AdminHandler {
	@Autowired
	private AdminService adminService;
	
	@RequestMapping(value="login",method=RequestMethod.POST)
	public String login(Admin admin,ModelMap map){
		System.out.println("admin");
		admin= adminService.login(admin);
		if(admin!=null){
			map.addAttribute(ServletUtil.LOGIN_ADMIN, admin);
			return "redirect:../back/manage.jsp";
		}else{
			map.addAttribute(ServletUtil.ERROR_MESSAGE,"用户名或密码错误!");
			return "redirect:../adminlogin.jsp";
		}
	}
	@RequestMapping(value="updatePwd")
	@ResponseBody
	public boolean updatePwd(@RequestBody Admin admin){
		return adminService.updatePwd(admin);
	}
	@RequestMapping(value="selectPwd")
	@ResponseBody
	public Admin selectPwd(Admin admin){
		return adminService.selectPwd(admin);
	}
}
