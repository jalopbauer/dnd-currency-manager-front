<script lang="ts">
    export let headerText : string;
</script>

<h1 class="header">{headerText}</h1>

<style>
    .header {
        padding: 0 16px 0 16px;
        display: flex;
        align-items: center;
        align-self: stretch;
        background-color: var(--primary-600);
    }
</style>