<template>
	<div class="sidebar-container">
		<el-row class="tac" style="width: 101%;">
		  <el-col>
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose"
		      background-color= "#304156"
		      text-color="#fff"
		      active-text-color="#ffd04b">
			  <router-link to="/home">
				<el-menu-item index="2">
					<i class="el-icon-s-home"></i>
					<span slot="title">首页</span>
				</el-menu-item>
			  </router-link>
			  
		      <el-submenu index="1">
		        <template slot="title" style="text-align: center;">
		          <i class="icon iconfont">&#xe683;</i>
		          <span style="margin-left: 10%;">商品</span>
		        </template>
		        <el-menu-item-group>
		          <router-link to="/pms/product"><el-menu-item index="1-1"><i class="icon iconfont" style="margin-right: 10%;">&#xe609;</i>商品列表</el-menu-item></router-link>
		          <router-link to="/pms/addproduct"><el-menu-item index="1-2"><i class="icon iconfont" style="margin-right: 10%;">&#xe752;</i>添加商品</el-menu-item></router-link>
		          <router-link to="/pms/productCate"><el-menu-item index="1-3"><i class="icon iconfont" style="margin-right: 10%;">&#xe624;</i>商品分类</el-menu-item></router-link>
				  <router-link to="/pms/productAttr"><el-menu-item index="1-4"><i class="icon iconfont" style="margin-right: 10%;">&#xe6d4;</i>商品类型</el-menu-item></router-link>
				  <router-link to="/pms/brand"><el-menu-item index="1-5"><i class="icon iconfont" style="margin-right: 10%;">&#xe70d;</i>品牌管理</el-menu-item></router-link>
		        </el-menu-item-group>
		      </el-submenu>
			<el-submenu index="1">
			  <template slot="title">
			    <i class="icon iconfont">&#xe626;</i>
			    <span style="margin-left: 10%;">订单</span>
			  </template>
			  <el-menu-item-group>
			    <el-menu-item index="2-1"><i class="icon iconfont" style="margin-right: 10%;">&#xe609;</i>订单列表</el-menu-item>
			    <el-menu-item index="2-2"><i class="icon iconfont" style="margin-right: 10%;">&#xe61b;</i>订单设置</el-menu-item>
			    <el-menu-item index="2-3"><i class="icon iconfont" style="margin-right: 10%;">&#xe614;</i>退货申请处理</el-menu-item>
				<el-menu-item index="2-4"><i class="icon iconfont" style="margin-right: 10%;">&#xe716;</i>退货原因</el-menu-item>
			  </el-menu-item-group>
			</el-submenu>
		    </el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:'sidebar',
		  data() {
		      return {
		        isCollapse: true
		      };
		    },
		 methods: {
		      handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
		      handleClose(key, keyPath) {
		        console.log(key, keyPath);
		      }
		    }
	}
</script>

<style>
</style>
