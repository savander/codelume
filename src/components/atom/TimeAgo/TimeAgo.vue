<template>
  <time
      :datetime="props.date.toLocaleTimeString()"
      :title="props.date.toLocaleString()"
      :class="[...classes.main]"
  >
    {{ timeAgo }}
  </time>
</template>

<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'

interface TimeAgoProps {
  date: Date
}

const props: TimeAgoProps = withDefaults(defineProps<TimeAgoProps>(), {
  date: () => new Date(),
})

const timeAgo = useTimeAgo(props.date)

const classes = {
  main: ['leading-none font-medium text-sm'],
}
</script>
