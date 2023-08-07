<!-- 學員個人成績查詢 -->

<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";

export default {
    data() {
        return {
            titleText: "成績查詢"
        }
    },
    components: {
        Footer,
        Header
    },
    methods: {
        backIndex() {
            this.$router.push('/studentIndex')
        }
    }

}
</script>
<template>
    <div class="sticky-footer">

        <div id="quizHead">
            <Header v-bind:secondTitle="titleText" @home="backIndex" />
        </div>


        <div id="quizBody">
            <div id="quizBody1">

                <div class="d-flex align-items-start" id="quizNavsDiv1">
                    <div id="quizNavsDiv1-1">
                        <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">

                            <RouterLink to="/studentResults/studentResultsPurpleTable" class="quizNavsBtn1">紫本</RouterLink>
                            <RouterLink to="/studentResults/studentResultsBlackTable" class="quizNavsBtn2">黑本</RouterLink>



                        </div>

                    </div>

                    <div class="tab-content quizNavsDiv2" id="v-pills-tabContent">

                        <RouterView />

                    </div>

                </div>

            </div>
        </div>



        <Footer></Footer>
    </div>
</template>
<style lang="scss">
#quizBody {
    height: 500px;
    position: relative;

    #quizBody1 {
        position: absolute;


        #quizNavsDiv1-1 {
            width: 200px;
            height: 510px;
            border: 5px solid #b0eaff;
            position: relative;
            bottom: 5px;
            display: flex;
            justify-content: center;

            .quizNavsBtn1 {
                position: relative;
                top: 25px;
            }

            .quizNavsBtn2 {
                position: relative;
                top: 40px;
            }

        }

        .quizNavsDiv2 {
            position: relative;
            top: 20px;

        }
    }
}
</style>