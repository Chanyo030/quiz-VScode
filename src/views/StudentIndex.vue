<!-- 學生考試主頁 -->

<script>
import Footer from "../components/Footer.vue";
import Modal from "../components/Modal.vue";
import ClassifyTable from "../components/ClassifyTable.vue";

export default {
    components: {
        Footer,
        Modal,
        ClassifyTable
    },

    data() {
        return {
            isShow: false
        }
    },

    methods: {

        switchModal() {
            this.isShow = !this.isShow
        }
    }
}
</script>
<template>
    <div class="sticky-footer">

        <div id="quizHead">
            <h2 id="headText1">Java 全端培訓班</h2>
            <h2 id="headText2">線上模擬試題</h2>
            <ul class="nav nav-pills" id="quizNavsAndTabs">

                <li class="nav-item dropdown" id="quizLi1">
                    姓名
                </li>
                <li class="nav-item dropdown" id="quizLi2">
                    <RouterLink to="/studentResults" id="navbarBtn1">成績查詢</RouterLink>
                </li>

                <li class="nav-item dropdown" id="quizLi3">
                    <RouterLink to="/StudentPersonalInformation" id="navbarBtn2">帳號設定</RouterLink>
                </li>
                <li class="nav-item" id="quizLi4">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn" id="quizBtn1" @click="switchModal">登出</button>
                    <Modal v-if="isShow" @alertMessage="switchModal">

                        <h2 class="modalTitle">確定要登出嗎?</h2>

                        <div id="modalBtnDiv">
                            <button type="button" class="btn btn-secondary" id="modalBtn1" @click="switchModal">取消</button>
                            <RouterLink to="/StudentLogin"><button type="button" class="btn btn-primary"
                                    id="modalBtn2">確定</button></RouterLink>
                        </div>
                    </Modal>
                </li>
            </ul>
        </div>



        <ClassifyTable></ClassifyTable>


        <Footer></Footer>

    </div>
</template>
<style lang="scss">
#quizNavsAndTabs {
    position: absolute;
    left: 72%;
    top: 80px;

    #quizLi1 {
        position: relative;
        top: 9px;
    }

    #quizLi2 {
        position: relative;
        left: 56px;

        #navbarBtn1 {
            color: #0d6efd;
            position: relative;
            top: 7px;
        }
    }

    #quizLi3 {
        position: relative;
        left: 110px;
        top: 7px;
    }

    #quizLi4 {
        position: relative;
        left: 164px;

        #quizBtn1 {
            color: #0d6efd;
            border: none;
        }
    }
}
</style>