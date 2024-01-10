<template>
  <div>
    <span
        class="block text-lg font-bold text-gray-800 mb-3"
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
