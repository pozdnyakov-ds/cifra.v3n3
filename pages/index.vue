<template>
  <div>
    <ul>
      <li>Home</li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      
      <button class="btn" @click="add">Add</button>
      {{ count }}

      <p>--{{ pending }}--</p>

      <p>Name: {{ userStore.name }} </p>
      <p>Phone: {{ userStore.getPhone }} </p>

    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/users'
const userStore = useUserStore()
console.log("STORE: ", userStore);
  
  console.log("RUN: index.vue")

  definePageMeta({
    layout: "default",
  })

  useHead({
    title: 'ToDo App',
    meta: [
      {
        name: 'description',
        content: 'Nuxt 3 ToDo App with Composition API'
      }
    ]
  })

  let count = ref(0);
  const add = () => {
    count.value++
    refresh()
    userStore.setPhone("--000--") 
    console.log("Name: ", userStore.getName);
  }

  const foo = useCookie("foo")
  foo.value = 'data'
  console.log("FOO: ", foo.value);

  // const getApiData = () = {
  //   return await useFetch('/api')
  // }

  const { data: user, pending, refresh } = await useFetch('/api')
  console.log("API: ", JSON.parse(user.value))

  
</script>

<style scoped>
button {
  border: 1px dotted #333;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
}
</style>