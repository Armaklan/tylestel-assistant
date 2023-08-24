<script lang="ts">
	import { onMount } from 'svelte';
	import { getContainer } from '../../../context-builder';
	import type { CombatActions } from '../../domain/entities/actions.model';
	

	type vm = {
		actions: CombatActions[];
	};

	let vm: vm = {
		actions: []
	};

	const { searchActionsUsecase } = getContainer();

	onMount(async () => {
		vm = await {
			actions: await searchActionsUsecase.execute({})
		};
	});
</script>

    <table>
      <tr>
        <th>Nom</th>
        <th>Type</th>
        <th>Attribut</th>
        <th>Métier</th>
      </tr>
  
      {#each vm?.actions as { name, type, test }}
        <tr>
          <td>{name}</td>
          <td>{type}</td>
          <td>{test?.attribut}</td>
          <td>{test?.metier}</td>
        </tr>
      {/each}
    </table>

<style>

</style>
