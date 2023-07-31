<template>
    <v-dialog v-model="$store.getters.getDialogVisible" max-width="600" @click:outside="$store.commit('hideDialog')">
        <v-card>
            <v-card-title>{{ $store.getters.getCurrentItem.title }}</v-card-title>
            <v-card-text>
                <v-img :src="$store.getters.getCurrentItem.url" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import store from '@/store';

export default {

    // computed: {
    //     fullTitle() {
    //         return `Название карточки - ${$}`
    //     }
    // }
}
</script>

<style lang="scss" scoped></style>