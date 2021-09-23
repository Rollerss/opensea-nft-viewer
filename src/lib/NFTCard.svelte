<script>
    export let nft;
</script>
<div class="relative">

    <div class="m-3 pb-8 mt-7" >
        <img src={nft.image_preview_url} alt={nft.collection.name} />
        <div class="text-center font-semibold text-xl">Traits</div>
        {#each nft.traits as trait}
        <div class="text-sm">
            <span class="font-bold">{trait.trait_type}: </span>
            {trait.value}
        </div>
        {/each}
            <a  class="text-blue-500 hover:border-green-800 border rounded p-1 absolute bottom-0" href={nft.permalink} target="_blank">Buy on OpenSea</a>
    </div>
</div>
