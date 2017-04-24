var nid ="";
var href = window.location.href;
var currPage="";
var userid=$("#userid").val();
showPersonal("user/userinfo");
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
listType("types/list");
IndexListNote("note/listindex?page=nop&totalPage=nop");
//异步加载主页中间的帖子
function IndexListNote(url){
	var storeData;
	if(userid==undefined || userid=="" ||userid==null){
		storeData=null;
	}else{
		$.post("store/GetStoreByUserid?userid="+userid,function(data1){
			storeData=data1;
		},"json");
	}
	$.post(url,function(data){
		$("#indexNoteContent").empty();
		if(data.rows.length<=0){
			$("#indexNoteContent").append()
		}
		var jubuStore=storeData;
		for(var i=0;i<data.rows.length;i++){
			var store="收藏";
			if(jubuStore==null||jubuStore==undefined||jubuStore==""){
				store="收藏";
			}else{
				if(jubuStore!=null&&jubuStore!=undefined&&jubuStore!=""){
					for(var j=0;j<jubuStore.length;j++){
						if(jubuStore[j].nid==data.rows[i].nid){
							store="取消收藏";
							jubuStore.splice(j);
						}
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
					+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page=1&totalPage='+data.totalPage+'")>首页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+(data.currPage-1)+'&totalPage='+data.totalPage+'")>上一页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+(data.currPage+1)+'&totalPage='+data.totalPage+'")>下一页</a></li>'
					+'<li><a href="javascript:void(0)" onclick=IndexListNote("note/listindex?page='+data.totalPage+'&totalPage='+data.totalPage+'")>末页</a></li></ul>');
		}
	},"json");
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

//收藏
function collectNote(tnid){
	nid=tnid;
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

$("#collectFrom").form({
	url:"note/collectNote",
	onSubmit: function(param){    
		param.nid = nid;
	},    
	success:function(data){
		$.messager.show({
			title:'收藏信息',
			msg:'帖子' + (data==1 ? "收藏成功..." : "")+(data==2 ? "取消收藏成功..." : "")+(data==3 ? "收藏成功..." : "")+(data==9?"收藏失败,请先登录":"")+(data==8?"本帖不能收藏":""),
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
	var upskin=this.id.substr(-1);
	$.ajax({
		url: "user/updateSkin",
		data: {"userid":userid,"uskin":upskin},
		success: function(data){
		}
	});
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

//显示用户的皮肤
function showSkin(){
	$.ajax({
		url: "user/showSkin",
		data: "userid="+userid,
		success: function(data){//msg 为 true
			//alert(data);
			if(data){
				var uskin=data.uskin;
				var skin="index"+uskin;
				$("#"+skin).addClass("selected")
				.siblings().removeClass("selected");
				$("#cssfile").attr("href","css/"+skin+".css");
			}else{
				var uskin=0;
				var skin="index"+uskin;
				$("#"+skin).addClass("selected")
				.siblings().removeClass("selected");
				$("#cssfile").attr("href","css/"+skin+".css");
			}

		}
	});
}
showSkin();

$('input').bind('input propertychange', function() {
	var nowVar=$(this).val();
	if(nowVar==""||nowVar==undefined||nowVar==null){
		$("#paramDateList").empty();
	}else{
		$.post("note/findListNoteName?var="+nowVar,function(data){
			var length;
			if(data.length>5){
				length=5;
			}else{
				length=data.length;
			}
			var str="";
			$("#paramDateList").empty();
			for(var i=0;i<length;i++){
				str+='<option value="'+data[i].ntitle+'">'+data[i].ntitle+'</option>';
			}	
			$("#paramDateList").append(str);
		},"JSON");
	}
});