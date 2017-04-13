<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title></title>
<link type="text/css" rel="stylesheet"
	href="../bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="../css/demo1.css">
<link type="text/css" rel="stylesheet" href="../bootstrap/css/bootstrap.min.css"/>
<link rel="stylesheet" href="../css/personal.css">
<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
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
			<li class="active">个人主页</li>
		</ol>
	</div>
	<div id="content">
		<div id="left">
			<img style="width: 100px; height: 100px; border-radius: 50%;"
				class="img-circle" id="picPath"> <input type="hidden"
				value="${loginUser.userid}" id="userid">
			<p id="uname"></p>
			<p id="sex"></p>
			&nbsp;&nbsp;个性签名：
			<p id="sign"></p>
			<p id="more">
				<a href="personalSet.jsp" target="_blank">查看更多资料&gt;&gt;</a>
			</p>
		</div>
		<div id="right">
			<div class="tabbable" id="tabs-692685">
				<ul class="nav nav-tabs">
					<li class="active"><a href="#panel-all" data-toggle="tab">全部</a>
					</li>
					<li><a href="#panel-store" data-toggle="tab">收藏</a></li>
					<li><a href="#panel-concern" data-toggle="tab">关注</a></li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane  active" id="panel-all"></div>
					<div class="tab-pane" id="panel-store"></div>
					<div class="tab-pane" id="panel-concern"></div>
					<div class="tab-pane  active" id="panel-all">
					</div>
					<div class="tab-pane" id="panel-store">
					</div>
					<div class="tab-pane" id="panel-concern">
						<ul id="concernUser">
						</ul>
					</div>
				</div>
			</div>

		</div>
	</div>
	<div id="footer">
		<div id="fcontent">
			<p>@贴吧版权所有</p>
			<p>邮箱：shdufnchdd@163.com 联系方式：111</p>
		</div>
	</div>

	<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/personal.js"></script>
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
</script>
</body>
</html>
