<script>
import { onMount } from "svelte";

    import NftCard from "./lib/NFTCard.svelte";
    let nfts = [];

    onMount(async () => {
        await load();
    })

    const load = async () => {
        nfts = [];
        const options = {method: 'GET'};

        const res = fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=boredapeyachtclub', options)
        const data = await res;
        const json = await data.json();
        nfts = json.assets;
        console.log("loaded nfs");
    }

</script>

<div class="flex flex-row flex-wrap justify-center">
    {#each nfts as nft}
        <NftCard nft={nft} />
    {:else}
        <p>loading...</p>
    {/each}
</div>
<button on:click={load}>Reload</button>