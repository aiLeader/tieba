<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<base href="${deployName}">
<meta charset="UTF-8">
<title>爱贴就上贴吧注册</title>
<link rel="icon" href="images/favicon.ico" />
<link type="text/css" rel="stylesheet" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="easyui/themes/default/easyui.css">
<link rel="stylesheet" href="css/register.css">

</head>
<body>
	<div id="logo">
		<img src="images/logo1.png" />
	</div>
	<div id="content">
		<div id="con1">
			<a href="register.jsp" id="cont1">用户注册</a>
		</div>
		<div id="con2">
			<form action="user/emailregister" method="post" id="form1"
				style="display: block;">
				<div id="youxiangdiv">
					<span id="span1"><i id="spani2">*</i>邮箱：</span> <input type="email"
						name="email" placeholder="使用邮箱注册" id="e-mail" class="color1"
						 /> <span id="mimats3" style="display: none;">请你输入邮箱</span>
					<span id="mimats4" style="display: none;">该邮箱已注册，请换个邮箱</span> <span
						id="mimats41" style="display: none;">请输入正确的邮箱格式</span> <span
						id="mimats5" style="display: none;">该邮箱可以注册</span>
				</div>
				<div id="shoujizcdiv">
					<p>
						或使用<a id="shoujireg">手机注册</a>
					</p>
				</div>
				<div id="mimadiv">
					<span id="span3"><i>*</i>用户名：</span> <input type="text"
						name="uname" id="username" class="color1" />
					<span id="mimats6" style="display: none;">请你输入用户名</span> <span
						id="mimats7" style="display: none;">该用户名已经存在，请换个用户名</span> <span
						id="mimats8" style="display: none;">该用户名可用</span>

				</div>
				<div id="mimadiv1">
					<span id="span2"><i>*</i>请输入密码：</span> <input type="password"
						name="password" id="pwd" class="color1"  /> <span
						id="mimats1" style="display: none;">请输入6-16位数字、字母，字母区分大小写</span> <span
						id="mimats16" style="display: none;">你输入的密码强度有点低哦</span> <span
						id="mimats17" style="display: none;">你输入的密码很安全哦</span>

				</div>
				<div id="mimadiv2">
					<span id="span21"><i>*</i>请确认密码：</span> <input type="password"
						name="pwd2" id="pwd2" class="color1" /> <span
						id="mimats2" style="display: none;">你输入的密码与第一次输入的密码不一样哦</span>
				</div>
				<div id="jihuomadiv">
					<span id="span3"><i>*</i>验证码：</span> <a href="javascript:void(0)"
						id="jihuoma" class="sendMail" onclick="getnumber()">发送邮箱验证码</a> <input
						type="text" name="vcode" id="jihuo"  />
				</div>
				<div>
					<input type="submit" value="立即注册" id="sub" />
				</div>
			</form>




			<form method="post" id="form2" style="display: none;">
				<div id="shoujidiv">
					<span id="span1"><i id="spani">*</i>手机：</span> <span id="guoqi"
						class="color1"></span>
					<div id="number" class="color1">
						<span id="diquhao">0086</span> <input type="text" name="telephone"
							id="shouji" />
					</div>
					<span id="shoujits1" style="display: none;">请输入您的手机号码</span> <span
						id="shoujits2" style="display: none;">请输入长度11位，以13/15/17/18开头的手机号</span>
					<span id="shoujits3" style="display: none;">该手机号已注册！</span> <span
						id="shoujits4" style="display: none;">该手机号可以注册！</span>
				</div>
				<div id="youxiangzcdiv">
					<p>
						或使用<a id="youxiangreg">邮箱注册</a>
					</p>
				</div>
				<div id="mimadiv1">
					<span id="span3"><i>*</i>用户名：</span> <input type="text"
						name="uname" id="username1" class="color1" /> <span
						id="mimats9" style="display: none;">请你输入用户名</span> <span
						id="mimats10" style="display: none;">该用户名已经存在，请换个用户名</span> <span
						id="mimats11" style="display: none;">该用户名可用</span>
				</div>
				<div id="mimadiv">
					<span id="span2"><i>*</i>密码：</span> <input type="password"
						name="password" id="pwd3" class="color1" /> <span id="mimats15"
						style="display: none;">请输入6-16位数字、字母，字母区分大小写</span> <span
						id="mimats12" style="display: none;">你输入的密码强度有点低哦</span> <span
						id="mimats14" style="display: none;">你输入的密码很安全哦</span>
				</div>
				<div id="mimadiv2">
					<span id="span21"><i>*</i>请确认密码：</span> <input type="password"
						id="pwd4" class="color1" /> <span id="mimats13"
						style="display: none;">你输入的密码与第一次输入的密码不一样哦</span>
				</div>
				<div id="jihuomadiv">
					<span id="span3"><i>*</i>验证码：</span> <a href="javascript:void(0)"
						id="code" class="sendTel" onclick="getTelNumber()" >免费获取手机短信验证码</a>
					<input type="text" name="jihuo" id="telcode"  />
				</div>
				<div>
					<input type="button" onclick="senTele()" value="立即注册" id="sub2" />
				</div>
			</form>
			<img src="images/reg_vline.png" />
			<div id="con3">
				<div id="cont3">
					已有帐号，<a href="login.jsp">直接登录>></a>
				</div>
				<p>爱贴就上贴吧注册帮助</p>
				<ul>
					<li><i>1</i><a href="" target="_blank">爱贴就上贴吧注册操作指南</a></li>
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
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script src="js/register.js"></script>
</body>
</html>
