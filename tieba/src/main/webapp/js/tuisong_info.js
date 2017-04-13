function reloadDatagrid(Url){
	$(function () {
		var datagrid; //定义全局变量datagrid
		datagrid=$('#TNoteInfo').datagrid({    
	    url:Url,
		fitColumns:true,
		singleSelect:true,
		border:false,
		pagination :true,
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
	        		'<a class="OKBtn" href="javascript:void(0)"  onclick="SendNote('+row.nid+')">推送</a>' +
	        		'<script>$(".detailBtn").linkbutton({iconCls: "icon-search"});$(".OKBtn").linkbutton({iconCls: "icon-add"});</script>';
				}
	        }
	    ]],
	    toolbar: [{ text: '刷新', iconCls: 'icon-remove', handler: function () {
	    	reloadDatagrid("note/findNote?ftype=nop&fparem=nop");
	    }
	    }]
	}); 
	}); 
}
reloadDatagrid("note/findNote?ftype=nop&fparem=nop");

function findByParam(){
	var ftype=$("#select1").val();
	var fparem=$("#param").val();
	reloadDatagrid("note/findNote?ftype="+ftype+"&fparem="+fparem);
}

$("#TNoteInfoDetail").dialog({
	title:'帖子信息',
	left:10,
	closed:true,
});

function showDetail(id){
	$("#TNoteInfoDetail").dialog("open");
	$.post("note/getNoteById?nid="+id,function(data){
		$("#TNSnid").val(data.nid);
		$("#TNSntitle").val(data.ntitle);
		$("#TNStid").val(data.types.tid);
		$("#TNStname").val(data.types.tname);
		$("#TNSuserid").val(data.users.userid);
		$("#TNSuname").val(data.users.uname);
		$("#TNSntimes").val(data.ntimes);
		$("#TNSnnum").val(data.nnum);
		$("#TNSngood").val(data.ngood);
	},"json");
}
function SendNote(nid){
	$.post("note/SendNote?nid="+nid,function(data){
		alert(data);
		if(data==1){
			alert("推送成功！！");
			reloadDatagrid("note/findNote?ftype=nop&fparem=nop");
		}else if(data==2){
			alert("推送失败,该帖子已被推送！");
			reloadDatagrid("note/findNote?ftype=nop&fparem=nop");
		}else if(data==3){
			alert("推送失败,推送贴的数量已达上限！");
			reloadDatagrid("note/findNote?ftype=nop&fparem=nop");
		}else{
			alert("未知的错误！请重试！");
			reloadDatagrid("note/findNote?ftype=nop&fparem=nop");
		}
	},"JSON");
}
