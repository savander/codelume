<template>
  <div>
    <HtmlBlock
        class="block mb-3 feedback-heading"
        v-html="props.payload.content.value"
    />

    <HtmlBlock v-html="props.payload.content.context" />
  </div>
</template>

<script setup lang="ts">
import { ApplicationLogPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import HtmlBlock from '@/components/atom/HtmlBlock.vue'

interface ApplicationLogPayloadProps {
  payload: ApplicationLogPayload
}

const props: ApplicationLogPayloadProps = defineProps<ApplicationLogPayloadProps>()
</script>
