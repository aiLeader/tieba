function findByParam(){
	var type=$("#banselect1").val();
	var param=$("#banparam").val();
	var commentInfoUrl='comments/'+type+'?status=0&param='+param;
	reloadDatagrid(commentInfoUrl);
}
reloadDatagrid('comments/banList');
function reloadDatagrid(commentInfoUrl){
	$('#bancommentInfo').datagrid({    
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
	        		return '<a class="BdetailBtn" href="javascript:void(0)"  onclick="BshowDetail('+row.cid+')">详情</a>' +
	        		'<a class="BdelBtn" href="javascript:void(0)"  onclick="letDetail('+row.cid+')">恢复</a>' +
	        		'<script>$(".BdetailBtn").linkbutton({iconCls: "icon-search"});$(".BdelBtn").linkbutton({iconCls: "icon-ok"});</script>';
				}
	        }
	    ]],
	    toolbar: [{ text: '刷新', iconCls: 'icon-remove', handler: function () {
	    	var commentInfoUrl='comments/banList'
	    	reloadDatagrid(commentInfoUrl);
	    }
	    }]
	}); 
}
 

$("#bancommentDetail").dialog({
	title:'评论信息',
	left:10,
	closed:true,
});

function letDetail(id){
	$.post("comments/letCom?cid="+id,function(data){
		if(data==null||data==false){
			alert("恢复评论失败！");
			var commentInfoUrl='comments/banList'
		    reloadDatagrid(commentInfoUrl);
		}else{
			alert("恢复评论成功！");
			var commentInfoUrl='comments/banList'
		    reloadDatagrid(commentInfoUrl);
		}
	},"json");
}

function BshowDetail(id){
	$("#bancommentDetail").dialog("open");
	$.post("comments/CombyId?cid="+id,function(data){
		$("#ppcid").val(data.cid);
		$("#ppnid").val(data.nid);
		$("#ppuserid").val(data.userid);
		$("#ppccontent").val(data.ccontent);
		$("#ppctime").val(data.ctime);
		$("#ppcgood").val(data.cgood);
	},"json");
}
