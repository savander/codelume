<template>
  <Table>
    <template #label>
      {{ props.payload.content.label }}
    </template>

    <template #default>
      <tr v-for="(value, id) in props.payload.content.values" :key="id">
        <TableCol v-html="id" bold />

        <TableCol v-html="value" />
      </tr>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { TablePayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import Table from '@/components/atom/Table.vue'
import TableCol from '@/components/atom/TableCol.vue'

interface TablePayloadProps {
  payload: TablePayload
}

const props: TablePayloadProps = defineProps<TablePayloadProps>()
</script>
