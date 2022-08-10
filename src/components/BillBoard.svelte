<script lang="ts">
	import { onMount } from "svelte";
	import lodash from "lodash";
	import { fly, fade } from "svelte/transition";
	import Menu from "@/components/menu/Menu.svelte";
	import { ChevronDoubleDownIcon } from "@rgossiaux/svelte-heroicons/outline";
	import Logo from "./Logo.svelte";
	import Controller from "./video/Controller.svelte";
	import * as h from "@/utils/helper";
	import { loadingProgress, showLoading } from "@/global/loading";
	import Loading from "./Loading.svelte";
	import { progressBarProgress, showProgressBar } from "@/global/progress";

	let showVideo = false;
	let showTips = false;
	let scrollOutOfBillBoard = false;
	let fullTime = 1.0;

	let isPaused = false;
	let isMuted = false;
	let isWaiting = false;

	const links = [
		{ href:"/", tag:"首页"},
		{ href:"/", tag:"关于我们"},
		{ href:"/", tag:"加入我们"}
	]

	const showTipsOnce = lodash.once(()=>showTips=true);

	function clickBillBoard() {
		showVideo = !showVideo;
		showProgressBar.set(showVideo);
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
	const play = h.dom.play(mediaId);
	const pause = h.dom.pause(mediaId);
	const rewind = h.dom.rewind(mediaId);

	function addAllEvent(el:HTMLMediaElement) {
		el.addEventListener('loadstart',()=>showLoading.set(true))
		el.addEventListener('progress',()=>{ 

			const idx = el.buffered.length - 1;
			let bufEnd;
			try {
				bufEnd = el.buffered.end(idx > 0? idx : 0);
			}catch(err){
				bufEnd = 0;
			}
			loadingProgress.set( bufEnd / ( el.duration || 100 ) ); 
		});
		el.addEventListener('durationchange',()=>fullTime = el.duration);
		el.addEventListener('play',()=>{ isPaused = false; showTipsOnce(); showLoading.set(false) });
		el.addEventListener('pause',()=>isPaused = true);
		el.addEventListener('timeupdate',()=>progressBarProgress.set(el.currentTime / fullTime));
		el.addEventListener('ended',()=>showVideo = false);
		el.addEventListener('waiting',()=>isWaiting = true);
		el.addEventListener('playing',()=>isWaiting = false);
	}

	let src = 'component/billboard/think_different_short.gif';
	function preloadImg(src:string) {
		return new Promise((r)=>{
			let img = new Image();
			img.onload = r;
			img.src = src;			
		});
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
					<track kind="captions"/>
					<source src="component/billboard/think_different.mp4" type="video/mp4"/>
				</video>
				{#if isWaiting}
					<Loading spinnerStyle={"stroke:rgb(255,255,255)"}/>
				{/if}
			</div>
			{#if showTips}
				<div transition:fade class="absolute w-screen h-screen top-0 flex flex-col justify-end items-center gap-5">
					<p class="text-white">向下滑动,边听边看</p>
					<ChevronDoubleDownIcon class="text-white w-10 h-10 animate-bounce"/>
				</div>
			{/if}
		{:else}
			<div class="w-full h-screen flex justify-center items-center bg-black opacity-40">
				{#await preloadImg(src)}
					<img
						in:fly 
						src="component/billboard/think_different_alt.png"
						class="object-cover h-full sm:w-full"  
						alt="1997 apple think different ad."
					/>
				{:then}
					<img {src} in:fly id="bg_img" 
						class="object-cover h-full sm:w-full"  
						alt="1997 apple think different ad."
					/>
				{/await}
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
			on:volumeUp={()=>isMuted = true}
			on:volumeOff={()=>isMuted = false}
			isPaused={isPaused}
			isMuted={isMuted}
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
