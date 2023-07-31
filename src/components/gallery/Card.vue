
<template>
    <v-col cols="3">
        <v-card class="card" @click="openImage">
            <v-card-text class="card__image">
                <v-img v-bind:src="item.url"/>
            </v-card-text>
            <v-card-title class="card__text">{{item.title}}</v-card-title>
        </v-card>
    </v-col>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        // openImage(){
        //     this.$store.commit('setCurrentItem', this.item)
        //     this.$store.commit('showDialog')
        // }
        ...mapMutations(['setCurrentItem', 'showDialog', 'hideDialog']),
        openImage(){
            this.setCurrentItem(this.item)
            this.showDialog()
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__text{
        height: 3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 10px;
    }
}


</style>