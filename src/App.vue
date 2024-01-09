<script setup lang="ts">
import { listen } from '@tauri-apps/api/event'
import DefaultTemplate from "@/templates/DefaultTemplate.vue";
import { RouterView } from "vue-router";
import { FeedLine, useFeedStore } from '@/store/FeedStore.ts';

const feedStore = useFeedStore();

// Add a listener for the `post-feeds` event from the Rust side
listen('post-feeds', (event) => {
  feedStore.addFeed(event.payload as FeedLine);
});
</script>

<template>
  <DefaultTemplate>
    <RouterView />
  </DefaultTemplate>
</template>
