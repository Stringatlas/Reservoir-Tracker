<script lang="ts">
	import Chart from "./chart.svelte";
	import Highcharts from "./highcharts.svelte";
	import {parse, example} from "./parser";
	import stationData from "./data.json";

	let search: string;
</script>

<main>
	<div class="title-bar">
		<h1>View Reservoir Levels</h1>
	</div>

	<div>
		<p style="display:inline-block">Search: </p> <div style="display:inline-block">
			<input type="text" bind:value={search}>
		</div>
	</div>

	<div id="charts">
		{#each Object.keys(stationData) as key, i}
			{#if key == "San Luis" && (search == "" || search == undefined || "San Luis Reservoir".toLowerCase().includes(search))}
				<Chart name="San Luis Reservoir" id={key} type="Line" />
			{:else if (search == "" || search == undefined || Object.values(stationData[key])[0].toString().toLowerCase().includes(search.toLowerCase()))}
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

	input {
		width: 75vw;
		height: 5vh;
		border: 0.3vmin;
		border-radius: 2vmin;
		border-style: solid;
		border-color: rgb(194, 205, 215);
		box-shadow: inset;
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