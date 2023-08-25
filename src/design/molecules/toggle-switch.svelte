<script lang="ts">
	import FormFieldInverse from "./form-field-inverse.svelte";

    export let name: string = '';
    export let label: string = '';
</script>

<style>
    /* your styles go here */
</style>

<FormFieldInverse label={label}>
    <input type="checkbox" value="" class="sr-only peer" name={name} checked>
    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</FormFieldInverse>