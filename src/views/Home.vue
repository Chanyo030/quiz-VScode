<!-- 主頁 -->

<script>
import { RouterLink } from "vue-router"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue";

export default {

    // 放impute的東西
    components: {
        Header,
        Footer

    }
}

</script>

<template>
    <div class="sticky-footer">

        <Header></Header>
        <div id="quizHead">
            <h2 id="headText1">ICAICVT</h2>
            <h2 id="headText2" >國際產訓研究中心</h2>
        </div>

        <div class="javaQuiz">
            <h2>考試系統</h2>
            <div class="entrance">
                <div class="card" id="studentCard" style="width: 18rem;">
                    <img src="../../public/istockphoto-1269224972-612x612-removebg-preview.png" class="card-img-top"
                        alt="學員">
                    <div class="card-body">
                        <RouterLink to="/studentLogin"><button type="button" class="btn btn-outline-dark"
                                id="studentBtn">學員登入</button></RouterLink>
                        <RouterView />
                    </div>

                </div>

                <div class="card" id="teacherCard" style="width: 18rem;">
                    <img src="../../public/manager-2.png" class="card-img-top" alt="管理員">
                    <div class="card-body">

                        <RouterLink to="/manageLogin"><button type="button" class="btn btn-outline-dark"
                                id="teacherBtn">人員登入</button></RouterLink>
                        <RouterView />
                    </div>
                </div>

            </div>
        </div>


        <Footer></Footer>

    </div>
</template>

<style lang="scss">
.javaQuiz {
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 110px;

    .entrance {
        height: 400px;
        display: flex;
        justify-content: center;
        position: relative;
        top: 100px;

        #studentCard {
            border: none;
            position: relative;
            right: 20px;

            #studentBtn {
                position: relative;
                left: 85px;
            }


        }

        #teacherCard {
            border: none;
            position: relative;
            left: 20px;

            #teacherBtn {
                position: relative;
                left: 85px;
            }
        }
    }

}
</style>