<template>
  <div>
    {{ props.payload.content.content }}
  </div>
</template>

<script setup lang="ts">
import { Payload } from '@/store/FeedStore.ts'

interface TextPayloadProps {
  payload: Payload
}

const props: TextPayloadProps = defineProps<TextPayloadProps>()
</script>
