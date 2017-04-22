<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>评论信息</title>
</head>
<body>
	<div class="top-searcher">
	<select id="select1">
	<option value="quserid">根据用户名</option>
	<option value="qnoteid">根据帖子标题</option>
	</select>
	<input id="param" name="param"/>
	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-search'" onclick="findByParam()">查询</a>
	</div>
	<table id="commentInfo"></table>
	<div id="commentDetail">
		<form action="#" method="post">
			<p>
				<label> 评论ID </label> <input id="pcid" required="required" />
			</p>
			<p>
				<label> 评论贴 </label> <input id="pnid" required="required" />
			</p>
			<p>
				<label> 评论者 </label> <input id="puserid" required="required" />
			</p>
			<p>
				<label> 评论内容 </label> <input id="pccontent" required="required" />
			</p>
			<p>
				<label> 评论时间 </label> <input id="pctime" required="required" />
			</p>
			<p>
				<label> 点赞数 </label> <input id="pcgood" required="required" />
			</p>
		</form>
	</div>
	<script type="text/javascript" src="js/commentsInfo.js"></script>
</body>
</html>