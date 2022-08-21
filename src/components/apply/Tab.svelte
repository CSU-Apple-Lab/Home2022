<script>
    import { fade } from "svelte/transition";
    export let isDone = false;
    export let isCurrent = false;
</script>

<div transition:fade class="w-2 {isCurrent? `w-24 h-2 rounded-lg bg-blue-500`:`"w-2 h-2 rounded-full ${isDone? "bg-blue-500" : "bg-slate-300"}` } transition-all duration-300 ">
</div>