<template>
  <div>
    <span
        class="block mb-3 feedback-heading"
        v-html="props.payload.content.value"
    />

    <code v-html="props.payload.content.context" />
  </div>
</template>

<script setup lang="ts">
import { ApplicationLogPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface ApplicationLogPayloadProps {
  payload: ApplicationLogPayload
}

const props: ApplicationLogPayloadProps = defineProps<ApplicationLogPayloadProps>()
</script>
