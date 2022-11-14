<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
	import { MenuAlt4Icon, XIcon } from '@rgossiaux/svelte-heroicons/outline';
	import Item from '@/components/menu/Item.svelte';
	export let items: { href: string; tag: string }[] = [];
	export let headerClass = '';
</script>

<Popover class="ml-auto sm:hidden" let:open let:close>
	<PopoverButton class={headerClass} style="outline:none">
		{#if open}
			<XIcon class="w-10 h-10" />
		{:else}
			<MenuAlt4Icon class="w-10 h-10" />
		{/if}
	</PopoverButton>
	<PopoverPanel on:click={() => close(null)}>
		<div
			transition:fade
			class="z-50 fixed w-screen h-screen top-14 right-0 my-backdrop-blur p-5 flex flex-col gap-5"
		>
			{#each items as item}
				<Item href={item.href}>{item.tag}</Item>
			{/each}
		</div>
	</PopoverPanel>
</Popover>

<div
	class={`invisible sm:visible fixed top-0 w-screen h-14 flex justify-end items-center gap-5 pr-10 font-bold ${headerClass}`}
>
	{#each items as item}
		<a href={item.href}>{item.tag}</a>
	{/each}
</div>
