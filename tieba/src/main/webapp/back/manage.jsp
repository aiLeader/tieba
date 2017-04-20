<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<base href="${deployName}">
<meta charset="UTF-8">
<title>后台管理</title>
<link type="text/css" rel="stylesheet" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="easyui/themes/default/easyui.css">
<link href="css/main.css" rel="stylesheet" type="text/css" />
<link href="css/manage.css" rel="stylesheet" type="text/css" />
</head>
<body class="easyui-layout" style="width: 1366px; margin: 0px auto;">
	<c:choose>
		<c:when test="${loginAdmin==null }">
			<script type="text/javascript">
			alert("请先登录!");
			window.location=${deployName}+"adminlogin.jsp";
		</script>
		</c:when>
		<c:when test="${loginAdmin=='' }">
			<script type="text/javascript">
			alert("请先登录!");
			window.location=${deployName}+"adminlogin.jsp";
		</script>
		</c:when>
	</c:choose>
	<div data-options="region:'north'" style="height: 138px;width: 1366px;">
		<img style="padding-left: 20px;" height="80px" width="337px" class="mainpage_head_img"
			alt="公司logo" src="images/logo1.png" id="logo"/>

		<div style="float: right; margin-top: 40px; margin-right: 20px; color: #082C5A;">
			<div>
				管	理员：[<strong style="font-size: 120%; color: green;">${loginAdmin.aname}</strong>]，欢迎您进入贴吧系统
			</div>
			<div style="margin-top: 8px;">
				<a href="javascript:void(0);" class="easyui-menubutton"
					data-options="menu:'#layout_north_kzmbMenu',iconCls:'icon-help'">信息中心</a> <a
					href="javascript:void(0);" class="easyui-menubutton"
					data-options="menu:'#layout_north_zxMenu',iconCls:'icon-back'">注销</a>
			</div>
		</div>
	</div>
	<div data-options="region:'south'" style="height: 80px;">
		<div id="footer">
			<p class="copyright">
				Copyright &copy; 2017-2020 Front Back Template, All Right Reserver <br /> 贴吧系统  版权所有
			</p>
		</div>
	</div>
	<div data-options="region:'east',title:'工具栏'" style="width: 182px;height:900px;">
		<div class="easyui-calendar"
			style="width: 180px; height: 180px; border: 0px; border-bottom: 1px solid #94BAE7"></div>
	</div>
	<div data-options="region:'west',title:'导航栏', collapsible:false" style="width: 160px;height:900px;">
		<div id="sideNav">
			<div title="用户管理" data-options="iconCls:'icon-mini-add'">
				<ul class="treeNav">
					<li><span>用户信息</span></li>
				</ul>
			</div>
			<div title="板块管理" data-options="iconCls:'icon-mini-add'">
				<ul class="treeNav">
					<li><span>板块信息</span></li>
					<li><span>板块添加</span></li>
				</ul>
			</div>
			<div title="帖子管理" data-options="iconCls:'icon-mini-add'">
				<ul class="treeNav">
					<li><span>帖子信息</span></li>
				</ul>
			</div>
			<div title="评论管理" data-options="iconCls:'icon-mini-add'">
				<ul class="treeNav">
					<li><span>评论信息</span></li>
					<li><span>被禁评论</span></li>
				</ul>
			</div>
			<div title="统计管理" data-options="iconCls:'icon-mini-add'">
				<ul class="treeNav">
					<li><span>用户统计</span></li>
					<li><span>板块统计</span></li>
					<li><span>帖子统计</span></li>
				</ul>
			</div>
			<div title="推送管理" data-options="iconCls:'icon-mini-add'">
				<ul class="treeNav">
					<li><span>帖子推送</span></li>
					<li><span>当前推送</span></li>
				</ul>
			</div>
		</div>
	</div>
	<div
		data-options="region:'center', title:'主界面', tools: [{    
	    iconCls:'icon-full',    
	    handler:function(){full();}    
	  },{    
	    iconCls:'icon-unfull',    
	    handler:function(){unfull();}    
	  }]   ">
		<div id="main" style="width: 500px;height:900px; height: 250px;">
			<div title="欢迎">
				<h1 style="width: 100%; text-align: center; margin-top: 80px">
					<label> 欢迎【<span>${loginAdmin.aname}</span>】进入贴吧后台管理
					</label>
				</h1>
			</div>
		</div>
	</div>
	
	<!-- 下拉信息中心菜单 -->
	<div id="layout_north_kzmbMenu" style="width: 100px; display: none;">
		<div onclick="userInfoFun();">修改密码</div>
		<div class="menu-sep"></div>
		<div onclick="aboutUs();">联系我们</div>
	</div>
	<!-- 下拉信息菜单 -->
	<div id="layout_north_zxMenu" style="width: 100px; display: none;">
		<div onclick="reLogin();">切换用户</div>
		<div class="menu-sep"></div>
		<div onclick="logoutFun();">退出系统</div>
	</div>
	<!-- 修改密码 -->
	<div id="personalInfo">
		<form id="modifyForm" method="post">
			<input id="aid" name="aid" type="hidden" value="${loginAdmin.aid }"/>
			<p>原密码:<input id="pwd" type="password" name="apassword" placeholder="请输入原密码" required="required"/></p>
			<p>新密码:<input  id="npwd" type="password" name="newapassword" placeholder="请输入新密码"  required="required"/></p>
			<p>重复新密码:<input id="rpwd" type="password" name="repassword" placeholder="请重复输入新密码"  required="required"/></p>
			<p><a id="modifyBtn" href="javascript:void(0)" onclick="updatePwd()">修 改</a><a id="closeBtn" href="javascript:void(0)">关 闭</a></p>
		</form>
	</div>
<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="highchats/highcharts.js"></script>
<script type="text/javascript" src="highchats/exporting.js"></script>
<script type="text/javascript" src="js/manage.js"></script>
<script type="text/javascript">

$('input',$("#rpwd")).blur(function(){
	var rpwd=$("#rpwd").val();
	var npwd=$("#npwd").val();
	alert(rpwd);
	if(rpwd.equals(npwd)){
		
	}else{
		$.messager.alert('提示','两次密码输入不一致'); 
	}
});
</script>
</body>
</html>