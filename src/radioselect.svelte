<script lang="ts">
    export let options;

    export let selectedOption: number;
</script>

<div class="wrapper">
    {#each options as option, i}
        <button
            class:selected={selectedOption === i}
            on:click={() => {
                selectedOption = i;
            }}
        >
            {option}
        </button>
    {/each}
</div>

<style>
    button {
        display: inline-block;
        border-radius: 1rem;
        box-shadow: #ff3e00;
        padding: 0.75rem 1.25rem;
    }

    .selected {
        background-color: #ff3e00;
        color: white;
    }

    .wrapper {
        width: fit-content;
        height: fit-content;
    }
</style>
