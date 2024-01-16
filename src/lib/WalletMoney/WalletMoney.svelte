<script lang="ts">
    import CurrencyAmount from "$lib/CurrencyAmount/CurrencyAmount.svelte";
    export let amountOfPlatinum : Number;
    export let amountOfGold : Number;
    export let amountOfSilver : Number;
    export let amountOfBronze : Number;
</script>

<div class="wallet-money">
    <CurrencyAmount amountOfMoney={amountOfPlatinum} variant="platinum"/>
    <CurrencyAmount amountOfMoney={amountOfGold} variant="gold"/>
    <CurrencyAmount amountOfMoney={amountOfSilver} variant="silver"/>
    <CurrencyAmount amountOfMoney={amountOfBronze}  variant="bronze"/>
</div>

<style>

    .wallet-money {
        display: flex;
        padding: 8px;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }

</style>