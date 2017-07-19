import Vue from 'vue';

import zzgHeader from './../components/zzgHeader.vue';
import banner from './../components/banner.vue';
import zzg_article from './../components/zzg_article.vue';
import zzg_footer from './../components/zzg_footer.vue';

let myVue = new Vue({
	el:'#content',
	components:{
		'zzg_header':zzgHeader,
		'banner':banner,
		'zzg_article':zzg_article,
		'zzg_footer':zzg_footer,
	},
});