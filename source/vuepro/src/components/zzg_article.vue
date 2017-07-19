<template>
	<div>
		<article>
			<h2 class="title_tj">
				<p>博主<span>推荐</span></p>
			</h2>
			<div class="bloglist left">
				<!--wz-->
				<div class="wz" v-for="item in items">
					<h3>关于响应式布局</h3>
					<p class="dateview"><span>2017-07-04</span><span>作者：虫师</span><span>分类：[<a href="#">web前端</a>]</span></p>
					<figure><img src="images/001.jpg"></figure>
					<ul>
						<p>随着互联网的快速发展，以及html5+css3的迅速崛起。渐渐的响应式布局，也会慢慢的出现在我们的视野里，身为专业的web前端，还不学习新技术你就out啦！为什么这样说呢？因为响应式布局能同时兼容多个终端，比如（手机、平板、PC）...</p>
						<a title="阅读全文" href="/" target="_blank" class="readmore">阅读全文>></a>
					</ul>
					<div class="clear"></div>
				</div>
				<!--end-->

			</div>
			<!--right-->
			<aside class="right">
				<div class="my">
					<h2>关于<span>博主</span></h2>
					<img src="images/my.jpg" width="200" height="200" alt="博主">
					<ul>
						<li>博主：虫师</li>
						<li>职业:web前端、php后台攻城师</li>
						<li>简介：一个不断学习和研究，web前端和php技术的90后草根人士.</li>
						<li></li>
					</ul>
				</div>
				<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a

						href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a></div>
				<div class="news">
					<h3 class="ph">
						<p>点击<span>排行</span></p>
					</h3>
					<ul class="paih">
						<li><a href="/" title="如何建立个人博客" target="_blank">如何建立个人博客</a></li>
						<li><a href="/" title="html5标签" target="_blank">html5标签</a></li>
						<li><a href="/" title="一个网站的开发流程" target="_blank">一个网站的开发流程</a></li>
						<li><a href="/" title="做网站到底需要什么?" target="_blank">做网站到底需要什么?</a></li>
						<li><a href="/" title="企业做网站具体流程步骤" target="_blank">企业做网站具体流程步骤</a></li>
					</ul>
					<h3>
						<p>用户<span>关注</span></p>
					</h3>
					<ul class="rank">
						<li><a href="/" title="如何建立个人博客" target="_blank">如何建立个人博客</a></li>
						<li><a href="/" title="一个网站的开发流程" target="_blank">一个网站的开发流程</a></li>
						<li><a href="/" title="关键词排名的三个时期" target="_blank">关键词排名的三个时期</a></li>
						<li><a href="/" title="做网站到底需要什么?" target="_blank">做网站到底需要什么?</a></li>
						<li><a href="/" title="关于响应式布局" target="_blank">关于响应式布局</a></li>
						<li><a href="/" title="html5标签" target="_blank">html5标签</a></li>
					</ul>

					<h3 class="links">
						<p>友情<span>链接</span></p>
					</h3>
					<ul class="website">
						<li><a href="#">个人博客</a></li>
					</ul>
				</div>
			</aside>
		</article>
	</div>
</template>

<script type="text/javascript">

	export default({
		data: function () {
			return {
				items: [
					{message: 'Foo' },
					{},
					{},
					{},
					{},
				]
			}
		}
	})

</script>
