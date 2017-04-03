<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE>
<html>
<head>
<meta content="text/html; charset=utf-8">
<title>帖子信息</title>
</head>
<body>
	<div class="top-searcher">
		根据条件查找：<select name="title">
		<option value="板块">板块</option>
		<option value="贴主">贴主</option>
		<option value="其他">其他</option>
		</select><input id="inputt" type="text" name="condition" style="width: 150px" />
		&nbsp;&nbsp; <a href="javascript:void(0)" class="easyui-linkbutton"
			data-options="iconCls:'icon-search'" onclick="obj.search()">查询</a>
			<p>对于后面的状态0是通过1是拒绝通过</p>
	</div>
	
	<div id="noteInfoDiv">
		<table id="noteInfoTable">
		</table>
	</div>
	<script type="text/javascript" src="js/note_info.js"></script>
</body>
</html>