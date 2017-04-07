//异步加载左边板块信息
function listType(url){
	$.post(url,function(data){
		for (var i = 0; i < data.rows.length; i++) {
			$("#ulstyle").append("<li><a href='page/typeDetail.jsp?tid="+data.rows[i].tid+"'>"+data.rows[i].tname+"</a></li>");
		}
	},"json");
}
listType("types");
IndexListNote("note/listindex?page=nop");
//异步加载主页中间的帖子
function IndexListNote(url){
	$.post(url,function(data){
		$("#indexNoteContent").empty();
		for(var i=0;i<data.rows.length;i++){
			$("#indexNoteContent").append('<div id="content"><p><a id="title" href="page/noteDetail.jsp?nid='+data.rows[i].nid+'" style="padding-right:21px">'+data.rows[i].ntitle+'</a>'
			+'</p><p>'+data.rows[i].ncontent+'</p><p><span class="glyphicon glyphicon-user"></span><a href="#" style="padding-right:30px">'+data.rows[i].users.uname+'</a>'
			+'<span class="glyphicon glyphicon-time" style="padding-left:7px"></span>'+data.rows[i].ntimes+'<a href="#" class="glyphicon glyphicon-thumbs-up" style="padding-left:30px">'+data.rows[i].ngood+'</a>'
			+'<a href="#" class="glyphicon glyphicon-heart" style="padding-left:30px">收藏</a>'
			+'</p><p><a class="btn" href="page/noteDetail.jsp?nid='+data.rows[i].nid+'">进入帖子 »</a></p></div>');
		}
		$("#indexNoteContent").append('<ul class="pagination">'
				+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page=1")>首页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+(data.currPage-1)+'")>上一页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+(data.currPage+1)+'")>下一页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+data.totalPage+'")>末页</a></li></ul>');
	},"json");
}

//异步加载右边贴吧热议榜
function listNoteOderByNum(url){
	$.post(url,function(data){
		for (var i = 0; i < data.length; i++) {
			$("#hot").append("<li><a href='page/noteDetail.jsp'>"+data[i].ntitle+"</a></li>");
		}
	},"json");
}
listNoteOderByNum("note/listOrderByNum");
