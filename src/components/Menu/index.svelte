<script lang="ts">
  import {
    blur,
    fade
  } from "svelte/transition";
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@rgossiaux/svelte-headlessui";
  import {
	  MenuAlt4Icon,
    XIcon
  } from "@rgossiaux/svelte-heroicons/outline";
  import Item from "./Item.svelte";
  export let items: { href: string, tag: string }[] = [];
  export let buttonClass = "";
</script>

<Popover class="sm:hidden" let:open>
  <PopoverButton class={buttonClass} style="outline:none">
    {#if open}
      <XIcon class="w-10 h-10"/>
    {:else}
      <MenuAlt4Icon class="w-10 h-10"/>
    {/if}
    </PopoverButton>
  <PopoverPanel>
    <div
      transition:fade
      class="fixed w-full h-full top-10 right-0 bg-white p-5 flex flex-col gap-5">
      {#each items as item}
        <Item href={item.href}>{item.tag}</Item> 
      {/each}
    </div>
  </PopoverPanel>
</Popover>

