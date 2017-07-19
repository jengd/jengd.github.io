import Vue from 'vue';

import userlogin from './../components/user-login.vue';

let myVue = new Vue({
	el:'#content',
	components:{'userlogin':userlogin}
});

window.onhashchange = function () {
	if (window.location.hash == '#admin')
		myVue.$children[0].$data.isAdmin = true;
	else
		myVue.$children[0].$data.isAdmin = false;
}