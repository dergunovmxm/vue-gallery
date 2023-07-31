<template>
    <v-container>
        <AddCard @addCard="addCard" />
        <v-row>
            <Card v-for="item in $store.getters.getAllItems" :key="item.id" :item="item" />
        </v-row>
        <CardDialog />
    </v-container>
</template>

<script>
import Card from '@/components/gallery/Card'
import AddCard from '@/components/gallery/AddCard'
import CardDialog from '@/components/gallery/CardDialog.vue'
export default {
    data: () => ({
        items: [],
        // currentItem: {},
        // dialogVisible: false
    }),
    components: {
        Card, AddCard,
        CardDialog
    },
    mounted() {
        // this.getImages()
        this.$store.dispatch('fetchItems')
    },
    methods: {
        // getImages() {
        // this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        //     .then(response => this.items = response.data)
        //     .catch((error) => console.log(error))
        // },
        addCard(card) {
            this.items.push(card)
        },
        openImage(item) {
            this.currentItem = item
            this.dialogVisible = true
        }
    }

}
</script>

<style lang="scss" scoped></style>