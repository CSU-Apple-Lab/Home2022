<script lang="ts">
	import { page as _page } from '$app/stores';
	import type { Page } from '@sveltejs/kit';
	import lodash from 'lodash';
	import { fly, fade } from 'svelte/transition';
	import { ChevronDoubleDownIcon } from '@rgossiaux/svelte-heroicons/outline';
	import Logo from '@/components/Logo.svelte';
	import Controller from '@/components/video/Controller.svelte';
	import * as h from '@/utils/helper';
	import Loading from '@/components/Loading.svelte';
	import {
		currentEvent,
		currentStatus,
		statusChange,
		type BannerEvent,
		BannerStatus
	} from '@/global/banner';
	import { onMount } from 'svelte';
	import _ from 'lodash';
	import { preloadImg } from '@/utils/dom.helper';

	let page: Page;
	let status: BannerStatus = statusChange(null, null);
	let eventQueue: Array<BannerEvent | null> = new Array<BannerEvent | null>();

	let minimized = false;
	let displayVideo = false;
	let display = false;

	_page.subscribe((val) => {
		currentEvent.set({ type: 'P', page: { to: val.url.pathname } });
		page = val;
	});

	currentEvent.subscribe((val) => {
		eventQueue.push(val);
		let temp: BannerStatus = status;
		while (eventQueue.length !== 0) {
			const t = eventQueue.pop();
			const p = temp;
			temp = statusChange(temp, t);
			//console.log(p, temp, t);
		}
		status = temp;
		currentStatus.set(status);
		minimized = status.minimized;
		displayVideo = status.displayVideo;
		display = status.display;
	});

	let showTips = false;
	let fullTime = 1.0;

	let isPaused = false;
	let isMuted = false;
	let isWaiting = false;

	const showTipsOnce = lodash.once(() => (showTips = true));

	const mediaId = 'think_different_video';
	const play = h.dom.play(mediaId);
	const pause = h.dom.pause(mediaId);
	const rewind = h.dom.rewind(mediaId);

	function clickPlay() {
		currentEvent.set({ type: 'C', control: { displayVideo: true } });
	}

	function setMinimize(e: CustomEvent<boolean>) {
		if (e.detail) {
			currentEvent.set({ type: 'C', control: { min: true } });
		} else {
			currentEvent.set({ type: 'C', control: { max: true } });
			window.scrollTo({ top: 0 });
		}
	}

	function addAllEvent(el: HTMLMediaElement) {
		el.addEventListener('durationchange', () => (fullTime = el.duration));
		el.addEventListener('play', () => {
			isPaused = false;
			showTipsOnce();
		});
		el.addEventListener('pause', () => (isPaused = true));
		el.addEventListener('ended', () => {
			currentEvent.set({
				type: 'C',
				control: { displayVideo: false },
				page: { from: page.url.pathname }
			});
		});
		el.addEventListener('waiting', () => (isWaiting = true));
		el.addEventListener('playing', () => (isWaiting = false));
	}

	let src = 'component/Banner/think_different_short.gif';

	onMount(() => {
		window.addEventListener('scroll', () => {
			showTips = false;
		});
	});
</script>

{#if displayVideo || display}
	<header
		transition:fly
		id="banner"
		class={`flex justify-center items-center sm:block w-full ${
			displayVideo ? '' : 'h-screen sm:h-80 overflow-hidden'
		}`}
	>
		{#if displayVideo}
			<div
				transition:fly
				class="{minimized
					? 'h-0'
					: 'w-full h-screen'} overflow-hidden flex justify-center items-center bg-black transition-all duration-300"
			>
				<video
					use:addAllEvent
					id="think_different_video"
					class={`${minimized ? `w-0 h-0` : `w-full max-h-screen`}`}
					autoplay
					muted={isMuted}
				>
					<track kind="captions" />
					<source src="component/Banner/think_different.mp4" type="video/mp4" />
				</video>
				{#if isWaiting}
					<Loading spinnerStyle={'stroke:rgb(255,255,255)'} />
				{/if}
			</div>
			{#if showTips}
				<div
					transition:fade
					class="absolute w-screen h-screen top-0 flex flex-col justify-end items-center gap-5"
				>
					<p class="text-white">向下滑动,边听边看</p>
					<ChevronDoubleDownIcon class="text-white w-10 h-10 animate-bounce" />
				</div>
			{/if}
		{/if}
		{#if display && !displayVideo}
			<div class="w-full h-screen flex justify-center items-center bg-black opacity-40">
				{#await preloadImg(src)}
					<img
						in:fly
						src="component/Banner/think_different_alt.png"
						class="object-cover h-full sm:w-full"
						alt="1997 apple think different ad."
					/>
				{:then}
					<img
						{src}
						in:fly
						id="bg_img"
						class="object-cover h-full sm:w-full"
						alt="1997 apple think different ad."
					/>
				{/await}
			</div>
		{/if}
	</header>

	{#if display && !displayVideo}
		<Logo on:click={clickPlay} />
	{/if}

	{#if displayVideo}
		<Controller
			on:close={() => {
				currentEvent.set({
					type: 'C',
					control: { close: true },
					page: { from: page.url.pathname }
				});
			}}
			on:play={play}
			on:pause={pause}
			on:rewind={rewind}
			on:volumeUp={() => (isMuted = true)}
			on:volumeOff={() => (isMuted = false)}
			on:setMinimize={setMinimize}
			minimize={minimized}
			{isPaused}
			{isMuted}
			autoRolled={true}
			autoRolledDuration={3000}
		/>
	{/if}
{/if}
