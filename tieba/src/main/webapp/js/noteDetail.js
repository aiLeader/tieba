var userid=$("#LoginUserId").val();

// 异步加载左边板块信息
function listType(url){
	$.post(url,function(data){
		for (var i = 0; i < data.rows.length; i++) {
			$("#ulstyle").append("<li><a href='typeDetail.jsp?tid="+data.rows[i].tid+"'>"+data.rows[i].tname+"</a></li>");
		}
	},"json");
}
listType("../types");

// 异步加载右边贴吧热议榜
function listNoteOderByNum(url){
	$.post(url,function(data){
		for (var i = 0; i < data.length; i++) {
			$("#hot").append("<li><a href='noteDetail.jsp?nid="+data[i].nid+"'>"+data[i].ntitle+"</a></li>");
		}
	},"json");
}
listNoteOderByNum("../note/listOrderByNum");

var hrefStr = location.href;
var LoginUserid= document.getElementById("LoginUserId").value;
$.post("../note/getNoteById"+hrefStr.substr(hrefStr.indexOf("?")),function(data){
	var userid2=data.users.userid;
	if(userid2==userid){
		var href="personal.jsp?userid=";
	}else{
		href="otherpersonal.jsp?userid=";
	}
	if(data==null||data==""){
		alert("该帖子不存在或已被删除！");
		window.location.href="../index.jsp"
	}else{
		var p='<script type="text/javascript">$(function(){$("#toggle").click(function() { $(this).text($("#comm").is(":hidden") ? "收起" : "评论");$("#comm").slideToggle();});});</script>';
		$.ajax({
			type: "post",
			dataType: "json",
			url: "../user/jugleBan?userid="+userid,
			async: false,
			success: function (msg) {
				if(msg==false){
					if(userid!=undefined&&userid!=null&&userid!=""){
						p='<script type="text/javascript">$(function(){$("#toggle").click( function(){ alert("您已被禁言!"); });});</script>';
					}
				}else{
					p='<script type="text/javascript">$(function(){$("#toggle").click(function() { $(this).text($("#comm").is(":hidden") ? "收起" : "评论");$("#comm").slideToggle();});});</script>';
				}
			}
		});
		alert(p);
		$("#noteDetailContent").empty();
		$("#noteDetailContent").append('<div id="content"><p><a id="title" href="javascript:void(0);" style="padding-right:21px">'+data.ntitle+'</a>'
				+'</p><p>'+data.ncontent+'</p><p><span class="glyphicon glyphicon-user"></span><a href="'+href+data.users.userid+'" style="padding-right:30px">'+data.users.uname+'</a>'
				+'<span class="glyphicon glyphicon-time" style="padding-left:7px"></span>'+data.ntimes+'<a href="#" class="glyphicon glyphicon-thumbs-up" style="padding-left:30px">'+data.ngood+'</a>'
				+'<a href="#" class="glyphicon glyphicon-heart" style="padding-left:30px">收藏</a><a href="javascript:;" id="toggle" target="_self" class="glyphicon glyphicon-edit" style="padding-left:30px">评论</a>'
				+'<form action="../comments/addComm"><div id="comm" style="display: none;"><input type="hidden" name="userid" value="'+LoginUserid+'"><input type="hidden" name="nid" value="'+data.nid+'"><textarea name="ccontent" rows="4" cols="80"></textarea><br><button>提交</button></div></p></div></form><hr/>'
				+p);
	}
},"json");

function findNoteCom(url){
	$.post("../"+url,function(data){
		if(data.rows.length>0){
			$("#comment-list").empty();
		}
		for(var i=0;i<data.rows.length;i++){
			var headPic="../images/mr.jpg";
			if(data.rows[i].users.picPath!=""&&data.rows[i].users.picPath!=null){
				headPic=data.rows[i].users.picPath;
			}
			var userid3=data.rows[i].users.userid;
			if(userid3==userid){
				var href1="personal.jsp?userid=";
			}else{
				href1="otherpersonal.jsp?userid=";
			}
			$("#comment-list").append('<div id="comment" userid="'+data.rows[i].users.userid+'"><p>'
					+'<img class="img-circle" id="picPath" src="'+headPic+'"/><a href="'+href1+data.rows[i].users.userid+'" id="uname">'+data.rows[i].users.uname+'</a>'
					+'<p href="#" class="glyphicon glyphicon-thumbs-up" style="padding-left: 30px">'+data.rows[i].cgood+'</p>'
					+'</p><p id="ccontent">'+data.rows[i].ccontent+'</p></div>');

		}
		if(data.totalPage>1){
			$("#comment-list").append('<ul class="pagination">'
					+'<li><a href="javascript:void(0)" onclick=findNoteCom("comments/findComByNid'+hrefStr.substr(hrefStr.indexOf("?"))+'&page=1&totalPage='+data.totalPage+'")>首页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=findNoteCom("comments/findComByNid'+hrefStr.substr(hrefStr.indexOf("?"))+'&page='+(data.currPage-1)+'&totalPage='+data.totalPage+'")>上一页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=findNoteCom("comments/findComByNid'+hrefStr.substr(hrefStr.indexOf("?"))+'&page='+(data.currPage+1)+'&totalPage='+data.totalPage+'")>下一页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=findNoteCom("comments/findComByNid'+hrefStr.substr(hrefStr.indexOf("?"))+'&page='+data.totalPage+'&totalPage='+data.totalPage+'")>末页</a></li></ul>');
		}
	},"json");
}
findNoteCom("comments/findComByNid"+hrefStr.substr(hrefStr.indexOf("?"))+"&page=1&totalPage=nop");

// 异步加载右下角的管理员推荐贴
$.post("../note/findSendNote",function(data){
	$("#sendNotes").empty();
	var strSendNote='<ul id="ulstyle">';
	for (var i = 0; i < data.length; i++) {
		strSendNote+='<li><a href="page/noteDetail.jsp?nid='+data[i].nid+'">'+data[i].ntitle+'</a></li>';
	}
	strSendNote+='</ul>';
	$("#sendNotes").append(strSendNote);
},"json");

function addCom(){
	$("#comForm").form("submit",{
		url:"comments/addComm",
		success:function(data){
			findNoteCom("comments/findComByNid"+hrefStr.substr(hrefStr.indexOf("?"))+"&page=1&totalPage=nop");
		}});
}