<script lang="ts">
	import { onMount } from 'svelte';
	import type { CombatActions } from '../actions/models/actions.model';
	import { buildContainer, getContainer } from './context-builder';

	type vm = {
		actions: CombatActions[];
	};

	let vm: vm = {
		actions: []
	};

	buildContainer();
	const { searchActionsUsecase } = getContainer();

	onMount(async () => {
		vm = await {
			actions: await searchActionsUsecase.execute({})
		};
	});
</script>

<svelte:head>
	<title>Tylestel Assistant</title>
	<meta name="description" content="Tylestel assistant du MJ" />
</svelte:head>

<section>
	<table>
		<tr>
			<th>Nom</th>
			<th>Type</th>
			<th>Attribut</th>
			<th>Métier</th>
		</tr>

		{#each vm?.actions as { name, type, data }}
			<tr>
				<td>{name}</td>
				<td>{type}</td>
				<td>{data?.attribut}</td>
				<td>{data?.metier}</td>
			</tr>
		{/each}
	</table>
</section>

<style>
</style>
