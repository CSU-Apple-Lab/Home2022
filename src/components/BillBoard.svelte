<script lang="ts">
	import { browser } from "$app/env";
	import Menu from "@/components/Menu/index.svelte";
import Play from "@rgossiaux/svelte-heroicons/outline/Play";
	import { XIcon, PlayIcon } from "@rgossiaux/svelte-heroicons/solid";

	let clicked = false;
	let scrollOutOfBillBoard = false;

	const links = [
		{ href:"/", tag:"首页"},
		{ href:"/", tag:"关于我们"},
		{ href:"/", tag:"加入我们"}
	]

	function clickBillBoard() {
		if (!clicked) {
			document.getElementById('main')?.classList.add('bg-black');
			window.scrollTo({top:0})
		} else {
			document.getElementById('main')?.classList.remove('bg-black');
		}
		clicked = !clicked;
	}

	function switchLogoPosition(e:Event) {
		const billBoardHeight =  document.getElementById("bill_board")?.clientHeight || 0;
		if ( scrollY >  (billBoardHeight * 2) / 3 ) {
			scrollOutOfBillBoard = true;
		}else {
			scrollOutOfBillBoard = false;
		}
	}

	function getLogoStyle(clicked:boolean,scrollOutOfBillBoard:boolean) {
		return `${clicked? "hidden": ""} top-0 w-full pt-1 pb-1 pl-3
				transition-all duration-300
			 	flex ${scrollOutOfBillBoard? 
					"fixed bg-white items-center shadow-md gap-3" :
					"absolute flex-col sm:flex-row justify-center items-center h-screen sm:h-80 gap-5 md:gap-16" } 
				`;
	}

	if( browser ) {
		window.addEventListener('scroll', (e)=>{
			window.requestAnimationFrame(()=>switchLogoPosition(e));
		})
	}
</script>

<div id="bill_board">
	<div class={`flex justify-center items-center sm:block w-full ${clicked ? '' : 'h-screen sm:h-80 overflow-hidden'}`}>
		{#if clicked}
		<video
			class={`w-full max-h-screen bg-black ${clicked ? '' : 'opacity-40'}`}
			preload="none"
			autoplay
			controls
		>
			<track kind="captions" />
			<source src="think_different.mp4" type="video/mp4" />
		</video>
		{:else}
			<div class="w-full h-full flex justify-center items-center bg-black opacity-40">
				<img class="object-cover h-full sm:w-full" src="think_different_short.gif" alt="1997 apple think different ad."/>
			</div>
		{/if}
	</div>
    <div class={getLogoStyle(clicked,scrollOutOfBillBoard)}>
        <img class={`
			${scrollOutOfBillBoard? 
				"w-9 h-9": 
				"w-48 h-48"}
			`} 
			src="iOS_Club_LOGO.png" alt="the logo of ios club."
			/>
		{#if scrollOutOfBillBoard}
        	<h1 class="text-xl">
				中南大学苹果实验室
			</h1>
		{:else}
      		<h1 class="text-4xl sm:text-5xl text-white font-bold">
				Think different.
			</h1>
			<PlayIcon on:click={clickBillBoard} class="cursor-pointer absolute bottom-5 right-5 w-10 h-10 text-white"/>
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
	<div class="fixed top-0 right-3">
	{#if clicked}
		<XIcon role="button" class="w-10 h-10 m-5 text-white cursor-pointer" on:click={clickBillBoard}/>	
	{:else}
		<Menu items={links} buttonClass={
			scrollOutOfBillBoard?
			"text-gray-700":
			"text-white"}/>
	{/if}
	</div>
</div>
