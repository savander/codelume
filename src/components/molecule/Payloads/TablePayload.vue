<template>
  <Table>
    <template #label>
      {{ props.payload.content.label }}
    </template>

    <template #header>
      <TableCol class="text-left font-bold border-r border-slate-200 dark:border-slate-700">
        Key
      </TableCol>

      <TableCol class="text-left font-bold">
        Value
      </TableCol>
    </template>

    <template #default>
      <tr v-for="(value, id) in props.payload.content.values" :key="id">
        <TableCol
            class="html-content font-bold border-r border-slate-200 dark:border-slate-700"
            v-html="id"
        />

        <TableCol
            class="html-content"
            v-html="value"
        />
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
