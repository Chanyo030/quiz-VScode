<!-- 學員帳號變更系統 -->

<script>
import StudentAddAndUpdate from "../../../components/StudentAddAndUpdate.vue"
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
export default {
    data() {
        return {
            titleText: "學員成績總覽",
        }
    },
    components: {
        StudentAddAndUpdate,
        Footer,
        Header,
    }
}

</script>
<template>
    <div class="sticky-footer">

        <Header v-model:secondTitle="titleText" />

        <div class="studentUpdateCard">

            <StudentAddAndUpdate></StudentAddAndUpdate>
            <button type="button" class="btn btn-outline-secondary" id="studentUpdateBtn">變更</button>

        </div>

        <Footer></Footer>

    </div>
</template>
<style lang="scss">
.studentUpdateCard {

    width: 50%;
    height: 800px;
    border-radius: 50px;
    background-color: rgba(129, 188, 227, 0.397);

    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-top: 5px;

    #studentUpdateBtn {
        position: relative;
        left: 46%;
        top: 60px;
    }

}
</style>