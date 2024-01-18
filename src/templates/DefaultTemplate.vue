<template>
  <div class="min-h-full pt-16">
    <div
        class="top-0 w-full z-50 fixed flex justify-between items-center h-16 px-6 border-b bg-white dark:bg-slate-900 dark:border-b-slate-800"
    >
      <slot name="header"></slot>

      <div class="pl-3 ml-auto">
        <DarkModeSelector />
      </div>
    </div>

    <div class="content-container dark:bg-slate-900">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import DarkModeSelector from '@/components/molecule/DarkModeSelector.vue'
</script>
