<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>当前推送</title>
</head>
<body>
	<table id="CTNoteInfo"></table>
	<div id="CTNoteInfoDetail">
		<form action="#" method="post">
			<p>
				<label> ID </label> <input id="CTNSnid" required="required" readonly="readonly" />
			</p>
			<p>
				<label> 标题 </label> <input id="CTNSntitle" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 版块 </label> <input id="CTNStid" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 版块名 </label> <input id="CTNStname" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 用户 </label> <input id="CTNSuserid" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 用户名 </label> <input id="CTNSuname" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 发帖时间 </label> <input id="CTNSntimes" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 评论数 </label> <input id="CTNSnnum" required="required" readonly="readonly"/>
			</p>
			<p>
				<label> 点赞数 </label> <input id="CTNSngood" required="required" readonly="readonly"/>
			</p>
		</form>
	</div>
	<script type="text/javascript" src="js/currTuisong_info.js"></script>
</body>
</html>