<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<base href="${deployName }">
<meta content="text/html; charset=utf-8">
<title>板块详情</title>
<link rel="stylesheet" type="text/css"
	href="easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
<link type="text/css" rel="stylesheet" href="css/index.css"/>
<link type="text/css" rel="stylesheet" href="css/typeDetail.css"/>
</head>
<body>
	<div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
			<nav class="navbar navbar-default" role="navigation">
				<div class="navbar-header">
					 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand" href="#">爱贴就上贴吧</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active">
							 <a href="#">首页</a>
						</li>
					</ul>
					<form class="navbar-form navbar-left" role="search">
						<div class="form-group">
							<input class="form-control" type="text" style="width:400px"/>
						</div> <button type="submit" class="btn btn-default">搜索</button>
					</form>
					<ul class="nav navbar-nav navbar-right">
							<c:choose>
								<c:when test="${loginUser !=null}">
									<li>
										<c:choose>
										<c:when test="${loginUser.picPath !=null}">
											<img class="img-circle" id="picPath" src="${loginUser.picPath}">
										</c:when>
										<c:otherwise>
											<img class="img-circle" id="picPath" src="images/mr.jpg">
										</c:otherwise>
										</c:choose>
									</li>
									<li><a id="uname" href="#">${loginUser.uname}</a></li>
									<input id="userid" type="hidden" value="${loginUser.userid}">
								</c:when>
								<c:otherwise>
									<li><a href="register.jsp">注册</a></li>
									<li><a href="login.jsp">登录</a></li>
								</c:otherwise>
							</c:choose>
							<li class="dropdown"><a href="#" class="dropdown-toggle"
								data-toggle="dropdown">更多<strong class="caret"></strong></a>
								<ul class="dropdown-menu">
									<c:choose>
										<c:when test="${loginUser !=null}">
											<li><a href="page/personal.jsp">个人中心</a></li>
											<li><a href="#">消息中心</a></li>
											<li><a href="#">系统消息</a></li>
											<li class="divider"></li>
											<li><a href="../exit.jsp">退出登录</a></li>
										</c:when>
										<c:otherwise>
											<li><a href="#">个人中心</a></li>
											<li><a href="#">消息中心</a></li>
											<li><a href="#">系统消息</a></li>
										</c:otherwise>
									</c:choose>
								</ul></li>
						</ul>
					
				</div>
			</nav>
			<div class="carousel slide" id="carousel-204734">
				<ol class="carousel-indicators">
					<li class="active" data-slide-to="0" data-target="#carousel-204734">
					</li>
					<li data-slide-to="1" data-target="#carousel-204734">
					</li>
					<li data-slide-to="2" data-target="#carousel-204734">
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="item active">
						<img id="picChange" alt="" src="images/bg3.jpg" />
						<div class="carousel-caption">
							<h4>
								First Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
					<div class="item">
						<img id="picChange" alt="" src="images/bg5.jpg" />
						<div class="carousel-caption">
							<h4>
								Second Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
					<div class="item">
						<img id="picChange" alt="" src="images/bg6.jpg" />
						<div class="carousel-caption">
							<h4>
								Third Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
				</div> <a class="left carousel-control" href="#carousel-204734" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-204734" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
			</div>
		</div>
	</div>
	<div class="row clearfix" style="margin-top:40px">
		<!-- <div class="col-md-6 column"> -->
		<div class="col-md-9 column" id="center">
			<div id="top">
				<image id="tpicPath" src="images/mr.jpg">
				<a href="#" id="tname"></a>
				<span id="tdesc"></span>
				<form method="post"  id="sendForm"  enctype="multipart/form-data"  >
				<input type="hidden" id="tid" name="tid" value="${tid}">
				<input type="hidden" id="userid" name="userid" value="${loginUser.userid}">
					标题：<input name="ntitle" id="ntitle">
					<textarea rows="4" cols="85" id="topcontent" name="topcontent" ></textarea><br>
					<a id="send" href="javascript:void(0)" onclick="return sendNote()">发送</a>
				</form>
			</div>
			<form  method="post"  id="collectFrom"  enctype="multipart/form-data">
				<input type="hidden" id="userid" name="userid" value="${loginUser.userid}">
			</form>
			<div id="content"></div>
		</div>
			
		<div class="col-md-3 column">
			<p id="pstyle">帖子热议榜</p>
			<div id="olstyle">
				<ol id="hot"></ol>
			</div>
			
			<p id="pstyle">帖子推荐</p>
			<div id="sendNotes"></div>
		</div>
	</div>
	<div class="row clearfix" id="footerstyle">
		<div class="col-md-12 column" id="footerbody" >
			<p class="text-center" id="pfooter">
				 @2017 联系方式：11111111111
			</p>
			<p class="text-center" id="pfooter">
				 邮箱：joy@163.com
			</p>
		</div>
	</div>
</div>
<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" charset="utf-8" src="ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="ueditor/ueditor.all.min.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="ueditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" src="js/typeDetail.js"></script>
<script type="text/javascript">
$(function() {
	$("#toggle").click(function() {
		$(this).text($("#comm").is(":hidden") ? "收起" : "评论");
		$("#comm").slideToggle();
	});
});
</script>	
</body>
</html>
