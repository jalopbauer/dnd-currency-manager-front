<script lang="ts">
    export let variant : "platinum" | "gold" | "silver" | "bronze";

    const variantText = {
        "platinum" : "P",
        "gold" : "G",
        "silver" : "S",
        "bronze": "B",
    }

</script>

<h4 class={variant}> {variantText[variant] } </h4>

<style>

    h4 {
        margin:0;
        color: var(--greyscale-500);
        font-family: var(--font);
        font-size: var(--title-s);
    }

    .platinum {
        color: #CCCBC7;
    }

    .gold {
        color: #E5C100;
    }

    .silver {
        color: #B3B3B3;
    }

    .bronze {
        color: #B8722D;
    }

</style>

