<script>
import { onMount } from "svelte";
import { showLoading } from "@/global/loading";
    onMount(()=>{
        showLoading.set(false);
    })
</script>
<h>hello!</h>