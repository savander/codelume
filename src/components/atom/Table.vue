<template>
  <div>
    <span
        v-if="$slots.label"
        class="inline-block mb-2 text-left feedback-heading"
    >
      <slot name="label" />
    </span>

    <table
        class="table-auto border-collapse text-sm rounded overflow-hidden"
    >
      <thead>
        <tr
            class="text-left font-bold"
            v-if="$slots.header"
        >
          <slot name="header" />
        </tr>
      </thead>

      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>
