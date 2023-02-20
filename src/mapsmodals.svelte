<script lang="ts">
    import { fade } from 'svelte/transition';
    export let name: string;
    
    function closeTestModal() {
        $isOpen = "None";
    }

    function openTestModal() {
        $isOpen = name;
    }
    
</script>

<script lang="ts" context="module">
    import { writable } from 'svelte/store';

    export let isOpen = writable("None");
    
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

{#if $isOpen === name}
    <div role="dialog" class="modal" transition:fade>
        <div class="contents">
            <p>Map may take a while to load</p>
            <div style="width: 80vw">
                <div style="width: 100%">
                    {#if name == "San Luis"}
                        <iframe title="Map" width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=San%20Luis%20Reservoir+(San%20Luis%20Reservoir)&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
                        </iframe>
                    {:else if name == "Stevens Creek"}
                    <div style="width: 100%"><iframe title="Stevens Creek Reservoir Map" 
                        width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Stevens%20Creek%20Reservoir+(Stevens%20Creek%20Reservoir)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                    {:else if name == "Lexington"}
                        <div style="width: 100%"><iframe title="Lexington Reservoir" width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lexington%20Reservoir+(Lexington%20Reservoir)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                    {:else if name == "Oroville"}
                        <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20Oroville+(Lake%20Oroville)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>
                    {:else if name == "Berryessa"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20Berryessa+(Lake%20Berryessa)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                    {:else if name == "Coyote"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Mendocino%20Lake+(Mendocino%20Lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                    {:else if name == "Folsom"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Folsom%20Lake+(Folsom%20Lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
                    {:else if name == "Melones"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20Melones+(Lake%20Melones)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>
                    {:else if name == "Tahoe"}
                        <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20Tahoe+(Lake%20Tahoe)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
                    {:else if name == "Shasta"} 
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=shasta%20lake+(shasta%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>
                    {:else if name == "Millerton"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=millerton%20lake+(millerton%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>
                    {:else if name == "Cachuma"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=lake%20cachuma+(havasu%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
                    {:else if name == "Havasu"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=havasu%20lake+(havasu%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>
                    {:else if name == "Lopez"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=lopez%20lake+(lopez%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                    {:else if name == "Pine"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=pine%20flat%20lake+(pine%20flat%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                    {:else if name == "Don Pedro"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=don%20pedro%20reservoir+(don%20pedro%20reservoir)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>
                    {:else if name == "Almanor"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20almanor+(Lake%20almanor)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                    {:else if name == "New Bullards"}
                    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=New%20Bullards%20Bar%20Reservoir+(New%20Bullards%20Bar%20Reservoir)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
                    {:else}
                        <p>No map found</p>
                    {/if}
                </div>
            </div>
            <div class="actions">
                <button on:click="{closeTestModal}">Exit</button>
            </div>
        </div>
    </div>
{/if}

{#if $isOpen === name}
<div
    class="backdrop"
    style="z-index: 1"
    on:keyup={e => {
        if (e.key === 'Escape') {
            closeTestModal()
        }
    }}
    on:click={closeTestModal}

    transition:fade
    />
{/if}
