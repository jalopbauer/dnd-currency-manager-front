<script lang="ts">
    export let variant : "platinum" | "gold" | "silver" | "bronze";
</script>

{#if variant === "platinum"}
    <h4>P</h4>
{:else if variant === "gold"}
    <h4>G</h4>
{:else if variant === "silver"}
    <h4>S</h4>
{:else}
    <h4>B</h4>
{/if}