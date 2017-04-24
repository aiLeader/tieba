function findByParam(){
	var type=$("#select1").val();
	var param=$("#param").val();
	var commentInfoUrl='comments/'+type+'?status=1&param='+param;
	reloadDatagrid(commentInfoUrl);
}
reloadDatagrid('comments/list');
function reloadDatagrid(commentInfoUrl){
	$('#commentInfo').datagrid({    
	    url:commentInfoUrl,
		fitColumns:true,
		singleSelect:true,
		border:false,
		pagination :true,
	    columns:[[    
	        {field:'cid',title:'评论编号',width:50,align:'center'},    
	        {field:'ntitle',title:'评论贴',width:50,align:'center',
	        	formatter: function(value,row,index){
  	          		return row.noteInfo.ntitle;
  	  			}}, 
	        {field:'uname',title:'评论用户',width:50,align:'center',
	        	formatter: function(value,row,index){
  	          		return row.users.uname;
  	  			}}, 
	        {field:'ctime',title:'评论时间',width:50,align:'center'}, 
	        {field:'cgood',title:'点赞数',width:50,align:'center'}, 
	        {field:'operator',title:'操作',width:100,align:'center',
	        	formatter: function(value,row,index){
	        		return '<a class="detailBtn" href="javascript:void(0)"  onclick="showDetail('+row.cid+')">详情</a>' +
	        		'<a class="delBtn" href="javascript:void(0)"  onclick="BanDetail('+row.cid+')">屏蔽</a>' +
	        		'<script>$(".detailBtn").linkbutton({iconCls: "icon-search"});$(".delBtn").linkbutton({iconCls: "icon-cancel"});</script>';
				}
	        }
	    ]],
	    toolbar: [{ text: '刷新', iconCls: 'icon-remove', handler: function () {
	    	var commentInfoUrl='comments/list'
	    	reloadDatagrid(commentInfoUrl);
	    }
	    }]
	}); 
}
 

$("#commentDetail").dialog({
	title:'评论信息',
	width:280,
	height:220,
	closed:true,
});

function BanDetail(id){
	$.post("comments/banCom?cid="+id,function(data){
		if(data==null||data==false){
			alert("屏蔽评论失败！");
			var commentInfoUrl='comments/list'
		    reloadDatagrid(commentInfoUrl);
		}else{
			alert("屏蔽评论成功！");
			var commentInfoUrl='comments/list'
		    reloadDatagrid(commentInfoUrl);
		}
	},"json");
}

function showDetail(id){
	$("#commentDetail").dialog("open");
	$.post("comments/CombyId?cid="+id,function(data){
		$("#pcid").val(data.cid);
		$("#pnid").val(data.nid);
		$("#puserid").val(data.userid);
		$("#pccontent").val(data.ccontent);
		$("#pctime").val(data.ctime);
		$("#pcgood").val(data.cgood);
	},"json");
}
