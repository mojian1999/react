<template>
	<div class="product-con">
		<div class="allBox">
			 <i class="icon iconfont">&#xe607;</i>
			<div>商品类型数据列表</div>
			<el-button size="mini" class="btn2">添加</el-button>
		</div>
		<div class="con-all">
			<template>
			  <el-table
			    :data="list"
			    border
			    style="width: 100%">
			    <el-table-column prop="id" label="编号" align="center" width="100px">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="类型名称" align="center" width="650px">
			    </el-table-column>
				<el-table-column
				  label="属性数量" align="center" prop="attribute_count">
				</el-table-column>
				<el-table-column
				  label="参数数量"  prop="param_count" align="center">
				</el-table-column>
				<el-table-column label="操作"  align="center">
					<template slot-scope="scope">
						<el-button
							  size="mini"
							  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button
							  size="mini"
							  type="danger"
							  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
					
				</el-table-column>
			  </el-table>
			</template>
		</div>
		<el-pagination class="page"
			     @size-change="handleSizeChange"
			     @current-change="handleCurrentChange"
			     :current-page="listQuery.pageNum"
			     :page-sizes="[5,10,15]"
			     :page-size="listQuery.pageSize"
				 background
			     layout="total, sizes, prev, pager, next, jumper"
			     :total="10">
			   </el-pagination>
	</div>
</template>

<script>
	import {productAttr} from '../../../api/product';
	export default {
		name:"productAttr",
		data:function(){
			return {
				list:[],
				value1:true,
				value2:false,
				total:null,
				total:null,
				listQuery:{
					name:null,
					pageNum:1,
					pageSize:5,
					publish_status:null,
					verify_status:null,
					product_sn:null,
					product_category_id:null,
					brand_id:null,
					},
			}
			
		},
		
		mounted:function(){
			this.getList()
		},
		
		methods:{
			getList:function(){
				productAttr().then(data=>{
					this.list = data.data
					console.log(this.list)
				})
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.listQuery.pageNum = 1;
				this.listQuery.pageSize = val;
				this.getList();		
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.listQuery.pageNum = val;
				this.getList();
			},
		}	
		
	}
</script>

<style scoped="scoped" lang="scss">
	
	.product-con{
		width: 100%;
		background: white;
		min-width: 1320px;
		.con-all{
			margin-left: 1.1%;
			margin-top: 1.1%;
			width: 98%;
			
	
		}
		.allBox{
			margin-top: 1.1%;
			margin-left: 1.1%;
			margin-right: 1%;
			height: 50px;
			display: flex;
			border: 0.1px solid #e8e8e8;
			div{
				font-size: 18px;
				margin-top: 1%;
				margin-left: 1%;
			}
			
			.iconfont{
				font-size: 20px;
				margin-left: 1%;
				margin-top: 1%;
			}
			.btn2{
				height: 50%;
				margin-left: 80%;
				margin-top: 1%;
			}
			
		}
		
	}
	
	.page{
		text-align: right;
		margin-top: 20px;
		margin-bottom: 40px;
		margin-right: 0.6%;
	}
</style>
