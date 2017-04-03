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
		$("#indexNewsInfo").empty();
		for(var i=0;i<data.rows.length; i++){
			$("#indexNewsInfo").append(" <li><a href='page/read.jsp?nid="+data.rows[i].nid+"'>"+data.rows[i].ntitle+" </a><span>"+data.rows[i].ncreatedate+"</span></li>");
			if((i+1)%5 == 0){
				$("#indexNewsInfo").append("<li class='space'></li>");
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