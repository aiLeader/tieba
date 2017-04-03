<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet" href="../bootstrap/css/bootstrap.min.css"/>
<link type="text/css" rel="stylesheet" href="../easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="../easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="../css/normalize2.css" />
<link rel="stylesheet" type="text/css" href="../css/default.css">
<link rel="stylesheet" href="../css/personalSet.css">
<title>个人设置</title>
</head>
<body>
	<div id="top">
		<ol class="breadcrumb">
		  <li><a href="../index.jsp">首页</a></li>
		  <li><a href="personal.jsp">个人主页</a></li>
		  <li class="active">个人设置</li>
		</ol>
	</div>
<div id="wrapper">
  <div id="left-side">
	<ul>
	  <li class="choose active">
		基本资料
	  </li>
	  <li class="pay">
		头像设置
	  </li>
	  <li class="wrap">
		修改密码
	  </li>
	  <li class="ship">
		Ship
	  </li>
	</ul>
  </div>

  <div id="border">
	<div id="line" class="one"></div>
  </div>

  <div id="right-side">
	<div id="first" class="active">
		<form>
			姓名:<input name="uname" ><br/>
			性别:<input type="radio" name="sex" value="boy">男<input type="radio" name="sex" value="girl">女<br/>
			生日:<input id="dd" type="text" class="easyui-datebox" required="required"></input><br/>
			电话:<input type="text" name="telephone"> <br/>
			邮箱:<input type="email" name="email"> <br/>
			地址:<select name="province" id="province">
		        	<option value="省份" selected="selected">省份</option>
		        </select>
		        <select name="city" id="city">
		        	<option value="城市" selected="selected">城市</option>
		        </select><br/>
			签名:<textarea></textarea><br/>
			<input type="button" value="保存">
		</form>	
	</div>
	<div id="second">
		<input type="file" name="picPath">
		<img name="picPath" id="picPath" src="../images/not_pic.jpg">
		<button>保存</button>
	</div>
	<div id="third">
		<form>
			请输入密码：<input type="password" name="password"><br/>
			请输入新密码：<input type="password" name="password"><br/>
			请再次输入新密码：<input type="password" name="password"><br/>
			<input type="button" value="保存">
		</form>

	</div>
	<div id="fourth">
	  <h1>Ship it</h1>

	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra est, eu finibus mauris. Quisque tempus vestibulum fringilla. Morbi tortor eros, sollicitudin eu arcu sit amet, aliquet sagittis dolor. </p>

	</div>
  </div>
</div>
<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="../easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="../easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="../js/personalSet.js"></script>
<script>
	var province=document.getElementById('province');
	var city=document.getElementById('city');
	//省份  
	var provinceArr = []; 
	provinceArr[0] = ['北京市']; 
	provinceArr[1] = ['重庆市'];
	provinceArr[2] = ['湖南省'];
	//市县,每个数组第一个元素为省份,其他的为这个省份下的市县 
	var cityArr = [];  
	cityArr[0] = ['北京市','东城区', '西城区','崇文区','宣武区','朝阳区']; 
	cityArr[1] = ['重庆市','万州区','江北区','九龙坡区','南岸区'];
	cityArr[2] = ['湖南省','长沙市', '株洲市','衡阳市', '岳阳市', '常德市'];
	//生成省份  
	for(var key in provinceArr) {  
		var provinceOption = document.createElement('option');  
		provinceOption.value = provinceOption.text = provinceArr[key];  			province.options.add(provinceOption);  
	}
	//生成市县、区市'  
	//@current为当前选择的select节点，即父类节点  
	//@child为子类点  
	//@childArr为子节点数组  
	function showChild(current, child, childArr) {  
		var currentValue = current.value;  
		var count = childArr.length;  
	      	//每次切换市'把城市的子option长度设置市',即清除城市的选择,DOM对象select元素是长度是子option的个市'  
	      	child.length = 1;  
	      	for(var i = 0; i < count; i++) {  
	              //判断所选的值即父类，与当前节点第一个数组元素是否相市'  
	              if(currentValue == childArr[i][0]) {  
	              	//不取第一个数组元市'因为第一个是父类，所以j市'开始，而不市'  
	                  for(var j = 1; j < childArr[i].length; j++) {  
	                     var childOption = document.createElement('option');  						//ie不支持option对象的value,所以加childOption.text  
	                   	childOption.value = childOption.text = childArr[i][j];  
	                      child.options.add(childOption);   
	                  }  
	              }  
	      	}  
	}
	//省份改变市  
	province.onchange = function() {  
	      	showChild(province, city, cityArr);  
	}    
</script>
	
</body>
</html>