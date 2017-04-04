var userid=$("#userid").val();
//alert(userid);
function showNote(url){
	$.post(url+"&userid="+userid,function(data){
		//alert(JSON.stringify(data));
		var noteStr="";
		for (var i = 0; i < data.length; i++) {
			$("#panel-all").append("<div id='note'>");
			$("#panel-all").append("<p><a id='title' href='page/noteDetail.html' style='padding-right:21px'>"+data[i].ntitle+"</a></p>");
			$("#panel-all").append("<p>"+data[i].ncontent+"</p>");
			$("#panel-all").append("<p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>"+data[i].uname+"</a>");
			$("#panel-all").append("<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>"+data[i].ntimes);
			$("#panel-all").append("<a href='#' class='glyphicon glyphicon-thumbs-up' style='padding-left:30px'>"+data[i].ngood+"</a>");
			$("#panel-all").append("<a href='#' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>");
			$("#panel-all").append("<a href='javascript:;' id='toggle' target='_self' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a>");
			$("#panel-all").append("<div id='comm' style='display: none;'><textarea rows='4' cols='80'></textarea><br><button>提交</button></div></p></div>");
			/*noteStr += "<div id='note'>";
			noteStr +="<p><a id='title' href='page/noteDetail.html' style='padding-right:21px'>"+data[i].ntitle+"</a></p>";
			noteStr +="<p>"+data[i].ncontent+"</p>";
			noteStr +="<p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>"+data[i].uname+"</a>";
			noteStr +="<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>"+data[i].ntimes;
			noteStr +="<a href='#' class='glyphicon glyphicon-thumbs-up' style='padding-left:30px'>"+data[i].ngood+"</a>";
			noteStr +="<a href='#' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>";
			noteStr +="<a href='javascript:;' id='toggle' target='_self' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a>";
			noteStr +="<div id='comm' style='display: none;'><textarea rows='4' cols='80'></textarea><br><button>提交</button></div></p></div>";*/
		}
		
		//$("#panel-all").html(noteStr);
		$("#panel-all").append('<ul class="pagination">'
				+'<li><a href="javascript:void(0)" onclick=showNote("../note/showByUserid?page=1")>首页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showNote("../note/showByUserid?page='+(data.currPage-1)+'")>上一页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showNote("../note/showByUserid?page='+(data.currPage+1)+'")>下一页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showNote("../note/showByUserid?page='+data.totalPage+'")>末页</a></li></ul>');
	},"json");
}
showNote("../note/showByUserid?page=1");
