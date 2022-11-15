<script>
	import LocaleMatcher from "@/components/global/LocaleMatcher.svelte";
	import Index from "@/views/index.svelte";
    import IndexEn from "@/views/en/index.svelte";
</script>
<LocaleMatcher>
    <Index slot="zh-cn"/>
    <IndexEn slot="en" />
    <Index/>
</LocaleMatcher>