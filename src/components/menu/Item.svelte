<script lang="ts">
import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/outline';

	import { slide } from 'svelte/transition';
	export let href = '/';
	export let cb: (()=>void) | undefined = undefined;
</script>

<a transition:slide {href} on:click={()=>cb !== undefined&&cb()} class="w-full p-2 flex justify-center items-center group">
	<ChevronRightIcon class="w-6 h-6 group opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
	<slot />
</a>
