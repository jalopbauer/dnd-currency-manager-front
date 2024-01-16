<script lang="ts">
    import Currency from "$lib/Currency/Currency.svelte";

    export let variant : "platinum" | "gold" | "silver" | "bronze";
    export let amountOfMoney : Number;
</script>

<div class="currency-amount">
    <h4>{amountOfMoney}</h4>
    <Currency variant={variant}/>
</div>

<style>

    .currency-amount {
        display: flex;
        align-items: center;
        gap: 2px;
    }

</style>