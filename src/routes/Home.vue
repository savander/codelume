<script setup lang="ts">
import { listen } from '@tauri-apps/api/event';
import { onMounted, ref } from 'vue';

interface Log {
  id: number;
  message: string;
}

const logs = ref<Log[]>([]);

onMounted(() => {
  listen('post-logs', (event) => {
    const payload = event.payload as { message: string };
    logs.value.push({
      id: Date.now(),
      message: payload.message
    });
  });
});
</script>

<template>
  <div>
    <h1>Home</h1>

    <ul>
      <li v-for="log in logs" :key="log.id">
        {{ log.message }}
      </li>
    </ul>
  </div>
</template>
