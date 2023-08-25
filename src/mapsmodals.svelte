<script lang="ts" context="module">
    import { writable } from "svelte/store";

    export let isOpen = writable("None");

    import stationData from "./data.json";
</script>

<script lang="ts">
    import { fade } from "svelte/transition";
    export let name: string;

    let loaded: boolean;

    // set which modal is open by name
    function closeTestModal() {
        $isOpen = "None";
    }

    function openTestModal() {
        $isOpen = name;
    }

    function onIFrameLoad() {
        loaded = true;
        console.log("Loaded");
    }
</script>

{#if $isOpen === name}
    <div role="dialog" class="modal" transition:fade>
        <div class="contents">
            {#if !loaded}
                <p>Map may take a while to load</p>
            {/if}

            <div style="width: 80vw">
                <div style="width: 100%">
                    {#if stationData[name]}
                        <!-- issue with directly applying src URL to iframe 
                        Refused to display 'https://www.google.com/' in a frame because it 
                        set 'X-Frame-Options' to 'sameorigin'.-->
                        {@html `
                            <iframe
                            title="${name} Map"
                            width="100%"
                            height="500"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src=${stationData[name]["Map"]}
                            on:load={onIFrameLoad}
                        />`}
                    {:else}
                        <p>No map found</p>
                    {/if}
                </div>
            </div>
            <div class="actions">
                <button on:click={closeTestModal}>Exit</button>
            </div>
        </div>
    </div>
{/if}

{#if $isOpen === name}
    <div
        class="backdrop"
        style="z-index: 1"
        on:keyup={(e) => {
            if (e.key === "Escape") {
                closeTestModal();
            }
        }}
        on:click={closeTestModal}
        transition:fade
    />
{/if}

<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        pointer-events: none;
    }
    button {
        background: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        cursor: pointer;
    }
    .contents {
        min-width: 240px;
        border-radius: 6px;
        padding: 16px;
        background: white;
        display: flex;
        flex-direction: column;
        overflow: auto;
        justify-content: space-between;
        pointer-events: auto;
    }

    p {
        text-align: center;
        margin-top: 16px;
    }

    .actions {
        margin-top: 32px;
        display: flex;
        justify-content: flex-end;
    }

    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 0;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
