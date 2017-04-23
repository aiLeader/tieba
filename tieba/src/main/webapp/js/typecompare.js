$(function () {
    var chart = Highcharts.chart('container2', {
        title: {
            text: '板块统计'
        },
        subtitle: {
            text: '普通的'
        },
        xAxis: {
        	title: {
                enabled: true,
                text: '板块名称'
            },
        	categories:[]
            /*categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']*/
        },
        yAxis: {
            title: {
                text: '帖子数量'
            },
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            /*data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],*/
            showInLegend: false
        }]
    });
    $('#plain').click(function () {
        chart.update({
            chart: {
                inverted: false,
                polar: false
            },
            subtitle: {
                text: '普通的'
            }
        });
    });
    $('#inverted').click(function () {
        // chart.update 支持全部属性动态更新
        chart.update({
            chart: {
                inverted: true,
                polar: false
            },
            subtitle: {
                text: '反转'
            }
        });
    });
    $('#polar').click(function () {
        chart.update({
            chart: {
            	polar: true,
                inverted: false
            },
            subtitle: {
                text: '极地图'
            }
        });
    });
  //异步请求数据
    $.ajax({
        type:"GET",
        url:'types/compare',
        success:function(data){
            //定义一个数组
            browsers = [],
            //迭代，把异步获取的数据放到数组中
            $.each(data,function(i,d){
                browsers.push([d.tnum]);
                chart.xAxis[0].categories.push(d.tname);
            });
            //设置数据
            chart.series[0].setData(browsers); 
        },
        error:function(e){
            alert(e);
        }
    });
});
