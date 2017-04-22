var nstates= [{ "value": "1", "text": "锁定" },{ "value": "0", "text": "不锁定" }];
var nstatus= [{ "value": "1", "text": "可用" },{ "value": "0", "text": "不可用" }];
function loadDataGrid(url){
	$(function () {
		var datagrid; //定义全局变量datagrid
		var editRow = undefined; //定义全局变量：当前编辑的行
		datagrid=$('#noteInfoTable').datagrid({  
			url:url,
			iconCls: 'icon-save', //图标
			fitColumns : true,
			singleSelect : true,
			rownumbers: true,
			autoRowHeight:true,
			pagination :true,
			pageList : [ 5, 10, 15, 20, 25, 30 ],
			columns:[[    
			          { field: 'nid', title: '编号', width: 90,align:'center' }, 
			          { field: 'ntitle', title: '标题', width: 90,align:'center' }, //field:数据库的列字段 
			          /*{ field: 'ncontent', title: '内容', width: 90,align:'center'},*/
			          /*{ field: 'ncontent', title: '图片', width: 130, height:10,align:'center',
			        	  formatter: function(value,row,index){
			        		  if(value == null){
			        			  return "<img width='100' src='images/not_pic.jpg'/>"
			        		  }else{
			        			  return "<img width='100' src='" + value + "'/>"
			        		  }
			        	  }},*/
			          { field: 'tid', title: '板块', width: 100,align:'center', 
			        	  formatter: function(value,row,index){
			        		  //alert(row + "==>" + JSON.stringify(row));
			        		  return row.types.tname;
			        	  }  
			          },
			          { field: 'userid', title: '发帖人', width: 130,align:'center',
			        	  formatter: function(value,row,index){
			        		  //alert(row + "==>" + JSON.stringify(row));
			        		  return row.users.uname;
			        	  }    
			          },
			          { field: 'nnum', title: '评论数量', width: 130,align:'center'},
			          { field: 'ngood', title: '点赞数', width: 130,align:'center'},  
			          /*	  { field: 'ntimes', title: '发布日期', width: 170,align:'center',formatter:formatDatebox},    */

			          /*{ field: 'num', title: '经验值', width: 100,align:'center'},
			        	  { field: 'regDate', title: '注册日期', width: 170,align:'center',formatter:formatDatebox},      */
			          { field: 'nstates', title: '是否锁帖', width: 80,align:'center',formatter: function(value,row,index){
							if (row.nstates<1){
								return '不锁定';
							} else {
								return '锁定';
							}
						}
 ,editor:'numberbox',editor: { 
			        	  type: 'combobox', 
			        	  options: { 
			        		  data: nstates, 
			        		  valueField: "value", 
			        		  textField: "text" 
			        	  } 
			          }
			          },
			          { field: 'nstatus', title: '是否禁用', width:90,align:'center',formatter: function(value,row,index){
							if (row.nstates<1){
								return '不可用';
							} else {
								return '可用';
							}
						}
 ,editor:'numberbox',editor: { 
			        	  type: 'combobox', 
			        	  options: { 
			        		  data: nstatus, 
			        		  valueField: "value", 
			        		  textField: "text" 
			        	  } 
			          }
			          },
			          {field:'operator',title:'操作',width:50,align:'center',
				        	formatter: function(value,row,index){
				        		return '<a class="detailBtn" href="javascript:void(0)"  onclick="showDetail('+row.nid+')">详情</a>' +
				        		'<script>$(".detailBtn").linkbutton({iconCls: "icon-search"});</script>';
							}
				        }
			          ]],
			          toolbar: [{ text: '删除', iconCls: 'icon-remove', handler: function () {
			        	  //删除时先获取选择行
			        	  var rows = datagrid.datagrid("getSelections");
			        	  //选择要删除的行
			        	  if (rows.length > 0) {
			        		  $.messager.confirm("提示", "你确定要删除吗?", function (r) {
			        			  if (r) {
			        				  var ids = [];
			        				  for (var i = 0; i < rows.length; i++) {
			        					  ids.push(rows[i].nid);
			        				  }
			        				  //将选择到的行存入数组并用,分隔转换成字符串，
			        				  //本例只是前台操作没有与数据库进行交互所以此处只是弹出要传入后台的id
			        				  alert(ids.join(','));
			        				  deleteNote(ids);
			        			  }
			        		  });
			        	  }
			        	  else {
			        		  $.messager.alert("提示", "请选择要删除的行", "error");
			        	  }
			          }
			          }, '-',
			          { text: '修改', iconCls: 'icon-edit', handler: function () {
			        	  //修改时要获取选择到的行
			        	  var rows = datagrid.datagrid("getSelections");
			        	  //如果只选择了一行则可以进行修改，否则不操作
			        	  if (rows.length == 1) {
			        		  //修改之前先关闭已经开启的编辑行，当调用endEdit该方法时会触发onAfterEdit事件
			        		  if (editRow != undefined) {
			        			  datagrid.datagrid("endEdit", editRow);
			        		  }
			        		  //当无编辑行时
			        		  if (editRow == undefined) {
			        			  //获取到当前选择行的下标
			        			  var index = datagrid.datagrid("getRowIndex", rows[0]);
			        			  //开启编辑
			        			  datagrid.datagrid("beginEdit", index);
			        			  //把当前开启编辑的行赋值给全局变量editRow
			        			  editRow = index;
			        			  //当开启了当前选择行的编辑状态之后，
			        			  //应该取消当前列表的所有选择行，要不然双击之后无法再选择其他行进行编辑
			        			  datagrid.datagrid("unselectAll");
			        		  }
			        	  }
			          }
			          }, '-',
			          { text: '保存', iconCls: 'icon-save', handler: function () {
			        	  //保存时结束当前编辑的行，自动触发onAfterEdit事件如果要与后台交互可将数据通过Ajax提交后台
			        	  datagrid.datagrid("endEdit", editRow);
			          }
			          }, '-',
			          { text: '取消编辑', iconCls: 'icon-redo', handler: function () {
			        	  //取消当前编辑行把当前编辑行罢undefined回滚改变的数据,取消选择的行
			        	  editRow = undefined;
			        	  datagrid.datagrid("rejectChanges");
			        	  datagrid.datagrid("unselectAll");
			          }
			          }, '-'],
			          onAfterEdit: function (rowIndex, rowData, changes) {
			        	  //endEdit该方法触发此事件
			        	  console.info(rowData);
			        	  editRow = undefined;
			        	  //alert(JSON.stringify(rowData));
			        	  updateNote(rowData);
			          },
			          onDblClickRow: function (rowIndex, rowData) {
			        	  //双击开启编辑行
			        	  if (editRow != undefined) {
			        		  datagrid.datagrid("endEdit", editRow);
			        	  }
			        	  if (editRow == undefined) {
			        		  datagrid.datagrid("beginEdit", rowIndex);
			        		  editRow = rowIndex;
			        	  }
			          }
		});
	});
}
loadDataGrid('note/find?options=""');

function formatDatebox(value) {//时间显示的方法
	if (value == null || value == '') {
		return '';
	}
	var dt;
	if (value instanceof Date) {
		dt = value;
	} else {
		dt = new Date(value);
	}

	return dt.format("yyyy-MM-dd hh:mm:ss"); //扩展的Date的format方法(上述插件实现)
}
Date.prototype.format = function(format) {
	var o = {
			"M+": this.getMonth() + 1, // month
			"d+": this.getDate(), // day
			"h+": this.getHours(), // hour
			"m+": this.getMinutes(), // minute
			"s+": this.getSeconds(), // second
			"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
			"S": this.getMilliseconds()
			// millisecond
	}
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}



//根据id号删除数据 修改用户状态成功
function deleteNote(ids){
	//alert(JSON.stringify(ids));
	$.get("note/"+ids,function(data){
		alert("删除用户成功！！！");
		$('#noteInfoTable').datagrid('reload');   
	}, "json");
}
function updateNote(rowData){
	$.ajax({
		type:"post",
		url:"note/update",
		async:false, //进行同步请求
		data:JSON.stringify(rowData), //json格式的请求参数
		dataType:"json", //指定返回的数据为json格式
		contentType:"application/json;charset=utf-8",//指定请求数据为json格式
		success:function(data){
			$('#noteInfoTable').datagrid('reload');   
		}
	});
}

$(function () {  
	obj = {  
			search: function () {  
				$('#noteInfoTable').datagrid('loadData',{total:0,rows:[]});
				var postUrl='note/find?options='+$('select[name="title"]').val()+$('input[name="condition"]').val();
				alert(postUrl);
				loadDataGrid('note/find?options='+$('select[name="title"]').val()+$('input[name="condition"]').val());
			}  
	}  
})

$("#TNoteInfoDetail").dialog({
	title:'帖子信息',
	left:10,
	width:1000,
	height:500,
	closed:true,
	resizable:true,
	collapsible:true,
});

function showDetail(id){
	$("#TNoteInfoDetail").dialog("open");
	$.post("note/getNoteById?nid="+id,function(data){
		$("#TNSnid").html(data.ncontent);
	},"json");
}
