<template>
  <div ref="htmlBlock">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const htmlBlock = ref<HTMLElement | null>(null)

onMounted(() => {
  const scripts = htmlBlock.value?.querySelectorAll('script');

  if (! scripts) {
    return
  }

  // We need to create a new script element and copy the content of the old one
  // because otherwise the script will not be executed.
  for (const script of scripts) {
    const newScript = document.createElement('script');
    newScript.textContent = script.textContent;
    document.body.appendChild(newScript).parentNode.removeChild(newScript);
  }
})
</script>
