<script lang="ts">
    export let headerText : string | number
</script>

<h1>{headerText}</h1>

<style>
    h1 {
        padding: 0 16px 0 16px;
        display: flex;
        align-items: center;
        align-self: stretch;
        background-color: var(--primary-600);
        margin:0;
        color: var(--greyscale-500);
        font-family: var(--font);
        font-size: var(--header);
    }

</style>