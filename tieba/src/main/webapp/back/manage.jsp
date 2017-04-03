<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
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
	<div data-options="region:'north'" style="height: 138px;width: 1366px;">
		<div id="header">
			<div id="top_login">
				<%-- <label> 欢迎【<span>${loginUser.uname}</span>】进入贴吧后台管理
				</label> --%> <!-- <img src="images/friend_logo.gif" alt="Google" id="friend_logo" /> -->
			</div>
			<div id="nav">
				<div>
					<img src="images/a.jpg" alt="" id="picstyle"/>
				</div>
				<!--mainnav end-->
			</div>
		</div>
	</div>
	<div data-options="region:'south'" style="height: 130px;">
		<div id="footer">
			<p class="">
				24小时客户服务热线：010-68988888 &#160;&#160;&#160;&#160; <a href="#">常见问题解答</a> &#160;&#160;&#160;&#160;
				新闻热线：010-627488888 <br /> 文明办网文明上网举报电话：010-627488888 &#160;&#160;&#160;&#160; 举报邮箱： <a href="#">jubao@jb-aptech.com.cn</a>
			</p>
			<p class="copyright">
				Copyright &copy; 1999-2009 News China gov, All Right Reserver <br /> 贴吧 版权所有
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
					<li><span>用户编辑</span></li>
					<li><span>用户添加</span></li>
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
					<li><span>帖子编辑</span></li>
					<li><span>帖子添加</span></li>
				</ul>
			</div>
			<div title="评论管理" data-options="iconCls:'icon-mini-add'">
				<ul class="treeNav">
					<li><span>评论信息</span></li>
					<li><span>评论编辑</span></li>
				</ul>
			</div>
			<div title="主题管理" data-options="iconCls:'icon-mini-add'">
				<ul class="treeNav">
					<li><span>File 11</span></li>
					<li><span>File 12</span></li>
					<li><span>File 13</span></li>
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
					<label> 欢迎【<span>${loginUser.uname}</span>】进入贴吧后台管理
					</label>
				</h1>
			</div>
		</div>
	</div>
<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="js/manage.js"></script>
</body>
</html>