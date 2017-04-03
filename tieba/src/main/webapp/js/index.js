//异步加载左边板块信息
function listType(url){
	$.post(url,function(data){
		for (var i = 0; i < data.rows.length; i++) {
			$("#ulstyle").append("<li><a href='page/typeDetail.jsp'>"+data.rows[i].tname+"</a></li>");
		}
	},"json");
}
listType("types");

//异步加载右边贴吧热议榜
function listNoteOderByNum(url){
	$.post(url,function(data){
		for (var i = 0; i < data.length; i++) {
			$("#hot").append("<li><a href='page/noteDetail.jsp'>"+data[i].ntitle+"</a></li>");
		}
	},"json");
}
listNoteOderByNum("note/listOrderByNum");
