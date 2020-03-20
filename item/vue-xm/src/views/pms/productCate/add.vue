<template>
	<div class="product-con">
		<div class="allBox">
			 <i class="icon iconfont">&#xe607;</i>
			<div>修改商品分类信息</div>
		</div>
		<div>
			<el-form :model="productCate" :rules="rules" ref="productCate" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="分类名称:" prop="name">
			    <el-input v-model="productCate.name"></el-input>
			  </el-form-item>
			   <el-form-item label="上级分类:">
			      <el-select v-model="productCate.parent_id" placeholder="请选择">
			        <el-option label="区域一" value="shanghai"></el-option>
			        <el-option label="区域二" value="beijing"></el-option>
			      </el-select>
			    </el-form-item>
				<el-form-item label="数量单位:">
				  <el-input v-model="productCate.product_unit"></el-input>
				</el-form-item>
				<el-form-item label="排序:">
				  <el-input v-model="productCate.sort"></el-input>
				</el-form-item>
				<el-form-item label="是否显示:">
				  <el-radio v-model="radio" label="0">是</el-radio>
				  <el-radio v-model="radio" label="1">否</el-radio>
				</el-form-item>
				<el-form-item label="是否显示在导航栏:">
				  <el-radio v-model="radio1" label="0">是</el-radio>
				  <el-radio v-model="radio1" label="1">否</el-radio>
				 </el-form-item>
				 
				 3
				 <el-form-item label="分类描述:">
				   <el-input v-model="productCate.product_unit"></el-input>
				 </el-form-item>
				  <el-form-item>
				     <el-button type="primary" @click="onSubmit">提交</el-button>
				     <el-button>重置</el-button>
				   </el-form-item>
		    </el-form>
		</div>
	</div>
</template>

<script>
	export default{
		name:"addproducttwo",
		data:function(){
			return{
				productCate:{
					description: '',//描述
					icon: '',//小图标
					keywords: '',//关键字
					name: '',//分类的名称
					nav_status: 0,//是否显示在导航栏
					parent_id: 0,//父级节点id  ，顶级节点这个值为0
					product_unit: '',//数量单位
					product_count: 0,//商品数量
					show_status: 0,//是否显示
					sort: 0,//排序
					level:0//0表示一级分类 1表示二级分类
				},
				
				rules:{
					name:[
						{ required: true, message: '请输入活动名称', trigger: 'blur' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
					]
				},
				 radio: '1',
				 radio1: '1',
				 
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.product-con{
		background: white;
		.allBox{
			margin-top: 1.1%;
			margin-left: 1.1%;
			margin-right: 1%;
			height: 55px;
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
	}
	}
</style>
