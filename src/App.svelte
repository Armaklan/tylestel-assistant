<script lang="ts">		
	import ActionsList from './actions/adapters/primaries/ActionsList.svelte';
	import { buildContainer } from './context-builder';

	buildContainer();
</script>

<main>
  <ActionsList />
</main>

<style>

</style>
