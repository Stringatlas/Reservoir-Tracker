<script lang="ts">
    import Radioselect from "./radioselect.svelte";

    export let name: string;
    export let id: string;
    export let type: "Line" | "Scatter" | "Bar";
    
    import RadioSelect from "./radioselect.svelte";

    import MapsModal from "./mapsmodals.svelte";
    import { isOpen } from "./mapsmodals.svelte";

    import HighChart from './highcharts.svelte';
    import stationData from './data.json';
    import {parse, example} from "./parser";
    import Highcharts from "./highcharts.svelte";

    let finalData;
    let finalNames;

    let isReady = false;

    let timePeriods = ["Week", "Month", "Year", "5 Years", "10 Years", "All"];
    let selectedOptionDM: 0 | 1 = 1;

    let selectedOptionTimePeriod: number = 1;

    function getCurrentDate() {
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function getDateWeek() {
        const date = new Date();
        date.setDate(date.getDate() -8);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function getDateMonth() {
        const date = new Date();
        date.setMonth(date.getMonth() - 1, date.getDate()-1);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function getDateYear() {
        const date = new Date();
        date.setFullYear(date.getFullYear() -1, date.getMonth(), date.getDate() -1);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function getDate5Years() {
        const date = new Date();
        date.setFullYear(date.getFullYear() -5, date.getMonth(), date.getDate() -1);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function getDate10Years() {
        const date = new Date();
        date.setFullYear(date.getFullYear() -10, date.getMonth(), date.getDate() -1);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function getDateAll() {
        return "1900-1-1"
    } 

    let ordering = [getDateWeek, getDateMonth, getDateYear, getDate5Years, getDate10Years, getDateAll];

    async function fetchData(stationID: string) {
        let end = getCurrentDate();
        let start = ordering[selectedOptionTimePeriod]();
        let selectedDM = selectedOptionDM == 0 ? "D" : "M";
        
        try {
            let url = `https://cors-anywhere.herokuapp.com/https://cdec.water.ca.gov/dynamicapp/req/JSONDataServlet?Stations=${stationID}&SensorNums=15&dur_code=${selectedDM}&Start=${start}&End=${end}`;
        
            let jsonData;
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
            });

            jsonData = await response.json();
            return jsonData

        } catch (error) {
            console.log(error)
            console.log("trying htmldriven cors proxy")
            
            let urla = `https://cors-proxy.htmldriven.com/?url=/https://cdec.water.ca.gov/dynamicapp/req/JSONDataServlet?Stations=${stationID}&SensorNums=15&dur_code=${selectedDM}&Start=${start}&End=${end}`;
            let url = `https://api.allorigins.win/get?url=/https://cdec.water.ca.gov/dynamicapp/req/JSONDataServlet?Stations=${stationID}&SensorNums=15&dur_code=${selectedDM}&Start=${start}&End=${end}`;

            
            let jsonData;
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
            });

            jsonData = await response.json();
            return jsonData
        }
        
    }

    async function generateGraph() {
        isReady = false;
        let jsonData;

        if (id == "San Luis") {
            const sanLuisLocations = Object.keys(stationData[id]);
            const sanLuisNames = Object.values(stationData[id]);
            const data = []

            for (let location of sanLuisLocations) {
                data.push(parse(await fetchData(location)));
            }
            jsonData = data;

            finalNames = sanLuisNames;
        }   
        else {
            let stationID = Object.keys(stationData[id])[0];
            const stationName = Object.values(stationData[id]);
            jsonData = await fetchData(stationID);
            jsonData = [parse(jsonData)];

            finalNames = stationName;

        }
        console.log(jsonData);
        finalData = jsonData;

        isReady = true;
        
    }


</script>


<MapsModal name={id} />

<div id="parent">
    <h1>{name}</h1>

    <div id="top-left">
        <button on:click={() => {$isOpen = id;}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
            </svg>
        </button>
    </div>
    <div id="parameters">
        <div >
            <p>Datapoints</p>
            <div id="dm">
                <RadioSelect options={["Daily", "Monthly"]} bind:selectedOption={selectedOptionDM}/>
            </div>
            
        </div>
        <div>
            <p>
                Range
            </p>
            <div id="dm">
                <RadioSelect options={timePeriods} bind:selectedOption={selectedOptionTimePeriod}/>
            </div>

        </div>
        
    </div>
    
    <div id="highchart">
        {#if isReady}
            {#if finalData.length < 2} 
                <p>No data found</p>
            {/if}
            <HighChart bind:names={finalNames} bind:data={finalData}/>
        {/if}
    </div>

    <button class="button-30" on:click={generateGraph}>
        Generate chart
    </button>

    
</div>

<style>
    #dm {
        display: inline-block;
    }

    #top-left {
        position: absolute;
        
        width: fit-content;
        height: fit-content;
        top: 2%;
        left: 2%; /* this line of code will sort things out for you :) */
    }
    #parent {
        border-radius: 10px;
        border-width: 5px;
        border-style: solid;
        width: 90vw;
        height: fit-content;
        margin-bottom: 3vh;

        position: relative;
        display: block; /* fix for opera and ff */
    }

    button {
        color: white;
        background-color: rgb(41, 135, 217);
        border-radius: 10px;
        padding: 10px;
        
    }


    #highchart {
        width: 98%;
        margin: auto;
    }

    .button-30 {
    align-items: center;
    appearance: none;
    background-color: #FCFCFD;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395A;
    cursor: pointer;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
    }

    .button-30:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .button-30:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
    }

    .button-30:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
    }
</style>