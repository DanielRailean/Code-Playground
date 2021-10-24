<script>
	import { createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();


	export let name = "Player name";
	export let points = 0;
	let showControls = false;

	const addPoint =() => (points++);
	const removePoint =() => (points--);
	const toggleControls =()=> (showControls=!showControls)

	const deleteMe = () =>{
		dispatch("delMe");
	}
	

</script>

<style>
	h1{
		color:var(--primary-color);
	}
	h3{
		margin-bottom: 10px;
	}
</style>

	<div class="card">
		<h1>{name}
		<button class="btn bnt-sm" on:click={toggleControls}>
			{#if showControls}
			-
			{:else}
			+
			{/if}
		</button>
		</h1>
		<h3>Points: {points}</h3>
		{#if showControls}
		<button class="btn" on:click={addPoint}>+1</button>
		<button class="btn btn-dark" on:click={removePoint}>-1</button>
		<button class="btn btn-danger" on:click={deleteMe}>Delete</button>
		<input type="number" bind:value={points}>
		{/if}
	</div>

