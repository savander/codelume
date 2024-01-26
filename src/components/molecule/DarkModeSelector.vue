<template>
  <div class="flex items-center">
    <SunIcon
        :class="enabled ? 'text-slate-600' : 'text-orange-400'"
        class="h-5 w-5 mr-2"
    />

    <Switch
        v-model="enabled"
        :class="enabled ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-300'"
        class="relative inline-flex h-6 w-11 items-center rounded-full border"
    >

      <span class="sr-only">Dark mode</span>
      <span
          :class="enabled ? 'translate-x-6 bg-slate-100' : 'translate-x-1 bg-orange-400'"
          class="inline-block h-4 w-4 transform rounded-full transition"
      />
    </Switch>

    <MoonIcon
        :class="enabled ? 'text-slate-100' : 'text-slate-300'"
        class="h-5 w-5 ml-2"
    />
  </div>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/16/solid'
import { ref, watch } from 'vue'

const enabled = ref(true)

watch(enabled, (value) => {
  document.documentElement.classList.toggle('dark', value)
}, { immediate: true })
</script>
