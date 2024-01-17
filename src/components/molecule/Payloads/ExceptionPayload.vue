<template>
  <div>
    <span
        class="block text-xl font-bold text-gray-800 mb-3"
        v-html="props.payload.content.class"
    />

    <span
        v-if="props.payload.content.message"
        class="block mb-3 mt-3"
        v-html="props.payload.content.message"
    />

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
  </div>
</template>

<script setup lang="ts">
import { ExceptionPayload } from '@/components/molecule/Payloads/PayloadsDefinition.ts'

interface ExceptionPayloadProps {
  payload: ExceptionPayload
}

const props: ExceptionPayloadProps = defineProps<ExceptionPayloadProps>()

const classes = {
  vendor: ['text-gray-500 hover:text-gray-700 text-sm font-mono cursor-pointer hover:underline'],
  nonVendor: ['text-orange-500 hover:text-orange-700 text-sm font-bold font-mono cursor-pointer hover:underline']
}
</script>
