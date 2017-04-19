$("#main").tabs({
	fit:true,
	border:false,
});

$("#sideNav").accordion({
	fit:true,
	border:false,	
});

$(".treeNav").tree({
	onClick: function(node){  // node是指树节点， node.text是节点文本内容
		var nodeContent = node.text;
		if($("#main").tabs('exists', nodeContent)){
			$("#main").tabs('close', nodeContent)
		}
		
		if(nodeContent == "板块信息"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/types_info.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "板块添加"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/types_add.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "用户信息"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/userinfo.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "帖子信息"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/note_info.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "评论信息"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/commentsInfo.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "被禁评论"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/banCommentsInfo.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "帖子推送"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/tuisong_info.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "当前推送"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/currTuisong_info.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "用户统计"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/userscount.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else if(nodeContent == "板块统计"){
			$("#main").tabs('add',{
				title: nodeContent,
				href:"back/typecompare.jsp",
				iconCls:"icon-mini-add",
				closable:true,
			});
		}else{
			$("#main").tabs('add',{
				title: nodeContent,
				content:nodeContent,
				iconCls:"icon-mini-add",
				closable:true,
			});
		}
		
	}
});


$.extend($.fn.layout.methods,{
	full:function(jq){
		return jq.each(function(){
			var layout=$(this);
			var center=layout.layout("panel","center");
			center.panel("maximize");
			center.parent().css("z-index",10);
			
			$(window).on("resize.full",function(){
				layout.layout("unFull").layout("resize");
			})
		});
	},
	unfull:function(jq){
		return jq.each(function(){
			var layout=$(this);
			var center=layout.layout("panel","center");
			center.parent().css("z-index","inherit");
			center.panel("restore");
			$(window).off("resize.full");
		});
	}
});

function full(){
	$("body").layout("full");
	$("#center_content").addClass("panel-fit");
}

function unfull(){
	$("body").layout("unfull");
}

$("#personalInfo").dialog({	
	title:"",
	width:260,
	border:false,
	modal:true,
	closed:true,
	closable:false,
});

$('#modifyBtn').linkbutton({    
    iconCls: 'icon-ok',
    width: 80,
    onClick: function(){    	
    	$("#modifyForm").submit();
    }
}); 
$("#modifyForm").form({
	url:"admin/updatePwd",
	success:function(data){
		/*$("#personalInfo").dialog("close", true);
		$.messager.show({
			title:'修改密码',
			msg:'修改密码' + (data ? "成功..." : "失败!!!"),
			showType:'show',
			style:{
				top:document.body.scrollTop+document.documentElement.scrollTop,
			}
		});*/
	}
})
var aid=$("#aid").val();
var pwd=document.getElementById("pwd");
pwd.onblur=function(){
	if($('#pwd').val()==null ||$('#pwd').val()==""){
		$.messager.alert('警告','请输入原密码！！！');    
	}else{
		var pwd=$('#pwd').val();
		var param={apassword:pwd,aid:aid}; //创建一个javascript对象
		$.ajax({
			type:"post",
			url:"admin/selectPwd",
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


function updatePwd(){
	alert(aid);
	var rpwd=$("#rpwd").val();
	var param={apassword:rpwd,aid:aid}; //创建一个javascript对象
	if($("#rpwd").val()!=$("#npwd").val()){
		$.messager.alert('提示','两次密码输入不一致'); 
	}else{
		$.ajax({
			type:"post",
			url:"admin/updatePwd",
			async:false, //进行同步请求
			data:JSON.stringify(param), //json格式的请求参数
			dataType:"json", //指定返回的数据为json格式
			contentType:"application/json;charset=utf-8",//指定请求数据为json格式
			success:function(data){
				if(data){
					$.messager.alert('提示','密码修改成功...');
					$("#pwd").val("");
					$("#npwd").val("");
					$('#rpwd').val("");
					$("#personalInfo").dialog("close", true);
				}else{
					$.messager.alert('提示','密码修改失败！！'); 
				}
			}
		});
	}
	
}



$('#closeBtn').linkbutton({    
    iconCls: 'icon-cancel',
    width: 80,
    onClick: function(){    	
    	$("#personalInfo").dialog("close", true);
    }
}); 

$("#personalInfo input[type=password]").textbox({
	width:160,
});
function reLogin(){
	//显示重新登录确认框
	$.messager.confirm('', '您是否确定要切换用户吗？', function(r){
		if (r){
		    // 切换用户操作;
			location.href="adminlogin.jsp";
		}
	});
}

function aboutUs(){
	//显示关于我们的dialog
	$.messager.alert('','<table><tr><td align="right">手机：</td><td>18711449775</td></tr><tr><td  align="right">QQ：</td><td>1426855747</td></tr><tr><td align="right">版本所有：</td><td>爱贴就上贴吧</td></tr></table>','info');
}

function logoutFun() {
	//显示退出系统确认框
	$.messager.confirm('', '您确定要退出系统吗？', function(r){
		if (r){
		    //退出系统操作;
			location.replace("adminlogin.jsp");
		}
	});
}

function userInfoFun() {
	//显示修改密码框
	$('#personalInfo').window('open');
}