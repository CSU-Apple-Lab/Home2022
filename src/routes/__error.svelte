<script>
	import List from '@/components/card/List.svelte';
	import Card from '@/components/card/Card.svelte';
	import CardTitleBlock from '@/components/card/CardTitleBlock.svelte';
	import CardContextBlock from '@/components/card/CardContextBlock.svelte';
	import Img from '@/components/img/Img.svelte';

	let slogans = ['Think different.', 'Less is more.', 'Life is random. '];
</script>

<List>
	<Card class="p-10 flex flex-col md:flex-row md:justify-start items-center">
		<CardTitleBlock>
			<Img
				clazz="w-96 h-96"
				src="global/undraw_page_not_found_re_e9o6.svg"
				alt="404 Page not found"
			/>
		</CardTitleBlock>
		<CardContextBlock>
			<p class="font-bold text-7xl">{slogans[Math.round(Math.random() * 2)]}</p>
		</CardContextBlock>
	</Card>
</List>
