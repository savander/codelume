<script setup lang="ts">
import { useLogsStore } from "@/store/LogsStore";
import { useDateFormat, useNow } from "@vueuse/core";

const { logs } = useLogsStore();
const formatTime = (time: Date) => useDateFormat(time, "HH:mm:ss.SSS").value;
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between">
      <h1 class="text-2xl font-bold mb-4">Logs</h1>

      <span>
        {{ useDateFormat(useNow(), "HH:mm:ss").value }}
      </span>
    </div>

    <div class="flex flex-col gap-4" v-auto-animate>
      <div
        v-for="log in logs"
        :key="log.uuid"
        class="p-4 bg-slate-200 rounded border border-slate-300"
      >
        <div
          v-for="payload in log.payloads"
          class="bg-slate-100 p-4 mb-2 rounded hover:bg-slate-300 transition-colors"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-mono text-slate-500">
              {{ payload.origin.function_name }} ({{ payload.origin.file }}:{{
                payload.origin.line_number
              }})
            </span>

            <span class="text-xs font-mono text-slate-500 ml-2 font-bold">
              {{ payload.type }}
            </span>
          </div>

          <div class="text-sm text-slate-900 mb-3">
            {{ payload.content }}
          </div>
        </div>

        <hr class="border-t border-slate-300 mb-3 mt-5" />

        <span class="text-xs font-mono text-slate-500">
          Uuid: {{ log.uuid }}, Created At:
          {{ formatTime(log.created_at) }}
        </span>
      </div>
    </div>
  </div>
</template>
