<script>
	import LocaleMatcher from '@/components/global/LocaleMatcher.svelte';
	import JoinUs from '@/views/joinUs.svelte';
	import JoinUsEn from '@/views/en/joinUs.svelte';
</script>

<LocaleMatcher>
	<JoinUs slot="zh-cn" />
	<JoinUsEn slot="en" />
	<JoinUs />
</LocaleMatcher>
