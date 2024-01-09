<template>
  <li class="flex border-b hover:bg-slate-100 transition-colors">
    <div class="flex justify-between w-[250px]">
      <div class="flex items-center pl-4">
        <Dot :color="feedLine.color" />
      </div>

      <TimeAgo :color="feedLine.color" :date="props.feedLine.created_at" />
    </div>

    <div class="p-4 w-full">
      <template v-for="payload in props.feedLine.payloads">
        <component
            :is="getPayloadComponent(payload.type)"
            :payload="payload"
        />
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

interface FeedLineProps {
  feedLine: FeedLine
}

const props: FeedLineProps = defineProps<FeedLineProps>()

const payloads: { [key in string]: any } = {
  [PayloadType.Custom]: CustomPayload,
  [PayloadType.Text]: TextPayload,
  [PayloadType.Log]: LogPayload
}

const getPayloadComponent = (payloadType: PayloadType) => {
  return payloads[payloadType] || null
}
</script>
