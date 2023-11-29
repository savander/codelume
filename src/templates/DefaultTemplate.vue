<template>
  <div>
    <RouterLink to="home">Home</RouterLink>
    <RouterLink to="info">Info</RouterLink>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import RouterLink from "@/components/RouterLink.vue";
</script>
