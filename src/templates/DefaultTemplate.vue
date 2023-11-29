<template>
  <div>
    <router-link
      to="/"
      class="flex bg-sky-700 px-4 py-2 text-white sm:px-8 sm:py-3"
    >
      Home
    </router-link>

    <router-link
      to="/info"
      class="flex bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 sm:px-8 sm:py-3"
    >
      About</router-link
    >

    <slot></slot>
  </div>
</template>
