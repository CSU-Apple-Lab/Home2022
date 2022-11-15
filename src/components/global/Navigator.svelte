<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Menu from '../menu/Menu.svelte';
	import { showNavigator } from '@/global/navigator';
	import { _, locale } from 'svelte-i18n';

	let show = false;
	showNavigator.subscribe((val) => (show = val));

	const dispatch = createEventDispatcher();

	let currentLocale;

	locale.subscribe((val) => (currentLocale = val));

	const links = [
		currentLocale !== 'en'
			? { cb: ()=>window.location.search = 'lang=en', tag: 'English' }
			: { cb: ()=>window.location.search = 'lang=zh-cn', tag: '中文' },
		{ href: '/', tag: $_('home') },
		{ href: '/contactUs', tag: $_('contact us') },
		{ href: '/contactUs', tag: $_('work with us') },
		{ href: '/joinUs', tag: $_('join us') }
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

<nav
	transition:fade
	class={`z-40 top-0 w-full pt-1 pb-1 pl-3 
				transition-all duration-300
			 	flex fixed h-14 my-backdrop-blur items-center ${show ? 'shadow-md' : ''} gap-5`}
>
	{#if show}
		<img
			id="logo"
			class={`w-11 h-11`}
			alt="the logo of ios club."
			src="/global/iOS_Club_LOGO.png"
			use:onload
		/>
		<h1 class="text-xl">{$_("csu ios club")}</h1>
		<div
			class={`invisible sm:visible fixed top-0 right-5 w-1/3 max-w-sm h-10 flex justify-end items-center gap-5`}
		/>
	{/if}
	<Menu items={links} headerClass={show ? 'text-gray-700' : 'text-white'} />
</nav>
