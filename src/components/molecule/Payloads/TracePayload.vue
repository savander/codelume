<template>
  <ul>
    <li
        class="font-mono"
        v-for="(frame, id) in props.payload.content.frames"
    >
      #{{ id + 1 }}.

      <span
          :class="frame.vendor_frame ? classes.vendor : classes.nonVendor"
          :title="frame.file_name + ':' + frame.line_number"
      >
        {{ frame.class }}::{{ frame.method }}()
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { TracePayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface TracePayloadProps {
  payload: TracePayload
}

const props: TracePayloadProps = defineProps<TracePayloadProps>()

const classes = {
  vendor: ['text-gray-500 hover:text-gray-700 text-sm font-mono cursor-pointer hover:underline'],
  nonVendor: ['text-orange-500 hover:text-orange-700 text-sm font-bold font-mono cursor-pointer hover:underline']
}
</script>
