<template>
  <div>
    <RouterLink
      to="/"
      class="flex bg-sky-600 hover:bg-sky-700 px-4 py-2 text-white sm:px-8 sm:py-3"
      exact-active-class="bg-sky-700"
    >
      Home
    </RouterLink>

    <RouterLink
      to="/info"
      class="flex bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 sm:px-8 sm:py-3"
      exact-active-class="bg-sky-700"
    >
      About
    </RouterLink>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
