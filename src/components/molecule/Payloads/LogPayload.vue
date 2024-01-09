<template>
  <div
      class="flex w-full"
      v-for="log in props.payload.content.values" v-html="log"
  >
  </div>
</template>

<script setup lang="ts">
import { LogPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface TextPayloadProps {
  payload: LogPayload
}

const props: TextPayloadProps = defineProps<TextPayloadProps>()
</script>

<style lang="postcss">
.sf-dump {
  @apply rounded w-full p-3 text-sm bg-gray-100 !important;
  @apply text-orange-500 !important;
}

.sf-dump .sf-dump-protected, .sf-dump .sf-dump-private, .sf-dump .sf-dump-public {
  @apply text-orange-500 !important;
}

</style>
