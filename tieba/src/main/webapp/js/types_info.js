var editRow = undefined; //定义全局变量：当前编辑的行
var flag=0;//1表示添加，-1表示修改
var tstate= [{ "value": "1", "text": "可用" },{ "value": "-1", "text": "不可用" }];
function unitformatter(value, rowData, rowIndex) {  
    if (value == 0) {  
        return;  
    }  
    for (var i = 0; i < tstate.length; i++) {  
        if (tstate[i].value == value) {  
            return tstate[i].text;  
        }  
    }  
}
$("#typesinfo").datagrid({
	url:'types',
	fitColumns:true,
	border:false,
	idField:'tid',
	checkOnSelect:true,
	selectOnCheck:true,
	pagination :true,
	remoteSort:false,
	columns:[[
	          {field:'',title:'全选',width:50,align:'center',checkbox:true}, 
	          {field:'tid',title:'编号',width:50,align:'center'},    
	          {field:'tname',title:'板块名称',width:100,align:'center',editor:'text'},    
	          {field:'tnum',title:'帖子数量',width:50,align:'center',sortable:'true',
	        	  sorte:function(a,b){
	        		  return (a>b?1:-1);
	        	  }},   
	          {field:'tdesc',title:'板块格言',width:100,align:'center',editor:'text'},
	          {field:'tstate',title:'板块状态',width:50,align:'center',formatter: function(value,row,index){
					if (row.tstate<1){
						return '不可用';
					} else {
						return '可用';
					}
				},editor: { 
	        		  type: 'combobox', 
	        		  options: { 
	        			  data: tstate, 
	        			  valueField: "value", 
	        			  textField: "text" 
	        		 } 
	        	  } 
	          },  
	          {field:'operator',title:'操作',width:50,align:'center',
	        	  formatter: function(value,row,index){
	        		  //alert(row + "==>" + JSON.stringify(row));
	        		  return '<a class="detailBtn" href="javascript:void(0)" onclick="showDetail('+ index +')">详情</a>' + 
	        		  '<script>$(".detailBtn").linkbutton({iconCls: "icon-search"});</script>';
	        	  }
	          }
	          ]],
	          //queryParams: { action: 'query' }, //查询参数
	          toolbar: [{ text: '添加', iconCls: 'icon-add', handler: function () {//添加列表的操作按钮添加，修改，删除等
	        	  //添加时先判断是否有开启编辑的行，如果有则把开启编辑的那行结束编辑
	        	  if (editRow != undefined) {
	        		  $("#typesinfo").datagrid("endEdit", editRow);
	        	  }
	        	  //添加时如果没有正在编辑的行，则在datagrid的第一行插入一行
	        	  if (editRow == undefined) {
	        		  $("#typesinfo").datagrid("insertRow", {
	        			  index: 0, // index start with 0
	        			  row: {
	        			  }
	        		  });
	        		  //将新插入的那一行开启编辑状态
	        		  $("#typesinfo").datagrid("beginEdit", 0);
	        		  //给当前编辑的行赋值
	        		  editRow = 0;
	        		  
	        		  flag=1;//表示添加
	        	  }
	          }
	          }, '-',
	          { text: '删除', iconCls: 'icon-remove', handler: function () {
	        	  //删除时先获取选择行
	        	  var rows = $("#typesinfo").datagrid("getSelections");
	        	  //选择要删除的行
	        	  if (rows.length > 0) {
	        		  $.messager.confirm("提示", "你确定要删除吗?", function (r) {
	        			  if (r) {
	        				  var ids = [];
	        				  for (var i = 0; i < rows.length; i++) {
	        					  ids.push(rows[i].tid);
	        				  }
	        				  //将选择到的行存入数组并用,分隔转换成字符串，
	        				  //本例只是前台操作没有与数据库进行交互所以此处只是弹出要传入后台的id
	        				  alert(ids.join(','));
	        				  deleteTypes(ids);//删除板块
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
	        	  var rows = $("#typesinfo").datagrid("getSelections");
	        	  //如果只选择了一行则可以进行修改，否则不操作
	        	  if (rows.length == 1) {
	        		  //修改之前先关闭已经开启的编辑行，当调用endEdit该方法时会触发onAfterEdit事件
	        		  if (editRow != undefined) {
	        			  $("#typesinfo").datagrid("endEdit", editRow);
	        		  }
	        		  //当无编辑行时
	        		  if (editRow == undefined) {
	        			  //获取到当前选择行的下标
	        			  var index = $("#typesinfo").datagrid("getRowIndex", rows[0]);
	        			  //开启编辑
	        			  $("#typesinfo").datagrid("beginEdit", index);
	        			  //把当前开启编辑的行赋值给全局变量editRow
	        			  editRow = index;
	        			  //当开启了当前选择行的编辑状态之后，
	        			  //应该取消当前列表的所有选择行，要不然双击之后无法再选择其他行进行编辑
	        			  $("#typesinfo").datagrid("unselectAll");
	        			  
	        			  flag=-1;//表示修改
	        		  }
	        	  }
	          }
	          }, '-',
	          { text: '保存', iconCls: 'icon-save', handler: function () {
	        	  //保存时结束当前编辑的行，自动触发onAfterEdit事件如果要与后台交互可将数据通过Ajax提交后台
	        	  $("#typesinfo").datagrid("endEdit", editRow);
	          }
	          }, '-',
	          { text: '取消编辑', iconCls: 'icon-redo', handler: function () {
	        	  //取消当前编辑行把当前编辑行罢undefined回滚改变的数据,取消选择的行
	        	  editRow = undefined;
	        	  $("#typesinfo").datagrid("rejectChanges");
	        	  $("#typesinfo").datagrid("unselectAll");
	          }
	          }, '-'],
	          onAfterEdit: function (rowIndex, rowData, changes) {
	        	  //endEdit该方法触发此事件
	        	  if(flag==1){
	        		  addTypes(rowData);//添加新板块
	        	  }
	        	  if(flag==-1){
	        		  saveModifyTypes(rowData);//保存修改板块
	        	  }
	        	  
	        	  console.info(rowData);
	        	  editRow = undefined;
	        	  flag=0;
	          },
	          onDblClickRow: function (rowIndex, rowData) {
	        	  //双击开启编辑行
	        	  if (editRow != undefined) {
	        		  $("#typesinfo").datagrid("endEdit", editRow);
	        	  }
	        	  if (editRow == undefined) {
	        		  $("#typesinfo").datagrid("beginEdit", rowIndex);
	        		  editRow = rowIndex;
	        	  }
	        	  flag=-1;
	          },
});

//添加新板块
function addTypes(rowData){
	//alert(JSON.stringify(rowData));
	$.ajax({
		url: "types/add",
		data: rowData,
		type: "post",
		success: function(msg){//msg 为 true
			//alert( "Data Saved: " + msg );
			if(msg){
				$('#typesinfo').datagrid('reload');  
				$.messager.alert('添加板块','添加板块成功！！！','success');
			} else{
				$.messager.alert('添加板块','添加板块失败！！！','error');
			}
		}
	});
}
//保存修改板块
function saveModifyTypes(rowData){
	$.ajax({
		url: "types/modify",
		data: rowData,
		type: "post",
		success: function(msg){//msg 为 true
			//alert( "Data Saved: " + msg );
			if(msg){
				$('#typesinfo').datagrid('reload');  
				$.messager.alert('修改板块','修改板块成功！！！','success');
			} else{
				$.messager.alert('修改板块','修改板块失败！！！','error');
			}
		}
	});
}
//删除板块
function deleteTypes(ids){
	$.ajax({
		url: "types/delete",
		data: "tid="+ids,
		success: function(msg){//msg 为 true
			//alert( "Data Saved: " + msg );
			if(msg){
				$('#typesinfo').datagrid('reload');  
				$.messager.alert('删除板块','删除板块成功！！！','success');
			} else{
				$.messager.alert('删除板块','删除板块失败！！！','error');
			}
		}
	});
}