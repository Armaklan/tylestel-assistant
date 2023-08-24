<script lang="ts">
	import { onMount } from 'svelte';
	
	import type { CombatActions } from './actions/domain/entities/actions.model';
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

<main>

  <section>
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
  </section>
</main>

<style>

</style>
