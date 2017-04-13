function reloadDatagrid(Url){
	$(function () {
		var datagrid; //定义全局变量datagrid
		datagrid=$('#CTNoteInfo').datagrid({    
	    url:Url,
		fitColumns:true,
		singleSelect:true,
		border:false,
	    columns:[[    
	        {field:'nid',title:'ID',width:50,align:'center'},    
	        {field:'ntitle',title:'标题',width:50,align:'center'},   
	        {field:'ncontent',title:'内容',width:50,align:'center'},   
	        {field:'tid',title:'版块',width:50,align:'center',
	        	formatter: function(value,row,index){
	          		return row.types.tid;
	  			}},  
	        {field:'tname',title:'版块名',width:50,align:'center', 
	        	formatter: function(value,row,index){
          		return row.types.tname;
  			}},   
	        {field:'userid',title:'用户',width:50,align:'center',
  				formatter: function(value,row,index){
  	          		return row.users.userid;
  	  			}},   
	        {field:'uname',title:'用户名',width:50,align:'center',
  	  			formatter: function(value,row,index){
  	          		return row.users.uname;
  	  			}},   
	        {field:'ntimes',title:'发帖时间',width:50,align:'center'},
	        {field:'nnum',title:'评论数',width:50,align:'center'},   
	        {field:'naccess',title:'访问量',width:50,align:'center'},   
	        {field:'ngood',title:'点赞数',width:50,align:'center'},   
	        {field:'operator',title:'操作',width:100,align:'center',
	        	formatter: function(value,row,index){
	        		return '<a class="detailBtn" href="javascript:void(0)"  onclick="showDetail('+row.nid+')">详情</a>' +
	        		'<a class="OKBtn" href="javascript:void(0)"  onclick="CancelSendNote('+row.nid+')">推送</a>' +
	        		'<script>$(".detailBtn").linkbutton({iconCls: "icon-search"});$(".OKBtn").linkbutton({iconCls: "icon-remove"});</script>';
				}
	        }
	    ]],
	    toolbar: [{ text: '刷新', iconCls: 'icon-remove', handler: function () {
	    	reloadDatagrid("note/findSendNote");
	    }
	    }]
	}); 
	}); 
}
reloadDatagrid("note/findSendNote");

$("#CTNoteInfoDetail").dialog({
	title:'帖子信息',
	left:10,
	closed:true,
});

function showDetail(id){
	$("#CTNoteInfoDetail").dialog("open");
	$.post("note/getNoteById?nid="+id,function(data){
		$("#CTNSnid").val(data.nid);
		$("#CTNSntitle").val(data.ntitle);
		$("#CTNStid").val(data.types.tid);
		$("#CTNStname").val(data.types.tname);
		$("#CTNSuserid").val(data.users.userid);
		$("#CTNSuname").val(data.users.uname);
		$("#CTNSntimes").val(data.ntimes);
		$("#CTNSnnum").val(data.nnum);
		$("#CTNSngood").val(data.ngood);
	},"json");
}
function CancelSendNote(nid){
	$.post("note/CancelSendNote?nid="+nid,function(data){
		if(data==null||data==false){
			alert("取消推送失败!");
			reloadDatagrid("note/findSendNote");
		}else{
			alert("取消推送成功!");
			reloadDatagrid("note/findSendNote");
		}
	},"JSON");
}
