<script lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@rgossiaux/svelte-headlessui";
  import {
	  MenuIcon
  } from "@rgossiaux/svelte-heroicons/solid";
  import ChevronRight from "@rgossiaux/svelte-heroicons/solid/ChevronRight";
  import Item from "./Item.svelte";
  export let items: { href: string, tag: string }[] = [];
</script>

<Popover class="sm:hidden">
  <PopoverButton>
	  <MenuIcon class="w-10 h-10 text-gray-700"/>
  </PopoverButton>

  <PopoverPanel class="fixed w-4/5 h-full top-0 right-0 flex flex-col gap-5 bg-white">
    <PopoverButton class="bg-slate-200">
      <ChevronRight class="w-10 h-10 text-gray-700 self-end"/>
    </PopoverButton>
      <div class="flex flex-col gap-5">
      {#each items as item}
        <Item href={item.href}>{item.tag}</Item> 
      {/each}
    </div>
  </PopoverPanel>
</Popover>

