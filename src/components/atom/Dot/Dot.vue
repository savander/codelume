<template>
  <div :class="[...classes.main, colors[props.color]]"></div>
</template>

<script setup lang="ts">
import { Color } from '@/types'

interface DotProps {
  color: Color
}

const props: DotProps = withDefaults(defineProps<DotProps>(), {
  color: Color.Gray,
})

const colors = {
  [Color.Red]: 'bg-red-600',
  [Color.Green]: 'bg-green-500',
  [Color.Blue]: 'bg-blue-600',
  [Color.Orange]: 'bg-orange-600',
  [Color.Purple]: 'bg-purple-600',
  [Color.Gray]: 'bg-gray-400',
}

const classes = {
  main: [
    'w-2.5 h-2.5 rounded-full',
  ],
}
</script>
