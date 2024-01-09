<template>
  <div class="flex gap-x-2 mt-2 mb-2">
    <button
        class="bg-gray-100 border-gray-200 p-2 rounded-md"
        @click="currentColor = null"
    >
      All
    </button>

    <button
        class="bg-red-100 border-red-200 px-4 py-2 rounded-md"
        @click="currentColor = Color.Red"
    >
      Red
    </button>

    <button
        class="bg-green-100 border-green-200 px-4 py-2 rounded-md"
        @click="currentColor = Color.Green"
    >
      Green
    </button>

    <button
        class="bg-blue-100 border-blue-200 px-4 py-2 rounded-md"
        @click="currentColor = Color.Blue"
    >
      Blue
    </button>

    <button
        class="bg-orange-100 border-orange-200 px-4 py-2 rounded-md"
        @click="currentColor = Color.Orange"
    >
      Orange
    </button>

    <button
        class="bg-purple-100 border-purple-200 px-4 py-2 rounded-md"
        @click="currentColor = Color.Purple"
    >
      Purple
    </button>
  </div>

  <ul ref="feed" v-auto-animate>
    <FeedLine
        v-for="feedLine in feedLinesComputed"
        :key="feedLine.uuid"
        :feed-line="feedLine"
    />
  </ul>
</template>

<script setup lang="ts">
import { useFeedStore } from "@/store/FeedStore.ts";
import FeedLine from '@/components/organism/FeedLine/FeedLine.vue'
import { storeToRefs } from 'pinia'
import { computed, nextTick, ref, watch } from 'vue'
import { Color } from '@/types'

const feed = ref<HTMLElement | null>(null);
const { feedLines } = storeToRefs(useFeedStore());

const currentColor = ref<Color | null>(null)

const feedLinesComputed = computed(() => {
  if (currentColor.value === null) {
    return feedLines.value;
  }

  return feedLines.value.filter((feedLine) => {
    return feedLine.color === currentColor.value;
  });
});

// Scroll to bottom when new feed line is added
watch(feedLines.value, () => {
  nextTick(() => {
    feed.value?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
