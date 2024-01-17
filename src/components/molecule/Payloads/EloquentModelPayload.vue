<template>
  <div>
    <span
        class="block text-xl font-bold text-gray-800 mb-3"
        v-html="props.payload.content.class_name"
    />

    <span class="block text-sm font-bold text-gray-800 mb-3">Attributes:</span>
    <code v-html="props.payload.content.attributes" />

    <span
        class="block text-sm font-bold text-gray-800 mb-3 mt-3"
        v-if="props.payload.content.relations"
    >
      Relations:
    </span>
    <code v-if="props.payload.content.relations" v-html="props.payload.content.relations" />
  </div>
</template>

<script setup lang="ts">
import { EloquentModelPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface EloquentModelPayloadProps {
  payload: EloquentModelPayload
}

const props: EloquentModelPayloadProps = defineProps<EloquentModelPayloadProps>()
</script>
