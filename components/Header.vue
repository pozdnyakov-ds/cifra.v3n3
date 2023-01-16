<template>
<v-app-bar
        color="#cfd8dc"
        density="compact"
    >
        <template v-slot:prepend>
            <v-app-bar-nav-icon icon="mdi-view-list"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Cifra</v-app-bar-title>
        <v-spacer></v-spacer>

        <template style="display: block;">
            <v-tabs v-model="tab" color="green">
                <v-tab>
                    <nuxt-link to="/" exact>Home</nuxt-link>
                </v-tab>
                <v-tab>
                    <nuxt-link to="/about">About</nuxt-link>
                </v-tab>
                <v-tab>
                    <nuxt-link to="/items">Items</nuxt-link>
                </v-tab>
                <v-tab>
                    <nuxt-link to="/socket">Socket</nuxt-link>
                </v-tab>
                
            </v-tabs>
        </template>

        <v-spacer></v-spacer>
        <template v-slot:append>
            <v-btn @click="pushMe" icon="mdi-account"></v-btn>
        </template>

</v-app-bar>
</template>

<script setup>
const tab = ref();
const pushMe = () => {
        console.log("Push me...")
    }

</script>

<style scoped>

</style>