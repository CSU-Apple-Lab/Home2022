<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { showLoading } from '@/global/loading';
	import Tab from '@/components/apply/TabBar.svelte';
	import PickInterviewer from '@/components/apply/pages/PickInterviewer.svelte';
	import Guide from '@/components/apply/pages/Guide.svelte';
	import { ChevronDoubleUpIcon } from '@rgossiaux/svelte-heroicons/outline';
	import Application from '@/components/apply/pages/Application.svelte';
	import Done from '@/components/apply/pages/Done.svelte';
	import { local } from '@/utils/helper';
	import { pipe } from 'fp-ts/lib/function';
	import { getOrElse } from 'fp-ts/lib/Either';
	import { afterUpdate } from 'svelte';

	let showGoBack = false;

	onMount(() => {
		showLoading.set(false);
	});

	type section = { tag: string; current: boolean; done: boolean };

	let sections:section[] = [];

	function tabOnClick(e: CustomEvent<number>) {
		sections = sections.map((tab, idx) => {
			tab.current = idx === e.detail;
			return tab;
		});
		window.scrollTo({ top: 0 });
		showGoBack = false;
	}

	function scrollToTop() {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	}

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (scrollY > 0) {
				showGoBack = true;
			} else {
				showGoBack = false;
			}
		});

		pipe(
			local.get<section[]>('apply21'),
			getOrElse(() => [
				{
					tag: '了解流程',
					current: true,
					done: false
				},
				{
					tag: '选择面试官',
					current: false,
					done: false
				},
				{
					tag: '填写申请表',
					current: false,
					done: false
				},
				{
					tag: '完成',
					current: false,
					done: false
				}
			]),
			(res)=>{sections = res}
		);
	});

	afterUpdate(()=>{
		local.storeWithKey('apply21',sections);
	})
</script>

<div class="pt-20 mb-52 w-full flex flex-col justify-between items-center">
	<Tab bind:sections on:click={tabOnClick} />
	{#if sections[0]?.current}
		<Guide />
	{/if}
	{#if sections[1]?.current}
		<PickInterviewer />
	{/if}
	{#if sections[2]?.current}
		<Application />
	{/if}
	{#if sections[3]?.current}
		<Done />
	{/if}
	<div
		class="{showGoBack ? '' : 'invisible'} 
		fixed bottom-20 right-5 w-14 h-14  
		cursor-pointer flex flex-col justify-center items-center gap-2 
		bg-slate-100 shadow-lg md:bg-transparent rounded-full
		"
		on:click={scrollToTop}
		transition:fade
	>
		<ChevronDoubleUpIcon class="w-5 h-5" />
	</div>
</div>
