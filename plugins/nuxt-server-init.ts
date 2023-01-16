export default defineNuxtPlugin(async (context) => {
    const mainStore = useMainStore();
    if (process.server) {
        console.log("Процесс на сервере...")
        mainStore.app = "Server patch app name"
        return;
    } else {
        console.log("Процесс на клиенте...")
        mainStore.app = "Client patch app name"
        
        if (!mainStore.socket) {
            mainStore.socket = context.$nuxtSocket({
                name: 'main',
                reconnection: true
            })
            console.log("SERVER SOCKET: ", mainStore.socket)
        }
    }
  });