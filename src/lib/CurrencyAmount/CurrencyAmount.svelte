<script lang="ts">
    import Currency from "$lib/Currency/Currency.svelte";
    import TitleSmall from "$lib/Text/TitleSmall.svelte";

    export let variant : "platinum" | "gold" | "silver" | "bronze";
    export let amountOfMoney : Number;
</script>

<div class="currency-amount">
    <TitleSmall text={amountOfMoney}/>
    <Currency variant={variant}/>
</div>

<style>

    .currency-amount {
        display: flex;
        align-items: center;
        gap: 2px;
    }

</style>