<script lang="ts">
import { fade } from "svelte/transition";
import { showLoading, loadingProgress } from "@/global/loading";
import Loading from "@/components/Loading.svelte";

let show = false;
let progress = 0;
let minimize = false;

showLoading.subscribe((val)=>show = val);
loadingProgress.subscribe((val)=>progress = val);

</script>

{#if show}
<div transition:fade class={`fixed top-0 w-full h-full bg-white flex justify-center items-center`}>
   <Loading progress={progress}/> 
</div>
{/if}