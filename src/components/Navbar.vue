<template>
    <v-container fluid>
        <v-app-bar color="orange" dark>
            <v-spacer />
            <v-btn outlined class="ml-5">
                <router-link to="/" class="navbar-button">Главная</router-link>
            </v-btn>
            <v-btn outlined class="ml-5">
                <router-link to="/gallery" class="navbar-button">Галерея</router-link>
            </v-btn>
        </v-app-bar>
    </v-container>
</template>

<style scoped>
.navbar-button{
    color: white;
    text-decoration: none;
}
</style>