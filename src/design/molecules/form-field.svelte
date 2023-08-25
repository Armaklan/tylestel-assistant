<script lang="ts">
    export let label: string = '';
</script>

<style>
    /* your styles go here */
</style>

<label class="relative inline-flex items-center mb-4 cursor-pointer">
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
    <slot />
</label>