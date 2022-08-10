<script>
    import { slide } from "svelte/transition";
    let clazz = "";
    export { clazz as class }
</script>
<div transition:slide class="m-10 w-full bg-gray-200 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <div class={clazz}>
        <slot/>
    </div>
</div>