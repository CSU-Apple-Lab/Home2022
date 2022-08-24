<script>
	import { fade } from 'svelte/transition';
	import Card from '@/components/card/Card.svelte';
	import CardContextBlock from '@/components/card/CardContextBlock.svelte';
	import CardTitleBlock from '@/components/card/CardTitleBlock.svelte';
	import List from '@/components/card/List.svelte';
</script>

<List>
	<Card class="flex flex-col md:flex-row md:justify-start items-center">
		<CardTitleBlock class="w-96 flex-shrink-0 flex flex-col justify-center items-center">
			<div transition:fade class="flex justify-center items-center">
				<img
					src="apply/undraw_check_boxes_re_v40f.svg"
					alt="choose your interviewer"
					class="w-32 h-32"
				/>
			</div>
			<div class="p-5">
				<h1 class="font-bold text-5xl">Step.1</h1>
				<h1 class="text-3xl truncate">选择你的面试官</h1>
			</div>
		</CardTitleBlock>
		<CardContextBlock>
			<p>选择适合你的面试官，让我们在面试时更好地与你交流。</p>
			<p class="font-bold">请复制面试官代号并于填写申请表时填入，或留空由我们为你安排。</p>
		</CardContextBlock>
	</Card>
	<Card class="flex flex-col md:flex-row md:justify-start items-center">
		<CardTitleBlock class="md:w-96 flex-shrink-0 flex flex-col justify-center items-center">
			<div transition:fade class="flex justify-center items-center">
				<img src="apply/undraw_fill_form_re_cwyf.svg" alt="fill in application form" class="w-32 h-32" />
			</div>
			<div class="p-5">
				<h1 class="font-bold text-5xl">Step.2</h1>
				<h1 class="text-3xl truncate">填写申请表</h1>
			</div>
		</CardTitleBlock>
		<CardContextBlock>
			<p>我们还需要多了解你一些，请放心，你提供的全部信息仅用于本次招新活动。</p>
		</CardContextBlock>
	</Card>
	<Card class="flex flex-col md:flex-row md:justify-start items-center">
		<CardTitleBlock class="md:w-96 flex-shrink-0 flex flex-col justify-center items-center">
			<div transition:fade class="flex justify-center items-center">
				<img src="apply/undraw_phone_call_re_hx6a.svg" alt="keep in touch" class="w-32 h-32" />
			</div>
			<div class="p-5">
				<h1 class="font-bold text-5xl">Step.3</h1>
				<h1 class="text-3xl truncate">回家等电话！</h1>
			</div>
		</CardTitleBlock>
		<CardContextBlock>
			<p>我们会尽快安排面试，你可以加入招新群随时了解最新信息。</p>
		</CardContextBlock>
	</Card>
</List>
