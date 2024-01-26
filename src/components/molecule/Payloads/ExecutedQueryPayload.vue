<template>
  <h1 class="feedback-heading mb-2">
    Executed Query
  </h1>

  <div class="font-mono text-sm">
    {{ props.payload.content.sql }}
  </div>
</template>

<script setup lang="ts">
import { ExecutedQueryPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface ExecutedQueryProps {
  payload: ExecutedQueryPayload
}

const props: ExecutedQueryProps = defineProps<ExecutedQueryProps>()
</script>
