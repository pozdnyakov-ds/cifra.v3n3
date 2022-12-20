<template>
  <div>
    <ul>
      <li>Home</li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      
      <button class="btn" @click="add">Add</button>
      {{ count }}

    </ul>
  </div>
</template>

<script setup lang="ts">
  console.log("RUN: index.vue")

  definePageMeta({
    layout: "default",
  })

  let count = ref(0);
  const add = () => {
    count.value++
  }

  // const store = useStore
  

</script>

<style scoped>
button {
  border: 1px dotted #333;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
}
</style>