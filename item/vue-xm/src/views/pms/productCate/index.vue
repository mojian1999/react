<template>
	<div class="product-con">
		<div class="allBox">
			 <i class="icon iconfont">&#xe607;</i>
			<div>数据列表</div>
			<el-button size="mini" class="btn1" @click="handleBack" >返回上级节点</el-button>
			<el-button size="mini" class="btn2"  @click="goAddProductCate" >添加</el-button>
		</div>
		<div class="con-all">
			<template>
			  <el-table
			    :data="list"
			    border
			    style="width: 100%">
			    <el-table-column prop="id" label="编号" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="商品名称" align="center">
			    </el-table-column>
				<el-table-column  label="级别" align="center">
					<template slot-scope="scope">{{scope.row.level | levelFilter}}</template>
				</el-table-column>
				<el-table-column
				  label="商品数量"  prop="product_count" align="center">
				</el-table-column>
				<el-table-column label="数量单位" prop="product_unit" align="center"></el-table-column>
				<el-table-column label="是否显示" align="center">
					<template slot-scope="scope">
						<el-switch
					  v-model="value1" v-if="scope.row.show_status == 1">
					</el-switch>
					<el-switch
					  v-model="value2" v-else>
					</el-switch>
						</template> 
				</el-table-column>
				<el-table-column label="排序" align="center" prop="sort"></el-table-column>
				<el-table-column  prop="sort"  label="设置" width="100" align="center">
					<template slot-scope = "scope">
						<el-button size="mini" @click="handleShowNextLevel(scope.row) " 
						 :disabled="scope.row.level | disableNextLevel"
						 >查看下级</el-button>
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
		     :current-page="listQuery.pageNum"
		     :page-sizes="[5,10,15]"
		     :page-size="listQuery.pageSize"
			 background
		     layout="total, sizes, prev, pager, next, jumper"
		     :total="total">
		   </el-pagination>
	
	</div>
</template>

<script>
	import {fetchProductCate1or2} from '../../../api/product';
	export default {
		name:"productCate",
		data:function(){
			return {
				list:[],
				value1:true,
				value2:false,
				parent_id:0,
				listTwo:[],
				total:0,
				listQuery:{
					pageNum:1,
					pageSize:5,
					},
			}
			
		},
		
		mounted:function(){
			this.getList()
			this.getListTwo()
		},
		filters:{
			levelFilter:function(value){
				if(value === 0){
					return '一级'; 
				}else{
					return '二级';
				}
			},
			disableNextLevel:function(value){
					if(value == 0){//一级
						return false;
					}else{
						return true;
					}
				}
			},
			watch:{
				$route(route){
					this.getList();
					this.getListTwo();
				}
			},
		methods:{
			getListTwo:function(){
				if(this.$route.query.parentId != null){
					this.parent_id = this.$route.query.parentId;
				}else{
					this.parent_id = 0;
				}
			},
			getList:function(){
				fetchProductCate1or2(this.parent_id,this.listQuery).then(res=>{
					console.log(res);
					this.list = res.data;
					this.total = res.total;
				})
			},
			
			goAddProductCate:function(){
				this.$router.push('addproducttwo')
				
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
			handleShowNextLevel:function(row){
				this.$router.push({path:'/pms/productCate',query:{parentId:row.id}});
				
			},
			handleBack:function(){
				this.$router.push({path:'/pms/productCate'});
			}
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
			.btn1{
				height: 50%;
				margin-left: 77%;
				margin-top: 1%;
			}
			
			.btn2{
				height: 50%;
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
