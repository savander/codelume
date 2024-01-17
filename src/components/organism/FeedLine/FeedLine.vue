<template>
  <li class="grid grid-cols-[200px_1fr] border-b relative">
    <!-- Anchor for scroll, 25px is ideal -->
    <div class="cl-anchor absolute h-[28px] top-[-28px] left-0 pointer-events-none"></div>

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
import TimeAgo from '@/components/atom/TimeAgo/TimeAgo.vue'
import TablePayload from '@/components/molecule/Payloads/TablePayload.vue'
import ApplicationLogPayload from '@/components/molecule/Payloads/ApplicationLogPayload.vue'
import TracePayload from '@/components/molecule/Payloads/TracePayload.vue'
import EloquentModelPayload from '@/components/molecule/Payloads/EloquentModelPayload.vue'
import ExceptionPayload from '@/components/molecule/Payloads/ExceptionPayload.vue'
import JsonStringPayload from '@/components/molecule/Payloads/JsonStringPayload.vue'

interface FeedLineProps {
  feedLine: FeedLine
}

const props: FeedLineProps = defineProps<FeedLineProps>()

const payloads: { [key in string]: any } = {
  [PayloadType.Text]: TextPayload,
  [PayloadType.Table]: TablePayload,
  [PayloadType.Log]: LogPayload,
  [PayloadType.ApplicationLog]: ApplicationLogPayload,
  [PayloadType.JsonString]: JsonStringPayload,
  [PayloadType.Exception]: ExceptionPayload,
  [PayloadType.EloquentModel]: EloquentModelPayload,
  [PayloadType.Trace]: TracePayload,
  [PayloadType.Custom]: CustomPayload,
}

const getPayloadComponent = (payloadType: PayloadType) => {
  return payloads[payloadType] || null
}
</script>
