<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>首页</title>
<link type="text/css" rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
<link type="text/css" rel="stylesheet" href="css/index.css"/>

</head>
<body>
	<div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
			<nav class="navbar navbar-default" role="navigation">
				<div class="navbar-header">
					 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand" href="#">我们的贴吧</a>
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
									<li><a href="#">${loginUser.uname}</a></li>
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
											<li><a href="exit.jsp">退出登录</a></li>
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
		<div class="col-md-3 column" >
			<p id="pstyle">贴吧分类</p>
			<ul id="ulstyle">
				<!-- <li>
					<a href="#">王俊凯艺考</a>
				</li>
				<li>
					<a href="#">大唐荣耀</a>
				</li>
				<li>
					<a href="#">三生三世</a>
				</li>
				<li>
					<a href="#">韩国萨德</a>
				</li>
				<li>
					<a href="#">因为遇见你</a>
				</li>
				<li>
					<a href="#">王牌对王牌</a>
				</li>
				<li>
					<a href="#">高能少年团</a>
				</li>
				<li>
					<a href="#">花儿与少年</a>
				</li> -->
			</ul>
		</div>
		<!-- <div class="col-md-6 column"> -->
		<div class="col-md-6 column" id="center">
			<div id="top">
				贴吧类型
				<select>
					<option value="1">王源</option>
					<option value="2">王源</option>
					<option value="3">王源</option>
				</select>
				<textarea rows="4" cols="85" id="topcontent" name="topcontent"></textarea><br>
				<button>发送</button>
			</div>
			<div id="content">
			<p>
				<a id="title" href="page/noteDetail.jsp" style="padding-right:21px">Heading</a>
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
				<a  href="javascript:;" id="toggle" target="_self" class="glyphicon glyphicon-edit" style="padding-left:30px">评论</a>
				<!-- 点击评论 -->
				<div id="comm" style="display: none;">
					<textarea rows="4" cols="80"></textarea><br>
					<button>提交</button>
				</div>
			</p>
			<p>
				 <a class="btn" href="page/noteDetail.jsp">View details »</a>
			</p>
			</div>
			
			<div id="content">
			<p>
				<a id="title" href="#" style="padding-right:21px">Heading</a>
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
				<a href="#" class="glyphicon glyphicon-edit" style="padding-left:30px">评论</a>
			</p>
			<p>
				 <a class="btn" href="#">View details »</a>
			</p>
			</div>
			
			<div id="content">
			<p>
				<a id="title" href="#" style="padding-right:21px">Heading</a>
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
				<a href="#" class="glyphicon glyphicon-edit" style="padding-left:30px">评论</a>
			</p>
			<p>
				 <a class="btn" href="#">View details »</a>
			</p>
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
		<div class="col-md-3 column">
			<p id="pstyle">贴吧热议榜</p>
			<div id="olstyle">
				<ol id="hot"></ol>
			</div>
			
			<p id="pstyle">贴吧推荐</p>
			<ul id="ulstyle">
				<li>
					<image id="picPath" src="images/mr.jpg">
					<a href="#">王源吧</a>
				</li>
				<li>
					<image id="picPath" src="images/mr.jpg">
					<a href="#">王源吧</a>
				</li>
				<li>
					<image id="picPath" src="images/mr.jpg">
					<a href="#">王源吧</a>
				</li>
				<li>
					<image id="picPath" src="images/mr.jpg">
					<a href="#">王源吧</a>
				</li>
				<li>
					<image id="picPath" src="images/mr.jpg">
					<a href="#">王源吧</a>
				</li>
			</ul>
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
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" charset="utf-8" src="ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="ueditor/ueditor.all.min.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="ueditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" src="js/index.js"></script>
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