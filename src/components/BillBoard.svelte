<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { fly, fade } from "svelte/transition";
	import { browser } from "$app/env";
	import Menu from "@/components/Menu/index.svelte";
	import { XIcon, PlayIcon, VolumeUpIcon, VolumeOffIcon, RewindIcon, PauseIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@rgossiaux/svelte-heroicons/solid";
	import { ChevronDoubleDownIcon } from "@rgossiaux/svelte-heroicons/outline";
	const dispatch = createEventDispatcher();

	let showVideo = false;
	let showTips = false;
	let userScrolled = false;
	let scrollOutOfBillBoard = false;
	let volumeUp = false;
	let isPause = false;
	let currentTime = 0;
	let fullTime = 1.0;
	let autoRolled = true;
	let rolled = false;

	const links = [
		{ href:"/", tag:"首页"},
		{ href:"/", tag:"关于我们"},
		{ href:"/", tag:"加入我们"}
	]

	function clickBillBoard() {
		showVideo = !showVideo;
		setTimeout(()=>{
			if (!rolled && autoRolled) {
				rolled = true;
			}
			if (!userScrolled) {
				showTips = true;
			}
		},3000);
	}

	function rewind() {
		const video = <HTMLMediaElement> document.getElementById('think_different_video');
		video.fastSeek(0);
	}

	function play() {
		const video = <HTMLMediaElement> document.getElementById('think_different_video');
		video.play();
	}

	function pause() {
		const video = <HTMLMediaElement> document.getElementById('think_different_video');
		video.pause();
	}

	function setControls(val:boolean) {
		if ( autoRolled ) {
			autoRolled = false;
		}
		rolled = val;
	}

	function disablePictureInPicture(el:any) {
		el.disablePictureInPicture = true;
	}

	function registCurrentTime(el:HTMLMediaElement) {
		el.addEventListener('durationchange',()=>{
			fullTime = el.duration;
		})
		el.addEventListener('timeupdate',(ev)=>{
			currentTime = el.currentTime;
		})
		el.addEventListener('pause',()=>{
			isPause = true;
		})
		el.addEventListener('play',()=>{
			isPause = false;
		})
		el.addEventListener('ended',()=>{
			showVideo = false;
		})
	}

	function switchLogoPosition(e:Event) {
		const billBoardHeight =  document.getElementById("bill_board")?.clientHeight || 0;
		if ( scrollY >  (billBoardHeight) / 2 ) {
			scrollOutOfBillBoard = true;
		}else {
			scrollOutOfBillBoard = false;
		}
	}

	function getLogoStyle(showVideo:boolean,scrollOutOfBillBoard:boolean) {
		return `${showVideo && !scrollOutOfBillBoard? "hidden": ""} top-0 w-full pt-1 pb-1 pl-3
				transition-all duration-300
			 	flex ${scrollOutOfBillBoard? 
					"fixed bg-white items-center shadow-md gap-3" :
					"absolute flex-col sm:flex-row justify-center items-center h-screen sm:h-80 gap-5 md:gap-16" } 
				`;
	}

	const loadResources = function*() {
		yield 1;
	}()

	function tryTaggleLoadEvent() {
		if ( loadResources.next().done ) {
			dispatch('load');
		}
	}

	const onload = (el:HTMLImageElement) => {
		if( el.complete ) {
			tryTaggleLoadEvent();
		}
		el.addEventListener('load',tryTaggleLoadEvent);
	}

	if( browser ) {
		window.addEventListener('scroll', (e)=>{
			window.requestAnimationFrame(()=>switchLogoPosition(e));
			userScrolled = true;
			if (showVideo) {
				showTips = false;
			}
		})
	}
</script>

<div id="bill_board">
	<div class={`flex justify-center items-center sm:block w-full ${showVideo ? '' : 'h-screen sm:h-80 overflow-hidden'}`}>
		{#if showVideo}
		<div transition:fly class="w-full h-screen flex justify-center items-center bg-black">
			<video
				use:disablePictureInPicture
				use:registCurrentTime
				id="think_different_video"
				class={`w-full max-h-screen`}
				preload="none"
				autoplay
				muted={volumeUp}
			>
				<track kind="captions" />
				<source src="think_different.mp4" type="video/mp4" />
			</video>
		</div>
		{#if showTips}
			<div transition:fade class="absolute w-screen h-screen top-0 flex flex-col justify-end items-center gap-5">
				<p class="text-white">向下滑动,边听边看</p>
				<ChevronDoubleDownIcon class="text-white w-10 h-10 animate-bounce"/>
			</div>
		{/if}
		{:else}
		<div class="w-full h-screen flex justify-center items-center bg-black opacity-40">
			<img id="bg_img" 
				class="object-cover h-full sm:w-full"  
				alt="1997 apple think different ad."
				src="think_different_short.gif"
				use:onload
			/>
		</div>
		{/if}
	</div>
    <div transition:fade class={getLogoStyle(showVideo,scrollOutOfBillBoard)}>
        <img id="logo" 
			class={`
			${scrollOutOfBillBoard? 
				"w-9 h-9": 
				"w-48 h-48"}
			`} 
			alt="the logo of ios club."
			src="iOS_Club_LOGO.png"
			use:onload
			/>
		{#if scrollOutOfBillBoard}
        	<h1 class="text-xl">
				中南大学苹果实验室
			</h1>
		{:else}
      		<h1 class="text-4xl sm:text-5xl text-white font-bold">
				Think different.
			</h1>
			<PlayIcon on:click={clickBillBoard} class="cursor-pointer sm:absolute sm:bottom-5 sm:right-5 w-10 h-10 hover:w-14 hover:h-14 transition-all duration-300 text-white"/>
		{/if}
		<div class={`invisible sm:visible fixed top-0 right-5 w-1/3 max-w-sm h-10 flex justify-end items-center gap-5
			${scrollOutOfBillBoard?
				"":
				"text-white font-bold"
			}
		`}>
		{#each links as link}
			<a href={link.href}>{link.tag}</a>
		{/each}
		</div>
    </div>
	
	{#if showVideo}
	<div transition:fly class={`fixed bottom-0 ${rolled? "w-40":"w-full sm:w-1/2 md:w-96"} transition-all duration-300`}>
	<div class="fixed w-screen h-1 rounded-lg bottom-0 bg-blue-600 opacity-70 transition-all duration-300" style={`width:${(currentTime/fullTime) * 100}%`}/>
	<div class="w-full h-10 rounded-tr-2xl bottom-0 flex justify-between items-center bg-black shadow-black shadow-lg">
		<div class="flex justify-start items-center">
		{#if isPause}
			<PlayIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={play}/>
		{:else}
			<PauseIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={pause}/>
		{/if}
			{#if !rolled}
				<RewindIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={rewind}/>
			{#if volumeUp}
				<VolumeOffIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={()=>volumeUp = false}/>
			{:else}
				<VolumeUpIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={()=>volumeUp = true}/>
			{/if}
			<XIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={clickBillBoard}/>	
		{/if}
		</div>
		{#if rolled}
			<ChevronDoubleRightIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={()=>setControls(false)}/>	
		{:else}
			<ChevronDoubleLeftIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={()=>setControls(true)}/>	
		{/if}
	</div>
	</div>
	{/if}
	<div class="w-full fixed top-0 flex justify-end">
		<Menu items={links} buttonClass={
			scrollOutOfBillBoard?
			"text-gray-700":
			"text-white"}/>
	</div>
</div>
