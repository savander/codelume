<script setup lang="ts">
import { listen } from '@tauri-apps/api/event';
import { onMounted, ref } from 'vue';

interface Log {
  uuid: string;
  payloads: {
    type: string;
    content: any;
    origin: {
      function_name: string,
      file: string,
      line_number: number,
      hostname: string,
    };
  }[];
  meta: any;
}

const logs = ref<Log[]>([]);

onMounted(() => {
  listen('post-logs', (event) => {
    const payload = event.payload as Log;
    logs.value.push(payload);
  });
});
</script>

<template>
  <div>
    <h1>Home</h1>

    <TransitionGroup name="list" tag="div" class="p-4 flex flex-col gap-4">
      <div v-for="log in logs" :key="log.uuid" class="p-4 bg-slate-200 rounded border border-slate-300">
        <div v-for="payload in log.payloads" class="bg-slate-100 p-4 mb-2 rounded hover:bg-slate-300 transition-colors">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-mono text-slate-500">
              {{ payload.origin.function_name }} ({{ payload.origin.file }}:{{ payload.origin.line_number }})
            </span>

            <span class="text-xs font-mono text-slate-500 ml-2 font-bold">
              {{ payload.type }}
            </span>
          </div>

          <div class="text-sm text-slate-900 mb-3">
            {{ payload.content }}
          </div>
        </div>

        <hr class="border-t border-slate-300 mb-3 mt-5">

        <span class="text-xs font-mono text-slate-500">
          Uuid: {{ log.uuid }}
        </span>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>