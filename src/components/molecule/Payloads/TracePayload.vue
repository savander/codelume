<template>
  <ul>
    <li
        class="font-mono"
        v-for="(frame, id) in props.payload.content.frames"
    >
      #{{ id + 1 }}.

      <UseClipboard v-slot="{ copy, copied }" :source="getClassMethod(frame)">
        <span
            :class="frame.vendor_frame ? classes.vendor : classes.nonVendor"
            :title="frame.file_name + ':' + frame.line_number"
            @click="copy()"
        >
          {{ getClassMethod(frame) }}

          <span class="ml-2 !text-white">
            {{ copied ? 'Copied!' : '' }}
          </span>
        </span>
      </UseClipboard>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { UseClipboard } from '@vueuse/components'
import { TracePayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface TracePayloadProps {
  payload: TracePayload
}

const getClassMethod = (frame: { class: string, method: string }): string => {
  return frame.class + '::' + frame.method + '()'
}

const props: TracePayloadProps = defineProps<TracePayloadProps>()

const classes = {
  vendor: ['text-slate-500 hover:text-slate-700 text-sm font-mono cursor-pointer hover:underline'],
  nonVendor: ['text-orange-500 hover:text-orange-700 text-sm font-bold font-mono cursor-pointer hover:underline']
}
</script>
