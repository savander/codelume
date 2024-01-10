<template>
  <td
      class="border border-gray-200 px-4 py-2 text-left"
      :class="{
        'font-bold': props.bold,
      }"
  >
    <slot />
  </td>
</template>

<script setup lang="ts">
interface TableColProps {
  bold?: boolean
}

const props: TableColProps = withDefaults(defineProps<TableColProps>(), {
  bold: false,
})
</script>
