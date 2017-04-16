var userid=$("#userid").val();
var password=null;
$('.choose').click(function () {
	$('.choose').addClass('active');
	$('.choose > .icon').addClass('active');
	$('.pay').removeClass('active');
	$('.wrap').removeClass('active');
	$('.ship').removeClass('active');
	$('.pay > .icon').removeClass('active');
	$('.wrap > .icon').removeClass('active');
	$('.ship > .icon').removeClass('active');
	$('#line').addClass('one');
	$('#line').removeClass('two');
	$('#line').removeClass('three');
	$('#line').removeClass('four');
	loadUserInfo(userid);
});
$('.pay').click(function () {
	$('.pay').addClass('active');
	$('.pay > .icon').addClass('active');
	$('.choose').removeClass('active');
	$('.wrap').removeClass('active');
	$('.ship').removeClass('active');
	$('.choose > .icon').removeClass('active');
	$('.wrap > .icon').removeClass('active');
	$('.ship > .icon').removeClass('active');
	$('#line').addClass('two');
	$('#line').removeClass('one');
	$('#line').removeClass('three');
	$('#line').removeClass('four');
	loadUserInfo(userid);

});
$('.wrap').click(function () {
	$('.wrap').addClass('active');
	$('.wrap > .icon').addClass('active');
	$('.pay').removeClass('active');
	$('.choose').removeClass('active');
	$('.ship').removeClass('active');
	$('.pay > .icon').removeClass('active');
	$('.choose > .icon').removeClass('active');
	$('.ship > .icon').removeClass('active');
	$('#line').addClass('three');
	$('#line').removeClass('two');
	$('#line').removeClass('one');
	$('#line').removeClass('four');
	loadUserInfo(userid);
});
$('.ship').click(function () {
	$('.ship').addClass('active');
	$('.ship > .icon').addClass('active');
	$('.pay').removeClass('active');
	$('.wrap').removeClass('active');
	$('.choose').removeClass('active');
	$('.pay > .icon').removeClass('active');
	$('.wrap > .icon').removeClass('active');
	$('.choose > .icon').removeClass('active');
	$('#line').addClass('four');
	$('#line').removeClass('two');
	$('#line').removeClass('three');
	$('#line').removeClass('one');
});
$('.choose').click(function () {
	$('#first').addClass('active');
	$('#second').removeClass('active');
	$('#third').removeClass('active');
	$('#fourth').removeClass('active');
});
$('.pay').click(function () {
	$('#first').removeClass('active');
	$('#second').addClass('active');
	$('#third').removeClass('active');
	$('#fourth').removeClass('active');
});
$('.wrap').click(function () {
	$('#first').removeClass('active');
	$('#second').removeClass('active');
	$('#third').addClass('active');
	$('#fourth').removeClass('active');
});
$('.ship').click(function () {
	$('#first').removeClass('active');
	$('#second').removeClass('active');
	$('#third').removeClass('active');
	$('#fourth').addClass('active');
});



loadUserInfo(userid);
function loadUserInfo(userid){
	$.post("../user/list",{options:userid}, function(data){
		$("#username").val(data.rows[0].uname);
		password=data.rows[0].password;
		if(data.rows[0].sex=='男'){
			$(":radio[name='sex'][value='男']").attr("checked","true");
		}else{
			$(":radio[name='sex'][value='女']").attr("checked","true");
		}
		$("#birthday").datebox('setValue',data.rows[0].birthday);
		$("#telephone").val(data.rows[0].telephone);
		$("#email").val(data.rows[0].email);
		$("#address").val(data.rows[0].address);
		$("#signs").val(data.rows[0].signs);
		if(data.rows[0].picPath){
			$("#pic").attr("src",data.rows[0].picPath);
		}else{
			$("#pic").attr("src", "../images/not_pic.jpg");
		}
	},"json")
}

$("#PerInfoForm").form({
	url:"../user/update",
	success:function(data){
		$.messager.show({
			title:'修改个人信息',
			msg:'修改个人信息' + (data=="true" ? "成功..." : "失败!!!"),
			showType:'show',
			style:{
				top:document.body.scrollTop+document.documentElement.scrollTop,
			}
		});
		loadUserInfo(userid);
	}
})


$("#updatePic").form({
	url:"../user/updatePic",
	success:function(data){
		$.messager.show({
			title:'修改个人图片信息',
			msg:'修改个人图片信息' + (data=="true" ? "成功..." : "失败!!!"),
			showType:'show',
			style:{
				top:document.body.scrollTop+document.documentElement.scrollTop,
			}
		});
	}
})
var mima=document.getElementById("pwd");
mima.onblur=function(){
	if($('#pwd').val()==null ||$('#pwd').val()==""){
		$.messager.alert('警告','请输入原密码！！！');    
	}else{
		var pwd=$('#pwd').val();
		var param={password:pwd,userid:userid}; //创建一个javascript对象
		$.ajax({
			type:"post",
			url:"../user/updatepwd",
			async:false, //进行同步请求
			data:JSON.stringify(param), //json格式的请求参数
			dataType:"json", //指定返回的数据为json格式
			contentType:"application/json;charset=utf-8",//指定请求数据为json格式
			success:function(data){
				if(data){
				}else{
					$.messager.alert('提示','原密码不正确，请重新输入！！'); 
				}

			}
		});
	}
}
var pwd=document.getElementById("npwd");
pwd.onblur=function(){
	var ypwd=$("#ypwd").val();
	var npwd=$("#npwd").val();
	if(ypwd!==npwd){
		$.messager.alert('提示','两次密码输入不一致'); 
	}else{
		

	}
}
function insertPwd(){
	var yypwd=$("#ypwd").val();
	var param={password:yypwd,userid:userid}; //创建一个javascript对象
	if($("#ypwd").val()!=$("#npwd").val()){
		$.messager.alert('提示','两次密码输入不一致'); 
	}else{
		$.ajax({
			type:"post",
			url:"../user/insertpwd",
			async:false, //进行同步请求
			data:JSON.stringify(param), //json格式的请求参数
			dataType:"json", //指定返回的数据为json格式
			contentType:"application/json;charset=utf-8",//指定请求数据为json格式
			success:function(data){
				if(data){
					$.messager.alert('提示','密码修改成功...');
					$("#ypwd").val("");
					$("#npwd").val("");
					$('#pwd').val("");
				}else{
					$.messager.alert('提示','密码修改失败！！'); 
				}

			}
		});
	}
	
}


function chgPic(obj){
	$("#pic").attr("src", window.URL.createObjectURL(obj.files[0]));
}



// 修改用户名 判断姓名是否已注册
var username=document.getElementById("username");
username.onblur=function(){
	var uname=$("#username").val();
	if(uname=="" || uname==null){
		$.messager.alert('警告','请输入用户名');
	}else{
		$.post("../user/list",{"options":uname}, function(data){
			//alert(JSON.stringify(data.rows[0].uname));
			if(data.total!=0 && uname!=data.rows[0].uname){
				$.messager.alert('警告','该用户名已存在,请重新输入');
			}else{
				//$.messager.alert('提示','请输入用户名');
			}
		},"json");
	}
}






