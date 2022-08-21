<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { showLoading } from '@/global/loading';
	import Card from '@/components/card/Card.svelte';
	import CardTitleBlock from '@/components/card/CardTitleBlock.svelte';
	import CardContextBlock from '@/components/card/CardContextBlock.svelte';
	import List from '@/components/card/List.svelte';

	onMount(() => {
		showLoading.set(false);
	});
</script>

<List>
	<Card class="flex flex-col md:flex-row md:justify-between items-center">
		<CardTitleBlock>
			<div transition:fade class="flex justify-center items-center">
				<img src="index/undraw_conversation_re_c26v.svg" alt="doing conversation" class="w-32 h-32" />
			</div>
			<div class="p-5 flex flex-col justify-center items-start">
				<h1 class="font-bold text-5xl">Think different</h1>
				<h1 class="text-3xl">是我们的宗旨与slogan</h1>
			</div>
		</CardTitleBlock>
		<CardContextBlock>
			<p>与具有鲜明科研性质的导师实验室不同，在iOS club，没有标准答案，只有不同的见解。虽然自称实验室，但其实我们的性质更像俱乐部，属于different thinkers的俱乐部。</p>
			<p>在这里，每一个人都有自己的前进路线与学习方向，没有固定模式、没有条条框框，不同路线上的实验室成员聚集在同一屋檐下，进行思维的碰撞、眼界的交流。</p>
			<p>在苹果实验室，我们有丰富的资源支持。无论是深度学习研究、移动应用开发或者任何方向，都能在实验室中获得资源加持。</p>
			<p>在这里，你能遇见心有鸿鹄的人、遇见新鲜独到的见解与观点、收获珍贵且坚韧的友谊与羁绊。</p>
		</CardContextBlock>
	</Card>
	<Card class="flex flex-col md:flex-row-reverse md:justify-between items-center">
		<CardTitleBlock>
			<div transition:fade class="flex justify-center items-center">
				<img src="index/undraw_happy_feeling_re_e76r.svg" alt="doing conversation" class="w-32 h-32" />
			</div>
			<div class="p-5">
				<h1 class="text-4xl">在iOSClub，</h1>
				<h1 class="font-bold text-5xl">做你想做的</h1>
			</div>
		</CardTitleBlock>
		<CardContextBlock>
			<p>苹果实验室有许多与企业合作，为中南大学尤其是计算机学院的同学提供有意思的活动沙龙。</p>
			<p>我们联络优秀的业界前辈举行techtalk，为同学们答疑解惑、指点迷津；成员们也在各项活动与学术学习中大放异彩。</p>
			<p>欢迎到我们的<a class="font-bold" href="https://blog.csdn.net/cyl_csdn_1">博客</a>了解我们的最新成果。</p>
		</CardContextBlock>
	</Card>
	<Card class="flex flex-col md:flex-row md:justify-between items-center">
		<CardTitleBlock>
			<div transition:fade class="flex justify-center items-center">
				<img src="index/undraw_winners_re_wr1l.svg" alt="doing conversation" class="w-32 h-32" />
			</div>
			<h1 class="p-5 font-bold text-4xl truncate">与我们合作</h1>
		</CardTitleBlock>
		<CardContextBlock>
			<p>中南大学苹果实验室欢迎各种形式的合作，详情请咨询目前的学生负责人，请见<a class="font-bold" href="/contactUs">联系我们</a>。</p>
		</CardContextBlock>
	</Card>
	<Card class="flex flex-col md:flex-row-reverse md:justify-between items-center">
		<CardTitleBlock>
			<div transition:fade class="flex justify-center items-center">
				<img src="index/undraw_agree_re_hor9.svg" alt="doing conversation" class="w-32 h-32" />
			</div>
			<h1 class="p-5 font-bold text-4xl truncate">加入我们</h1>
		</CardTitleBlock>
		<CardContextBlock>
			<p>苹果实验室坚持小而精的发展路线，每届只固定招收 8-9 人，招生对象面向全校。我们没有硬性的招生标准，只希望能够和有着不同想法的你相遇。</p>
			<p>在每年8月底至9月初，我们会透过本站及各个渠道进行宣传招新。期待你的<a class="font-bold" href="/joinUs">加入。</a></p>
		</CardContextBlock>
	</Card>
</List>