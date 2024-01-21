<script lang="ts">
    import WalletMoney from "$lib/WalletMoney/WalletMoney.svelte";
    import TitleLarge from "$lib/Text/TitleLarge.svelte";

    export let characterName : string;
    export let amountOfPlatinum : Number;
    export let amountOfGold : Number;
    export let amountOfSilver : Number;
    export let amountOfBronze : Number;

</script>

<div class="character-wallet">
    <TitleLarge text={characterName}/>
    <WalletMoney
        amountOfPlatinum = { amountOfPlatinum }
        amountOfGold = { amountOfGold }
        amountOfSilver = { amountOfSilver }
        amountOfBronze = { amountOfBronze }
    />
</div>

<style>

    .character-wallet {

        display: flex;
        padding: 8px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
        background-color: var(--primary-600);

        border-radius: 0 0 16px 16px;
    }

</style>