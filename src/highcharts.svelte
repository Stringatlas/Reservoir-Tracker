<script>
    import Highcharts from 'highcharts';

    let chart;
    export let data;

    import { onMount } from 'svelte';

    console.log(data)
    onMount(() => {
        const options = {
        chart: {
            type: 'line'
        },
        xAxis: null,
        title: {
            text: 'Water levels (Acre Feet)'
        },
        series: [
            {
                name: "Mot",
                data: data,
            },
        ]
    };

        Highcharts.chart(chart, options)
    })

</script>

<div id="chart-parent">
    <div id="myChart" bind:this={chart}></div>
</div>

<style>
    #chart-parent {
        width: 100%;
    }

</style>

