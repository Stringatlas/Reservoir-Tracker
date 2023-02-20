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
        xAxis: {
            type: 'datetime',
            tickInterval: 24 * 3600 * 1000, // One day in milliseconds
            labels: {
                format: '{value:%Y-%m-%d}' // Format the date label
            },
            title: "Month"
        },
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

