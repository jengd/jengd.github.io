<style type="text/css">
	@import "./../lib/css/bootstrap.min.css";
	#user{margin-top: 50px;}
</style>

<template>
	<div id="user" class="row">
		<div class="col-sm-8 offset4">
			<form class="form-horizontal">

				<h2 class="offset2" v-if="isAdmin">管理员登录</h2>
				<h2 class="offset2" v-else>用户登录</h2>
			  
			 	<username placeholder='请输入用户名' placeholder_password='请输入密码' ref='uname' v-on:updateUserName="setUserName"></username>   <!--updateUserName为自定义的，供子组件使用-->

			 	<div class="row">&nbsp;</div>

				 <usersubmit></usersubmit>  

				<button class="btn btn-info" v-on:click="test">测试</button>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">

	import username from './user/user-name.vue';
	import usersubmit from './user/user-submit.vue';

	export default({

		components:{
			'username':username,
			'usersubmit':usersubmit
		},
		data:function () {
		 	return {
				username:'',
				password:'',
				isAdmin:false,
			}
		},
		methods:{
			setUserName:function (uname, upass) {
				this.username = uname;
				this.password = upass;
			},
			test:function () {

			},
			/*isAdmin:function () {
				return window.location.hash == '#isadmin';
			}*/
		}

	})

</script>