<template>
	<div class="product-con">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
			<span><i class="icon iconfont icon-sousuo-copy"></i> 筛选搜索</span>
			<el-button class="btnOne"  type="button" @click = "handleresetList()">重置</el-button>
			<el-button class="btnTwo" type="primary" @click="handleSearchList()">查询</el-button>
		  </div>
		  <el-form ref="form" :model="listQuery" label-width="80px" style="display: flex; margin-top: 10px;height: 50px;">
		    <el-form-item label="输入搜索:">
		     <el-input class="input-width"  v-model="listQuery.name" placeholder="商品名称" style="width: 180px"></el-input>
		    </el-form-item>
			<el-form-item label="商品货号:">
			 <el-input class="input-width"  v-model="listQuery.product_sn" placeholder="商品货号"></el-input>
			</el-form-item>
			<el-form-item label="商品分类:">
			  <el-cascader class="input-width"  placeholder="请选择"  clearable
			    v-model="selectProductCateValue"
			    :options="productCateOptions"
			   ></el-cascader>
			</el-form-item> 
			  <el-form-item label="商品品牌">
			    <el-select v-model="listQuery.brand_id" placeholder="请选择">
			      <el-option label="iPhone" value="51"></el-option>
			      <el-option label="小米" value="6"></el-option>
				    <el-option label="HLA" value="50"></el-option>
					<el-option label="耐克" value="58"></el-option>
					<el-option label="其他" value="1"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="上架状态">
			    <el-select v-model="listQuery.publish_status" placeholder="请选择">
			      <el-option label="是" value="1"></el-option>
			      <el-option label="否" value="0"></el-option>
			    </el-select>
			  </el-form-item>  
			  <el-form-item label="审核状态">
			<el-select v-model="listQuery.verify_status" placeholder="请选择">
			  <el-option label="是" value="1"></el-option>
			  <el-option label="否" value="0"></el-option>
			</el-select>
		  </el-form-item>
		  </el-form>		
		</el-card>
		<div class="allBox">
			 <i class="icon iconfont">&#xe607;</i>
			<div>数据列表</div>
			<el-button size="mini" class="btn2" @click="add">添加</el-button>
		</div>
		<div class="con-all">
			<template>
			  <el-table
			    :data="list"
			    border
			    style="width: 100%">
			    <el-table-column prop="id" label="编号">
			    </el-table-column>
			    <el-table-column label="商品图片" >
				  <template slot-scope="scope">
					  <img class="list-img" :src="scope.row.pic" />
				  </template>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="商品名称">
			    </el-table-column>
				<el-table-column
				  label="价格/货号">
				  <template slot-scope="scope">
					  <div>价格：￥ {{scope.row.price}}</div>
					  <div>货号：{{scope.row.product_sn}}</div>
				  </template>
				</el-table-column>
				<el-table-column
				  label="标签" align="center">
				  <template slot-scope="scope"  >
					  <div>上架：{{scope.row.publish_status | statusFilter}}</div>
					  <div>新品：{{scope.row.new_status | statusFilter}}</div>
					  <div>推荐：{{scope.row.recommand_status | statusFilter}}</div>
				  </template>
				</el-table-column>
				<el-table-column label="排序" prop="sort" align="center"></el-table-column>
				<el-table-column label="销量" prop="sale"  align="center"></el-table-column>
				<el-table-column label="审核状态" align="center">未审核</el-table-column>
				<el-table-column label="操作"  align="center">
					<template slot-scope="scope">
						<el-button
							  size="mini"
							   @click="handleUpdatePeoduct(scope.row)">编辑</el-button>
							<el-button
							  size="mini"
							  type="danger"
							  @click="handleDelete(scope.row)">删除</el-button>
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
	import {fetchList,fetchCateList,deleteProduct} from '../../../api/product';
	export default{
		name:'productList',
		data:function(){
			return{
				list:[] ,
				cateList:[],
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
					productCateOptions:[],
					selectProductCateValue:"",
					total:0
			}
		},
		watch:{
			selectProductCateValue:function(newValue){
				if(newValue !== null && newValue.length === 2){
					this.listQuery.product_category_id = newValue[1];
				}else{
					this.listQuery.product_category_id = null;
				}
			}
		},
		mounted:function(){
			this.getList();
			this.getCateList()
		},
		
		methods:{
			handleUpdatePeoduct:function(row){
				//跳转到修改页面
				this.$router.push({path:'/pms/updateproduct',query:{id:row.id}});
			},
			add:function(){
				this.$router.push("/pms/addproduct")
			},
			getList:function(){
				fetchList(this.listQuery).then(res=>{
					console.log(this.listQuery);
					this.list = res.product;
					this.total = res.total;
				})
			},
			 handleEdit(index, row) {
				console.log(index, row);
			  },
			  handleDelete(row) {
				this.$confirm('是否要进行删除操作？','提示',{
					confirmButtonText:'确定',
					cancelButtonText:'取消',
					type:'warning'
				}).then(()=>{
					console.log(row.id);
					deleteProduct({'id':row.id}).then(res=>{
						console.log(res);
						if(res.type === 'success'){
							this.getList();
						}
					})
				})
			  },
			  handleSearchList:function(){
				this.getList();
			  },
			  onSubmit() {
        console.log('submit!');
      },
	  getCateList:function(){
	  	fetchCateList().then(res=>{
	  		let list = res.data;
	  		this.productCateOptions = [];
	  		for(var i = 0;i<list.length;i++){
	  			let children = [];
	  			if(list[i].children != null && list[i].children.length>0){//表示分类有子级节点
	  				for(var j = 0;j<list[i].children.length;j++){//将子级节点循环
	  					children.push({label:list[i].children[j].name,value:list[i].children[j].id});	
	  				}
	  			}
	  			this.productCateOptions.push({label:list[i].name,value:list[i].id,children:children});
	  		}
	  		console.log(this.productCateOptions);
	  	})
	  },
	  handleresetList:function(){
	  		this.listQuery = {
	  			name:null,
	  			pageNum:1,
	  			pageSize:10,
	  			publish_status:null,
	  			verify_status:null,
	  			product_sn:null,
	  			product_category_id:null,
	  			brand_id:null 
	  		}
	  		this.selectProductCateValue = null;
	  		this.getList();	
	  	},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.listQuery.pageNum = 1;
			this.listQuery.pageSize = val;
			this.getList();
					console.log(this.listQuery)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.listQuery.pageNum = val;
			this.getList();
			console.log(this.listQuery)
		},
	  },
	  
	  filters:{
	  	statusFilter(value){
	  		if(value === 1){
	  			return "是";
	  		}else{
	  			return "否";
	  		}
	  	},
	  },
	 
	  

	  }
</script>

<style scoped="scoped" lang="scss">
	
	.product-con{
		width: 100%;
		background: white;
		min-width: 1630px;
		.con-all{
			margin-left: 1.1%;
			margin-top: 1.1%;
			width: 98%;
			.list-img{width: 80px;}
	
		}
		.box-card{
			border: 0.1px solid #e8e8e8;
			margin-left: 1.1%;
			margin-top: 1.1%;
			margin-right: 1%;
			.clearfix{
				.btnOne{
					width: 60px;
					height: 20px;
					font-size: 13.5px;
					margin-left: 86%;
					padding: 9px;
					padding-bottom: 20px;
					
				}
				
				.btnTwo{
					
					width: 60px;
					height: 20px;
					font-size: 15px;
					padding: 8px;
					padding-bottom: 20px;
				}
			}
		}
	}
	.el-form-item__label{
		font-size: 13px;
	}
	
	.allBox{
		margin-top: 1.1%;
		margin-left: 1.1%;
		margin-right: 1%;
		height: 60px;
		display: flex;
		border: 0.1px solid #e8e8e8;
		div{
			font-size: 16px;
			margin-top: 1%;
			margin-left: 0.5%;
		}
		
		.iconfont{
			font-size: 20px;
			margin-left: 1.1%;
			margin-top: 1%;
		}
		.btn2{
			height: 50%;
			margin-left: 87%;
			margin-top: 1%;
		}
		
	}
	
	.page{
		text-align: right;
		margin-top: 20px;
		margin-bottom: 40px;
		margin-right: 0.6%;
	}
</style>
