<!-- 學員註冊系統 -->

<script>
import StudentAddAndUpdate from "../components/StudentAddAndUpdate.vue"
import Footer from "../components/Footer.vue"

export default {
    components: {
        StudentAddAndUpdate,
        Footer
    }
}

</script>
<template>
    <div class="sticky-footer">

        <div id="quizHead">
            <h2 id="headText1">Java 全端培訓班</h2>
            <h2 id="headText2">學員帳號創建系統</h2>
        </div>

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