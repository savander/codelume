<template>
  <component :is="as" @click="() => setCurrentPage(to)">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { RouteName } from "@/routes/routes";
import { useRouting } from "@/store/Routing";

interface Props {
  to: RouteName;
  as?: string;
}

withDefaults(defineProps<Props>(), {
  as: "button",
});

const { setCurrentPage } = useRouting();
</script>
