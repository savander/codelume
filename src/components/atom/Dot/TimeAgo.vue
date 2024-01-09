<template>
  <div :class="[...classes.main]">
    <time
        :datetime="props.date.toLocaleTimeString()"
        :class="[...classes.datetime, colors[color]]"
    >
      {{ timeAgo }}
    </time>
  </div>
</template>

<script setup lang="ts">
import { Color } from '@/types'
import { useTimeAgo } from '@vueuse/core'

interface TimeAgoProps {
  color: Color
  date: Date
}

const props: TimeAgoProps = withDefaults(defineProps<TimeAgoProps>(), {
  color: Color.Gray,
  date: () => new Date(),
})

const timeAgo = useTimeAgo(props.date)

const colors = {
  [Color.Red]: 'bg-red-100 border-red-200',
  [Color.Green]: 'bg-green-100 border-green-200',
  [Color.Blue]: 'bg-blue-100 border-blue-200',
  [Color.Orange]: 'bg-orange-100 border-orange-200',
  [Color.Purple]: 'bg-purple-100 border-purple-200',
  [Color.Gray]: 'bg-gray-100 border-gray-200',
}

const classes = {
  main: [
    'inline-flex border-r p-4',
  ],
  datetime: [
    'self-start leading-none border p-3 font-medium text-sm'
  ]
}
</script>
