<script>
    import "../../../styles.css"
    import Header from "$lib/Header/Header.svelte";
    import {page} from "$app/stores";
    import CharacterWallet from "$lib/CharacterWallet/CharacterWallet.svelte";

    const {id} = $page.params
    const headerText = "Party " + id

    let characterName = "Nyssa Sylvatica"
    let amountOfPlatinum = 10
    let amountOfGold = 9
    let amountOfSilver = 8
    let amountOfBronze = 7
</script>

<Header headerText = { headerText }/>
<div class="body">
    <CharacterWallet
        characterName = { characterName }
        amountOfPlatinum = { amountOfPlatinum }
        amountOfGold = { amountOfGold }
        amountOfSilver = { amountOfSilver }
        amountOfBronze = { amountOfBronze }
    />
</div>

<style>

    .body {
        align-self: stretch;
    }

</style>