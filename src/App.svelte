<script lang="ts">
	import Chart from "./chart.svelte";
	import Highcharts from "./highcharts.svelte";
	import {parse, example} from "./parser";
	import stationData from "./data.json";

</script>

<main>
	<Highcharts data={example()} names={["LUS"]}/>
	<div class="title-bar">
		<h1>View Reservoir Levels</h1>
	</div>


	<div id="charts">
		{#each Object.keys(stationData) as key, i}
			{#if key == "San Luis"}
				<Chart name="San Luis Reservoir" id={key} type="Line" />
			{:else}
				<Chart name={Object.values(stationData[key])[0].toString()} id={key} type="Line" />
			{/if}
		{/each}
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