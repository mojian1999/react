<template>
	<div class="app-container" style="background: white;">
		<!--订单销售额统计-->
		<div class="total-layout">
			<el-row>
			  <el-col :span="8" class="total-box">
					<div class="grid-content bg-purple total-box1 ">
						<img :src="img1"  />
						<div class="div-1">
							<div class="div-2">今日订单总数</div>
							<div class="div-3">200</div>
						</div>
					</div>
			  </el-col>
			  <el-col :span="8" class="total-box">
				  <div class="grid-content bg-purple total-box1 ">
					<img :src="img3"  />
					<div class="div-1">
						<div class="div-2">今日销售总额</div>
						<div class="div-3">￥5000</div>
					</div>	
				  </div>
			</el-col>
			  <el-col :span="8" class="total-box">
				  <div class="grid-content bg-purple total-box1 ">
					<img :src="img2"  />
					<div class="div-1">
					<div class="div-2">昨日销售总额</div>
					<div class="div-3">￥3000</div>
					</div>
				  </div>
			  </el-col>
			</el-row>
		</div>
		
		<!--待处理事务-->
		<div class="un-handle-layout">
			<div class="un-handle-title">待处理事务</div>
			<div class="un-handle-con">
				<el-row :gutter="20">
					<el-col :span="8" v-for="(item,index) in PendingArr" :key="index">
						<div class="un-handle-item">
							<span>{{item.name}}</span>
							<span class="font-red">( {{item.count}} )</span>
						</div>	
					</el-col>
				</el-row>
			</div>
		</div>
		
		<!--商品总览-->
		<div class="fenlan">
			<el-row :gutter="20">
			  <el-col :span="12"><div class="grid-content bg-purple">
					<div class="fenlanAll">
						<div class="fenlanTitle">商品总览</div>
						<div class="fenlanData">
							<div class="fenlanContent">
								<div class="fenlanOne">100</div>
								<div class="fenlanTwe">已下架</div>
							</div>
							<div  class="fenlanContent">
								<div class="fenlanOne">400</div>
								<div class="fenlanTwe">已上架</div>
							</div>
							<div  class="fenlanContent">
								<div class="fenlanOne">50</div>
								<div class="fenlanTwe">库存紧张</div>
							</div>
							<div  class="fenlanContent">
								<div class="fenlanOne">500</div>
								<div class="fenlanTwe">全部商品</div>
							</div>
						</div>
					</div>
			  </div></el-col>
			  <el-col :span="12">
				  <div class="grid-content bg-purple">
					  <div class="fenlanAll">
					  	<div class="fenlanTitle">用户总览</div>
					  	<div class="fenlanData">
					  		<div class="fenlanContent">
					  			<div class="fenlanOne">100</div>
					  			<div class="fenlanTwe">今日新增</div>
					  		</div>
					  		<div class="fenlanContent">
					  			<div class="fenlanOne">200</div>
					  			<div class="fenlanTwe">昨日新增</div>
					  		</div>
					  		<div class="fenlanContent">
					  			<div class="fenlanOne">1000</div>
					  			<div class="fenlanTwe">本月新增</div>
					  		</div>
					  		<div class="fenlanContent">
					  			<div class="fenlanOne">5000</div>
					  			<div class="fenlanTwe">会员总数</div>
					  		</div>
					  	</div>
					  </div>
				  </div>
			  </el-col>
			</el-row>
		</div>
		<!--订单统计-->
		<div>
			<el-row>
			<div class="stat">
				<div class="statTitle">订单统计</div>
				<el-col :span="5">
						<div class="statAll">
									<div class="statData">
										<div class="statContent-one">
											<div class="stat-one">本月订单统计</div>
											<div class="stat-two">10000</div>
											<div  class="stat-three"><span class="stat-three-1">+10%</span><span>同比上月</span>
												</div>
										</div>
										<div class="statContent-two">
											<div class="stat-one">本周订单总数</div>
											<div class="stat-two">1000</div>
											<div  class="stat-three"><span class="stat-three-2">-10%</span><span>同比上月</span>
											</div>
										</div>
										<div class="statContent-three">
											<div class="stat-one">本月销售总额</div>
											<div class="stat-two">100000</div>
											<div  class="stat-three">
												<span class="stat-three-3">+10%</span><span>同比上月</span>
												</div>
										</div>
										<div class="statContent-four">
											<div class="stat-one">本周销售总额</div>
											<div class="stat-two">50000</div>
											<div  class="stat-three"><span class="stat-three-4">-10%</span><span>同比上月</span>
											</div>
										</div>
									</div>
							</div>
						
						</el-col>	
					<el-col :span="19">
						<div class="vacharts">
							<vcharts></vcharts>
						</div>
					</el-col>
					</div>
			</el-row>
		</div>
		</div>
</template>

<script>
	import img1 from '@/assets/images/home_order.png';
	import img2 from '@/assets/images/home_yesterday_amount.png';
	import img3 from '@/assets/images/home_today_amount.png';
	import vcharts from './components/vcharts.vue';
	export default {
		name:'home',
		data:function(){
			return {
				img1,
				img2,
				img3,
				//待处理事务
				PendingArr:[
					{"name":"待付款订单","count":10},
					{"name":"已完成订单","count":5},
					{"name":"待确认收货订单","count":20},
					{"name":"待发货订单","count":30},
					{"name":"新缺货登记","count":6},
					{"name":"待处理退款申请","count":8},
					{"name":"已发货订单","count":12},
					{"name":"待处理退货订单","count":9},
					{"name":"广告位即将到期","count":10},
				],
				//订单统计
				TongjiArr:[
					{"name":"本月订单统计","num":10000,"up":"+10","type":"同比上月"},
					{"name":"本周订单总数","num":1000,"up":"-10","type":"同比上周"},
					{"name":"本月销售总额","num":100000,"up":"+10","type":"同比上月"},
					{"name":"本周销售总额","num":50000,"up":"-10","type":"同比上周"},
				],
				//图表的数据
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
			}
		},
		
		components:{
			vcharts
		}
	}
</script>

<style lang="scss" scoped="scoped">

	
	.app-container{
		margin-top:20px;
		background: white;
		min-width: 900px;
		.total-layout{
			margin-top: 4%;
			margin-left: 4%;
			.total-box{
				width:31%;
				height:6rem;
				border:1px solid #ccc;
				margin-left:0.7%;
				margin-right: 0.7%;
				.total-box1 {
					display: flex; 
					flex-wrap: nowrap; 
					flex-direction: row;
					margin: 1rem;
					img{
						width:4rem;
						height:4rem;
					}
					
					.div-1{
						margin-left: 2.7%;
						.div-2{
							color: #8C8C8C;
						}
						.div-3{
							font-weight: bold;
							color: #6c6c6c;
						}
					}
				}
			}
		}
		//待处理事务的样式
		.un-handle-layout{
			border:1px solid #ccc; 
			margin-top:20px;
			margin-left:4.67%;
			margin-right: 3.3%;

			.un-handle-title{
				padding-left:20px;
				background: #f7f9ff;
				height:45px;
				line-height: 45px;
				font-weight: bold;
				color: #6c6c6c;
			}
			.un-handle-con{
				margin-left:4%;
				margin-right:20px;
				margin-bottom:20px;
				margin-top: 2%;
				.un-handle-item{
					color: #6c6c6c;
					border-bottom:0.1px solid #e9e9e9;
					height:40px;
					line-height:40px;
					margin-right:20px;
					display: flex;
					flex-wrap: nowrap; 
					flex-direction: row;
					justify-content: space-between;
				}
			}
			
		
		}
		
		
	}
	.font-red{color:#ff6b6b;}
	
	.fenlan{
		margin-top: 1.25rem;
		margin-left: 4.67%;
		margin-right: 3.3%;
		.fenlanAll{
			border: 1px solid #CCCCCC;
			height: 11rem;
			.fenlanTitle{
				padding-left:20px;
				background: #f7f9ff;
				height:45px;
				line-height: 45px;
				font-weight: bold;
				color: #6c6c6c;
			}
			.fenlanData{
				display: flex;
				justify-content: space-around;
				margin-top: 1.875rem;
				margin-left: 2.5rem;
				margin-right: 1.5rem;
				.fenlanContent{
					padding: 0.625rem;
					.fenlanOne{
						font-size:1.3rem;
						color: #ff6b6b;
						text-align: center;
					}
					.fenlanTwe{
						color: #6c6c6c;
						margin-top: 10%;
						text-align: center;
					}
				}
			}
		}
	}
	
	.stat{
		border: 1px solid #CCCCCC;
		margin-left: 4.67%;
		margin-top: 1.25rem;
		margin-right: 3.3%;
		height: 29rem;
			.statTitle{
				padding-left:20px;
				background: #f7f9ff;
				height:45px;
				line-height: 45px;
				font-weight: bold;
				color: #6c6c6c;
			}
			
			.statAll{
				height: 25rem;
				border-right: 0.1px solid #e9e9e9;
				.statData{
					margin-left: 15%;
					.stat-one{
						font-size: 0.9rem;
						color: #8c8c8c;
						margin-top: 1.4rem;
					}
					.stat-two{
						font-size: 1.4rem;
						color: #454545;
						margin-top: 0.4rem;
					}
					.stat-three{
						font-size: 0.8rem;
						color: #8c8c8c;
						margin-top: 0.4rem;
						.stat-three-1{
							color: green;
						}
						.stat-three-3{
							color: green;
						}
						.stat-three-2{
							color:red;
						}
						.stat-three-4{
							color: red;
						}
					}
				}
			}
	}
	
	.vacharts{
		margin-top: 5%;
	}
</style>