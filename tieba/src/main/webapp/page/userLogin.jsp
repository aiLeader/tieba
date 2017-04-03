<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE>
<html>
<head>
<meta content="text/html; charset=utf-8">
<title>用户登录</title>
<link rel="stylesheet" href="../css/style.css" media="screen"
	type="text/css" />

</head>
<body>
	<form action="../user/login" method="post">
		<p><label>${errorMsg }&nbsp;</label></p><c:remove var="errorMsg" scope="session"/>
		<input name="userid" placeholder="请输入用户名或邮箱" class="name"
			required /> 
		<input name="password"
			placeholder="请输入密码" class="password" type="password" required />
		<img class="vpic" src="../vcode.jpg" title="看不清，换一张"/><input class="vcode" name="vcode" placeholder="请输入验证码" id="vcode"  required="required"/>
		<input name="submit" class="btn" type="submit" value="登录" id="loginBtn"/>
	</form>
	<div style="text-align: center; clear: both">
		<script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
		<script src="/follow.js" type="text/javascript"></script>
	</div>
	<script src="../js/modernizr.js"></script>
	<script src='../js/jquery-1.11.3.min.js'></script>
</body>
</html>