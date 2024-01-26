<template>
  <HtmlBlock
      v-if="isHtmlable(props.payload.content.label)"
      class="html-content whitespace-pre"
      v-html="props.payload.content.content"
  />

  <HtmlBlock
      v-else
      class="whitespace-pre"
      v-html="props.payload.content.content"
  >
  </HtmlBlock>
</template>

<script setup lang="ts">
import { CustomPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import HtmlBlock from '@/components/atom/HtmlBlock.vue'

interface CustomPayloadProps {
  payload: CustomPayload
}

const props: CustomPayloadProps = defineProps<CustomPayloadProps>()

const isHtmlable = (label: string) => {
  return label === 'HTML' || label === 'Markdown'
}
</script>
