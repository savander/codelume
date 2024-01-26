<template>
  <div
      class="html-content"
      v-html="props.payload.content.content"
  />
</template>

<script setup lang="ts">
import { CustomPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface CustomPayloadProps {
  payload: CustomPayload
}

const props: CustomPayloadProps = defineProps<CustomPayloadProps>()
</script>
