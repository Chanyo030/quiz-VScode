<!-- 學員成績總覽 -->

<script>
import Footer from "../components/Footer.vue";

export default {
    components: {
        Footer
    }
}
</script>
<template>
    <div class="sticky-footer">
        <header>
            <div id="quizHead">
                <h2 id="headText1">Java 全端培訓班</h2>
                <h2 id="headText2">學員成績查詢</h2>
            </div>
        </header>

        <div id="studentInformationBody">

            <div id="studentInformationBody1">

                <div class="d-flex align-items-start" id="studentInformationNavsDiv1">
                    <div id="studentInformationNavsDiv2">
                        <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">

                            <RouterLink to="/studentResultsAll/TainanStudentResultsAll" class="studentInformationNavsBtn1">
                                台南 -
                                跨域互動C#程式開發(第三梯次)
                            </RouterLink>

                            <RouterLink to="/studentResultsAll/kaohsiungStudentResultsAll"
                                class="studentInformationNavsBtn2">
                                高雄義大 -
                                跨域互動C#程式開發(第四梯次)
                            </RouterLink>

                        </div>
                    </div>
                </div>

            </div>

        </div>

        <RouterView />

        <Footer></Footer>
    </div>
</template>
<style lang="scss">
#studentInformationBody {
    height: 500px;
    position: relative;

    #studentInformationBody1 {
        position: absolute;


        #studentInformationNavsDiv2 {
            width: 370px;
            height: 510px;
            border: 5px solid #b0eaff;
            position: relative;
            bottom: 4px;
            display: flex;
            justify-content: center;

            .studentInformationNavsBtn1 {
                position: relative;
                top: 25px;
            }

            .studentInformationNavsBtn2 {
                position: relative;
                top: 40px;
            }

        }

        .studentInformationNavsDiv3 {
            position: relative;
            top: 20px;



        }
    }
}
</style>