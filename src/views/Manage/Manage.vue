<!-- 管理者 權限A -->

<script>
import { RouterLink } from 'vue-router';
import Footer from "../../components/Footer.vue";
import Modal from "../../components/Mockexam/Modal.vue";
import Header from '../../components/Header.vue';


export default {
    components: {
        Footer,
        Modal,
        Header

    },
    data() {
        return {
            titleText:"管理系統",
        }
    },
    computed: {
        
    },

    methods: {

    }

}
</script>
<template>
    <div class="sticky-footer">
        <div id="manageQuizHead">
            <Header v-bind:secondTitle="titleText" />
        </div>

        <div id="manageBody">

            <div id="manageBody1">

                <div class="d-flex align-items-start" id="manageNavsDiv1">
                    <div id="manageNavsDiv2">
                        <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">

                            <RouterLink to="/manage/tainan" class="manageNavsBtn1">台南 - 跨域互動C#程式開發(第三梯次)</RouterLink>

                            <RouterLink to="/manage/kaohsiung" class="manageNavsBtn2">高雄義大 - 跨域互動C#程式開發(第四梯次)</RouterLink>

                        </div>

                    </div>

                    <div class="tab-content manageNavsDiv3" id="v-pills-tabContent">

                        <RouterView />

                    </div>

                </div>

            </div>

        </div>

        <Footer />

    </div>
</template>
<style lang="scss">

#manageBody {
    height: 500px;
    position: relative;

    #manageBody1 {
        position: absolute;


        #manageNavsDiv2 {
            width: 370px;
            height: 80vh;
            border: 5px solid #b0eaff;
            position: relative;
            bottom: 5px;
            display: flex;
            justify-content: center;

            .manageNavsBtn1 {
                position: relative;
                top: 25px;
            }

            .manageNavsBtn2 {
                position: relative;
                top: 40px;
            }
        }

        .manageNavsDiv3 {
            position: relative;
            top: 20px;

        }
    }
}
</style>