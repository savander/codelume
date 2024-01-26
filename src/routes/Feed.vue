<template>
  <DefaultTemplate>
    <template #header>
      <div class="flex gap-x-2">
        <button
            class="flex gap-x-2 items-center rounded-full px-3 py-1 mr-1 text-sm font-medium uppercase tracking-wide leading-none dark:text-slate-300 dark:hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-200 hover:text-slate-900 bg-slate-100 text-slate-700 dark:active:bg-slate-600 dark:active:text-slate-200 active:bg-slate-300 active:text-slate-900"
            @click="feedStore.clearAll()"
        >
          <XCircleIcon
              class="h-5 w-5"
          />

          <span class="mt-0.5">
            Clear
          </span>
        </button>

        <Dot
            v-for="(filter, key) in filters"
            :key="key"
            :color="filter"
            :active="filterByColor === filter"
            @click="filterByColor = filter"
        />
      </div>
    </template>

    <template #default>
      <ul class="min-w-min" ref="feed" v-auto-animate>
        <FeedLine
            v-for="feedLine in feedLinesComputed"
            :key="feedLine.uuid"
            :feed-line="feedLine"
        />
      </ul>
    </template>
  </DefaultTemplate>
</template>

<script setup lang="ts">
import { useFeedStore } from "@/store/FeedStore.ts";
import { storeToRefs } from 'pinia'
import { computed, nextTick, ref, watch } from 'vue'
import { Color } from '@/types'
import Dot from '@/components/atom/Dot/Dot.vue'
import DefaultTemplate from '@/templates/DefaultTemplate.vue'
import FeedLine from '@/components/organism/FeedLine/FeedLine.vue'
import { XCircleIcon } from '@heroicons/vue/16/solid'

const feed = ref<HTMLElement | null>(null);
const feedStore = useFeedStore();
const { feedLines } = storeToRefs(feedStore);

const filters = {
  all: Color.Clear,
  gray: Color.Gray,
  red: Color.Red,
  green: Color.Green,
  blue: Color.Blue,
  orange: Color.Orange,
  purple: Color.Purple,
}
const filterByColor = ref<Color>(Color.Clear)

const feedLinesComputed = computed(() => {
  if (filterByColor.value === Color.Clear) {
    return feedLines.value;
  }

  return feedLines.value.filter((feedLine) => {
    return feedLine.color === filterByColor.value;
  });
});

// Scroll to bottom when new feed line is added
watch(feedLines.value, () => {
  nextTick(() => {
    feed.value?.lastElementChild?.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
</script>
