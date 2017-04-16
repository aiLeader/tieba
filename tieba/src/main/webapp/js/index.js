var userid=$("#userid").val();
showPersonal("user/userinfo");
var storeData;
getStore();
function showPersonal(url){
	$.post(url+"?userid="+userid,function(data){
		if(data.picPath){
			$("#picPath").attr("src",data.picPath);
		}else{
			$("#picPath").attr("src", "../images/mr.jpg");
		}
		$("#uname").html(data.uname);
	},"json");
}
var currPage="";

var href="page/otherpersonal.jsp?userid=";
//异步加载左边板块信息
function listType(url){
	$.post(url,function(data){
		for (var i = 0; i < data.rows.length; i++) {
			$("#ulstyle").append("<li><a href='page/typeDetail.jsp?tid="+data.rows[i].tid+"'>"+data.rows[i].tname+"</a></li>");
		}
	},"json");
}
listType("types");
IndexListNote("note/listindex?page=nop&totalPage=nop");
//异步加载主页中间的帖子
function IndexListNote(url){
	$.post(url,function(data){
		$("#indexNoteContent").empty();
		if(data.rows.length<=0){
			$("#indexNoteContent").append()
		}
		var jubuStore=storeData;
		for(var i=0;i<data.rows.length;i++){
			var store="收藏";
			for(var j=0;j<jubuStore.length;j++){
				if(jubuStore[j].nid==data.rows[i].nid){
					store="已收藏";
					jubuStore.splice(j);
				}
			}
				var userid2=data.rows[i].users.userid;
				if(userid2==userid){
					href="page/personal.jsp?userid=";
				}
				$("#indexNoteContent").append('<div id="content"><p><a id="title" href="page/noteDetail.jsp?nid='+data.rows[i].nid+'" style="padding-right:21px">'+data.rows[i].ntitle+'</a>'
						+'</p><p>'+data.rows[i].ncontent+'</p><p><span class="glyphicon glyphicon-user"></span><a href="'+href+data.rows[i].users.userid+'" style="padding-right:30px">'+data.rows[i].users.uname+'</a>'
						+'<span class="glyphicon glyphicon-time" style="padding-left:7px"></span>'+data.rows[i].ntimes+'<a href="javascript:void(0);" class="glyphicon glyphicon-thumbs-up" style="padding-left:30px" onclick="dianzan('+data.rows[i].nid+')">'+data.rows[i].ngood+'</a>'
						+'<a href="#" class="glyphicon glyphicon-heart" style="padding-left:30px">'+store+'</a>'
						+'</p><p><a class="btn" href="page/noteDetail.jsp?nid='+data.rows[i].nid+'">进入帖子 »</a></p></div>');
		}
		currPage=data.currPage;
		if(data.totalPage>1){
			$("#indexNoteContent").append('<ul class="pagination">'
					+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page=1&totalPage='+data.totalPage+'")>首页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+(data.currPage-1)+'&totalPage='+data.totalPage+'")>上一页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+(data.currPage+1)+'&totalPage='+data.totalPage+'")>下一页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+data.totalPage+'&totalPage='+data.totalPage+'")>末页</a></li></ul>');
		}
	},"json");
}
//获取登录用户的收藏信息
function getStore(){
	if(userid==undefined || userid=="" ||userid==null){
		storeData=null;
	}else{
		$.post("store/GetStoreByUserid?userid="+userid,function(data){
			storeData=data;
		},"json");
	}
}
//异步加载右边贴吧热议榜
function listNoteOderByNum(url){
	$.post(url,function(data){
		for (var i = 0; i < data.length; i++) {
			$("#hot").append("<li><a href='page/noteDetail.jsp?nid="+data[i].nid+"'>"+data[i].ntitle+"</a></li>");
		}
	},"json");
}
listNoteOderByNum("note/listOrderByNum");

//异步加载右下角的管理员推荐贴
$.post("note/findSendNote",function(data){
	$("#sendNotes").empty();
	var strSendNote='<ul id="ulstyle">';
	for (var i = 0; i < data.length; i++) {
		strSendNote+='<li><a href="page/noteDetail.jsp?nid='+data[i].nid+'">'+data[i].ntitle+'</a></li>';
	}
	strSendNote+='</ul>';
	$("#sendNotes").append(strSendNote);
},"json");

//点赞
function dianzan(nid){
	$.ajax({
		url: "dianzan/insert",
		data:{"nid":nid,"userid":userid},
		type: "POST",
		dataType:"json" ,
		success: function(data){
			IndexListNote("note/listindex?page="+currPage+"&totalPage=nop");
		}
	});
}
