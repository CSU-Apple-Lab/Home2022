<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Menu from '../menu/Menu.svelte';
	import { showNavigator } from '@/global/navigator';

	let show = false;
	showNavigator.subscribe((val) => (show = val));

	const dispatch = createEventDispatcher();

	const links = [
		{ href: '/', tag: '首页' },
		{ href: '/contactUs', tag: '联系我们' },
		{ href: '/joinUs', tag: '加入我们' }
	];

	function onload(el: HTMLImageElement) {
		if (el.complete) {
			dispatch('load');
		}
		el.addEventListener('load', () => {
			dispatch('load');
		});
	}
</script>

<div
	transition:fade
	class={`z-50 top-0 w-full pt-1 pb-1 pl-3
				transition-all duration-300
			 	flex fixed h-14 backdrop-blur items-center ${show? 'shadow-md' : '' } gap-5`}
>
	{#if show}
		<img
			id="logo"
			class={`w-11 h-11`}
			alt="the logo of ios club."
			src="/global/iOS_Club_LOGO.png"flex-grow
			use:onload
		/>
		<h1 class="text-xl">中南大学苹果实验室</h1>
		<div
			class={`invisible sm:visible fixed top-0 right-5 w-1/3 max-w-sm h-10 flex justify-end items-center gap-5`}
		/>
	{/if}
	<div class="flex-grow flex justify-end items-center">
		<Menu items={links} headerClass={show ? 'text-gray-700' : 'text-white'} />
	</div>
</div>
