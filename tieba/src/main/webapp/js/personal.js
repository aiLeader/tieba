function showNote(userid){
	$.get("note"+userid,function(){
		var noteStr="";
		for (var i = 0; i < data.length; i++) {
			noteStr += "<div id='note'>";
			noteStr +="<p><a id='title' href='page/noteDetail.html' style='padding-right:21px'>"+data[i].ntitle+"</a></p>";
			noteStr +="<p>"+data[i].ncontent+"</p>";
			noteStr +="<p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>"+data[i].userid+"</a>";
			noteStr +="<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>"+data[i].ntimes;
			noteStr +="<a href='#' class='glyphicon glyphicon-thumbs-up' style='padding-left:30px'>"+data[i].ngood+"</a>";
			noteStr +="<a href='#' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>";
			noteStr +="<a href='javascript:;' id='toggle' target='_self' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a>";
			noteStr +="<div id='comm' style='display: none;'><textarea rows='4' cols='80'></textarea><br><button>提交</button></div></p></div>";
		}
		$("#panel-all").html(noteStr);
	},"json");
}
showNote(userid);
