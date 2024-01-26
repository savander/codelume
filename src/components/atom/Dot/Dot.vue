<template>
  <div class="flex justify-center items-center h-8 w-8 hover:cursor-pointer group">
    <div :class="[...classes.main,colors[props.color].main]">
      <div
          :class="[
            colors[props.color].active,
            ...classes.active,
            active ? '!border-opacity-50' : '!border-opacity-0'
          ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Color } from '@/types'

interface DotProps {
  color: Color,
  active: boolean,
}

const props: DotProps = withDefaults(defineProps<DotProps>(), {
  color: Color.Gray,
  active: false,
})

const colors = {
  [Color.Clear]: {
    main: 'bg-transparent border border-gray-400 dark:border-white',
    active: '-top-[9px] -left-[9px] border-gray-400 dark:border-white'
  },
  [Color.Red]: {
    main: 'bg-red-600',
    active: 'border-red-600'
  },
  [Color.Green]: {
    main: 'bg-green-500',
    active: 'border-green-500'
  },
  [Color.Blue]: {
    main: 'bg-blue-500',
    active: 'border-blue-500'
  },
  [Color.Orange]: {
    main: 'bg-orange-500',
    active: 'border-orange-500'
  },
  [Color.Purple]: {
    main: 'bg-purple-500',
    active: 'border-purple-500'
  },
  [Color.Gray]: {
    main: 'bg-gray-400 dark:bg-slate-700',
    active: 'border-gray-400 dark:border-slate-700'
  }
}

const classes = {
  main: [
    'relative w-2 h-2 rounded-full',
  ],
  active: [
    'absolute w-6 h-6 rounded-full border-[3px] -top-[8px] -left-[8px] group-hover:!border-opacity-50',
  ]
}
</script>
