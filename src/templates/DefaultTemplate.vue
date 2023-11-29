<template>
  <div>
    <RouterLink
      to="home"
      class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
    >
      Home
    </RouterLink>
    <RouterLink to="info">Info</RouterLink>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import RouterLink from "@/components/RouterLink.vue";
</script>
