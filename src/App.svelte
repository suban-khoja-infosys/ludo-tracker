<script>
	import { onDestroy, onMount } from "svelte";
	import Block from "./Block.svelte";
	import {registerListener , EVENTS} from './EventManager';
	const NO_OF_ROWS = [5,5,5,5,5];

	const DICE = [1,2,3,4,5,6];
	let history_index = 0;
	let history = [
		[],
		[],
		[],
		[],
		[],
		[]
	];

	let stats = [
		[],
		[],
		[],
		[],
		[],
		[]
	];

	const processDiceEvent = (num) => {
		console.log('num',num);
		if(num){
			history[history_index].push(num);
			if(history[history_index].length === 6) history_index++;
			stats[num-1].push(num);
		} 
		history = history;
		stats = stats;
	}

	onMount(() => {
		registerListener(EVENTS.ON_DICE,processDiceEvent);
	});

	onDestroy ( () => {
	})

</script>

<main class="app">

	<div class="row stat">
		{#each stats as stat}
			<div class="container-column">
				{#each stat as NUM}
					<Block value={NUM}/>
				{/each}
			</div>
		{/each}
	</div>

	<div class="row history">
		{#each history as his }
			<div class="container-row">
				{#each his as NUM}
					<Block value={NUM}/>
				{/each}
			</div>
		{/each}
	</div>

	<div class="row footer">

		{#each DICE as NUM}
			<div class="container-column">
				<Block value={NUM} allowClick/>
			</div>
		{/each}

	</div>
	
</main>

<style>

	main.app{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		position: absolute;
		box-sizing: border-box;
	}

	.row{
		width : 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}

	.container-column{
		flex-grow: 1;
		justify-content: center;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}

	.container-row{
		flex-grow: 1;
		justify-content: center;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
	}

	.stat {
		background-color: rgb(247, 176, 176);
		align-items: self-end;
		flex-grow: 1;
		flex-basis: 45%;
		align-content: flex-start;
		justify-content: center;
		box-sizing: border-box;
	}

	.history{
		background-color: rgb(176, 176, 247);
		align-items: self-end;
		flex-grow: 1;
		flex-basis: 45%;
		align-content: flex-start;
		justify-content: center;
		box-sizing: border-box;
		flex-wrap: wrap;
	}

	.footer{
		background-color: rgb(207, 239, 175);
		/* flex-grow: 1; */
		flex-basis: 10%;
		justify-content: center;
		box-sizing: border-box;
	}
</style>