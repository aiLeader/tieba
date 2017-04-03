$("#typesAddForm").form({
	url:"types/add",
    success:function(data){    
        if(data){
        	$("#tname").val("");
        	$("#tdesc").val("");
        	$.messager.alert('添加板块','添加板块成功！！！','success');
        } else{
        	$.messager.alert('添加板块','添加板块失败！！！','error');
        }
    } 
});

$("input#addBtn").click(function(){
	$("#typesAddForm").submit();
});