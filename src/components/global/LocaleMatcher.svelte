<script lang="ts">
	import lang from '@/locale/lang.json';
	import { locale } from 'svelte-i18n';
	const keys = Object.keys(lang);
	let currentLang: string | null | undefined = null;
	locale.subscribe((val) => {
		currentLang = val;
	});
</script>

{#if $$slots.en && currentLang === 'en'}
	<slot name="en" />
{:else if $$slots['zh-cn'] && currentLang === 'zh-cn'}
	<slot name="zh-cn" />
{:else if $$slots.default}
	<slot />
{/if}
