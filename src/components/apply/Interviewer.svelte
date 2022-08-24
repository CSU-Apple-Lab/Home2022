<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardContextBlock from '../card/CardContextBlock.svelte';
	import CardTitleBlock from '../card/CardTitleBlock.svelte';
	import CopyArea from './CopyArea.svelte';
	export let avatar = 'apply/undraw_profile_pic_ic-5-t.svg';
	export let intros: string[] = [];
	export let code: string = '';
</script>

<div
	transition:fly
	class="bg-slate-50 w-72 p-5 flex-grow-0 flex-shrink-0 rounded-lg flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-300"
>
	<CardTitleBlock>
		<img class="w-32 h-32 rounded-full" src={avatar} alt="avatar" />
	</CardTitleBlock>
	<CardContextBlock class="flex flex-col items-center">
		<h1 class="font-bold">关于我</h1>
		{#each intros as intro}
			<p>{intro}</p>
		{/each}
	</CardContextBlock>
	<h1 class="font-bold">代号</h1>
	<CopyArea str={code} />
</div>
