<script>
	import { slide } from 'svelte/transition';
	export let href = '/';
</script>

<a transition:slide {href} class="w-full flex justify-center items-center"><slot /></a>
