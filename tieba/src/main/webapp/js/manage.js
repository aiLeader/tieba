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
    	/*$("#loginForm").submit();*/
    }
}); 

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
			location.href="back/login.jsp";
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
			location.replace("back/login.jsp");
		}
	});
}

function userInfoFun() {
	//显示修改密码框
	$('#personalInfo').window('open');
}