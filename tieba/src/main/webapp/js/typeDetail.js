var editorBox =UE.getEditor('topcontent');
var tid ="";
var nid ="";
var sc="收藏";
var href = window.location.href;
var currPage="";
var userid=$("#userid").val();
tid=this.href.substr(this.href.indexOf("?")+1);
//加载编辑器

function showEditor(url){
	$.post(url+"&userid="+userid+"&"+tid,function(data){
	
		if(data.status==2){
			$("#toDiv").empty();
			 $("#toDiv").append("<div>你还没有登录 </div>");
		}else if(data.status==1){
			$("#toDiv").empty();
			 $("#toDiv").append("<div>你已经被禁言 </div>");
		/*	$("#toDiv").html('');
		 * $("#toDiv").append("<div>你已经被禁言 </div>");*/
		}else if(data.status==-1){
			$("#toDiv").empty();
			 $("#toDiv").append("<div>板块已经被禁用</div>");
		}
	},"json");
}
showEditor("user/status?");
//异步加载右边贴吧热议榜
function listNoteOderByNum(url){
	$.post(url,function(data){
		for (var i = 0; i < data.length; i++) {
			$("#hot").append("<li><a href='page/noteDetail.jsp?nid="+data[i].nid+"'>"+data[i].ntitle+"</a></li>");

		}
	},"json");
}
listNoteOderByNum("note/listOrderByNum");


function  findNote(url){
		$.ajax({
			url:url+"&"+tid,
			dataType:"json",
			async:false,
			success:function(data){
					$("#content").empty();
					for(var i=0;i<data.rows.length; i++){
						$("#content").append("<a id='title' href='page/noteDetail.jsp?nid="+data.rows[i].nid+"' style='padding-right:21px'>"+data.rows[i].ntitle);
						$("#content").append("<p>"+data.rows[i].ncontent+"</p><p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>"+data.rows[i].users.uname+"</a>"
								+"<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>"+data.rows[i].ntimes+"<a href='javascript:void(0);'  class='glyphicon glyphicon-thumbs-up' style='padding-left:30px' onclick='dianzan("+data.rows[i].nid+")'>"+data.rows[i].ngood+"</a>"
								+"<a id='collectNote' href='javascript:void(0)' onclick=collectNote("+data.rows[i].nid+")  class='glyphicon glyphicon-heart' style='padding-left:30px'>"+sc+"</a>"
								+"<a href='#' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a></p>"
								+"<p><a class='btn' href='#'>View details »</a></p>");
					}
					currPage=data.currPage;
					$("#content").append("<p> 当前页数:["+data.currPage+"/"+data.totalPage+"]&nbsp;&nbsp;&nbsp;&nbsp;"
							+"<a href='javascript:void(0)' onclick=findNote('types/findNote?page=1')>首页</a>&nbsp;&nbsp;"
							+" <a href='javascript:void(0)' onclick=findNote('types/findNote?page="+(data.currPage-1)+"')>上一页</a>&nbsp;&nbsp; "
							+" <a href='javascript:void(0)' onclick=findNote('types/findNote?page="+(data.currPage+1)+"')>下一页</a>&nbsp;&nbsp; " +
							"<a href='javascript:void(0)' onclick=findNote('types/findNote?page="+data.totalPage+"')>末页</a> </p>");
		}
	})
}
findNote("types/findNote?");

/*action="types/insertNote"*/
function sendNote(){
	$("#sendForm").submit();

}

//收藏
function collectNote(tnid){
	nid=tnid;
/*	collectFrom*/
	$("#collectFrom").submit();
	
}

$("#collectFrom").form({
	url:"note/collectNote",
	onSubmit: function(param){    
        param.nid = nid;
    },    
	success:function(data){
		$.messager.show({
			title:'收藏信息',
			msg:'帖子' + (data==1 ? "收藏成功..." : "")+(data==2 ? "取消收藏成功..." : "")+(data==3 ? "收藏成功..." : "")+(data==9?"失败,请先登录":"")+(data==8?"本帖不能收藏":""),
			showType:'show',
			style:{
				top:document.body.scrollTop+document.documentElement.scrollTop,
			}
		});
		
		//重新加载帖子信息
		findNote("types/findNote?");
	}

});


//发帖
$("#sendForm").form({

		url:"types/insertNote",
		onSubmit: function(param){    
	        param.tid = tid;
	    },    
		success:function(data){
			$("#ntitle").val("");
			//$("#topcontent").html("<textarea rows='4' cols='85' id='topcontent' name='topcontent'></textarea><script type='text/javascript'>UE.getEditor('topcontent')</script>");
			
			editorBox.setContent('') 
			//添加帖子结果信息
	
			$.messager.show({
				title:'发送帖子信息',
				msg:'发送帖子' + (data==1 ? "成功..." : "发送失败，")+(data==5 ?"你已被禁言,不可以发帖":"")+(data==6?"发送失败,帖子内容有敏感词汇":"")+(data==9 ? "请先登录":"")+(data==8 ?"标题或内容不为空":""),
				showType:'show',
				style:{
					top:document.body.scrollTop+document.documentElement.scrollTop,
				}
			});
			//重新加载帖子信息
			findNote("types/findNote?");
		}
	

});

//显示板块的名字和格言
function showTypesinfo(url){
	$.post(url+"&"+tid,function(data){
		var tname=data[0].tname;
		var tdesc=data[0].tdesc;
		$("#tname").html(tname);
		$("#tdesc").html(tdesc);
	},"json");
}
showTypesinfo("types/showTypesinfo?");

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
			findNote("types/findNote?page="+currPage);
		}
	});
}
