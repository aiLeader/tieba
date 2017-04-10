var userid=$("#userid").val();
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
			noteStr +="<a href='javascript:void(0);' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>";
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
			noteStr +="<a href='javascript:void(0);' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>";
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

