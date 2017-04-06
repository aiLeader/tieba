package com.yc.tieba.web.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;

import com.yc.tieba.util.ServletUtil;

/**
 *  过滤用户是否登录
 */
//@WebFilter("/user/*")
public class isLoginFilter extends AbstractFilter{
   
	@Override
	public void init(FilterConfig fConfig) throws ServletException {
		LogManager.getLogger().debug("用户是否登录验证的过滤器isLoginFilter.....");
	}
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpSession session = ((HttpServletRequest) request).getSession();
		String userid = (String) session.getAttribute("loginUser");
		System.out.println("user==>"+userid);
		if(userid == null){
			System.out.println("=============》进来了。。。");
			//((HttpServletResponse) response).sendRedirect("/tieba/login.jsp");
			//((HttpServletResponse) response).sendRedirect("../login.jsp");
			((HttpServletRequest)request).getRequestDispatcher("../index.jsp").forward(request,response);
			return ;
		}
	}
}
