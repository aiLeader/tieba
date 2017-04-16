<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
<link type="text/css" rel="stylesheet"
	href="../bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="../easyui/themes/icon.css">
<link type="text/css" rel="stylesheet"
	href="../easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="../css/normalize2.css" />
<link rel="stylesheet" type="text/css" href="../css/default.css">
<link rel="stylesheet" href="../css/personalSet.css">
<title>个人设置</title>
</head>
<body>
<c:choose>
	<c:when test="${loginUser==null }">
		<script type="text/javascript">
			alert("请先登录!");
			window.location=${deployName}+"index.jsp";
		</script>
	</c:when>
	<c:when test="${loginUser=='' }">
		<script type="text/javascript">
			alert("请先登录!");
			window.location=${deployName}+"index.jsp";
		</script>
	</c:when>
</c:choose>
	<div id="top">
		<ol class="breadcrumb">
			<li><a href="../index.jsp">首页</a></li>
			<li><a href="personal.jsp">个人主页</a></li>
			<li class="active">个人设置</li>
		</ol>
	</div>
	<div id="wrapper">
		<div id="left-side">
			<ul>
				<li class="choose active">基本资料</li>
				<li class="pay">头像设置</li>
				<li class="wrap">修改密码</li>
				<li class="ship">Ship</li>
			</ul>
		</div>

		<div id="border">
			<div id="line" class="one"></div>
		</div>

		<div id="right-side">
			<div id="first" class="active">
				<form method="post" id="PerInfoForm">
					账号:<input name="userid" id="userid" value="${loginUser.userid}"
						readonly="readonly"><br /> 姓名:<input name="uname"
						id="username" ><br /> 性别:<input
						type="radio" name="sex" value="男">男<input type="radio"
						name="sex" value="女">女<br /> 生日:<input id="birthday"
						name="birthday" type="text" class="easyui-datebox"></input><br />
					电话:<input type="text" name="telephone" id="telephone"> <br />
					邮箱:<input type="email" name="email" id="email"> <br />
					地址:<input type="text" name="address" id="address"><br /> <br />
					签名:
					<textarea id="signs" name="signs"></textarea>
					<br /> <input name="picPath" type="hidden"
						value="${loginUser.picPath}">
					<button type="submit">保存</button>
				</form>
			</div>
			<div id="second">
				<form method="post" id="updatePic" enctype="multipart/form-data">
					<input id="upicPath" type="file" name="picData"
						onchange="chgPic(this)" /><br> <img id="pic"
						src="../images/xh.jpg" width="100" height="100"> <input
						name="userid" type="hidden" value="${loginUser.userid}"> <input
						name="uname" type="hidden" value="${loginUser.uname}" /> <input
						name="sex" type="hidden" value="${loginUser.sex}" /> <input
						type="hidden" name="signs" value="${loginUser.signs}">
					<button type="submit">保存</button>
				</form>
			</div>
			<div id="third">
				<form>
					请输入密码：<input type="password" name="password" id="pwd">
					<br /> 请输入新密码：<input type="password" name="npassword" id="ypwd"><br />
					请再次输入新密码：<input type="password" id="npwd" name="anpassword"><br />
					<input type="button" onclick="insertPwd()" value="保存">
				</form>
			</div>
			<div id="fourth">
				<h1>Ship it</h1>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec at viverra est, eu finibus mauris. Quisque tempus vestibulum
					fringilla. Morbi tortor eros, sollicitudin eu arcu sit amet,
					aliquet sagittis dolor.</p>

			</div>
		</div>
	</div>
	<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript"
		src="../easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="../js/personalSet.js"></script>

</body>
</html>