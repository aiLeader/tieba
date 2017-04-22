<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<base href="${deployName}">
<meta charset="UTF-8">
<title>用户信息管理</title>
<link href="css/main.css" rel="stylesheet" type="text/css" />
<link href="css/userinfo.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="top-searcher">
		<select id="option">
			<option value="uname">根据姓名查找</option>
			<option value="sex">根据性别查找</option>
			<option value="telephone">根据手机号查找</option>
			<option value="email">根据邮箱查找</option>
			<option value="address">根据地址查找</option>
		</select>
		<input id="inputt" list="pasta" type="text" name="Eq" style="width: 150px;height:20px;" />
		<datalist id="pasta"></datalist>
		&nbsp;&nbsp; <a href="javascript:void(0)" class="easyui-linkbutton"
			data-options="iconCls:'icon-search'" onclick="obj.search()">查询</a>
	</div>
	<table id="userInfo"></table>

	<script type="text/javascript" src="js/userinfo.js"></script>
</body>
</html>