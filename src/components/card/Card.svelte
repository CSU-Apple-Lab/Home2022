<script>
    import { slide } from "svelte/transition";
    let clazz = "";
    export { clazz as class }
</script>
<div transition:slide class="m-10 w-full bg-transparent">
    <div class={clazz}>
        <slot/>
    </div>
</div>