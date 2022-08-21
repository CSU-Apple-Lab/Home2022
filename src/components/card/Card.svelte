<script>
    import { slide } from "svelte/transition";
    let clazz = "";
    export { clazz as class }
</script>
<div transition:slide class="m-5 sm:m-10 w-full max-w-5xl bg-transparent">
    <div class={clazz}>
        <slot/>
    </div>
</div>