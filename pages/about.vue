<template>
    <div>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li>About</li>
    </ul>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: "default",
  })

  console.log("RUN: about.vue")

</script>

<style scoped>

</style>