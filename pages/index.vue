<template>
  <div>
    <ul>
      <li>Home</li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup>
  import {ref, computed, watch} from 'vue'
  definePageMeta({
    layout: "default",
  })

  console.log("RUN: index.vue")

  const router = useRouter();
  console.log("Router: ", router)

</script>

<style scoped>

</style>