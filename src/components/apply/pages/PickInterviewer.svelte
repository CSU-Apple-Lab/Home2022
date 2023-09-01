<script lang="ts">
	import { fly } from 'svelte/transition';
	import Interviewer from '@/components/apply/Interviewer.svelte';

	let cards: { code: string; avatar?: string; intros: string[], Signal?: boolean }[] = [
		{
			code: 'EEE',
			avatar: 'apply/interviewer/EEE.png',
			intros: ['我可以和你聊聊前端，开源和FPS']//DONE
		},
		{
			code: 'Forrest',
			avatar: 'apply/interviewer/Forrest.png',
			intros: ['我们可以交流一下后端，嵌入式和羽毛球']//DONE
		},
		{
			code: 'Naux',
			avatar: 'apply/interviewer/Naux.png',
			intros: ['我可以和你聊聊游戏开发，交互设计和干饭']//DONE
		},
		{
			code: 'Grant',
			avatar: 'apply/interviewer/Grant.png',//todo
			intros: ['我可以和你聊聊可视化，数模建模和摇滚']
		},
		{
			code: 'indexss',
			avatar: 'apply/interviewer/indexss.png',
			intros: ['我可以和你聊聊AI，深度学习，留学和电子产品']//DONE

		},
		{
			code: 'BarRaiser',
			avatar: 'apply/interviewer/bar_raiser.png',
			intros: ['Catch Me If You Can'],
			Signal: true
		}
	];
</script>

<div transition:fly class="ml-10 mr-10 flex flex-col justify-center items-center gap-10 md:flex-row md:flex-wrap">
	{#each cards as card}
		<Interviewer avatar={card.avatar} code={card.code} intros={card.intros} SignalCopy={card.Signal}/>
	{/each}
</div>
