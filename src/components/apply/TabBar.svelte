<script lang="ts">
	import Tab from './Tab.svelte';
	import { createEventDispatcher } from 'svelte';
import _ from 'lodash';
	export let sections: { tag: string; current?: boolean; done: boolean }[] = [];
	const dispatcher = createEventDispatcher();
</script>

<div class="p-10 flex flex-col justify-center items-center gap-5">
	<div class="h-14 p-1 flex flex-row justify-center items-center gap-5 bg-white rounded-lg overflow-scroll">
		{#each sections as _, i}
			<div
				class="transition-all duration-100 cursor-pointer p-2 rounded-lg truncate {_.done
					? 'text-gray-300'
					: ''} {_.current ? 'text-xl bg-slate-100' : ''}"
				on:click={() => dispatcher('click', i)}
			>
				<p class="{_.current? "":"hidden sm:block"}">{_.tag}</p>
				{#if !_.current}
					<p class="sm:hidden">{i}</p>
				{/if}
			</div>
		{/each}
	</div>
	<div class="flex flex-row justify-center items-center gap-5 overflow-scroll">
		{#each sections as _}
			<Tab isDone={_.done} isCurrent={_.current} />
		{/each}
	</div>
</div>
