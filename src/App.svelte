<script lang="ts">
	import Chart from "./chart.svelte";

	let url = "https://google.com";
	
	fetch(url, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
   		mode: 'no-cors', // no-cors, *cors, same-origin
	})
	.then((response) => {
		if (!response.ok) {
		throw new Error(`HTTP error: ${response.status}`);
		}
		return response.blob();
	})
	.then((blob) => console.log(blob))
	.catch((err) => console.error(`Fetch problem: ${err.message}`));
</script>

<main>
	<h1>Reservoir Viewer</h1>

	<div id="charts">
		<Chart name="San Luis" id="chart1" type="Line" />
		<Chart name="San Luis" id="chart2" type="Line" />
		<Chart name="San Luis" id="chart3" type="Line" />
		<Chart name="San Luis" id="chart4" type="Line" />
		<Chart name="San Luis" id="chart5" type="Line" />
		<Chart name="San Luis" id="chart6" type="Line" />
	</div>
</main>

<style>
	#charts {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>