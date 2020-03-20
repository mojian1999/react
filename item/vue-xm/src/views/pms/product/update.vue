<template>
	<div class="allBoxs">
		<div class="allBox">
			 <i class="icon iconfont">&#xe607;</i>
			<div>填写商品信息</div>
		</div>
		<div class="formAll">
			<el-form :model="productValue" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			 <el-form-item label="商品分类:" prop="name" placeholder="请选择">
				<el-cascader class="input-width"  placeholder="请选择"  clearable
			    v-model="selectProductCateValue"
			    :options="productCateOptions"
			   ></el-cascader>
			  </el-form-item>
			  <el-form-item label="商品名称:" prop="name">
			    <el-input v-model="productValue.name" style="width: 600px;"></el-input>
			  </el-form-item>
			  <el-form-item label="副标题:" prop="sub_title">
			    <el-input v-model="productValue.sub_title" style="width: 600px;"></el-input>
			  </el-form-item>
			  <el-form-item label="商品品牌:" prop="brand_id">
				<el-select v-model="productValue.brand_id" placeholder="请选择品牌">
				  <el-option v-for="item in brandOptions"
				  	   :key = "item.id" :label="item.name" :value="item.id"
				  	   ></el-option>
				  </el-select>
				</el-select>
			   </el-form-item>
			    <el-form-item label="商品介绍:" prop="description">
			       <el-input type="textarea" v-model="productValue.description" style="width: 600px;"  placeholder="请输入内容"></el-input>
			     </el-form-item>
				 <el-form-item label="图片链接地址:" prop="pic"  style="margin-left: -20px;" label-position="left" label-width="120px">
				   <el-input v-model="productValue.pic" style="width: 600px;"></el-input>
				 </el-form-item>
				 <el-form-item label="商品货号:"  style="width: 600px;">
				   <el-input v-model="productValue.product_sn" style="width: 600px;"></el-input>
				 </el-form-item>
				 <el-form-item label="商品售价:"  style="width: 600px;">
				   <el-input v-model="productValue.price" style="width: 600px;"></el-input>
				 </el-form-item>
				 <el-form-item label="市场价:"  style="width: 600px;">
				   <el-input v-model="productValue.original_price" style="width: 600px;"></el-input>
				 </el-form-item>
				 <el-form-item label="商品库存"  style="width: 600px;">
				   <el-input v-model="productValue.stock" style="width: 600px;"></el-input>
				 </el-form-item>
				 <el-form-item label="计数单位"  style="width: 600px;">
				   <el-input v-model="productValue.unit" style="width: 600px;"></el-input>
				 </el-form-item>
				 <el-form-item label="商品重量"  style="width: 200px;">
					 <div style="display: flex;width: 300px;"><el-input v-model="productValue.weight"></el-input><span class="ke" style="margin-left: 10px;">克</span></div>
				 </el-form-item>
				 <el-form-item label="排序"  style="width: 600px;">
				   <el-input v-model="productValue.sort" style="width: 600px;"></el-input>
				   </el-form-item>
			<el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
		    <el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
			</el-form>
		 	</div>
		 </div>
</template>

<script>
	import {fetchCateList,brand,updateProduct,getOneProduct,getParentProductCate} from '../../../api/product';
	export default{
		name:'addpoduct',
		data:function(){
			return {
				//商品的默认数据
				productValue:{//需要提交的数据
					brand_id: null,//商品品牌id
					brand_name: '',//商品品牌名称
					delete_status: 0,//删除标志位，默认填0，表示未删除
					description: '',//商品介绍
					name: '',//商品名称
					original_price: 0,//市场价
					pic: '',//商品图片的url地址
					price: 0,//商品售价
					product_category_id: null,//分类id
					product_category_name: '',//分类名称
					product_sn: '',//商品货号
					sort: 0,//排序
					stock: 0,//商品库存
					sub_title: '',//副标题
					unit: '',//计量单位
					weight: 0,//商品重量
					sale:0,//商品销量
					publish_status:0,//上架
					new_status:0,//新品
					recommand_status:0,//推荐
					verify_status:0//审核状态  默认是未审核
				},				
				rules:{
					name:[
						{required:true,message:'请输入商品名称',trigger:'blur'},
						{min:2,max:140,message:'长度在2-140个字符',trigger:'blur'}
					],
					sub_title:[
						{required:true,message:'请输入商品副标题',trigger:'blur'},
					],
					product_category_id:[
						{required:true,message:'请选择商品分类',trigger:'blur'},
					],
					brand_id:[
						{required:true,message:'请选择商品品牌',trigger:'blur'},
					],
					description:[
						{required:true,message:'请输入商品介绍',trigger:'blur'},
					],
					pic:[
						{required:true,message:'请输入图片地址',trigger:'blur'},
					],
				},
				productCateOptions:[],
				selectProductCateValue:[],
				brandOptions:[],

			}
		},
		watch:{
			selectProductCateValue:function(newValue){
				console.log(newValue);
				if(newValue !== null && newValue.length === 2){
					this.productValue.product_category_id = newValue[1];
				}else{
					this.productValue.product_category_id = null;
				}
			}
		},
		mounted:function(){
			getOneProduct({id:this.$route.query.id}).then(res=>{
				console.log(res);
				this.productValue = res.data;
				getParentProductCate({id:this.productValue.product_category_id}).then(res=>{
					console.log(res);
					console.log(res.data.parent_id);
					this.selectProductCateValue.push(res.data.parent_id);
					this.selectProductCateValue.push(this.productValue.product_category_id);
				})	
			})
			this.getCateList();
			this.getBrandList();
		},
		methods:{
			submitForm(formName){
				console.log(formName);
				this.$refs[formName].validate((valid)=>{
					if(valid){
						for(var i = 0;i<this.brandOptions.length;i++){
							if(this.brandOptions[i].id == this.productValue.brand_id){
								this.productValue.brand_name = this.brandOptions[i].name;
								break;
							}
						}
						for(var i = 0;i<this.productCateOptions.length;i++){
							for(var j = 0;j<this.productCateOptions[i].children.length;j++){
								if(this.productCateOptions[i].children[j].value == this.productValue.product_category_id){
									this.productValue.product_category_name = this.productCateOptions[i].children[j].label;
									break;
								}
							}
						}
						console.log(this.productValue);
						updateProduct(this.productValue).then(res=>{
							console.log(res);
							if(res.type ==='success'){
								this.$message({
									message:'成功修改商品',
									duration:1000,
									type:'success'
								})
								this.$router.push('/pms/product');
							}
						})
					}
				})
				
			},
			getCateList:function(){
				fetchCateList().then(res=>{
					console.log(res);
					let list = res.data;
					this.productCateOptions = [];
					for(var i = 0;i<list.length;i++){
						let children = [];
						if(list[i].children != null && list[i].children.length>0){
							for(var j = 0;j<list[i].children.length;j++){
								children.push({label:list[i].children[j].name,value:list[i].children[j].id});	
							}
						}
						this.productCateOptions.push({label:list[i].name,value:list[i].id,children:children});
					}
					console.log(this.productCateOptions);
				})
			},
			getBrandList:function(){
				brand().then(res=>{
					this.brandOptions = res.data;
				})
			},
		}
	}
</script>

<style  scoped="scoped" lang="scss">
	.allBoxs{
		background: white;
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
		}
	}
	
	.formAll{
		margin-top: 30px;
		margin-left: 30px;
	}
	
	.ke{

	}
	
</style>
