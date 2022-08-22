<script context="module" lang="ts">
	let cancelLast: Option<() => void> = none;
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ensure } from '@/functional/functor/either';
	import { useSelectHTMLElementById } from '@/utils/dom.helper';
	import { ClipboardCopyIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { CheckCircleIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { compose } from 'ramda';
	import { none, type Option, some, getOrElse } from 'fp-ts/lib/Option';
	import { pipe } from 'fp-ts/lib/function';
	export let str: string = '';
	let copied = false;

	const selector = compose(useSelectHTMLElementById<HTMLElement>());

	function copyToClipboard() {
		const el = ensure(selector(str))();
		navigator.clipboard.writeText(el.innerText).then(
			() =>
				(cancelLast = some(() => {
					copied = false;
				}))
		);
		pipe(
			cancelLast,
			getOrElse(() => () => {})
		)();
		copied = true;
	}
</script>

<div
	id={str}
	class="relative m-5 p-2 w-1/2 text-white {copied
		? 'bg-blue-500'
		: 'bg-slate-300'} flex flex-row justify-center items-center rounded-xl transition-colors duration-300 cursor-text"
	transition:fade
>
	<p>{copied ? '已复制' : str}</p>
	<div
		class="absolute top-0 right-0 h-full flex justify-end items-center pr-2"
		on:click={copyToClipboard}
	>
		{#if copied}
			<CheckCircleIcon class="w-5 h-5" />
		{:else}
			<ClipboardCopyIcon class="w-5 h-5 cursor-pointer" />
		{/if}
	</div>
</div>
