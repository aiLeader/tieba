<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title></title>
<link rel="stylesheet" type="text/css"
	href="../easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="../easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="../bootstrap/css/bootstrap.min.css"/>
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
			<img style="width:100px;height:100px;border-radius:50%;" class="img-circle" id="picPath" >
			<p>&nbsp;&nbsp;&nbsp;&nbsp;<a class="glyphicon glyphicon-envelope">私信</a>&nbsp;&nbsp;<a id="attention" class="glyphicon glyphicon-plus" onclick="attentionUs()">关注</a></p>
			<p id="uname"></p>
			<p id="sex"></p>
			&nbsp;&nbsp;个性签名：<p id="sign"></p>
		</div>
		<div id="right">
			<div class="tabbable" id="tabs-692685">
				<ul class="nav nav-tabs">
					<li class="active">
						 <a href="#panel-all" data-toggle="tab">全部帖子</a>
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
	<form  method="post"  id="collectFrom"  enctype="multipart/form-data">
				<input type="hidden" id="userid" name="userid" value="${loginUser.userid}">
			</form>
	<form  method="post"  id="attentionFrom"  enctype="multipart/form-data">
				<input type="hidden" id="userida" name="userida" value="${loginUser.userid}">
			</form>
	<div id="footer">
		<div id="fcontent">
			<p>@贴吧版权所有</p>
			<p>邮箱：shdufnchdd@163.com   联系方式：111</p>
		</div>
	</div>
	
<script type="text/javascript" src="../easyui/jquery.min.js"></script>
<script type="text/javascript" src="../easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="../easyui/locale/easyui-lang-zh_CN.js"></script>
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
