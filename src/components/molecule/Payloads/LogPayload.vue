<template>
  <HtmlBlock
      class="flex w-full whitespace-pre"
      v-for="log in props.payload.content.values"
      v-html="log"
  >
  </HtmlBlock>
</template>

<script setup lang="ts">
import { LogPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import HtmlBlock from '@/components/atom/HtmlBlock.vue'

interface TextPayloadProps {
  payload: LogPayload
}

const props: TextPayloadProps = defineProps<TextPayloadProps>()
</script>
