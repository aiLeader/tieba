var userid=$("#userid").val();

$('.choose').click(function () {
	$('.choose').addClass('active');
	$('.choose > .icon').addClass('active');
	$('.pay').removeClass('active');
	$('.wrap').removeClass('active');
	$('.ship').removeClass('active');
	$('.pay > .icon').removeClass('active');
	$('.wrap > .icon').removeClass('active');
	$('.ship > .icon').removeClass('active');
	$('#line').addClass('one');
	$('#line').removeClass('two');
	$('#line').removeClass('three');
	$('#line').removeClass('four');
	loadUserInfo(userid);
});
$('.pay').click(function () {
	$('.pay').addClass('active');
	$('.pay > .icon').addClass('active');
	$('.choose').removeClass('active');
	$('.wrap').removeClass('active');
	$('.ship').removeClass('active');
	$('.choose > .icon').removeClass('active');
	$('.wrap > .icon').removeClass('active');
	$('.ship > .icon').removeClass('active');
	$('#line').addClass('two');
	$('#line').removeClass('one');
	$('#line').removeClass('three');
	$('#line').removeClass('four');
	loadUserInfo(userid);
	
});
$('.wrap').click(function () {
	$('.wrap').addClass('active');
	$('.wrap > .icon').addClass('active');
	$('.pay').removeClass('active');
	$('.choose').removeClass('active');
	$('.ship').removeClass('active');
	$('.pay > .icon').removeClass('active');
	$('.choose > .icon').removeClass('active');
	$('.ship > .icon').removeClass('active');
	$('#line').addClass('three');
	$('#line').removeClass('two');
	$('#line').removeClass('one');
	$('#line').removeClass('four');
});
$('.ship').click(function () {
	$('.ship').addClass('active');
	$('.ship > .icon').addClass('active');
	$('.pay').removeClass('active');
	$('.wrap').removeClass('active');
	$('.choose').removeClass('active');
	$('.pay > .icon').removeClass('active');
	$('.wrap > .icon').removeClass('active');
	$('.choose > .icon').removeClass('active');
	$('#line').addClass('four');
	$('#line').removeClass('two');
	$('#line').removeClass('three');
	$('#line').removeClass('one');
});
$('.choose').click(function () {
	$('#first').addClass('active');
	$('#second').removeClass('active');
	$('#third').removeClass('active');
	$('#fourth').removeClass('active');
});
$('.pay').click(function () {
	$('#first').removeClass('active');
	$('#second').addClass('active');
	$('#third').removeClass('active');
	$('#fourth').removeClass('active');
});
$('.wrap').click(function () {
	$('#first').removeClass('active');
	$('#second').removeClass('active');
	$('#third').addClass('active');
	$('#fourth').removeClass('active');
});
$('.ship').click(function () {
	$('#first').removeClass('active');
	$('#second').removeClass('active');
	$('#third').removeClass('active');
	$('#fourth').addClass('active');
});



loadUserInfo(userid);
function loadUserInfo(userid){
	$.get("../user/list",{options:userid}, function(data){
		if(data.rows[0].sex=='男'){
			$(":radio[name='sex'][value='男']").attr("checked","true");
		}else{
			$(":radio[name='sex'][value='女']").attr("checked","true");
		}
		$("#birthday").val(data.rows[0].birthday);
		$("#telephone").val(data.rows[0].telephone);
		$("#email").val(data.rows[0].email);
		$("#address").val(data.rows[0].address);
		$("#signs").val(data.rows[0].signs);
		//alert(data.rows[0].picPath);
		if(data.rows[0].picPath){
			$("#pic").attr("src",data.rows[0].picPath);
		}else{
			$("#pic").attr("src", "../images/not_pic.jpg");
		}
	},"json")
}

$("#PerInfoForm").form({
	url:"../user/update",
	success:function(data){
		$.messager.show({
			title:'修改个人信息',
			msg:'修改个人信息' + (data=="true" ? "成功..." : "失败!!!"),
			showType:'show',
			style:{
				top:document.body.scrollTop+document.documentElement.scrollTop,
			}
		});
		loadUserInfo(userid);
	}
})


$("#updatePic").form({
	url:"../user/updatePic",
	success:function(data){
		$.messager.show({
			title:'修改个人图片信息',
			msg:'修改个人图片信息' + (data=="true" ? "成功..." : "失败!!!"),
			showType:'show',
			style:{
				top:document.body.scrollTop+document.documentElement.scrollTop,
			}
		});
	}
})


function chgPic(obj){
	$("#pic").attr("src", window.URL.createObjectURL(obj.files[0]));
}





