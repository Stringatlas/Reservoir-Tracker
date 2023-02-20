<script lang="ts">
	import Chart from "./chart.svelte";

	
	let start = "2021-2-19";
	let end = "2023-2-19";
	let period: "M" | "D" = 'D';
	
	let data = {
		"MEA": {
			stationID: "MEA",
			sensorNum: "15",
			period: ["M", "D"]
		},
		
	}
	import Highcharts from "./highcharts.svelte";
	import {parse, example} from "./parser"
</script>

<main>
	<Highcharts data={example()}/>
	<div class="title-bar">
		<h1>View Reservoir Levels</h1>
	</div>


	<div id="charts">
		<Chart name="San Luis Water Levels" id="San Luis" type="Line" />
		<Chart name="" id="chart2" type="Line" />
		<Chart name="San Luis" id="chart3" type="Line" />
		<Chart name="San Luis" id="chart4" type="Line" />
		<Chart name="San Luis" id="chart5" type="Line" />
		<Chart name="San Luis" id="chart6" type="Line" />
	</div>
</main>

<style>
	#charts {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	main {
		text-align: center;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 250;
		white-space: normal;
		
	}

	.title-bar {
		background-color: rgb(108, 149, 179);
	}
	

</style>