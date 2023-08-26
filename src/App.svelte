<script lang="ts">
    import Chart from "./chart.svelte";
    import Highcharts from "./highcharts.svelte";
    import { parse } from "./parser";
    import stationData from "./output.json";
    import { onMount } from "svelte";

    let search: string;

    let corsWorking = false;

    onMount(() => {
        testCORSProxy();
    });

    async function testCORSProxy() {
        let url =
            "https://cors-anywhere.herokuapp.com/https://cdec.water.ca.gov/dynamicapp/req/JSONDataServlet?Stations=LUS&SensorNums=15&dur_code=D&Start=2023-01-31&End=2023-02-22";

        try {
            const response = await fetch(url, {
                method: "GET",
                mode: "cors",
            });

            if (!response.ok) {
                throw Error(response.statusText);
            }

            corsWorking = true;
        } catch (error) {
            console.log(error);
            console.log("cors not working");
            corsWorking = false;
        }
    }
</script>

<main>
    <div class="title-bar">
        <h1>View Reservoir Levels</h1>
    </div>

    {#if !corsWorking}
        <div>
            <p>
                For a better experience, please click the button to allow CORS
            </p>
            <iframe
                title="cors access"
                src="https://cors-anywhere.herokuapp.com/"
                frameborder="0"
            />
        </div>
    {/if}

    <div>
        <p style="display:inline-block">Search:</p>
        <div style="display:inline-block">
            <input type="text" bind:value={search} />
        </div>
    </div>

    <div id="charts">
        {#each Object.keys(stationData) as key, i}
            {#if key == "San Luis" && (search == "" || search == undefined || "San Luis Reservoir"
                        .toLowerCase()
                        .includes(search))}
                <Chart name="San Luis Reservoir" id={key} type="Line" />
            {:else if search == "" || search == undefined || stationData[key].Name.toString()
                    .toLowerCase()
                    .includes(search.toLowerCase())}
                <Chart
                    name={stationData[key].Name.toString()}
                    id={key}
                    type="Line"
                />
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
    iframe {
        width: 80vw;
        height: auto;
    }
</style>
