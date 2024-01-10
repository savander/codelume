<template>
  <li class="grid grid-cols-[200px_1fr] border-b relative">
    <!-- Anchor for scroll, 25px is ideal -->
    <div class="cl-anchor absolute top-[-25px] left-0"></div>

    <div class="flex justify-between">
      <div class="flex items-center pl-4">
        <Dot :color="feedLine.color" />
      </div>

      <TimeAgo :color="feedLine.color" :date="props.feedLine.created_at" />
    </div>

    <div class="p-4 break-all">
      <template v-for="payload in props.feedLine.payloads">
        <component
            :is="getPayloadComponent(payload.type)"
            :payload="payload"
        />

        <div>
          <hr class="mb-2 mt-4" />

          <span class="text-xs text-gray-500">
            {{ payload.origin.file }}:{{ payload.origin.line_number }}
          </span>
        </div>
      </template>
    </div>
  </li>
</template>

<script setup lang="ts">
import Dot from '@/components/atom/Dot/Dot.vue'
import { FeedLine } from '@/store/FeedStore.ts'
import { PayloadType } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import TextPayload from '@/components/molecule/Payloads/TextPayload.vue'
import LogPayload from '@/components/molecule/Payloads/LogPayload.vue'
import CustomPayload from '@/components/molecule/Payloads/CustomPayload.vue'
import TimeAgo from '@/components/atom/Dot/TimeAgo.vue'
import TablePayload from '@/components/molecule/Payloads/TablePayload.vue'

interface FeedLineProps {
  feedLine: FeedLine
}

const props: FeedLineProps = defineProps<FeedLineProps>()

const payloads: { [key in string]: any } = {
  [PayloadType.Custom]: CustomPayload,
  [PayloadType.Text]: TextPayload,
  [PayloadType.Log]: LogPayload,
  [PayloadType.Table]: TablePayload,
}

const getPayloadComponent = (payloadType: PayloadType) => {
  return payloads[payloadType] || null
}
</script>
