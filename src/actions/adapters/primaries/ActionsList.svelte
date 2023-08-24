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

    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" class="px-6 py-4">Nom</th>
          <th scope="col" class="px-6 py-4">Type</th>
          <th scope="col" class="px-6 py-4">Attribut</th>
          <th scope="col" class="px-6 py-4">Métier</th>
        </tr>
      </thead>
      
  
      <tbody>
        {#each vm?.actions as { name, type, test }}
          <tr class="border-b dark:border-neutral-500">
            <td class="whitespace-nowrap px-6 py-4 font-medium">{name}</td>
            <td class="whitespace-nowrap px-6 py-4">{type}</td>
            <td class="whitespace-nowrap px-6 py-4">{test?.attribut}</td>
            <td class="whitespace-nowrap px-6 py-4">{test?.metier}</td>
          </tr>
        {/each}
      </tbody>
    </table>

<style>

</style>
