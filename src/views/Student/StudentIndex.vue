<!-- 學生考試主頁 -->

<script>

import Footer from "../../components/Footer.vue";
import Modal from "../../components/Mockexam/Modal.vue";
import ClassifyTable from "../../components/ClassifyTable.vue";
import Header from '../../components/Header.vue';
import { mapState,mapActions } from "pinia";
import LoginState from "../../stores/LoginState";

export default {
    components: {
        Footer,
        Modal,
        ClassifyTable,
        Header

    },

    data() {
        return {
            titleText:"線上模擬試題",
        }
    },
    computed:{
        ...mapState(LoginState,["showStudentName"])
    },
    methods: {
        ...mapActions(LoginState,["getStudentInfo"]),
        backIndex() {
            this.$router.push('/studentIndex')
        },
    },
    updated(){
        // 避免重新整理時，資料無法顯示
        if(sessionStorage.getItem("userId") !== null){
            let id =JSON.parse(sessionStorage.getItem("userId"));
            console.log(id)
            this.getStudentInfo(id)
        }
    }
}
</script>
<template>
    <div class="sticky-footer">
        <div id="quizHead">
            <Header v-bind:secondTitle="titleText" v-bind:userName="showStudentName" @home="backIndex"/>
        </div>

        <ClassifyTable />

        <Footer />

    </div>
</template>
<style lang="scss">

</style>