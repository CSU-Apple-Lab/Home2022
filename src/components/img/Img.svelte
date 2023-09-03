<script lang="ts">
	import CDNConfigs from '@/config/cdn.json';
	import { resources } from '@/utils/helper';

    export let id: string = '';
	export let src: string = '';
	export let alt: string = '';
    export let clazz: string = '';
	const paths = resources.getAllSourcePaths(CDNConfigs, src);
</script>

<picture class={clazz} id={id}>
	{#each paths as path}
		<source srcset={path} />
	{/each}
	<img src={''} {alt} class="w-full h-full"/>
</picture>
