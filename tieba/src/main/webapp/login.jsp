<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>登录</title>
<link type="text/css" rel="stylesheet" href="css/login.css">

<link rel="stylesheet" type="text/css" href="css/normalize.css" />
<link rel="stylesheet" type="text/css" href="css/demo.css" />
<link rel="stylesheet" type="text/css" href="css/component.css" />


<link type="text/css" rel="stylesheet" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="easyui/themes/default/easyui.css">

</head>
<body>
	<div class="container demo-1">
		<div class="content">
			<div id="large-header" class="large-header">
				<canvas id="demo-canvas"></canvas>
				
				<div id="loginDiv">
					<form id="loginForm" action="user/login" method="post">
						<p><label>${errorMsg }&nbsp;</label></p><c:remove var="errorMsg" scope="session"/>
						<p><input name="userid" placeholder="请输入用户名" required="required"/></p>
						<p><input type="password" name="password" placeholder="请输入密码"  required="required"/></p>
						<p><img src="vcode.jpg" title="看不清，换一张"/><input name="vcode" placeholder="请输入验证码" id="vcode"  required="required"/></p>
						<p><a id="btnRegister" href="register.jsp">没有账号注册一个</a><a id="btnLogin" href="javascript:void(0)">登录</a></p>
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