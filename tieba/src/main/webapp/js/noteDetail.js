//异步加载左边板块信息
function listType(url){
	$.post(url,function(data){
		for (var i = 0; i < data.rows.length; i++) {
			$("#ulstyle").append("<li><a href='typeDetail.jsp'>"+data.rows[i].tname+"</a></li>");
		}
	},"json");
}
listType("../types");

//异步加载右边贴吧热议榜
function listNoteOderByNum(url){
	$.post(url,function(data){
		for (var i = 0; i < data.length; i++) {
			$("#hot").append("<li><a href='noteDetail.jsp'>"+data[i].ntitle+"</a></li>");
		}
	},"json");
}
listNoteOderByNum("../note/listOrderByNum");

var hrefStr = location.href;

$.post("../note/getNoteById"+hrefStr.substr(hrefStr.indexOf("?")),function(data){
	if(data==null||data==""){
		alert("该帖子不存在或已被删除！");
		window.location.href="../index.jsp"
	}
	$("#noteDetailContent").empty();
	$("#noteDetailContent").append('<div id="content"><p><a id="title" href="page/noteDetail.html" style="padding-right:21px">'+data.ntitle+'</a>'
	+'<button id="concern" type="button" class="btn btn-default btn-sm" style="background:pink"><span class="glyphicon glyphicon-plus"></span>关注</button>'
	+'</p><p>'+data.ncontent+'</p><p><span class="glyphicon glyphicon-user"></span><a href="#" style="padding-right:30px">'+data.users.uname+'</a>'
	+'<span class="glyphicon glyphicon-time" style="padding-left:7px"></span>'+data.ntimes+'<a href="#" class="glyphicon glyphicon-thumbs-up" style="padding-left:30px">'+data.ngood+'</a>'
	+'<a href="#" class="glyphicon glyphicon-heart" style="padding-left:30px">收藏</a><a href="javascript:;" id="toggle" target="_self" class="glyphicon glyphicon-edit" style="padding-left:30px">评论</a>'
	+'<div id="comm" style="display: none;"><textarea rows="4" cols="80"></textarea><br><button>提交</button></div></p></div><hr/>');
},"json");
