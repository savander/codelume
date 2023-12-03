<script setup lang="ts">
import { listen } from '@tauri-apps/api/event'
import DefaultTemplate from "@/templates/DefaultTemplate.vue";
import { RouterView } from "vue-router";
import { Log, useLogsStore } from '@/store/LogsStore';

const logsStore = useLogsStore();

// Add a listener for the `post-logs` event from the Rust side
listen('post-logs', (event) => {
  logsStore.addLog(event.payload as Log);
});
</script>

<template>
  <DefaultTemplate>
    <RouterView />
  </DefaultTemplate>
</template>
