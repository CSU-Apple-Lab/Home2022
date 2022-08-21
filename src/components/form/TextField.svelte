<script lang="ts">
import { currentEvent } from "@/global/banner";

    import { createEventDispatcher } from "svelte";
import { text } from "svelte/internal";

    const dispatcher = createEventDispatcher();

    export let label = "";
    export let isValid = true;
    export let required = false;
    export let placeholder = "";
    export let notice = "";
    let clazz = "";
    export { clazz as class };
    let dirty = false;
</script>

<div class="w-full px-3 mb-6 {clazz}">
	<label
		class="flex flex-row justify-start items-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
		for="grid-first-name"
	>
		<p>{label}</p>
        {#if required}
            <p class="text-red-500">*</p>
        {/if}
	</label>
	<input
		class="appearance-none block w-full bg-gray-200 text-gray-700 border {isValid? "":"border-red-500" } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
		id="grid-first-name"
		type="text"
		placeholder={placeholder}
        on:input={(e)=>{ dirty=true; dispatcher('input',e.currentTarget)}}
	/>
    {#if !isValid}
	    <p class="text-red-500 text-xs italic">{notice}</p>
    {/if}
</div>
