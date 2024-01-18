<template>
  <div v-html="props.payload.content.content" v-inline-children/>
</template>

<script setup lang="ts">
import { CustomPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface CustomPayloadProps {
  payload: CustomPayload
}

const props: CustomPayloadProps = defineProps<CustomPayloadProps>()
</script>
