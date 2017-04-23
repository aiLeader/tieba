var nid ="";
var sc="收藏";
var href = window.location.href;
var userid=$("#userid").val();
var useridb ="";
var uname=$("#uname").html(); 
var currPage="";
var nid="";

showPersonal("../user/userinfo")
function showPersonal(url){
	$.post(url+"?userid="+userid,function(data){
		if(data.picPath){
			$("#picPath").attr("src",data.picPath);
		}else{
			$("#picPath").attr("src", "../images/mr.jpg");
		}
		uname=data.uname;
		document.title=uname+"的个人主页";
		$("#uname").html(data.uname);
		$("#sex").html(data.sex);
		$("#sign").html(data.signs);	
	},"json");
}




function showNote(url){
	$.post(url+"&userid="+userid,function(data){
		var noteStr="";
		
		for (var i = 0; i < data.rows.length; i++) {
			noteStr += "<div id='note'>";
			noteStr +="<p><a id='title' href='../page/noteDetail.jsp?nid="+data.rows[i].nid+"' style='padding-right:21px'>"+data.rows[i].ntitle+"</a></p>";
			noteStr +="<p>"+data.rows[i].ncontent+"</p>";
			noteStr +="<p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>"+uname+"</a>";
			noteStr +="<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>"+data.rows[i].ntimes;
			noteStr +="<a href='javascript:void(0);' class='glyphicon glyphicon-thumbs-up' style='padding-left:30px' onclick='dianzan("+data.rows[i].nid+")'>"+data.rows[i].ngood+"</a>";
			noteStr +="<a id='collectNote' href='javascript:void(0)' onclick=collectNote("+data.rows[i].nid+")  class='glyphicon glyphicon-heart' style='padding-left:30px'>"+sc+"</a>";
			noteStr +="<a href='javascript:;' id='toggle1' target='_self' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a>";
			noteStr +="<div id='comm' style='display: none;'><textarea rows='4' cols='80'></textarea><br><button>提交</button></div></p></div>";
		}
		currPage=data.currPage;
		$("#panel-all").html(noteStr);
		$("#panel-all").append("<p> 当前页数:["+data.currPage+"/"+data.totalPage+"]&nbsp;&nbsp;&nbsp;&nbsp;"
				+"<a href='javascript:void(0)' onclick=showNote('../note/showByUserid?page=1')>首页</a>&nbsp;&nbsp;"
				+" <a href='javascript:void(0)' onclick=showNote('../note/showByUserid?page="+(data.currPage-1)+"')>上一页</a>&nbsp;&nbsp; "
				+" <a href='javascript:void(0)' onclick=showNote('../note/showByUserid?page="+(data.currPage+1)+"')>下一页</a>&nbsp;&nbsp; " +
				"<a href='javascript:void(0)' onclick=showNote('../note/showByUserid?page="+data.totalPage+"')>末页</a> </p>");
	},"json");
}
showNote("../note/showByUserid?");

//显示收藏的帖子
function showStoreNote(url){
	$.post(url+"&userid="+userid,function(data){
		var noteStr="";
		for (var i = 0; i < data.rows.length; i++) {
			noteStr += "<div id='note'>";
			noteStr +="<p><a id='title' href='#' style='padding-right:21px'>"+data.rows[i].notes.ntitle+"</a></p>";
			noteStr +="<p>"+data.rows[i].notes.ncontent+"</p>";
			noteStr +="<p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>"+data.rows[i].notes.users.uname+"</a>";
			noteStr +="<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>"+data.rows[i].notes.ntimes;
			noteStr +="<a href='javascript:void(0);' class='glyphicon glyphicon-thumbs-up' style='padding-left:30px' onclick='dianzan("+data.rows[i].notes.nid+")'>"+data.rows[i].notes.ngood+"</a>";
			noteStr +="<a id='collectNote' href='javascript:void(0)' onclick=collectNote("+data.rows[i].notes.nid+")  class='glyphicon glyphicon-heart' style='padding-left:30px'>取消收藏</a>";
			noteStr +="<a href='javascript:;' id='toggle1' target='_self' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a>";
			noteStr +="<div id='comm1' style='display: none;'><textarea rows='4' cols='80'></textarea><br><button>提交</button></div></p></div>";
		}
		currPage=data.currPage;
		$("#panel-store").html(noteStr);
		$("#panel-store").append("<p> 当前页数:["+data.currPage+"/"+data.totalPage+"]&nbsp;&nbsp;&nbsp;&nbsp;"
				+"<a href='javascript:void(0)' onclick=showStoreNote('../note/showStoreByUserid?page=1')>首页</a>&nbsp;&nbsp;"
				+" <a href='javascript:void(0)' onclick=showStoreNote('../note/showStoreByUserid?page="+(data.currPage-1)+"')>上一页</a>&nbsp;&nbsp; "
				+" <a href='javascript:void(0)' onclick=showStoreNote('../note/showStoreByUserid?page="+(data.currPage+1)+"')>下一页</a>&nbsp;&nbsp; " +
				"<a href='javascript:void(0)' onclick=showStoreNote('../note/showStoreByUserid?page="+data.totalPage+"')>末页</a> </p>");
	},"json");
}
showStoreNote("../store/showStoreByUserid?");

function dianzan(nid){
	$.ajax({
	   url: "../dianzan/insert",
	   data:{"nid":nid,"userid":userid},
	   type: "POST",
	   dataType:"json" ,
	   success: function(data){
		   showNote("../note/showByUserid?page="+currPage);
		   showStoreNote("../store/showStoreByUserid?page="+currPage);
	   }
	 });
}

function collectNote(tnid){
	nid=tnid;
/*	collectFrom*/
	$("#collectFrom").submit();
	
}

$("#collectFrom").form({
	url:"../note/collectNote",
	onSubmit: function(param){    
        param.nid = nid;
    },    
	success:function(data){
		$.messager.show({
			title:'收藏信息',
			msg:'帖子' + (data==1 ? "收藏成功..." : "")+(data==2 ? "取消收藏成功..." : "")+(data==3 ? "收藏成功..." : "")+(data==9?"失败,请先登录":"")+(data==8?"本帖不能收藏":""),
			showType:'show',
			style:{
				top:document.body.scrollTop+document.documentElement.scrollTop,
			}
		});
		
		//重新加载帖子信息
		showNote("../note/showByUserid?");
		showStoreNote("../store/showStoreByUserid?");
	}

});

//显示关注用户
function showConcernUser(url){
	$.post(url+"&userida="+userid,function(data){
		$("#concernUser").empty();
		$("#pagenation").empty();
		for (var i = 0; i < data.rows.length; i++) {
			$("#concernUser").append("<li><img id='pic' src='"+data.rows[i].users.picPath+"'/>&nbsp;&nbsp;<a href='otherpersonal.jsp?userid="+data.rows[i].users.userid+"' id='name'>"+data.rows[i].users.uname+"</a><button onclick=attentionUs("+data.rows[i].users.userid+") class='glyphicon glyphicon-plus' >取消关注</button></li>");
		}
		currPage=data.currPage;
		$("#panel-concern").append("<p id='pagenation'> 当前页数:["+data.currPage+"/"+data.totalPage+"]&nbsp;&nbsp;&nbsp;&nbsp;"
				+"<a href='javascript:void(0)' onclick=showStoreNote('../note/showStoreByUserid?page=1')>首页</a>&nbsp;&nbsp;"
				+" <a href='javascript:void(0)' onclick=showStoreNote('../note/showStoreByUserid?page="+(data.currPage-1)+"')>上一页</a>&nbsp;&nbsp; "
				+" <a href='javascript:void(0)' onclick=showStoreNote('../note/showStoreByUserid?page="+(data.currPage+1)+"')>下一页</a>&nbsp;&nbsp; " +
				"<a href='javascript:void(0)' onclick=showStoreNote('../note/showStoreByUserid?page="+data.totalPage+"')>末页</a> </p>");
	},"json");
}
showConcernUser("../concern/showConcernByUserid?");

//关注
function attentionUs(useridbc){
	useridb=useridbc;
	$("#attentionFrom").submit();
}

$("#attentionFrom").form({
	url:"../concern/attentionUs",
	onSubmit: function(param){    
        param.useridb = useridb;
    },    
	success:function(data){
		$.messager.show({
			title:'关注信息',
			msg:(data==1 ? "关注成功..." : "")+(data==2 ? "取消关注成功..." : "")+(data==3 ? "关注成功..." : "")+(data==9?"失败,请先登录":"")+(data==8?"本人错误显示不能关注":""),
			showType:'show',
			style:{
				top:document.body.scrollTop+document.documentElement.scrollTop,
			}
		});
		showConcernUser("../concern/showConcernByUserid?");
	}
});