/*密码*/
var mima=document.getElementById("pwd");
mima.onfocus=function(){
	mimats1.style.display="block";
}
mima.onblur=function(){
	if($('#pwd').val()!=null){
		mimats1.style.display="none";
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
	if(emails=="" || emails==null){
		mimats3.style.display="block";
		mimats4.style.display="none";
		mimats5.style.display="none";
	}else{
		$.post("user/list",{"options":emails}, function(data){
			//alert(data.total);
			if(data.total!=0){
				mimats4.style.display="block";
				mimats3.style.display="none";
				mimats5.style.display="none";
			}else{
				mimats3.style.display="none";
				mimats4.style.display="none";
				mimats5.style.display="block";
			}
		},"json");
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
				//var yzmBox=$(".Mail").val();
				if(data>0){
					timeObj=window.setInterval(timeCode, 1000);
					$(".sendMail").attr("disabled","false");
				}
				/*if(yzmBox==data){
					codeFlag=true; 
				}else{
					codeFlag=false;
				}*/
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






