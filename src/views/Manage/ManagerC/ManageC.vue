<!-- 管理者 權限C -->

<script>
import Footer from "../../../components/Footer.vue";
import Modal from "../../../components/Mockexam/Modal.vue";
import Header from '../../../components/header.vue';


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
        <div id="manageCHead">
            <Header v-model:secondTitle="titleText" />
            <ul class="nav nav-pills" id="manageCNavsAndTabs">

                <li id="manageCLiName">姓名</li>

                <li class="nav-item dropdown" id="manageCLi1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">學務管理</a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink to="/studentInformation"><a class="dropdown-item" href="#">學員資料</a></RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/studentResultsAll"><a class="dropdown-item" href="#">學員成績</a></RouterLink>
                        </li>

                    </ul>
                </li>

                <li class="nav-item dropdown" id="manageCLi2">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">課務管理</a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink to=""><a class="dropdown-item" href="#">題庫創建</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to=""><a class="dropdown-item" href="#">題庫變更</a></RouterLink>

                        </li>

                    </ul>
                </li>

                <li class="nav-item dropdown" id="manageCLi3">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">管理人員</a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink to="/ManageCUpdate"><a class="dropdown-item" href="#">帳號變更</a></RouterLink>
                        </li>
                    </ul>
                </li>
                <li class="nav-item" id="manageCLi4">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-link" id="manageCBtn1" @click="switchModal">登出</button>
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

                            <RouterLink to="/manageC/tainanC" class="manageNavsBtn1">台南 - 跨域互動C#程式開發(第三梯次)</RouterLink>

                            <RouterLink to="/manageC/kaohsiungC" class="manageNavsBtn2">高雄義大 - 跨域互動C#程式開發(第四梯次)</RouterLink>

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
#manageCHead {
    height: 150px;
    background-color: #b0eaff;
    position: relative;



    #manageCHeadText1 {
        position: absolute;
        top: 30px;
        left: 70px;
    }

    #manageCHeadText2 {
        position: absolute;
        top: 80px;
        left: 230px;
    }

    #manageCNavsAndTabs {
        position: absolute;
        left: 63%;
        top: 80px;

        #manageCLiName {
            position: relative;
            top: 8px;
            right: 65px;
        }

        #manageCLi2 {
            position: relative;
            left: 34px;
        }

        #manageCLi3 {
            position: relative;
            left: 70px;
        }

        #manageCLi4 {
            position: relative;
            left: 100px;

            #manageCBtn1 {
                text-decoration: none;
            }

        }
    }
}
</style>