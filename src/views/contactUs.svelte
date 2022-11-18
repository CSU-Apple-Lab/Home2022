<script>
	import { onMount } from 'svelte';
	import { showLoading } from '@/global/loading';
	import { _ } from "svelte-i18n";
	onMount(() => {
		showLoading.set(false);
	});
</script>

<div class="mt-10 p-20 flex flex-col justify-center items-center">
	<div class="hidden sm:block poster">
		<div class="picture w-96 h-96">
			<img src="./contactUs/undraw_contact_us_re_4qqt.svg" alt="contact us" />
		</div>
		<h1 class="title top-10 right-0 text-7xl md:top-10 md:right-0">{$_("contact us")}</h1>
		<div class="content flex flex-col top-32 text-xl gap-5">
			<div>
				<p>{$_("email")}:</p>
				<p>csuiosclub@gmail.com</p>
			</div>
			<div>
				<p>{$_("we chat")}:</p>
				<p>RiceBallPaPa</p>
			</div>
		</div>
	</div>
	<div class="flex flex-col justify-center items-start gap-5 sm:hidden">
		<img src="./contactUs/undraw_contact_us_re_4qqt.svg" alt="contact us" />
		<h1 class="text-5xl">{$_("contact us")}</h1>
		<div class="content flex flex-col top-32 text-xl gap-5">
			<div>
				<p>{$_("email")}:</p>
				<p>csuiosclub@gmail.com</p>
			</div>
			<div>
				<p>{$_("wechat")}:</p>
				<p>RiceBallPaPa</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.poster {
		width: 70vw;
		height: 100vh;
		max-width: 30rem;
		position: relative;
		.title {
			height: 80vh;
			position: absolute;
			writing-mode: vertical-lr;
		}
		.picture {
			top: 20rem;
			position: absolute;
		}
		.content {
			position: absolute;
		}
	}
</style>
