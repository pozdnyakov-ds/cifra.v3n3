<template>
    <div>
        <button style="border: 1px solid #333; padding: 5px;" @click="pushMessage">Push message</button>
        <p>{{ appName }}
        </p>
    </div>
</template>

<script setup>
    const mainStore = useMainStore()
    const appName = ref(mainStore.app)
    var socket = {}

    const pushMessage = () => {
        console.log("Push message", socket)
        
        socket.emitP('mess', 'World', (resp) => {
            console.log("Emit massage from Socket.vue: ", resp)
        })
    }

    onMounted(() => {
        socket = getCurrentInstance().proxy.$nuxtSocket({
            name: 'main',
            reconnection: true
        })

        console.log('SOCKET.VUE Socket obj: ', socket)

        socket.on('mess', (msg, cb) => {
                console.log("Message in Socket: ", msg)
        })

        socket.emit('mess', {
            hello: 'world' 
            }, (resp) => {
                console.log("Emit massage from Socket.vue")
        })

    }) 

</script>

<style scoped>

</style>