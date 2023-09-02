<script lang="ts">
	import { fly } from 'svelte/transition';
	import CardContextBlock from '../card/CardContextBlock.svelte';
	import CardTitleBlock from '../card/CardTitleBlock.svelte';
	import CopyArea from './CopyArea.svelte';
	import SignalArea from './SignalArea.svelte';
	export let avatar = 'apply/undraw_profile_pic_ic-5-t.svg';
	export let intros: string[] = [];
	export let code: string = '';
	export let SignalCopy: boolean = false;
</script>

<div
	transition:fly
	class="bg-slate-50 w-72 p-5 flex-grow-0 flex-shrink-0 rounded-lg flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-300"
>
	<CardTitleBlock>
	{#if !SignalCopy}
		<img class="w-32 h-32 rounded-full" src={avatar} alt="avatar" />
	{/if}
	{#if SignalCopy}
		<img class="w-32 h-32 rounded-full" src={avatar} alt="avatar" id="Catch Me If You Can.What if..." />
	{/if}
	</CardTitleBlock>
	<CardContextBlock class="flex flex-col items-center">
		{#if !SignalCopy}
		<h1 class="font-bold mb-2">关于我</h1>
		{/if}
		{#if SignalCopy}
		<h1 class="font-bold mb-2">神秘面试官</h1>
		{/if}
		{#each intros as intro}
			<p class = "w-62 h-10 mb-4">{intro}</p>
		{/each}
	</CardContextBlock>
	{#if !SignalCopy}
	<h1 class="font-bold">代号</h1>
		<CopyArea str={code} />
	{/if}
	{#if SignalCopy}
	<h1 class="font-bold">代号</h1>
		<SignalArea str={code} />
	{/if}
</div>
