$("#findDiv").dialog({
	top:80,
	width:400,
	title:"",
	border:false,
	modal:true,	
});


//判断手机号是否填写正确
var reg4=/^1[3|4|5|7|8][0-9]{9}$/;
var tel=document.getElementById("tel");
var telephone=null;
tel.onblur=function(){
	telephone=$("#tel").val();
	alert(telephone);
	if(telephone==""||telephone==null){
		shouji.style.display="block";
		shouji1.style.display="none";
	}else{
		if(!telephone.match(reg4)){
			shouji.style.display="none";
			shouji1.style.display="block";
		}else{
			shouji.style.display="none";
			shouji1.style.display="none";
		}
	}
}

//发送手机验证码
var timeObj;
var time;
function getTelNumber(){
	if(telephone=="" || telephone==null){
		$.messager.alert('错误提示','您还没有手机号呢!!!','error');
	}else{
		if(telephone.match(reg4)){
			time=60;
			$.post("user/sendTel1",{"telephone":telephone},function(data){
				alert(data);
				if(data>0){
					timeObj=window.setInterval(timeCode, 1000);
					$(".sendTel").attr("disabled","false");
				}else{
					$.messager.alert('错误提示','短信发送失败!!!','error');
				}
			})
		}else{
			$.messager.alert('错误提示','手机号格式不正确!!!','error');
		}
	}
}
function timeCode(){
	if(time>0){
		$(".sendTel").html(time+"s");
		time=time-1;
	}else{
		window.clearInterval(timeObj);
		$(".sendTel").html("发送手机短信验证码");
		$(".sendTel").removeAttr("disabled");
	}
}

$('#btnLogin').linkbutton({    
    iconCls: 'icon-man',
    onClick: function(){
    	alert("开始登录");
    	$("#findForm").submit();
    }
}); 
