<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Menu from '../menu/Menu.svelte';
	import { showNavigator } from '@/global/navigator';
	import Img from '../img/Img.svelte';

	let show = false;
	showNavigator.subscribe((val) => (show = val));

	const dispatch = createEventDispatcher();

	const links = [
		{ href: '/', tag: '首页' },
		{ href: '/contactUs', tag: '联系我们' },
		{ href: '/contactUs', tag: '与我们合作'},
		{ href: '/joinUs', tag: '加入我们' }
	];
</script>

<nav
	transition:fade
	class={`z-40 top-0 w-full pt-1 pb-1 pl-3
				transition-all duration-300
			 	flex fixed h-14 my-backdrop-blur items-center ${show ? 'shadow-md' : ''} gap-5`}
>
	{#if show}
		<Img
			id="logo"
			clazz={`w-11 h-11`}
			alt="the logo of ios club."
			src="global/iOS_Club_LOGO.png"
		/>
		<h1 class="text-xl">中南大学苹果实验室</h1>
		<div
			class={`invisible sm:visible fixed top-0 right-5 w-1/3 max-w-sm h-10 flex justify-end items-center gap-5`}
		/>
	{/if}
	<Menu items={links} headerClass={show ? 'text-gray-700' : 'text-white'} />
</nav>
