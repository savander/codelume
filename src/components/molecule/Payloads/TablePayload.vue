<template>
  <table
      class="table-auto min-w-[400px] border-collapse border border-gray-200 text-sm"
  >
    <thead>
      <tr>
        <th
            class="border border-gray-200 px-4 py-2 text-left font-bold text-gray-500"
            colspan="2"
        >
          {{ props.payload.content.label }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(value, id) in props.payload.content.values" :key="id">
        <td
            class="border border-gray-200 px-4 py-2 text-left font-bold"
            v-html="id"
        />
        <td
            class="border border-gray-200 px-4 py-2 text-left"
            v-html="value"
        />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { TablePayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface TablePayloadProps {
  payload: TablePayload
}

const props: TablePayloadProps = defineProps<TablePayloadProps>()
</script>
