<script lang="ts">
	import { fade } from "svelte/transition";
	import { PlayIcon } from "@rgossiaux/svelte-heroicons/solid";
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher();

	export let hidden = false;
	export let asHeader = false;

    function getLogoStyle(hidden:boolean,asHeader:boolean) {
		return `${hidden && !asHeader? "hidden": ""} top-0 w-full pt-1 pb-1 pl-3
				transition-all duration-300
			 	flex ${asHeader? 
					"fixed bg-white items-center shadow-md gap-3" :
					"absolute flex-col sm:flex-row justify-center items-center h-screen sm:h-80 gap-5 md:gap-16" } 
				`;
	}

    function onload(el:HTMLImageElement) {
        if( el.complete ){
            dispatch('load');
        }
        el.addEventListener('load',()=>{
            dispatch('load');
        });
    }
</script>
<div transition:fade class={getLogoStyle(hidden,asHeader)}>
        <img id="logo" 
			class={`
			${asHeader? 
				"w-9 h-9": 
				"w-48 h-48"}
			`} 
			alt="the logo of ios club."
			src="iOS_Club_LOGO.png"
			use:onload
			/>
		{#if asHeader}
        	<h1 class="text-xl">
				中南大学苹果实验室
			</h1>
		{:else}
      		<h1 class="text-4xl sm:text-5xl text-white font-bold">
				Think different.
			</h1>
			<PlayIcon on:click class="cursor-pointer sm:absolute sm:bottom-5 sm:right-5 w-10 h-10 hover:w-14 hover:h-14 transition-all duration-300 text-white"/>
		{/if}
		<div class={`invisible sm:visible fixed top-0 right-5 w-1/3 max-w-sm h-10 flex justify-end items-center gap-5
			${asHeader?
				"":
				"text-white font-bold"
			}
		`}>
		</div>
    </div>