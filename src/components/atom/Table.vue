<template>
  <div>
    <span
        v-if="$slots.label"
        class="inline-block mb-2 text-left font-bold text-gray-500"
    >
      <slot name="label" />
    </span>

    <table class="table-auto min-w-[400px] border-collapse border border-gray-200 text-sm">
      <thead>
        <tr v-if="$slots.header">
          <slot name="header" />
        </tr>
      </thead>

      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
</script>
