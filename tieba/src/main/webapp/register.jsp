<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="${deloyName}">
<meta charset="UTF-8">
<title>贴吧注册</title>
<link rel="icon" href="images/favicon.ico" />
<link rel="stylesheet" href="css/register.css">

</head>
<body>
	<div id="logo">
		<img src="images/logo-tieba.png" />
	</div>
	<div id="content">
		<div id="con1">
			<a href="register.jsp" id="cont1">邮箱注册</a>
		</div>
		<div id="con2">
			<form action="user/register" method="post" id="form1"
				style="display: block;">
				<div id="youxiangdiv">
					<span id="span1"><i id="spani2">*</i>邮箱：</span> <input type="email"
						name="email" placeholder="使用邮箱注册" id="e-mail" class="color1"
						required="required" />
						<span id="mimats3" style="display: none;">请你输入邮箱</span>
						<span id="mimats4" style="display: none;">该邮箱已注册，请换个邮箱</span>
						<span id="mimats5" style="display: none;">该邮箱可以注册</span>
				</div>
				<div id="mimadiv">
					<span id="span3"><i>*</i>用户名：</span> <input type="text"
						name="uname" placeholder="请输入用户名" id="username" class="color1"
						required="required" />
					<span id="mimats6" style="display: none;">请你输入用户名</span>
					<span id="mimats7" style="display: none;">该用户名已经存在，请换个用户名</span>
					<span id="mimats8" style="display: none;">该用户名可用</span>
					
				</div>
				<div id="mimadiv1">
					<span id="span2"><i>*</i>请输入密码：</span> <input type="password"
						name="password" id="pwd" class="color1" required="required" /> <span
						id="mimats1" style="display: none;">请输入6-16位数字、字母或常用符号，字母区分大小写</span>
				</div>
				<div id="mimadiv2">
					<span id="span21"><i>*</i>请确认密码：</span> 
					<input type="password" name="pwd2" id="pwd2" class="color1" required="required" /> <span
						id="mimats2" style="display: none;">你输入的密码与第一次输入的密码不一样哦</span>
				</div>
				<div id="jihuomadiv">
					<span id="span3"><i>*</i>验证码：</span> <a href="javascript:void(0)"
						id="jihuoma" class="sendMail" onclick="getnumber()">发送邮箱验证码</a> <input
						type="text" name="vcode" id="jihuo" required="required" />
				</div>
				<div>
					<input type="submit" value="立即注册" id="sub" />
				</div>
			</form>
			<img src="images/reg_vline.png" />
			<div id="con3">
				<div id="cont3">
					已有帐号，<a href="login.jsp">直接登录>></a>
				</div>
				<p>贴吧注册帮助</p>
				<ul>
					<li><i>1</i><a href="" target="_blank">贴吧注册操作指南</a></li>
					<li><i>2</i><a href="" target="_blank">注册贴吧昵称显示“已经被注册”如何处理？</a></li>
					<li><i>3</i><a href="" target="_blank">注册时提示“你使用的IP地址异常”,该怎么办？</a></li>
				</ul>
				<a href="" id="cont5">更多帮助>></a>
			</div>
		</div>
	</div>
	<div id="footer">
		<span>北京微梦创科网络技术有限公司&nbsp; 京网文[2011]0398-130号 京ICP备12002058号</span> <i>Copyright&copy;2009-2016
			WEIBO</i>
	</div>
	<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
	<script src="js/register.js"></script>
</body>
</html>
