<template>
  <span>
    {{ props.payload.content.content }}
  </span>
</template>

<script setup lang="ts">
import { Payload } from '@/store/FeedStore.ts'

interface TextPayloadProps {
  payload: Payload
}

const props: TextPayloadProps = defineProps<TextPayloadProps>()
</script>
