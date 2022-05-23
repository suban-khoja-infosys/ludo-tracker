<script>
	import {EVENTS, fireEvent} from './EventManager';

	export let value;

	export let allowClick = false;

	const OnClick = () => {
		fireEvent(EVENTS.ON_DICE,value);
	}

</script>

<main>
	<button on:click={ allowClick ? OnClick : null} class="block">{value}</button>	
</main>

<style>

	.block{
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid;
		border-radius: 4px;
		margin: 5px;
		height: 50px;
		box-sizing: border-box;
		border-color: #2d2d2d;
		width: 90%;
		color: #2d2d2d;
		background-color: transparent;
		min-width: 50px;
	}

</style>