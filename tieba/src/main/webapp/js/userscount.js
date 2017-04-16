$(function () {
	var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
    //$('#container').highcharts({
        chart: {
        	renderTo: 'container',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '爱贴就上贴吧各地区用户所占比例'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '各地区用户占比',
            /*data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['其他',   0.7]
            ]*/
        }]
    });
  });
  //异步请求数据
    $.ajax({
        type:"GET",
        url:'user/countusers',
        success:function(data){
            //定义一个数组
            browsers = [],
            //迭代，把异步获取的数据放到数组中
            $.each(data,function(i,d){
            	if(d.address==null){
            		d.address='其他';
            	}else{
            		d.address=d.address;
            	}
                browsers.push([d.address,d.ratio]);
            });
            //设置数据
            chart.series[0].setData(browsers);  
        },
        error:function(e){
            alert(e);
        }
    });
});