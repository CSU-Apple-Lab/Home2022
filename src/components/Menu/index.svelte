<script lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@rgossiaux/svelte-headlessui";
  import {
	  MenuAlt4Icon,
  } from "@rgossiaux/svelte-heroicons/outline";
  import Item from "./Item.svelte";
  export let items: { href: string, tag: string }[] = [];
  export let buttonClass = "";
</script>

<Popover class="sm:hidden">
  <PopoverButton class={buttonClass} style="outline:none">
	  <MenuAlt4Icon class="w-10 h-10"/>
  </PopoverButton>
  <PopoverPanel 
    class={`fixed w-full h-full top-10 right-0 flex flex-col gap-5 bg-white`}>
      <div class="p-5 flex flex-col gap-5">
      {#each items as item}
        <Item href={item.href}>{item.tag}</Item> 
      {/each}
    </div>
  </PopoverPanel>
</Popover>

