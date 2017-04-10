$("#loginDiv").dialog({
	top:80,
	width:380,
	title:"",
	border:false,
});


$("#loginForm p img").click(function(){
	$(this).attr("src", "vcode.jpg?" + new  Date().getTime());
});


$('#btnLogin').linkbutton({    
    iconCls: 'icon-man',
    onClick: function(){
    	//alert("开始登录....");
    	$("#loginForm").submit();
    }
}); 
