<template>
	<div class="navbar-container" style="background: white;">
		<div class="navbar-title" style="margin-left: 2%; width: 10rem;"><i class="icon iconfont" style="margin-left: 2%;">&#xe604;</i><span class="fontTitle">首页</span></div>
		<div class="navbar-img">
			<el-dropdown>
			  <div class="user-wrapper "  >
				  <img class="user-img" :src="loginimg" alt="userimg"/>
				  <i class="el-icon-caret-bottom"></i>
			  </div>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>首页</el-dropdown-item>
			    <el-dropdown-item>退出</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	/* @ 表示的是 src目录*/
	import loginimg from '@/assets/images/mz_small_icon.png';
	export default {
		name:'navbar',
		data:function(){
			return {
				loginimg
			}
		},
		
	}
</script>

<style scoped="scoped" lang="scss">
	.el-dropdown-link {
	    cursor: pointer;
	    color: #409EFF;
	  }
	  .el-icon-arrow-down {
	    font-size: 12px;
	  }
	  .user-wrapper{
		  .user-img{width:40px; height:40px; border-radius: 50%; margin-top:5px;margin-right:5px;}
	  }
	  
	  .fontTitle{
		  margin-left: 2rem;
		  font-size: 1.1rem;
		  color: #6c6c6c;
	  }
</style>
