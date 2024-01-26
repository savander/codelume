<template>
  <div>
    <span
        class="block mb-3 feedback-heading"
        v-html="props.payload.content.class_name"
    />

    <span
        class="block mb-3 text-sm font-bold"
    >
      Attributes:
    </span>

    <HtmlBlock
        v-html="props.payload.content.attributes"
    />

    <span
        class="block mb-3 mt-3 text-sm font-bold "
        v-if="props.payload.content.relations"
    >
      Relations:
    </span>

    <HtmlBlock v-if="props.payload.content.relations" v-html="props.payload.content.relations" />
  </div>
</template>

<script setup lang="ts">
import { EloquentModelPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import HtmlBlock from '@/components/atom/HtmlBlock.vue'

interface EloquentModelPayloadProps {
  payload: EloquentModelPayload
}

const props: EloquentModelPayloadProps = defineProps<EloquentModelPayloadProps>()
</script>
