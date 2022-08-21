<script lang="ts">
import { is } from "ramda";


    export let label = "";
    export let options:string[] = [];
    export let isValid = true;
    export let required = false;
    export let notice = "";
    let clazz = "";
    export { clazz as class };

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
	<div class="relative">
		<select
			class="block appearance-none w-full bg-gray-200 border {isValid? "border-gray-200":"border-red-500"} text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			id="grid-state"
            on:input
		>
        {#each options as option}
            <option>{option}</option>
        {/each}
		</select>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
		>
			<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
				><path
					d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
				/></svg
			>
		</div>
	</div>
    {#if !isValid}
	    <p class="text-red-500 text-xs italic">{notice}</p>
    {/if}
</div>
