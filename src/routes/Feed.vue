<template>
  <DefaultTemplate>
    <template #header>
      <div class="flex gap-x-2">
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

const feed = ref<HTMLElement | null>(null);
const { feedLines } = storeToRefs(useFeedStore());

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
