<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { showLoading } from '@/global/loading';
	import Card from '@/components/card/Card.svelte';
	import CardTitleBlock from '@/components/card/CardTitleBlock.svelte';
	import CardContextBlock from '@/components/card/CardContextBlock.svelte';
	import List from '@/components/card/List.svelte';
	import Chart from '@/components/home/ChartEn.svelte';
	//import { i18n } from "@/utils/i18n";

	onMount(() => {
		showLoading.set(false);
	});
</script>

<List>
	<Card class="flex flex-col md:flex-row md:justify-between items-center">
		<CardTitleBlock>
			<div transition:fade class="flex justify-center items-center">
				<img src="index/undraw_conversation_re_c26v.svg" alt="Think different" class="w-32 h-32" />
			</div>
			<div class="p-5 flex flex-col justify-center items-start">
				<h1 class="font-bold text-5xl">Think different</h1>
			</div>
		</CardTitleBlock>
		<CardContextBlock>
			<p>
				In iOS club, there are no standard answers, only different opinions. Although we call
				ourselves a laboratory, we are more like a club, a club of different thinkers.
			</p>
			Here, everyone has his or her own route and learning direction. There are no fixed patterns or
			rules and regulations. Members of the laboratory on different routes gather under the same
			roof for the collision of thoughts and communication of vision.
			<p />
			<p>
				At Apple LABS, we have a wealth of resources behind us. Whether it's deep learning research,
				mobile application development, or any other direction, you can get resources in the lab.
			</p>
			<p>
				Here, you can meet aspiring people, meet fresh and unique opinions and gain valuable and
				persistent friendships and bonds.
			</p>
		</CardContextBlock>
	</Card>
	<Card class="flex flex-col md:flex-row-reverse md:justify-between items-center">
		<CardTitleBlock>
			<div class="p-5">
				<h1 class="p-2 font-bold text-5xl truncate">Do what you want</h1>
			</div>
			<Chart/>
		</CardTitleBlock>
		<CardContextBlock>
			<p>
				Apple Lab has cooperated with many enterprises to provide interesting activity salons for
				students of Central South University, especially the School of Computer Science.
			</p>
			<p>
				We contacted outstanding industry seniors to hold techtalk for students to answer questions
				and provide guidance. The members also shine in various activities and academic learning.
			</p>
			<p>Welcome to our accounts on all platforms to learn about our latest achievements.</p>
			<ul class="flex justify-center items-center gap-5">
				<li><iconlink imgurl="./global/csdn.png" href={'https://blog.csdn.net/cyl_csdn_1'} /></li>
				<li><iconlink imgurl="./global/github.png" href="https://github.com/CSU-Apple-Lab" /></li>
			</ul>
		</CardContextBlock>
	</Card>
	<Card class="flex flex-col md:flex-row md:justify-between items-center">
		<CardTitleBlock>
			<div transition:fade class="flex justify-center items-center">
				<img src="index/undraw_winners_re_wr1l.svg" alt="Collaborate with us" class="w-32 h-32" />
			</div>
			<h1 class="p-5 font-bold text-4xl truncate">Work with us</h1>
		</CardTitleBlock>
		<CardContextBlock>
			<p>
				Central South University Apple Lab welcomes all forms of cooperation. For details, please
				consult the current student leader, please see <a class="font-bold" href="/contactUs"
					>contact us</a
				>.
			</p>
		</CardContextBlock>
	</Card>
	<Card class="flex flex-col md:flex-row-reverse md:justify-between items-center">
		<CardTitleBlock>
			<div transition:fade class="flex justify-center items-center">
				<img src="index/undraw_agree_re_hor9.svg" alt="Join us" class="w-32 h-32" />
			</div>
			<h1 class="p-5 font-bold text-4xl truncate">Join us</h1>
		</CardTitleBlock>
		<CardContextBlock>
			<p>
				Apple Lab adheres to the development line of small but focused, and only enrolls 8 to 9
				students for each class. The enrollment target is all over the university. We have no hard
				and fast admission criteria, we just hope to meet you with different ideas.
			</p>
			<p>
				From the end of August to the beginning of September each year, we will advertise through
				this site and various channels. Looking forward to your <a class="font-bold" href="/joinUs"
					>joining us.</a
				>
			</p>
		</CardContextBlock>
	</Card>
</List>
