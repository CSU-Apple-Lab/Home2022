<script>
	import Img from "./img/Img.svelte";
	export let imgUrl = '';
	export let href = '';
</script>

<a
	class="flex justify-center items-center gap-2 pl-2 pr-2 rounded-2xl hover:scale-110 transition-all cursor-pointer"
	{href}
>
	<Img clazz="w-12" src={imgUrl} alt="link of {href}" />
</a>
