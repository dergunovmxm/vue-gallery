<template>
    <v-container>
        <v-row class="d-flex">
            <v-text-field v-model="title" />
            <v-file-input v-model="image" />
            <v-btn @click="addCard">Добавить</v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        title: null,
        image: null
    }),
    methods: {
        addCard() {
            const reader = new FileReader()
            reader.onload = () => {
                let card = {
                    id: Date.now(),
                    title: this.title,
                    url: reader.result
                }
                this.$emit('addCard', card)
            }
            reader.readAsDataURL(this.image)
            
        }
    }
}
</script>

<style lang="scss" scoped></style>