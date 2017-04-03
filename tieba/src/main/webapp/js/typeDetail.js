UE.getEditor('topcontent');
var temTid ="";
var noteUrl="";
//异步加载右边贴吧热议榜
function listNoteOderByNum(url){
	$.post(url,function(data){
		for (var i = 0; i < data.length; i++) {
			$("#hot").append("<li><a href='page/noteDetail.jsp'>"+data[i].ntitle+"</a></li>");
		}
	},"json");
}
listNoteOderByNum("note/listOrderByNum");

function uFindNote(){
	tempTid=this.href.substr(this.href.indexOf("?")+1);
	listNews("types/findNote?"+tempTid);
}

function  findNote(url){
	$.post(url+"&"+tempTid,function(data){
		$("#content").empty();
		for(var i=0;i<data.rows.length; i++){
			$("#content").append(" <li><a href='page/read.jsp?nid="+data.rows[i].nid+"'>"+data.rows[i].ntitle+" </a><span>"+data.rows[i].ncreatedate+"</span></li>");
			$("#content").append("<a id='title' href='#' style='padding-right:21px'>"+data.rows[i].ntname+
					"</a><button id='concern' type='button' class='btn btn-default btn-sm' style='background:pink'><span class='glyphicon glyphicon-plus'></span>关注</button></p>");
			$("#content").append("<p></p><p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>@sh</a>"
	+"<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>2017-2-28 20:20<a href='#'  class='glyphicon glyphicon-thumbs-up' style='padding-left:30px'>10</a>"
	+"<a href='#' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>"
	+"<a href='#' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a></p>"
	+"<p><a class='btn' href='#'>View details »</a></p>"
	);
			if((i+1)%5 == 0){
				$("#content").append("<li class='space'></li>");
			}
		}
		
		$("#indexNewsInfo").append("<p align='right'> 当前页数:["+data.currPage+"/"+data.totalPage+"]&nbsp;&nbsp;"
				+"<a href='javascript:void(0)' onclick=listNews('news/list?page=1'>首页</a> </p>&nbsp;&nbsp;"
				+" <a href='javascript:void(0)' onclick=listNews('news/list?page="+(data.currPage-1)+"')>上一页</a>&nbsp;&nbsp; "
				+" <a href='javascript:void(0)' onclick=listNews('news/list?page="+(data.currPage+1)+"')>下一页</a>&nbsp;&nbsp; " +
				"<a href='javascript:void(0)' onclick=listNews('news/list?page="+data.totalPage+"')>末页</a> </p>");
	},"json");
}
findNote("news/list?");









/*<div id="content">
<p>
	<a id="title" href="#" style="padding-right:21px">Heading</a>
	<button id="concern" type="button" class="btn btn-default btn-sm" style="background:pink">
	    <span class="glyphicon glyphicon-plus"></span>
	    关注
	</button>
</p>
<p>
	
</p>
<p>
	<span class='glyphicon glyphicon-user'></span>
	<a href='#' style='padding-right:30px'>@sh</a>
	<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>
	2017-2-28 20:20
	<a href='#'  class='glyphicon glyphicon-thumbs-up' style='padding-left:30px'>10</a>
	<a href='#' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>
	<a href="#" class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a>
</p>
<p>
	 <a class='btn' href='#'>View details »</a>
</p>
</div>*/