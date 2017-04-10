<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<base href="${deployName}" />
<meta charset="utf-8">
<title>找回密码</title>
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
				<div id="findDiv">
					<form id="findForm"  action="user/codelogin" method="post">
						<img title="贴吧logo" src="images/logo1.png" id="image">
						<p>短信验证即登录，未注册将自动创建爱贴就上贴吧账号</p>
						<p>
							手机号：<input name="telephone" placeholder="请输入手机号" id="tel"
								required="required" /> 
							<span id="shouji" style="display:none;">请输入您的手机号码</span>
							<span id="shouji1" style="display:none;">手机号码格式错误</span>
						</p>
						<p>
							动态验证码：<input type="text" name="password" id="jihuo"
								required="required" /> <a href="javascript:void(0)"
								id="jihuoma" class="sendTel" onclick="getTelNumber()">发送手机短信验证码</a>
						</p>
						<p>
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
	<script type="text/javascript" src="js/findpwd.js"></script>

	<script src="js/TweenLite.min.js"></script>
	<script src="js/EasePack.min.js"></script>
	<script src="js/rAF.js"></script>
	<script src="js/demo-1.js"></script>

</body>
</html>