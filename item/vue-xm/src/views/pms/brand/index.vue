<template>
	<div class="product-con">
		<div class="allBox">
			 <i class="icon iconfont">&#xe607;</i>
			<div>数据列表</div>
			<el-button size="mini" class="btn2">添加</el-button>
		</div>
		<div class="con-all">
			<template>
			  <el-table
			    :data="list"
			    border
			    style="width: 100%">
				<el-table-column prop="id" label="" align="center" width="50px">
					<el-checkbox v-model="checked"></el-checkbox>
				</el-table-column>
			    <el-table-column prop="id" label="编号" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="品牌名称" align="center">
			    </el-table-column>
				<el-table-column
				  label="品牌首字母" align="center" prop="first_letter">
				</el-table-column>
				<el-table-column
				  label="品牌数量"  prop="product_count" align="center">
				</el-table-column>
				
				<el-table-column label="排序" align="center" prop="sort"></el-table-column>
				<el-table-column label="品牌制造商" align="center">
					<template slot-scope="scope">
						<el-switch
					  v-model="value1" v-if="scope.row.factory_status == 1">
					</el-switch>
					<el-switch
					  v-model="value2" v-else>
					</el-switch>
						</template>
				</el-table-column>
				<el-table-column label="是否显示" prop="product_unit" align="center">
					<template slot-scope="scope">
						<el-switch
					  v-model="value1" v-if="scope.row.show_status == 1">
					</el-switch>
					<el-switch
					  v-model="value2" v-else>
					</el-switch>
						</template>
				</el-table-column>
				<el-table-column label="相关" align="center">
					<template slot-scope="scope">
							<div><span>商品：</span><span style="color: #007AFF">{{scope.row.product_count}}</span></div>
							<div><span>评价：</span><span style="color: #007AFF">{{scope.row.product_comment_count}}</span></div>
						</template>
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
			     :current-page="pageNum"
			     :page-sizes="[5,10,15]"
			     :page-size="pageSize"
				 background
			     layout="total, sizes, prev, pager, next, jumper"
			     :total="total">
			   </el-pagination>
	
	</div>
</template>

<script>
	import {brand,product_brand_pag} from '../../../api/product';
	export default {
		name:"brand",
		data:function(){
			return {
				list:[],
				total:null,
				value1:true,
				value2:false,
				checked:false,
					pageNum:1,
					pageSize:5,
			}
			
		},
		
		mounted:function(){
			this.getList()
			this.getListTwo()
		},
		
		methods:{
			getList:function(){
				brand().then(data=>{
					this.list = data.data
					console.log(this.list)
				})
			},
			getListTwo:function(){
				product_brand_pag().then(data =>{
					console.log(data)
					this.total = data.total
					
				})
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.pageNum = 1;
				this.pageSize = val;
				this.getList();	

			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.pageNum = val;
				this.getList();
			},
		}	
		
	}
</script>

<style scoped="scoped" lang="scss">
	
	.product-con{
		width: 100%;
		background: white;
		min-width: 1400px;
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
				margin-left: 85%;
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
