<template>
    <div>
      <h3>ABOUT</h3>
      <div>pos: {{ x }}, {{ y }}</div>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: "default",
  })

const mainStore = useMainStore()
var socket = {}

console.log("RUN: about.vue")

const { x, y } = useMouse()

onMounted(() => {
    socket = getCurrentInstance().proxy.$nuxtSocket({
      name: 'main',
      reconnection: true
    })
    
    console.log('ABOUT.VUE Socket obj: ', socket)

    socket.on("mess", (m) => {
        console.log("Client Message: ", m)
        //...
    });

}) 

</script>

<style scoped>

</style>