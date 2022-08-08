<script lang="ts">
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";
	import Menu from "@/components/Menu/index.svelte";
	import { ChevronDoubleDownIcon } from "@rgossiaux/svelte-heroicons/outline";
	import Logo from "./Logo.svelte";
	import Controller from "./video/Controller.svelte";
	import { helper as h } from "@/utils/dom.hepler";

	let showVideo = false;
	let showTips = false;
	let scrollOutOfBillBoard = false;
	let currentTime = 0;
	let fullTime = 1.0;

	let isPaused = false;
	let isMuted = false;

	const links = [
		{ href:"/", tag:"首页"},
		{ href:"/", tag:"关于我们"},
		{ href:"/", tag:"加入我们"}
	]

	function clickBillBoard() {
		showVideo = !showVideo;
	}

	function switchLogoPosition(e:Event) {
		const billBoardHeight =  document.getElementById("bill_board")?.clientHeight || 0;
		if ( scrollY >  (billBoardHeight) / 2 ) {
			scrollOutOfBillBoard = true;
		}else {
			scrollOutOfBillBoard = false;
		}
	}

	const mediaId = "think_different_video";
	const play = h.play(mediaId);
	const pause = h.pause(mediaId);
	const rewind = h.rewind(mediaId);

	function addAllEvent(el:HTMLMediaElement) {
		el.addEventListener('durationchange',()=>{
			fullTime = el.duration;
		})
		el.addEventListener('play',()=>{ isPaused = false });
		el.addEventListener('pause',()=>{ isPaused = true });
		el.addEventListener('timeupdate',()=>{
			currentTime = el.currentTime;
		})
	}

	onMount(()=>{
		window.addEventListener('scroll', (e)=>{
			window.requestAnimationFrame(()=>switchLogoPosition(e));
			if (showVideo) {
				showTips = false;
			}
		})
	});
</script>

<div id="bill_board">
	<div class={`flex justify-center items-center sm:block w-full ${showVideo ? '' : 'h-screen sm:h-80 overflow-hidden'}`}>
		{#if showVideo}
			<div transition:fly class="w-full h-screen flex justify-center items-center bg-black">
				<video
					use:addAllEvent
					id="think_different_video"
					class={`w-full max-h-screen`}
					autoplay
					muted={isMuted}
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
				/>
			</div>
		{/if}
	</div>
	
	<Logo 
		on:click={clickBillBoard}
		hidden={showVideo}
		asHeader={scrollOutOfBillBoard}
	/>
	
	{#if showVideo}
		<Controller
			on:close={clickBillBoard}
			on:play={play}
			on:pause={pause}
			on:rewind={rewind}
			on:volumeUp={()=>isMuted = false}
			on:volumeOff={()=>isMuted = true}
			isPaused={isPaused}
			isMuted={isMuted}
			progress={currentTime/fullTime}
			autoRolled={true}
			autoRolledDuration={3000}
		/>	
	{/if}
	<div class="w-full fixed top-0 flex justify-end">
		<Menu items={links} 
			headerClass={
				scrollOutOfBillBoard?
				"text-gray-700":
				"text-white"
			}
			/>
	</div>
</div>
