<script>
	import Navbar from './Navbar.svelte'
	import Player from './Player.svelte'
	import AddPlayer from './AddPlayer.svelte'

	let players = [
    {
      name: "John Doe",
      points: 53
    },
    {
      name: "Sam Smith",
      points: 45
    },
    {
      name: "Sara Wilson",
      points: 34
    }
  ];
  	let add = (e)=>{
	console.log(e);
	const newPlayer = e.detail;
	players = [...players, newPlayer];
	}
	let deletePlayer = (name) => {
		players = players.filter(p=>p.name!=name);
		players = players;
	}
</script>
<style>
</style>

<Navbar/>

<div class="container">
	<AddPlayer on:addPlayer={add}/>
	{#if players.length!=0}
{#each players as player}
	<Player name={player.name} points={player.points} on:delMe={deletePlayer(player.name)}/>
{/each}
{:else}
<p>No players</p>
{/if}

</div>
