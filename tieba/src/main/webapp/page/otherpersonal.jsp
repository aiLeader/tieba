<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>${loginUser.uname}的个人主页</title>
<link type="text/css" rel="stylesheet" href="../bootstrap/css/bootstrap.min.css"/>
<link type="text/css" rel="stylesheet" href="../css/demo1.css">
<link rel="stylesheet" href="../css/otherpersonal.css">
<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
</head>

<body>
	<div id="top">
		<ol class="breadcrumb">
		  <li><a href="../index.jsp">首页</a></li>
		  <li class="active">个人主页</li>
		</ol>
	</div>
	<div id="content">
		<div id="left">
					<img style="width:100px;height:100px;border-radius:50%;" class="img-circle" id="picPath" src="${loginUser.picPath}">
					<img style="width:100px;height:100px;border-radius:50%;" class="img-circle" id="picPath" src="../images/mr.jpg">
			<input type="hidden" value="${loginUser.userid}" id="userid">
			<p id="uname">${loginUser.uname}</p>
			<p id="sex">${loginUser.sex}</p>
			&nbsp;&nbsp;个性签名：<p id="sign">${loginUser.signs}</p>
		</div>
		<div id="right">
			<div class="tabbable" id="tabs-692685">
				<ul class="nav nav-tabs">
					<li class="active">
						 <a href="#panel-all" data-toggle="tab">全部</a>
					</li>
					<li>
						 <a href="#panel-store" data-toggle="tab">收藏</a>
					</li>
					<li>
						 <a href="#panel-concern" data-toggle="tab">关注</a>
					</li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane  active" id="panel-all">
					</div>
					<div class="tab-pane" id="panel-store">
					</div>
					<div class="tab-pane" id="panel-concern">
					</div>
				</div>
			</div>
			
		</div>
	</div>
	<div id="footer">
		<div id="fcontent">
			<p>@贴吧版权所有</p>
			<p>邮箱：shdufnchdd@163.com   联系方式：111</p>
		</div>
	</div>

<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/otherpersonal.js"></script>
<script type="text/javascript">
$(function() {
	$("#toggle").click(function() {
		$(this).text($("#comm").is(":hidden") ? "收起" : "评论");
		$("#comm").slideToggle();
	});
});
$(function() {
	$("#toggle1").click(function() {
		$(this).text($("#comm1").is(":hidden") ? "收起" : "评论");
		$("#comm1").slideToggle();
	});
});
$(function() {
	$("#toggle2").click(function() {
		$(this).text($("#comm2").is(":hidden") ? "收起" : "评论");
		$("#comm2").slideToggle();
	});
});
</script>
</body>
</html>
