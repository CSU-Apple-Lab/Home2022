<script>
    import { fade } from "svelte/transition";
	import { onDestroy, onMount } from "svelte";

    let myChart = null;

	function initChart() {
		const ctx = document.getElementById('myChart').getContext('2d');

		const data = {
			labels: [
				'Awards for provincial or above competitions',
				'University level or above scholarship',
				'Major projects at provincial level or above'
			],
			datasets: [
				{
					label: 'recent outcome',
					data: [17, 5, 6],
					fill: true,
					backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
				}
			]
		};

		const config = {
			type: 'doughnut',
			data: data
        };
		myChart = new Chart(ctx, config);
        myChart.options.plugins.legend.position = 'bottom';
        myChart.update();
	}

    onMount(initChart);
    //onDestroy(()=>myChart && myChart.destroy())
</script>

<div transition:fade class="flex justify-center items-center">
	<canvas id="myChart" width="400" height="400" />
</div>
