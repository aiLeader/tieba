<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>帖子信息</title>
</head>
<body>
	<div class="top-searcher">
	<select id="select1">
	<option value="userid">根据用户ID</option>
	<option value="nid">根据帖子ID</option>
	<option value="tid">根据版块ID</option>
	</select>
	<input id="param" name="param"/>
	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-search'" onclick="findByParam()">查询</a>
	</div>
	<table id="TNoteInfo"></table>
	<div id="TNoteInfoDetail">
		<form action="#" method="post">
			<p>
				<label> ID </label> <input id="TNSnid" required="required" readonly="readonly" />
			</p>
			<p>
				<label> 标题 </label> <input id="TNSntitle" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 版块 </label> <input id="TNStid" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 版块名 </label> <input id="TNStname" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 用户 </label> <input id="TNSuserid" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 用户名 </label> <input id="TNSuname" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 发帖时间 </label> <input id="TNSntimes" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 评论数 </label> <input id="TNSnnum" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 点赞数 </label> <input id="TNSngood" required="required" readonly="readonly"/>
			</p>
		</form>
	</div>
	<script type="text/javascript" src="js/tuisong_info.js"></script>
</body>
</html>