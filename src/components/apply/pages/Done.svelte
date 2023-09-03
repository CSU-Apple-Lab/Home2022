<script>
	import Img from '@/components/img/Img.svelte';
	import CopyArea from '../CopyArea.svelte';
</script>

<div class="flex flex-col justify-center items-center gap-2">
	<p>请扫码或复制群号加入招新群，等候我们的通知</p>
	<Img clazz="w-96" src="apply/QQgroup.png" alt="qq chat group qrcode." />
	<p>群号</p>
	<CopyArea str="456157073" />
</div>
