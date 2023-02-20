<script lang="ts">
    export let option1: string;
    export let option2: string;

    export let selectedOption: 0 | 1;
    
</script>

<style>
    button {
        display: inline-block;
        border-radius: 1rem;
        box-shadow: #ff3e00;
        padding: .75rem 1.25rem;
    }

    .selected {
		background-color: #ff3e00;
		color: white;
	}

    .wrapper {
        width: fit-content;
        height: fit-content;
        margin: 1rem;
    }
</style>

<div class="wrapper">
    <button class:selected={selectedOption === 0} on:click={() => {selectedOption = 0}}>
        {option1}
    </button>
    <button class:selected={selectedOption === 1} on:click={() => {selectedOption = 1}}>
        {option2}
    </button>
</div>

