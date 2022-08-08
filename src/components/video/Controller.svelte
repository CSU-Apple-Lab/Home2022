<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { fly } from "svelte/transition";
	import { XIcon, PlayIcon, VolumeUpIcon, VolumeOffIcon, RewindIcon, PauseIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@rgossiaux/svelte-heroicons/solid";
	
    const dispatch = createEventDispatcher();

    export let autoRolled = true;
    export let autoRolledDuration = 3000;
	export let progress = 0.0;
 	export let isPaused = false;
	export let isMuted = false;
	let rolled = false;

	function close() {
        dispatch('close');
    }

	function rewind() {
        dispatch('rewind');
	}

	function play() {
        dispatch('play');
	}

	function pause() {
        dispatch('pause');
	}

	function volumeUp() {
		dispatch('volumeUp');
	}

	function volumeOff() {
		dispatch('volumeOff');
	}

	function setControls(roll:boolean) {
		rolled = roll;
        autoRolledTimer.restart();
	}

    const autoRolledTimer: { id:any, start:()=>void, stop:()=>void, restart:()=>void } = {
        id:0,
        start() {
            this.id = setTimeout(()=>{
                rolled = true;
            },autoRolledDuration);
        },

        stop() {
            clearTimeout(this.id);
        },

        restart() {
            this.stop();
            this.start();
        }
    }

    if ( autoRolled ) {
        autoRolledTimer.start();
    }
</script>

<div transition:fly class={`fixed bottom-0 ${rolled? "w-40":"w-full sm:w-1/2 md:w-96"} transition-all duration-300`}>
	<div class="fixed w-screen h-1 rounded-lg bottom-0 bg-blue-600 opacity-70 transition-all duration-300" style={`width:${progress * 100}%`}/>
	<div class="w-full h-10 rounded-tr-2xl bottom-0 flex justify-between items-center bg-black shadow-black shadow-lg">
		<div class="flex justify-start items-center">
		{#if isPaused}
			<PlayIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={play}/>
		{:else}
			<PauseIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={pause}/>
		{/if}
			{#if !rolled}
				<RewindIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={rewind}/>
			{#if !isMuted}
				<VolumeOffIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={volumeOff}/>
			{:else}
				<VolumeUpIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={volumeUp}/>
			{/if}
			<XIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={close}/>	
		{/if}
		</div>
		{#if rolled}
			<ChevronDoubleRightIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={()=>setControls(false)}/>	
		{:else}
			<ChevronDoubleLeftIcon role="button" class="w-7 h-7 m-5 opacity-30 hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer" on:click={()=>setControls(true)}/>	
		{/if}
    </div>
</div>