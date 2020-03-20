import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/home/index.vue'
//引入框架页面
import Layout from '../views/layout';


Vue.use(VueRouter)

const routes = [{
		path: '/login',
		component: () => import( /*webpackChunkName:"login"*/ '@/views/login/index')
	},
	{
		path: '*',
		component: () => import( /*webpackChunkName:"404"*/ '@/views/404')
	},
	{
		path: '',
		component: Layout,
		redirect: '/home',
		name: 'home',
		children: [{
				path: 'home',
				name: 'myhome',
				component: () => import( /*webpackChunkName:"home"*/ '@/views/home/index')
			}

		],
	},
	{
		path: '/pms',
		component:Layout,
		redirect: '/pms/product',
		name: 'pms',
		children: [{
				path: 'product',
				name: 'product',
				component: () => import( /*webpackChunkName:"product"*/ '@/views/pms/product/index')
			},
			{
				path: 'addproduct',
				name: 'addproduct',
				component: () => import( /*webpackChunkName:"addproduct"*/ '@/views/pms/product/add')
			},
			{
				path: 'productCate',
				name: 'productCate',
				component: () => import( /*webpackChunkName:"productCate"*/ '@/views/pms/productCate/index')
			},
			{
				path: 'productAttr',
				name: 'productAttr',
				component: () => import( /*webpackChunkName:"productAttr"*/ '@/views/pms/productAttr/index')
			},
			{
				  path:'updateproduct',
				  name:'updateproduct',
				  component:()=>import(/*webpackChunkName:"updateproduct"*/'@/views/pms/product/update') 
			},
			{
				path: 'brand',
				name: 'brand',
				component: () => import( /*webpackChunkName:"brand"*/ '@/views/pms/brand/index')
			},
			{
				path: 'addproducttwo',
				name: 'addproducttwo',
				component: () => import( /*webpackChunkName:"brand"*/ '@/views/pms/productCate/add')
			}
		]
	}
]

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const router = new VueRouter({
	routes,
})

export default router
