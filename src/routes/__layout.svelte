<script>
    import "../app.css";
    import GlobalLoading from "@/components/global/GlobalLoading.svelte";
import GlobalProgressBar from "@/components/global/GlobalProgressBar.svelte";
</script>

<slot />
<GlobalLoading/>
<GlobalProgressBar/>