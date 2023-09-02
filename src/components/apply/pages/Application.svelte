<script>
	import { fly } from 'svelte/transition';
</script>

<div transition:fly class="flex flex-col justify-center items-center gap-5">
	<a href="https://docs.qq.com/form/page/DZkhBWWdObHZYak1U">
		<img
			class="w-96 hover:shadow-lg rounded-lg transition-shadow duration-300"
			src="apply/QRCode.png"
			alt="qr code"
		/>
	</a>
	<p>点击或扫码开始填写</p>
</div>
