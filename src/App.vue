<template>
  <DefaultTemplate>
    <component :is="currentPage"></component>
  </DefaultTemplate>
</template>

<script setup lang="ts">
import DefaultTemplate from "@/templates/DefaultTemplate.vue";
import { useRouting } from "@/store/Routing";
import { storeToRefs } from "pinia";

const { currentPage } = storeToRefs(useRouting());
</script>
