<script lang="ts">
	import { fade } from 'svelte/transition';
	import { PlayIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { preloadImg } from '@/utils/dom.helper';

	const imgSrc = '/global/iOS_Club_LOGO.png';
</script>

<div
	transition:fade
	class={`top-0 w-full pt-1 pb-1 pl-3
				transition-all duration-300
			 	flex absolute flex-col sm:flex-row justify-center items-center h-screen sm:h-80 gap-5 md:gap-16`}
>
	{#await preloadImg(imgSrc) then _}
		<img src={imgSrc} id="logo" class={`w-48 h-48`} alt="the logo of ios club." />
	{/await}
	<section class="flex flex-col justify-center items-center gap-3">
		<h1 class="text-4xl sm:text-5xl text-white font-bold">Think different.</h1>
		<h2 class="text-xl text-white font-bold">中南大学苹果实验室</h2>
	</section>
	<PlayIcon
			on:click
			class="cursor-pointer sm:absolute sm:bottom-5 sm:right-5 w-10 h-10 hover:w-14 hover:h-14 transition-all duration-300 text-white"
	/>
</div>
<!-- blank to prevent content being hidden by navigator-->
<div class="h-14" />
