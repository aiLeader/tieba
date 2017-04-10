<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<base href="${deployName}" />
<meta charset="utf-8">
<title>登录</title>
<link type="text/css" rel="stylesheet" href="css/login.css">

<link rel="stylesheet" type="text/css" href="css/normalize.css" />
<link rel="stylesheet" type="text/css" href="css/demo.css" />
<link rel="stylesheet" type="text/css" href="css/component.css" />


<link type="text/css" rel="stylesheet" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet"
	href="easyui/themes/default/easyui.css">

</head>
<body>
	<div class="container demo-1">
		<div class="content">
			<div id="large-header" class="large-header">
				<canvas id="demo-canvas"></canvas>

				<div id="loginDiv">
					<form id="loginForm" action="user/login" method="post">
						<img title="贴吧logo" src="images/logo1.png" id="image">
						<p><a href="findpwd.jsp" id="findpwd">手机快捷登录</a></p>
						<p>
							<label>${errorMsg }&nbsp;</label>
						</p>
						<c:remove var="errorMsg" scope="session" />
						<p>
							<input class="easyui-textbox" name="userid" prompt="请用账号/邮箱/手机号码登录" data-options="iconCls:'icon-man',iconAlign:'left'" style="width:300px"> 
						</p>
						<p>
						<input class="easyui-textbox"type="password" name="password" prompt="请输入密码" data-options="iconCls:'icon-lock',iconAlign:'left'" style="width:300px"> 
						</p>
						<p>
							<img src="vcode.jpg" title="看不清，换一张" /><input name="vcode"
								placeholder="请输入验证码" id="vcode" required="required" />
						</p>
						<p>
							<a id="btnRegister" href="register.jsp">没有账号?注册一个>></a>
							<a id="btnLogin" href="javascript:void(0)">登录</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="js/login.js"></script>

	<script src="js/TweenLite.min.js"></script>
	<script src="js/EasePack.min.js"></script>
	<script src="js/rAF.js"></script>
	<script src="js/demo-1.js"></script>

</body>
</html>