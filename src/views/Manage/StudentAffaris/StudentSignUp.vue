<!-- 學員註冊系統 -->

<script>
import StudentAddAndUpdate from "../../../components/StudentAddAndUpdate.vue"
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";

export default {
    data(){
        return{
            titleText:"學員註冊系統",
        }
    },
    components: {
        StudentAddAndUpdate,
        Footer,
        Header
    },
    methods:{
        goBack(){
            this.$router.push('/manage')
        }
    }
}

</script>
<template>
    <div class="sticky-footer">
        <Header v-model:secondTitle="titleText" @home="goBack"/>

        <div class="studentSignUpCard">

            <StudentAddAndUpdate></StudentAddAndUpdate>
            <button type="button" class="btn btn-outline-secondary" id="studentSignUpBtn">創建</button>

        </div>

        <Footer></Footer>

    </div>
</template>
<style lang="scss">
.studentSignUpCard {

    width: 50%;
    height: 800px;
    border-radius: 50px;
    background-color: rgba(129, 188, 227, 0.397);

    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-top: 5px;

    #studentSignUpBtn {
        position: relative;
        left: 46%;
        top: 60px;
    }

}
</style>