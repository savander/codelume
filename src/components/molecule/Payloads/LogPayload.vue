<template>
  <div
      class="flex w-full whitespace-pre"
      v-for="log in props.payload.content.values" v-html="log"
  >
  </div>
</template>

<script setup lang="ts">
import { LogPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface TextPayloadProps {
  payload: LogPayload
}

const props: TextPayloadProps = defineProps<TextPayloadProps>()
</script>
