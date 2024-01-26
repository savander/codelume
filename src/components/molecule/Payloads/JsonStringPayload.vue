<template>
  <div
      class="font-mono font-sm whitespace-pre overflow-x-auto"
      v-html="beautified"
  >
  </div>
</template>

<script setup lang="ts">
import { JsonStringPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import { computed } from 'vue'

interface JsonStringPayloadProps {
  payload: JsonStringPayload
}

const props: JsonStringPayloadProps = defineProps<JsonStringPayloadProps>()
const beautified = computed(() => {
  return JSON.stringify(
      JSON.parse(props.payload.content.value),
      null,
      2
  )
})
</script>
