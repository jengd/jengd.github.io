<template>
	
  <div class="form-group">
    <label class="col-sm-2 control-label">用户名：</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-on:change='userInfo' v-model='username' :placeholder="placeholder">
    </div>
	  <div class="row">&nbsp;</div>
	  <label class="col-sm-2 control-label">密码：</label>
	<div class="col-sm-10">
	  <input type="text" class="form-control" v-on:change='userInfo' v-model='password' :placeholder="placeholder_password">
	</div>
  </div>
		
</template>

<script type="text/javascript">

	export default({

		props:['placeholder', 'placeholder_password'],

		data:function(){
			return {
				username:'',
				password:''
			}
		},
		methods:{
			userInfo:function(){
				this.$emit('updateUserName', this.username, this.password)  /*$emit发射到父组件的updateUserName监听事件中*/
			}
		}

	})

</script>