/*密码*/
var mima=document.getElementById("pwd");
mima.onfocus=function(){
	if($('#pwd').val()==null ||$('#pwd').val()==""){
		mimats1.style.display="block";
		mimats16.style.display="none";
		mimats17.style.display="none";
	}

}
mima.onblur=function(){
	var reg1 =/^[a-zA-Z0-9]{6,16}$/;
	if($('#pwd').val()!=null&&$('#pwd').val()!=""){
		if($('#pwd').val().match(reg1)){
			mimats1.style.display="none";
			mimats17.style.display="block";
			mimats16.style.display="none";
		}else{
			mimats1.style.display="none";
			mimats16.style.display="block";
			mimats17.style.display="none";
		}
	}else{
		mimats1.style.display="block";
		mimats16.style.display="none";
		mimats17.style.display="none";
	}

}

var pwd2=document.getElementById("pwd2");
pwd2.onblur=function(){
	pwd= $('#pwd').val();
	pwd3= $('#pwd2').val();
	if(pwd!=pwd3){
		mimats2.style.display="block";
	}
	if(pwd==pwd3){
		mimats2.style.display="none";
	}
}
//判断邮箱是否已注册
var email=document.getElementById("e-mail");
email.onblur=function(){
	var emails=$("#e-mail").val();
	var reg3 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	if(emails=="" || emails==null){
		mimats3.style.display="block";
		mimats4.style.display="none";
		mimats41.style.display="none";
		mimats5.style.display="none";
	}else if(emails.match(reg3)){
		$.post("user/list",{"options":emails}, function(data){
			//alert(data.total);
			if(data.total!=0){
				mimats4.style.display="block";
				mimats3.style.display="none";
				mimats41.style.display="none";
				mimats5.style.display="none";
			}else{
				mimats3.style.display="none";
				mimats4.style.display="none";
				mimats41.style.display="none";
				mimats5.style.display="block";
			}
		},"json");
	}else{
		mimats3.style.display="none";
		mimats4.style.display="none";
		mimats41.style.display="block";
		mimats5.style.display="none";
	}
}

//发送邮件
var timeObj;
var time;
var codeFlag=false;
function getnumber(){
	var emailBox=$("#e-mail").val();
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	if(emailBox=="" || emailBox==null){
		$.messager.alert('错误提示','您还没有输入邮箱呢!!!','error');
	}else{
		if(emailBox.match(reg)){
			time=60;
			$.post("user/sendMail",{"email":emailBox},function(data){
				//alert(data);
				if(data>0){
					timeObj=window.setInterval(timeCode, 1000);
					$(".sendMail").attr("disabled","false");
				}
			})
		}else{
			$.messager.alert('错误提示','邮箱格式不正确!!!','error');
		}
	}
}
function timeCode(){
	if(time>0){
		$(".sendMail").html(time+"s");
		time=time-1;
	}else{
		window.clearInterval(timeObj);
		$(".sendMail").html("发送邮箱验证码");
		$(".sendMail").removeAttr("disabled");
	}
}

//判断姓名是否已注册
var username=document.getElementById("username");
username.onblur=function(){
	var uname=$("#username").val();
	if(uname=="" || uname==null){
		mimats6.style.display="block";
		mimats7.style.display="none";
		mimats8.style.display="none";
	}else{
		$.post("user/list",{"options":uname}, function(data){
			//alert(data.total);
			if(data.total!=0){
				mimats7.style.display="block";
				mimats6.style.display="none";
				mimats8.style.display="none";
			}else{
				mimats6.style.display="none";
				mimats7.style.display="none";
				mimats8.style.display="block";
			}
		},"json");
	}
}





//下面都是手机注册
//判断手机号是否注册
var tel=document.getElementById("shouji");
tel.onblur=function(){
	var telephone=$("#shouji").val();
	if(telephone==""||telephone==null){
		shoujits1.style.display="block";
		shoujits2.style.display="none";
		shoujits3.style.display="none";
		shoujits4.style.display="none";
		
	}else{
		var reg4=/^1[3|4|5|7|8][0-9]{9}$/;
		if(!telephone.match(reg4)){
			shoujits1.style.display="none";
			shoujits2.style.display="block";
			shoujits3.style.display="none";
			shoujits4.style.display="none";
		}else{
			$.post("user/list",{"options":telephone}, function(data){
				if(data.total!=0){
					shoujits1.style.display="none";
					shoujits2.style.display="none";
					shoujits3.style.display="block";
					shoujits4.style.display="none";
				}else{
					shoujits1.style.display="none";
					shoujits2.style.display="none";
					shoujits3.style.display="none";
					shoujits4.style.display="block";
				}
			},"json");
			
		}
	}
}




//判断用户名是否已经存在
var username1=document.getElementById("username1");
username1.onblur=function(){
	var uname1=$("#username1").val();
	if(uname1=="" || uname1==null){
		mimats9.style.display="block";
		mimats10.style.display="none";
		mimats11.style.display="none";
	}else{
		$.post("user/list",{"options":uname1}, function(data){
			//alert(data.total);
			if(data.total!=0){
				mimats9.style.display="none";
				mimats10.style.display="block";
				mimats11.style.display="none";
			}else{
				mimats9.style.display="none";
				mimats10.style.display="none";
				mimats11.style.display="block";
			}
		},"json");
	}
}

/*密码*/
var mima1=document.getElementById("pwd3");
mima1.onfocus=function(){
	if($('#pwd3').val()==null ||$('#pwd3').val()==""){
		mimats15.style.display="block";
		mimats12.style.display="none";
		mimats14.style.display="none";
	}
}
mima1.onblur=function(){
	var reg1 =/^[a-zA-Z0-9]{6,16}$/;
	if($('#pwd3').val()!=null&&$('#pwd3').val()!=""){
		if($('#pwd3').val().match(reg1)){
			mimats12.style.display="none";
			mimats14.style.display="block";
			mimats15.style.display="none";
		}else{
			mimats14.style.display="none";
			mimats12.style.display="block";
			mimats15.style.display="none";
		}
	}else{
		mimats15.style.display="block";
		mimats12.style.display="none";
		mimats14.style.display="none";
	}



}

var pwd4=document.getElementById("pwd4");
pwd4.onblur=function(){
	pwd3= $('#pwd3').val();
	pwd4= $('#pwd4').val();
	if(pwd3!=pwd4){
		mimats13.style.display="block";
	}
	if(pwd4==pwd3){
		mimats13.style.display="none";
	}
}

//发送手机验证码
var timeObj1;
var time1;
function getTelNumber(){
	var telBox=$("#shouji").val();
	var reg5=/^1[3|4|5|7|8][0-9]{9}$/;
	if(telBox=="" || telBox==null){
		$.messager.alert('错误提示','您还没有输入手机号呢!!!','error');
	}else{
		if(telBox.match(reg5)){
			time1=60;
			$.post("user/sendTel",{"telephone":telBox},function(data){
					if(data){
						timeObj1=window.setInterval(timeCode1,1000);
						$(".sendTel").attr("disabled","false");
					}else{
						$.messager.alert('错误提示','短信发送失败!!!','error');
					}
					
			})
		}else{
			$.messager.alert('错误提示','手机格式不正确!!!','error');
		}
	}
}
function timeCode1(){
	if(time1>0){
		$(".sendTel").html(time1+"s");
		time1=time1-1;
	}else{
		window.clearInterval(timeObj1);
		$(".sendTel").html("发送手机短信验证码");
		$(".sendTel").removeAttr("disabled");
	}
}











/*退出*/
function tuichu(){
	var t=document.getElementsByTagName("input");
	for(var n=0;n<t.length;n++){
		if(t[n].type=='text'  ||t[n].type=='password'){
			t[n].value="";

		}
	}
}


/*注册方式转换*/
window.onload=function(){
	var youxiangreg=document.getElementById("youxiangreg");
	var shoujireg=document.getElementById("shoujireg");
	var form1=document.getElementById("form1"); //邮箱注册
	var form2=document.getElementById("form2");
	shoujireg.onclick=function(){ //点手机注册时
		form1.style.display="none";
		form2.style.display="block";
		tuichu();
		mimats1.style.display="none";
		mimats16.style.display="none";
		mimats17.style.display="none";
		mimats2.style.display="none";
		mimats3.style.display="none";
		mimats4.style.display="none";
		mimats41.style.display="none";
		mimats5.style.display="none";
		mimats6.style.display="none";
		mimats7.style.display="none";
		mimats8.style.display="none";
		

	}
	youxiangreg.onclick=function(){
		form2.style.display="none";
		form1.style.display="block";
		tuichu();
		shoujits1.style.display="none";
		shoujits2.style.display="none";
		shoujits3.style.display="none";
		shoujits4.style.display="none";
		mimats9.style.display="none";
		mimats10.style.display="none";
		mimats11.style.display="none";
		mimats15.style.display="none";
		mimats12.style.display="none";
		mimats14.style.display="none";
		mimats13.style.display="none";
	}
}




//点击注册按钮
function senTele(){
	$("#form2").form("submit",{
		url:"user/telregister",
		success:function(data){
			//alert(data);
			if(data){
				$.messager.alert('提示','手机注册成功,即将跳转到登录页面...');
				window.location.href="login.jsp";
			}else{
				$.messager.alert('提示','手机注册失败...','error');
			}
		}
	});
}


