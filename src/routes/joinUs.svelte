<script>
	import { onMount } from 'svelte';
	import { showLoading } from '@/global/loading';
	import List from '@/components/card/List.svelte';
	import Card from '@/components/card/Card.svelte';
	import CardTitleBlock from '@/components/card/CardTitleBlock.svelte';
	import CardContextBlock from '@/components/card/CardContextBlock.svelte';
	onMount(() => {
		showLoading.set(false);
	});
</script>

<List class="p-10 flex flex-col justify-center items-center">
	<Card class="md:hidden p-10 flex flex-col lg:flex-row lg:justify-start items-center">
		<CardTitleBlock>
			<img class="w-52 h-52" src="joinUs/undraw_interview_re_e5jn.svg" alt="interview" />
		</CardTitleBlock>
		<CardContextBlock>
			<h1 class="text-5xl font-bold">加入我们</h1>
			<p>加入苹果实验室，加入颠覆世界的行列</p>
		</CardContextBlock>
	</Card>
	<div class="hidden md:block relative w-full max-w-7xl h-full">
		<img class="z-0 absolute top-0 right-0 w-96 h-96" src="joinUs/undraw_interview_re_e5jn.svg" alt="interview" />
		<div class="flex flex-col gap-3">
			<h1 class="z-10 text-5xl font-bold">加入我们</h1>
			<p class="z-10 text-ellipsis whitespace-nowrap">加入苹果实验室，加入颠覆世界的行列</p>
		</div>
	</div>
	<List class="flex flex-col justify-center items-center">
		<Card
			class="relative sm:p-10 flex flex-col max-w-7xl lg:flex-row lg:justify-between items-center bg-slate-100 rounded-2xl opacity-95 overflow-hidden"
		>
			<CardTitleBlock>
				<div class="p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
					<h1 class="text-3xl whitespace-nowrap">iOSClub 21届招新</h1>
				</div>
			</CardTitleBlock>
			<CardContextBlock>
				<div>
					<h1>我们在找的你</h1>
					<ul class="pt-5 pb-5">
						<li>1. 是21级的同学</li>
						<li>2. 对技术有着一定热情</li>
						<li>3. 觉得自己的想法十分独特, 愿意将想法付诸行动</li>
						<li>4. 想认识其他同样独特的人</li>
					</ul>
					<h1>你将会得到</h1>
					<ul class="pt-5 pb-5">
						<li>1. 属于苹果实验室的硬件资源 （实验室空间与设备）</li>
						<li>2. 一群热心且各有所长的学长姐</li>
						<li>3. 和你一起颠覆世界的队友</li>
					</ul>
				</div>
			</CardContextBlock>
			<CardContextBlock>
				<a href="/apply">
					<button class="z-10 bg-blue-500 w-32 h-10 rounded-3xl text-white"> 提交申请 </button>
				</a>
			</CardContextBlock>
			<img
				class="z-0 absolute -bottom-10 right-5 md:right-2/3 w-32 h-32"
				src="joinUs/undraw_join_re_w1lh.svg"
				alt="join us."
			/>
		</Card>
	</List>
</List>
