<template>
    <div class="container">
        test{{$route.params.id}}{{data}}
        <p>{{detail.name}}</p>
        <p @click="say">{{detail.value}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: 1
        }
    },
    mounted(){
        
    },
    async asyncData() {
        // return axios.get('/data/test.json').then(res =>{
        //     console.log(res)
        //     return {
        //         detail: res
        //     };
        // })
        let res = await axios.get('/data/test.json');
        console.log(res)
        return {
            detail: res.data.detail
        }
    },
    methods: {
        say(){
            this.$myInjectedFunction()
        }
    }
}
</script>