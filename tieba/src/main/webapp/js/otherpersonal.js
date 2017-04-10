var hrefStr = location.href;
var userid=hrefStr.substr(hrefStr.indexOf("=")+1);
var uname="";
showPersonal("../user/userinfo")
function showPersonal(url){
	$.post(url+"?userid="+userid,function(data){
		if(data.picPath){
			$("#picPath").attr("src",data.picPath);
		}else{
			$("#picPath").attr("src", "../images/mr.jpg");
		}
		uname=data.uname;
		$("#uname").html(data.uname);
		$("#sex").html(data.sex);
		$("#sign").html(data.signs);	
	},"json");
}
 document.title=uname+"的个人主页";


function showNote(url){
	//alert(uname);
	$.post(url+"&userid="+userid,function(data){
		var noteStr="";
		for (var i = 0; i < data.rows.length; i++) {
			noteStr += "<div id='note'>";
			noteStr +="<p><a id='title' href='../page/noteDetail.jsp?nid="+data.rows[i].nid+"' style='padding-right:21px'>"+data.rows[i].ntitle+"</a></p>";
			noteStr +="<p>"+data.rows[i].ncontent+"</p>";
			noteStr +="<p><span class='glyphicon glyphicon-user'></span><a href='#' style='padding-right:30px'>"+uname+"</a>";
			noteStr +="<span class='glyphicon glyphicon-time' style='padding-left:7px'></span>"+data.rows[i].ntimes;
			noteStr +="<a href='#' class='glyphicon glyphicon-thumbs-up' style='padding-left:30px'>"+data.rows[i].ngood+"</a>";
			noteStr +="<a href='#' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>";
			noteStr +="<a href='javascript:;' id='toggle1' target='_self' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a>";
			noteStr +="<div id='comm' style='display: none;'><textarea rows='4' cols='80'></textarea><br><button>提交</button></div></p></div>";
		}
		
		$("#panel-all").html(noteStr);
		$("#panel-all").append('<ul class="pagination">'
				+'<li><a href="javascript:void(0)" onclick=showNote("../note/showByUserid?page=1")>首页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showNote("../note/showByUserid?page='+(data.currPage-1)+'")>上一页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showNote("../note/showByUserid?page='+(data.currPage+1)+'")>下一页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showNote("../note/showByUserid?page='+data.totalPage+'")>末页</a></li></ul>');
	},"json");
}
showNote("../note/showByUserid?page=1");

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
			noteStr +="<a href='#' class='glyphicon glyphicon-thumbs-up' style='padding-left:30px'>"+data.rows[i].notes.ngood+"</a>";
			noteStr +="<a href='#' class='glyphicon glyphicon-heart' style='padding-left:30px'>收藏</a>";
			noteStr +="<a href='javascript:;' id='toggle1' target='_self' class='glyphicon glyphicon-edit' style='padding-left:30px'>评论</a>";
			noteStr +="<div id='comm1' style='display: none;'><textarea rows='4' cols='80'></textarea><br><button>提交</button></div></p></div>";
		}
		
		$("#panel-store").html(noteStr);
		$("#panel-store").append('<ul class="pagination">'
				+'<li><a href="javascript:void(0)" onclick=showStoreNote("../note/showStoreByUserid?page=1")>首页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showStoreNote("../note/showStoreByUserid?page='+(data.currPage-1)+'")>上一页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showStoreNote("../note/showStoreByUserid?page='+(data.currPage+1)+'")>下一页</a></li>'
				+'<li><a href="javascript:void(0)" onclick=showStoreNote("../note/showStoreByUserid?page='+data.totalPage+'")>末页</a></li></ul>');
	},"json");
}
showStoreNote("../store/showStoreByUserid?page=1");


/* @author:Romey
 * 动态点赞
 * 此效果包含css3，部分浏览器不兼容（如：IE10以下的版本）
*/
//js生效
$(function(){
$(document).on('click',"#praise",function(e){
	var praise_img = $("#praise-img");
	var text_box = $("#add-num");
	var praise_txt = $("#praise-txt");
	var num=parseInt(praise_txt.text());
	if(praise_img.attr("src") == ("../images/yizan.png")){
		$(this).html("<img src='../images/zan.png' id='praise-img' class='animation' />");
		praise_txt.removeClass("hover");
		text_box.show().html("<em class='add-animation'>-1</em>");
		$(".add-animation").removeClass("hover");
		num -=1;
		praise_txt.text(num)
	}else{
		$(this).html("<img src='../images/yizan.png' id='praise-img' class='animation' />");
		praise_txt.addClass("hover");
		text_box.show().html("<em class='add-animation'>+1</em>");
		$(".add-animation").addClass("hover");
		num +=1;
		praise_txt.text(num)
	}
});
})
