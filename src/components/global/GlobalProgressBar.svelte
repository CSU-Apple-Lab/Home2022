<script>
    import { showProgressBar, progressBarProgress, progressBarClass } from "@/global/progress";
    
    let show = false;
    let progress = 1;
    let clazz = "";

    showProgressBar.subscribe((val)=>show=val);
    progressBarProgress.subscribe((val)=>progress=val);
    progressBarClass.subscribe((val)=>clazz=val);
</script>
{#if show}
    <div class="fixed w-screen h-1 rounded-lg bottom-0 {clazz} opacity-70 transition-all duration-300" style={`width:${progress * 100}%`}/>
{/if}