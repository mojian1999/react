<template>
	<ve-line :data="chartData" :settings="chartSettings" :loading="loading"></ve-line>
</template>

<script>
	var  colors = ['#5793f3', '#d14a61', '#675bba'];
	  export default {
		 name:"vcharts",
	    data () {
	      return {
			 
			  chartData:{ 
			  	columns: ['date', 'orderCount','orderAmount'],
			  	rows: [
			  	   {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
			  	  {date: '2018-11-02', orderCount: 20, orderAmount: 2230},
			  	  {date: '2018-11-03', orderCount: 33, orderAmount: 3623},
			  	  {date: '2018-11-04', orderCount: 50, orderAmount: 6423},
			  	  {date: '2018-11-05', orderCount: 80, orderAmount: 8492},
			  	  {date: '2018-11-06', orderCount: 60, orderAmount: 6293},
			  	  {date: '2018-11-07', orderCount: 20, orderAmount: 2293},
			  	  {date: '2018-11-08', orderCount: 60, orderAmount: 6293},
			  	  {date: '2018-11-09', orderCount: 50, orderAmount: 5293},
			  	  {date: '2018-11-10', orderCount: 30, orderAmount: 3293},
			  	  {date: '2018-11-11', orderCount: 20, orderAmount: 2293},
			  	  {date: '2018-11-12', orderCount: 80, orderAmount: 8293},
			  	  {date: '2018-11-13', orderCount: 100, orderAmount: 10293},
			  	  {date: '2018-11-14', orderCount: 10, orderAmount: 1293},
			  	  {date: '2018-11-15', orderCount: 40, orderAmount: 4293}
			  	]
			  },
			  chartSettings:{
			  	xAxisType:'time',
			  	area:true,  
			  	axisSite:{right:['orderAmount']},
			  	labelMap:{'orderCount':'订单数量','orderAmount':'订单金额'}
			  },
			  loading:true,
			  
				
	    }
	  }
	  }
</script>
	
<style>
	.v-charts-component-loading{
		display: none;
	}
</style>
