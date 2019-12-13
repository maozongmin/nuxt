<template>
    <div class="container">
        我的文案：123
        <br><br><br>
        我是服务端渲染请求的数据
        <div v-for="(item,index) of list" :key="index">
            <p>{{item.username}}</p>
        </div>
        <br><br><br>
        我是异步加载数据：
        <div v-for="(item,index) of list2" :key="index">
            <p>{{item.username}}</p>
        </div>

        <br><br><br>
        我是本地data：{{data}}
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: 1,
            list2: [],
        }
    },
    async asyncData() {
        let res = await axios.get('http://api.yxstudio.cn/demo/getAdmin.php');
        return {
            list: res.data
        }
    },
    created(){
        this.getList();
    },
    methods: {
        async getList(){
            let res = await axios.get('http://api.yxstudio.cn/demo/getAdmin.php');
            this.list2 = res.data;
        }
    }
}
</script>