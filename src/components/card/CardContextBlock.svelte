<script lang="ts">
	let clazz: null | string = null;
	export { clazz as class };
</script>

<div class={clazz?? 'p-5 flex flex-col justify-center items-start gap-5 rounded-md '}>
	<slot />
</div>
