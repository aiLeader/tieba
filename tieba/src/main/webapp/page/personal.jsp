<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>${loginUser.uname}的个人主页</title>
<link type="text/css" rel="stylesheet" href="../bootstrap/css/bootstrap.min.css"/>
<link rel="stylesheet" href="../css/personal.css">
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
			<c:choose>
				<c:when test="${loginUser.picPath !=null}">
					<img style="width:100px;height:100px;border-radius:50%;" class="img-circle" id="picPath" src="${loginUser.picPath}">
				</c:when>
				<c:otherwise>
					<img style="width:100px;height:100px;border-radius:50%;" class="img-circle" id="picPath" src="../images/mr.jpg">
				</c:otherwise>
			</c:choose>
			<p id="uname">${loginUser.uname}</p>
			<p id="sex">${loginUser.sex}</p>
			&nbsp;&nbsp;个性签名：<p id="sign">${loginUser.signs}</p>
			<p id="more"><a href="personalSet.jsp" target="_blank">查看更多资料&gt;&gt;</a></p>
		</div>
		<div id="right">
			<div class="tabbable" id="tabs-692685">
				<ul class="nav nav-tabs">
					<li class="active">
						 <a href="#panel-216861" data-toggle="tab">全部</a>
					</li>
					<li>
						 <a href="#panel-687439" data-toggle="tab">收藏</a>
					</li>
					<li>
						 <a href="#panel-687440" data-toggle="tab">关注</a>
					</li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane  active" id="panel-216861">
						<div id="note">
							<p>
								<a id="title" href="page/noteDetail.html" style="padding-right:21px">Heading</a>
								<button id="concern" type="button" class="btn btn-default btn-sm" style="background:pink">
								    <span class="glyphicon glyphicon-plus"></span>
								    关注
								</button>
							</p>
							<p>
								Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
							</p>
							<p>
								<span class="glyphicon glyphicon-user"></span>
								<a href="#" style="padding-right:30px">@sh</a>
								<span class="glyphicon glyphicon-time" style="padding-left:7px"></span>
								2017-2-28 20:20
								<a href="#" class="glyphicon glyphicon-thumbs-up" style="padding-left:30px">10</a>
								<a href="#" class="glyphicon glyphicon-heart" style="padding-left:30px">收藏</a>
								<a href="javascript:;" id="toggle" target="_self" class="glyphicon glyphicon-edit" style="padding-left:30px">评论</a>
							<!-- 点击评论 -->
							<div id="comm" style="display: none;">
								<textarea rows="4" cols="80"></textarea><br>
								<button>提交</button>
							</div>
							</p>
						</div>
						
					</div>
					<div class="tab-pane" id="panel-687439">
						<div id="note">
							<p>
								<a id="title" href="page/noteDetail.html" style="padding-right:21px">Store</a>
								<button id="concern" type="button" class="btn btn-default btn-sm" style="background:pink">
								    <span class="glyphicon glyphicon-plus"></span>
								    关注
								</button>
							</p>
							<p>
								Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
							</p>
							<p>
								<span class="glyphicon glyphicon-user"></span>
								<a href="#" style="padding-right:30px">@sh</a>
								<span class="glyphicon glyphicon-time" style="padding-left:7px"></span>
								2017-2-28 20:20
								<a href="#" class="glyphicon glyphicon-thumbs-up" style="padding-left:30px">10</a>
								<a href="#" class="glyphicon glyphicon-heart" style="padding-left:30px">收藏</a>
								<a href="javascript:;" id="toggle1" target="_self" class="glyphicon glyphicon-edit" style="padding-left:30px">评论</a>
								<!-- 点击评论 -->
								<div id="comm1" style="display: none;">
									<textarea rows="4" cols="80"></textarea><br>
									<button>提交</button>
								</div>
							</p>
						</div>
					</div>
					<div class="tab-pane" id="panel-687440">
						<div id="note">
							<p>
								<a id="title" href="page/noteDetail.html" style="padding-right:21px">Concern</a>
								<button id="concern" type="button" class="btn btn-default btn-sm" style="background:pink">
								    <span class="glyphicon glyphicon-plus"></span>
								    关注
								</button>
							</p>
							<p>
								Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
							</p>
							<p>
								<span class="glyphicon glyphicon-user"></span>
								<a href="#" style="padding-right:30px">@sh</a>
								<span class="glyphicon glyphicon-time" style="padding-left:7px"></span>
								2017-2-28 20:20
								<a href="#" class="glyphicon glyphicon-thumbs-up" style="padding-left:30px">10</a>
								<a href="#" class="glyphicon glyphicon-heart" style="padding-left:30px">收藏</a>
								<a href="javascript:;" id="toggle2" target="_self" class="glyphicon glyphicon-edit" style="padding-left:30px">评论</a>
								<!-- 点击评论 -->
								<div id="comm2" style="display: none;">
									<textarea rows="4" cols="80"></textarea><br>
									<button>提交</button>
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 分页 -->
			<ul class="pagination">
				<li>
					 <a href="#">Prev</a>
				</li>
				<li>
					 <a href="#">1</a>
				</li>
				<li>
					 <a href="#">2</a>
				</li>
				<li>
					 <a href="#">3</a>
				</li>
				<li>
					 <a href="#">4</a>
				</li>
				<li>
					 <a href="#">5</a>
				</li>
				<li>
					 <a href="#">Next</a>
				</li>
			</ul>
		</div>
	</div>
	<div id="footer">
		<div id="fcontent">
			<p>@贴吧版权所有</p>
			<p>邮箱：shdufnchdd@163.com   联系方式：111</p>
		</div>
	</div>
<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
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
$(function() {
	$("#toggle2").click(function() {
		$(this).text($("#comm2").is(":hidden") ? "收起" : "评论");
		$("#comm2").slideToggle();
	});
});
</script>
</body>
</html>
