<!-- 管理者 權限B -->

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import Modal from "../../../components/Mockexam/Modal.vue";


export default {
    components: {
        Footer,
        Modal,
        Header,
    },

    data() {
        return {
            isShow: false,
            titleText:"管理系統"
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
        <div id="manageBHead">
            <Header v-model:secondTitle="titleText" />

            <ul class="nav nav-pills" id="manageBNavsAndTabs">

                <li id="manageBLiName">姓名</li>

                <li class="nav-item dropdown" id="manageBLi1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">學務管理</a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink to="/studentSignUp"><a class="dropdown-item" href="#">帳號創建</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/studentUpdate"><a class="dropdown-item" href="#">帳號變更</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/studentInformation"><a class="dropdown-item" href="#">學員資料</a></RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/studentResultsAll"><a class="dropdown-item" href="#">學員成績</a></RouterLink>
                        </li>

                    </ul>
                </li>

                <li class="nav-item dropdown" id="manageBLi2">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">課務管理</a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink to="/addQuizBook"><a class="dropdown-item" href="#">題庫創建</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to=""><a class="dropdown-item" href="#">題庫變更</a></RouterLink>

                        </li>

                    </ul>
                </li>


                <li class="nav-item dropdown" id="manageBLi3">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">管理人員</a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink to="/manageBAdd"><a class="dropdown-item" href="#">帳號創建</a></RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ManageBUpdate"><a class="dropdown-item" href="#">帳號變更</a></RouterLink>
                        </li>
                    </ul>
                </li>
                <li class="nav-item" id="manageBLi4">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn" id="manageBBtn1" @click="switchModal">登出</button>
                    <Modal v-if="isShow" @alertMessage="switchModal">

                        <h2 class="modalTitle">確定要登出嗎?</h2>

                        <div id="modalBtnDiv">
                            <button type="button" class="btn btn-secondary" id="modalBtn1" @click="switchModal">取消</button>
                            <RouterLink to="/ManageLogin"><button type="button" class="btn btn-primary"
                                    id="modalBtn2">確定</button></RouterLink>
                        </div>
                    </Modal>

                </li>
            </ul>
        </div>

        <div id="manageBody">

            <div id="manageBody1">

                <div class="d-flex align-items-start" id="manageNavsDiv1">
                    <div id="manageNavsDiv2">
                        <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">

                            <RouterLink to="/manageB/tainanB" class="manageNavsBtn1">台南 - 跨域互動C#程式開發(第三梯次)</RouterLink>

                            <RouterLink to="/manageB/kaohsiungB" class="manageNavsBtn2">高雄義大 - 跨域互動C#程式開發(第四梯次)</RouterLink>

                        </div>

                    </div>

                    <div class="tab-content manageNavsDiv3" id="v-pills-tabContent">


                        <RouterView />


                    </div>

                </div>

            </div>

        </div>

        <Footer></Footer>

    </div>
</template>
<style lang="scss">
#manageBHead {
    height: 150px;
    background-color: #b0eaff;
    position: relative;



    #manageBHeadText1 {
        position: absolute;
        top: 30px;
        left: 70px;
    }

    #manageBHeadText2 {
        position: absolute;
        top: 80px;
        left: 230px;
    }

    #manageBNavsAndTabs {
        position: absolute;
        left: 63%;
        top: 80px;

        #manageBLiName {
            position: relative;
            top: 8px;
            right: 65px;
        }

        #manageBLi2 {
            position: relative;
            left: 34px;
        }

        #manageBLi3 {
            position: relative;
            left: 70px;
        }

        #manageBLi4 {
            position: relative;
            left: 100px;
            top: 2px;

            #manageBBtn1 {
                color: #0d6efd;
                border: none;
            }
        }
    }
}
</style>