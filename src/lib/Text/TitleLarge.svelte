<script lang="ts">
    export let text: string | number
</script>
<h2> { text }</h2>

<style>
    h2 {
        margin:0;
        color: var(--greyscale-500);
        font-family: var(--font);
        font-size: var(--title-l);
    }
</style>