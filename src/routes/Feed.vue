<template>
  <div
      class="grid grid-cols-1 grid-rows-[auto_1fr] max-h-screen h-screen"
  >
    <div ref="header" class="flex gap-x-2 p-2 justify-center border-b relative w-full bg-white">
      <button
          v-for="filter in filters"
          class="px-2 py-1 text-sm border rounded-md hover:opacity-80 transition-opacity"
          :class="filter.classes"
          @click="filterByColor = filter.color"
          v-text="filter.label"
      />

      <div class="absolute right-0 top-0 h-full p-2 pl-5 bg-gradient-to-r from-transparent to-white">
        <button
            class="px-2 py-1 text-sm bg-white border rounded-md hover:opacity-80 transition-opacity"
            @click="() => store.clearAll()"
        >
          Clear All
        </button>
      </div>
    </div>

    <ul
        ref="feed"
        class="overflow-y-auto overflow-x-hidden"
        v-auto-animate
    >
      <FeedLine
          v-for="feedLine in feedLinesComputed"
          :key="feedLine.uuid"
          :feed-line="feedLine"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useFeedStore } from "@/store/FeedStore.ts";
import FeedLine from '@/components/organism/FeedLine/FeedLine.vue'
import { storeToRefs } from 'pinia'
import { computed, nextTick, ref, watch } from 'vue'
import { Color } from '@/types'

const feed = ref<HTMLElement | null>(null);
const header = ref<HTMLElement | null>(null);
const store = useFeedStore();
const { feedLines } = storeToRefs(useFeedStore());


const filters = {
  all: {
    classes: 'border-gray-200 text-gray-500',
    color: null,
    label: 'All',
  },
  gray: {
    classes: 'bg-gray-100 border-gray-200 text-gray-500',
    color: Color.Gray,
    label: 'Gray',
  },
  red: {
    classes: 'bg-red-100 border-red-200 text-red-500',
    color: Color.Red,
    label: 'Red',
  },
  green: {
    classes: 'bg-green-100 border-green-200 text-green-500',
    color: Color.Green,
    label: 'Green',
  },
  blue: {
    classes: 'bg-blue-100 border-blue-200 text-blue-500',
    color: Color.Blue,
    label: 'Blue',
  },
  orange: {
    classes: 'bg-orange-100 border-orange-200 text-orange-500',
    color: Color.Orange,
    label: 'Orange',
  },
  purple: {
    classes: 'bg-purple-100 border-purple-200 text-purple-500',
    color: Color.Purple,
    label: 'Purple',
  },
}
const filterByColor = ref<Color | null>(null)

const feedLinesComputed = computed(() => {
  if (filterByColor.value === null) {
    return feedLines.value;
  }

  return feedLines.value.filter((feedLine) => {
    return feedLine.color === filterByColor.value;
  });
});

// Scroll to bottom when new feed line is added
watch(feedLines.value, () => {
  console.log({ feed: feed.value });

  nextTick(() => {
    // console.log(feed.value);
    feed.value?.lastElementChild
        ?.getElementsByClassName('cl-anchor')[0]
        ?.scrollIntoView({
          behavior: 'smooth',
        });
  });
});
</script>
