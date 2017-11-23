<template>
	<div>
		<article>
			<h2 class="title_tj">
				<p>博主<span>推荐</span></p>
			</h2>
			<div class="bloglist left">
				<!--wz-->
				<div class="wz" v-for="item in items">
					<h3>准备好迎接你的“新同事”了吗？他叫人工智能</h3>
					<p class="dateview"><span>2017-11-04</span><span>作者：虫师</span><span>分类：[<a href="#">web前端</a>]</span></p>
					<figure><img src="images/001.jpg"></figure>
					<ul>
						<p>去年秋天，谷歌翻译推出了一个全新升级的人工智能翻译引擎，该引擎翻译文本有时与人工翻译文本“几乎无法区分”。约斯特·赛驰只能不停转动他的眼睛。这位德国人已经做了20年的职业翻译，他一次又一次地听说，他的职业将受到自动化技术进步的威胁。他发现，每一次都是夸张的炒作，谷歌翻译的改头换面也不例外。他认为，这肯定不是翻译的关键...</p>
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
						<li>职业:充满梦想的键盘工作者</li>
						<li>简介：对技术转化为利润具有强烈的欲望</li>
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
						<li><a href="/" title="人工智能带来的高的超人类生产力" target="_blank">人工智能带来的高的超人类生产力</a></li>
						<li><a href="/" title="神经机器翻译" target="_blank">神经机器翻译</a></li>
						<li><a href="/" title="机器可以是有创造力的，而且它们是有创造力的" target="_blank">机器可以是有创造力的，而且它们是有创造力的</a></li>
						<li><a href="/" title="人工智能正在快速掌握我们长期以来一直视为机器无法完成的任务?" target="_blank">人工智能正在快速掌握我们长期以来一直视为机器无法完成的任务?</a></li>
						<li><a href="/" title="创造就业机会" target="_blank">创造就业机会</a></li>
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
