<template>
  <li class="flex w-min-full border-b dark:border-b-slate-800">
    <div
        :class="colors[props.feedLine.color].border"
        class="flex justify-end items-start shrink-0 w-64 max-w-64 px-5 py-2.5 border-r-4"
    >
      <TimeAgo :date="props.feedLine.created_at" />
    </div>

    <div class="w-full p-2.5 pb-0">
      <div
          v-for="payload in props.feedLine.payloads"
          class="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 mb-2.5 rounded"
      >
        <component
            :is="getPayloadComponent(payload.type)"
            :payload="payload"
        />

        <UseClipboard v-slot="{ copy, copied }" :source="getOriginLine(payload)">
          <div
              class="text-xs text-slate-400 mt-2.5 cursor-pointer hover:underline"
              @click="copy()"
          >
            {{  getOriginLine(payload) }}

            <span class="ml-2 !text-white !no-underline">
              {{ copied ? 'Copied!' : '' }}
            </span>
          </div>
        </UseClipboard>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { UseClipboard } from '@vueuse/components'
import { FeedLine, Payload } from '@/store/FeedStore.ts'
import { PayloadType } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import TextPayload from '@/components/molecule/Payloads/TextPayload.vue'
import LogPayload from '@/components/molecule/Payloads/LogPayload.vue'
import CustomPayload from '@/components/molecule/Payloads/CustomPayload.vue'
import TablePayload from '@/components/molecule/Payloads/TablePayload.vue'
import ApplicationLogPayload from '@/components/molecule/Payloads/ApplicationLogPayload.vue'
import TracePayload from '@/components/molecule/Payloads/TracePayload.vue'
import EloquentModelPayload from '@/components/molecule/Payloads/EloquentModelPayload.vue'
import ExceptionPayload from '@/components/molecule/Payloads/ExceptionPayload.vue'
import JsonStringPayload from '@/components/molecule/Payloads/JsonStringPayload.vue'
import TimeAgo from '@/components/atom/TimeAgo/TimeAgo.vue'
import { Color } from '@/types'
import ExecutedQueryPayload from '@/components/molecule/Payloads/ExecutedQueryPayload.vue'

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
  [PayloadType.ExecutedQuery]: ExecutedQueryPayload,
  [PayloadType.Trace]: TracePayload,
  [PayloadType.Custom]: CustomPayload,
}

const colors = {
  [Color.Clear]: {
    border: [],
  },
  [Color.Gray]: {
    border: ['dark:border-slate-800'],
  },
  [Color.Red]: {
    border: ['border-red-600'],
  },
  [Color.Green]: {
    border: ['border-green-500'],
  },
  [Color.Blue]: {
    border: ['border-blue-500'],
  },
  [Color.Orange]: {
    border: ['border-orange-500'],
  },
  [Color.Purple]: {
    border: ['border-purple-500'],
  },
}

const getPayloadComponent = (payloadType: PayloadType) => {
  return payloads[payloadType] || null
}

const getOriginLine = (payload: Payload) => {
  return `${ payload.origin.file }:${ payload.origin.line_number }`
}
</script>
