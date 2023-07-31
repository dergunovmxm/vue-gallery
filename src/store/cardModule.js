import axios from "axios"

export default {
    state: {
        items: [],
        dialogVisible: false,
        currenItem: {}
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload
        },
        showDialog(state){
            state.dialogVisible = true
        },
        hideDialog(state){
            state.dialogVisible = false
        },
        setCurrentItem(state, payload){
            state.currenItem = payload
        }
    },
    getters: {
        getAllItems(state){
            return state.items 
        },
        getDialogVisible(state){
            return state.dialogVisible
        },
        getCurrentItem(state){
            return state.currenItem
        }
    },
    actions: {
        fetchItems(context){
            axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
            .then((response) => context.commit('setItems', response.data.photos) )
        }
    }

}