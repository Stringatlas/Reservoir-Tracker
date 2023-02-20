<script lang="ts">
    import Radioselect from "./radioselect.svelte";

    export let name: string;
    export let id: string;
    export let type: "Line" | "Scatter" | "Bar";
    
    import RadioSelect from "./radioselect.svelte";

    let selectedOption: 0 | 1 = 1;

</script>



<div id="parent">
    <h1>{name}</h1>

    <RadioSelect option1={"Daily"} option2={"Monthly"} bind:selectedOption={selectedOption}/>
    <div id="highchart">

    </div>
</div>

<style>
    #parent {
        border-radius: 10px;
        border-width: 5px;
        border-style: solid;
        width: 400px;
        height: 500px;
        margin: 1vmin;
    }

    #highchart {

    }   
</style>