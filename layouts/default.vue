<template>
    <v-app>
        <Header />
        <v-main>
            <v-container fluid>
                <slot />
            </v-container>
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
    export default {
        
    }
</script>

<style>
.v-container {
    padding: 20px;
}
li {
    list-style-type: none; 
}
</style>