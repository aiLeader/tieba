<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>评论信息</title>
</head>
<body>
	<div class="top-searcher">
	<select id="banselect1">
	<option value="quserid">根据用户</option>
	<option value="qnoteid">根据帖子</option>
	</select>
	<input id="banparam" name="param"/>
	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="findByParam()">查询</a>
	</div>
	<table id="bancommentInfo"></table>
	<div id="bancommentDetail">
		<form action="#" method="post">
			<p>
				<label> 评论ID </label> <input id="ppcid" required="required" />
			</p>
			<p>
				<label> 评论贴 </label> <input id="ppnid" required="required" />
			</p>
			<p>
				<label> 评论者 </label> <input id="ppuserid" required="required" />
			</p>
			<p>
				<label> 评论内容 </label> <input id="ppccontent" required="required" />
			</p>
			<p>
				<label> 评论时间 </label> <input id="ppctime" required="required" />
			</p>
			<p>
				<label> 点赞数 </label> <input id="ppcgood" required="required" />
			</p>
		</form>
	</div>
	<script type="text/javascript" src="js/banCommentsInfo.js"></script>
</body>
</html>