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
		<span>根据条件查找(ID、姓名、性别、手机号、邮箱、地址)：</span><input id="inputt" type="text" name="Eq" style="width: 150px;height:30px;" />
		&nbsp;&nbsp; <a href="javascript:void(0)" class="easyui-linkbutton"
			data-options="iconCls:'icon-search'" onclick="obj.search()">查询</a>
	</div>
	<table id="userInfo"></table>

	<script type="text/javascript" src="js/userinfo.js"></script>
</body>
</html>