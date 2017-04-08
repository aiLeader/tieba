UE.getEditor('topcontent');
var tid ="";
var href = window.location.href;
//异步加载右边贴吧热议榜
function listNoteOderByNum(url){
	$.post(url,function(data){
		for (var i = 0; i < data.length; i++) {
			$("#hot").append("<li><a href='page/noteDetail.jsp'>"+data[i].ntitle+"</a></li>");
			
		}
	},"json");
}
listNoteOderByNum("note/listOrderByNum");

tid=this.href.substr(this.href.indexOf("?")+1);

function  findNote(url){
		$.ajax({
			url:url+"&"+tid,
			dataType:"json",
			async:false,
			success:function(data){
					$("#content").empty();
					for(var i=0;i<data.rows.length; i++){
						var tname=data.rows[i].types.tname;
						var tdesc=data.rows[i].types.tdesc;
						$("#content").append("<a id='title' href='#' style='padding-right:21px'>"+data.rows[i].ntitle);
						$("#content").append("<p>"+data.rows[i].ncontent+"</p><p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>"+data.rows[i].users.uname+"</a>"
								+"<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>"+data.rows[i].ntimes+"<a href='#'  class='glyphicon glyphicon-thumbs-up' style='padding-left:30px'>10</a>"
								+"<a href='#' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>"
								+"<a href='#' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a></p>"
								+"<p><a class='btn' href='#'>View details »</a></p>");
					}
					$("#tname").html(tname);
					$("#tdesc").html(tdesc);
					$("#content").append("<p align='right'> 当前页数:["+data.currPage+"/"+data.totalPage+"]&nbsp;&nbsp;&nbsp;&nbsp;"
							+"<a href='javascript:void(0)' onclick=findNote('types/findNote?page=1')>首页</a> </p>&nbsp;&nbsp;"
							+" <a href='javascript:void(0)' onclick=findNote('types/findNote?page="+(data.currPage-1)+"')>上一页</a>&nbsp;&nbsp; "
							+" <a href='javascript:void(0)' onclick=findNote('types/findNote?page="+(data.currPage+1)+"')>下一页</a>&nbsp;&nbsp; " +
							"<a href='javascript:void(0)' onclick=findNote('types/findNote?page="+data.totalPage+"')>末页</a> </p>");
			}
		})
}
findNote("types/findNote?");

/*action="types/insertNote"*/
function sendNote(){
	alert("12");
	$("#sendForm").submit();
	
}
$("#sendForm").form({
		url:"types/insertNote",
		onSubmit: function(param){    
	        param.tid = tid;
	    },    
		success:function(data){
			$("#ntitle").val("");
			$("#topcontent").html("");
//document.getElementById("topcontent").value="";
			//添加帖子结果信息
	
			$.messager.show({
				title:'添加帖子信息',
				msg:'添加帖子' + (data ? "成功..." : "失败!!!"),
				showType:'show',
				style:{
					top:document.body.scrollTop+document.documentElement.scrollTop,
				}
			});
			
			//重新加载帖子信息
			findNote("types/findNote?");
		}
	
});

