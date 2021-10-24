<script>
    import { createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    let player = {
        name: "",
        points: 0
    }

    function onSubmit(){
        dispatch("addPlayer",player);
    }

</script>

<form on:submit|preventDefault={onSubmit} class="grid-3">
    <input type="text" placeholder="Player Name" bind:value={player.name}>
    <input type="number"placeholder="Points" bind:value={player.points}>
    <button class="btn" type="submit">Add</button>
</form>