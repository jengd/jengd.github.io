<template>
	
  <div class="form-group">
    <div class="offset2">
      <button type="button" class="btn btn-success" v-on:click="submit">登录</button>
    </div>
  </div>
		
</template>

<script type="text/javascript">

	export default({

		methods:{
			submit:function() {
				alert(this.$parent.$data.username + '*****' + this.$parent.$data.username)
			}
		},

	})

</script>