<script>
	import { onMount } from 'svelte';
	import { showLoading } from '@/global/loading';
	import List from '@/components/card/List.svelte';
	import Card from '@/components/card/Card.svelte';
	import CardTitleBlock from '@/components/card/CardTitleBlock.svelte';
	import CardContextBlock from '@/components/card/CardContextBlock.svelte';
	onMount(() => {
		showLoading.set(false);
	});
</script>

<List class="p-10 flex flex-col justify-center items-center">
	<Card class="md:hidden p-10 flex flex-col lg:flex-row lg:justify-start items-center">
		<CardTitleBlock>
			<img class="w-52 h-52" src="joinUs/undraw_interview_re_e5jn.svg" alt="Join us" />
		</CardTitleBlock>
		<CardContextBlock>
			<h1 class="text-5xl font-bold truncate">Join us</h1>
			<p>Join the Apple Lab and join the ranks of subverting the world</p>
		</CardContextBlock>
	</Card>
	<div class="hidden md:block relative w-full max-w-7xl h-full">
		<img
			class="z-0 absolute top-0 right-0 w-96 h-96"
			src="joinUs/undraw_interview_re_e5jn.svg"
			alt="Join us"
		/>
		<div class="flex flex-col justify-center items-start gap-5">
			<h1 class="z-10 text-5xl font-bold">join us</h1>
			<p class="z-10">Join the Apple Lab and join the ranks of subverting the world</p>
		</div>
	</div>
	<List class="flex flex-col justify-center items-center">
		<Card class="flex flex-col justify-start items-center my-backdrop-blur shadow-md rounded-xl">
			<div
				class="relative w-full sm:p-10 flex flex-col max-w-7xl lg:flex-row lg:justify-between items-center rounded-t-xl overflow-hidden"
			>
				<CardTitleBlock>
					<div class="flex flex-col lg:flex-row justify-center items-center gap-5">
						<h1 class="text-3xl truncate">iOSCLUB 21st Recruitment New</h1>
					</div>
				</CardTitleBlock>
				<CardContextBlock>
					<a href="/apply21">
						<button class="z-10 bg-blue-500 w-32 h-10 rounded-3xl text-white"> Application </button>
					</a>
				</CardContextBlock>
				<img
					class="z-0 absolute -bottom-10 right-5 lg:right-1/3 w-32 h-32"
					src="joinUs/undraw_join_re_w1lh.svg"
					alt="Join us."
				/>
			</div>
			<CardContextBlock>
				<h1 class="font-bold">We are looking for you</h1>
				<ul>
					<li>1. He is a classmate at level 21 of Central South University</li>
					<li>2. Have a certain enthusiasm for technology</li>
					<li>3. I feel that my thoughts are very unique and are willing to put their ideas into action</li>
					<li>4. Want to know others who are the same unique</li>
				</ul>
				<h1 class="font-bold">You will get</h1>
				<ul class="">
					<li>1. Our cooperation resources</li>
					<li>2. Hardware resources belonging to Apple Labs (laboratory space and equipment)</li>
					<li>3. A group of enthusiastic and different senior sisters</li>
					<li>4. Teammates who subvert the world with you</li>
				</ul>
			</CardContextBlock>
		</Card>
	</List>
</List>
