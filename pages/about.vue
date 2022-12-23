<template>
    <div>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li>About</li>
        <li><NuxtLink to="/items">Items</NuxtLink></li>
      </ul>
      <div>pos: {{ x }}, {{ y }}</div>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: "default",
  })

console.log("RUN: about.vue")

const { x, y } = useMouse()

</script>

<style scoped>

</style>