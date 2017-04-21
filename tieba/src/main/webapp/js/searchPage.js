var nid ="";
var href = window.location.href;
var currPage="";
var userid=$("#userid").val();
showPersonal("user/userinfo");
var storeData;
getStore();
function showPersonal(url){
	$.post(url+"?userid="+userid,function(data){
		if(data.picPath){
			$("#picPath").attr("src",data.picPath);
		}else{
			//$("#picPath").attr("src", "images/mr.jpg");
		}
		$("#uname").html(data.uname);
	},"json");
}
var currPage="";


//异步加载左边板块信息
function listType(url){
	$.post(url,function(data){
		for (var i = 0; i < data.rows.length; i++) {
			$("#ulstyle").append("<li><a href='page/typeDetail.jsp?tid="+data.rows[i].tid+"'>"+data.rows[i].tname+"</a></li>");
		}
	},"json");
}
listType("types");

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

//收藏
function collectNote(tnid){
	nid=tnid;
	alert(nid);
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
		IndexListNote("note/listindex?page=nop&totalPage=nop");
	}
});

//一键换肤
var $li = $("#skin li");
$li.click(function () {
	$("#"+this.id).addClass("selected")
	.siblings().removeClass("selected");
	$("#cssfile").attr("href","css/"+this.id+".css");
});
//将皮肤保存进cookie
$.cookie("myCssSkin",this.id,{path:'/',expires:10});
//获取Cookie中的皮肤
var cookie_skin = $.cookie("myCssSkin");
//判断皮肤存不存在
if (cookie_skin){
	switchSkin(cookie_skin);
}
//设置cookid中的皮肤
function switchSkin(skinName) {
	$("#"+skinName).addClass("selected")
	.siblings().removeClass("selected");
	$("#cssfile").attr("href","css/"+skinName+".css");
	$.cookie("myCssSkin",skinName,{path:'/',expires:10});
}
searchNotes();
//点击搜索
function searchNotes(){
	var hrefStr = location.href;
	var params =hrefStr.substr(hrefStr.indexOf("?"));
	var param=getParam(hrefStr);
	if(params==""||params==null||params==undefined){
		alert("请输入搜索的参数！");
		window.location.href="index.jsp";
	}else{
		$.post("note/searchNote"+params,function(data){
			if(data.rows.length<=0){
				alert("本次查询无结果！");
				window.location.href="index.jsp";
			}else{
				$("#indexNoteContent").empty();
				var jubuStore=storeData;
				for(var i=0;i<data.rows.length;i++){
					var store="收藏";
					if(jubuStore==null||jubuStore==undefined||jubuStore==""){

					}else{
						for(var j=0;j<jubuStore.length;j++){
							if(jubuStore[j].nid==data.rows[i].nid){
								store="取消收藏";
								jubuStore.splice(j);
							}
						}
					}
					if(data.rows[i].users.userid==userid){
						var href="page/personal.jsp?userid=";
					}else{
						href="page/otherpersonal.jsp?userid=";
					}

					$("#indexNoteContent").append('<div id="content"><p><a id="title" href="page/noteDetail.jsp?nid='+data.rows[i].nid+'" style="padding-right:21px">'+data.rows[i].ntitle+'</a>'
							+'</p><p>'+data.rows[i].ncontent+'</p><p><span class="glyphicon glyphicon-user"></span><a href="'+href+data.rows[i].users.userid+'" style="padding-right:30px">'+data.rows[i].users.uname+'</a>'
							+'<span class="glyphicon glyphicon-time" style="padding-left:7px"></span>'+data.rows[i].ntimes+'<a href="javascript:void(0);" class="glyphicon glyphicon-thumbs-up" style="padding-left:30px" onclick="dianzan('+data.rows[i].nid+')">'+data.rows[i].ngood+'</a>'
							+"<a id='collectNote' href='javascript:void(0)' onclick=collectNote("+data.rows[i].nid+")  class='glyphicon glyphicon-heart' style='padding-left:30px'>"+store+"</a>"
							+'</p><p><a class="btn" href="page/noteDetail.jsp?nid='+data.rows[i].nid+'">进入帖子 »</a></p></div>');
				}
				currPage=data.currPage;
				if(data.totalPage>1){
					$("#indexNoteContent").append('<ul class="pagination">'
							+'<li><a href="searchPage.jsp?page=1&param='+param+'" >首页</a></li>'
							+'<li><a href="searchPage.jsp?page='+(data.currPage+1)+'&param='+param+'" >上一页</a></li>'
							+'<li><a href="searchPage.jsp?page='+(data.currPage+1)+'&param='+param+'" >下一页</a></li>'
							+'<li><a href="searchPage.jsp?page='+data.totalPage+'&param='+param+'" >末页</a></li></ul>');
				}
			}
		},"json");
	}
}
function getParam(hrefStr){
	var data=hrefStr.substr(hrefStr.indexOf("?")+1);
	var strs= new Array();
	strs=data.split("&");
	console.info(strs);
	for(var i=0;i<strs.length;i++){
		var str = new Array();
		str = strs[i].split("=");
		console.info(str);
		for(var j=0;j<str.length;j++){
			if(str[0]=="param")
				return str[1];
		}
	}
	return "";
}