<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<base href="${deployName}">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>退出登录</title>
</head>
<link type="text/css" rel="stylesheet" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="easyui/themes/default/easyui.css">
<link type="text/css" rel="stylesheet" href="css/exit.css">
<body>
	<c:remove var="loginUser" scope="session" />
	<%-- <jsp:forward page="index.jsp"/> --%>
	<script type="text/javascript">
		window.location=${deployName}+"index.jsp";
	</script>
	<!-- <div id="loginDiv">
		<div id="MsgForm">
			<h2>退出登录成功</h2>
			<a href="index.jsp" id="returnBu">返回首页</a>
		</div>
	</div> -->
	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="js/exit.js"></script>
</body>
</html>