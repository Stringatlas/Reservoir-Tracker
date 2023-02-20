<script lang="ts">
    import { fade } from 'svelte/transition';
    export let name: string;

    let iframeLookup = new Map();
    iframeLookup.set("San Luis", "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=San%20Luis%20Reservoir+(San%20Luis%20Reservoir)&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed");

    let iframeSrc = iframeLookup.get(name);
    
    function closeTestModal() {
        $isOpen = false;
    }

    function openTestModal() {
        $isOpen = true;
    }
    
</script>

<script lang="ts" context="module">
    import { writable } from 'svelte/store';

    export let isOpen = writable(false);
    
</script>

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

    h2 {
        text-align: center;
        font-size: 24px;
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
      background: rgba(0,0,0,0.50)
    }
</style>

{#if $isOpen}
    <div role="dialog" class="modal" transition:fade>
        <div class="contents">
            <div style="width: 100%">
                <iframe title="Map" width="100%" height="auto" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                    src={iframeSrc}>
                </iframe>
            </div>
            <div class="actions">
                <button on:click="{closeTestModal}">Exit</button>
            </div>
        </div>
    </div>
{/if}

{#if $isOpen}
<div
    class="backdrop"

    on:keyup={e => {
        if (e.key === 'Escape') {
            closeTestModal()
        }
    }}
    on:click={closeTestModal}

    transition:fade
    />
{/if}
