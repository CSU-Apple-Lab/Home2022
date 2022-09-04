<script lang="ts">
	import { fly } from 'svelte/transition';
	import Interviewer from '@/components/apply/Interviewer.svelte';

	let cards: { code: string; avatar?: string; intros: string[], disable?: boolean }[] = [
		{
			code: 'Q',
			avatar: 'apply/interviewer/Q.jpg',
			intros: ['我可以和你聊聊前端，开源与漫画']
		},
		{
			code: 'Ghost',
			avatar: 'apply/interviewer/Ghost.jpg',
			intros: ['我们可以交流一下高中竞赛、nlp和lol']
		},
		{
			code: 'tangent',
			avatar: 'apply/interviewer/J.jpg',
			intros: ['我可以和你聊聊可视化、生物信息学和群智感知']
		},
		{
			code: '羲和',
			avatar: 'apply/interviewer/羲和.png',
			intros: ['我可以和你聊聊GAN、NLP、树莓派、你的项目和音乐']
		},
		{
			code: 'JX',
			avatar: 'apply/interviewer/JX.jpg',
			intros: ['我可以和你聊聊强化学习，HTM和普通大学生的一天']

		},
		{
			code: '',
			avatar: 'apply/interviewer/bar_raiser.png',
			intros: ['神秘人物，随机出现，BarRaiser'],
			disable: true
		}
	];
</script>

<div transition:fly class="ml-10 mr-10 flex flex-col justify-center items-center gap-10 md:flex-row md:flex-wrap">
	{#each cards as card}
		<Interviewer avatar={card.avatar} code={card.code} intros={card.intros} disableCopy={card.disable}/>
	{/each}
</div>
