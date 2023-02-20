<script>
    import Highcharts from 'highcharts';

    let chart;
    export let data;
    export let names;

    import { onMount } from 'svelte';

    
    onMount(() => {
        let ser = [];
        for (let i = 0; i < names.length; i++) {
            ser.push({
                name: names[i],
                data: data[i],
            })
        }

        const options = {
        chart: {
            type: 'line'
        },
        xAxis: null,
        title: {
            text: 'Water levels (Acre Feet)'
        },
        series: ser
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

