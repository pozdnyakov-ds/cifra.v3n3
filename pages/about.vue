<template>
    <div>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li>About</li>
        <li><NuxtLink to="/items">Items</NuxtLink></li>
      </ul>
      <!-- <div>pos: {{ x }}, {{ y }}</div> -->
      <button style="border: 1px solid #333;" @click="sendMessage">Send message</button>
    </div>
</template>

<script>
export default {
  data() {
    return { 
      socket: null
    }
  },
  mounted() {
    console.log("On mounted");
    this.socket = this.$nuxtSocket({
      
      name: 'home', // Use socket "home"
      channel: '/index', // connect to '/index'
      
      reconnection: false
    })
  },
  methods: {
    sendMessage() {
      console.log("Send message");
      this.socket.emit("About", {
        hello: 'world'
      }, (resp) => {
        // handle response, if any
      })
    }
  },
}  
  // definePageMeta({
  //   layout: "default",
  // })

  // const mainStore = useMainStore()

  // console.log("RUN: about.vue")

  // const { x, y } = useMouse()

  // const sendMessage = () => {
  //   console.log("Send message");
  //   mainStore.socket.emit("About", {
  //     hello: 'world'
  //   }, (resp) => {
  //     // handle response, if any
  //   })
  // }

  // onMounted(() => {
  //   // mainStore.socket = $nuxtSocket({
  //   //     channel: '/index'
  //   // })

  //   // /* Listen for events: */
  //   // mainStore.socket
  //   //   .on('someEvent', (msg, cb) => {
  //   //     /* Handle event */
  //   //     console.log("Message: ", msg);
  //   //   })
  // })

</script>

<style scoped>

</style>