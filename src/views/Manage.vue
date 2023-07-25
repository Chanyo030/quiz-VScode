<!-- 管理者 權限A -->

<script>
import { RouterLink } from 'vue-router';
import Footer from "../components/Footer.vue";
import Modal from "../components/Modal.vue";


export default {
    components: {
        Footer,
        Modal,
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
        <div id="manageQuizHead">
            <h2 id="manageHeadText1">Java 全端培訓班</h2>
            <h2 id="manageHeadText2">管理系統</h2>

            <ul class="nav nav-pills" id="manageNavsAndTabs">

                <li id="manageLiName">姓名</li>

                <li class="nav-item dropdown" id="manageLi1">
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

                <li class="nav-item dropdown" id="manageLi2">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">課務管理</a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink to="/addQuizBook"><a class="dropdown-item" href="#">題庫創建</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to=""><a class="dropdown-item" href="#">題庫變更</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/trainingEnd"><a class="dropdown-item" href="#">課程管理</a></RouterLink>

                        </li>

                    </ul>
                </li>

                <li class="nav-item dropdown" id="manageLi3">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">管理人員</a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink to="/manageAdd"><a class="dropdown-item" href="#">帳號創建</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/manageUpdate"><a class="dropdown-item" href="#">帳號變更</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/manageAddAuthority"><a class="dropdown-item" href="#">權限管理</a></RouterLink>

                        </li>
                        <li>
                            <RouterLink to="/manageAll"><a class="dropdown-item" href="#">管理人員總覽</a></RouterLink>
                        </li>

                        <!-- 備份預覽用的隱藏式權限B、C 做完確認後記得刪除 -->
                        <li>
                            <RouterLink to="/manageB"><a class="dropdown-item" href="#">權限B</a></RouterLink>
                        </li>

                        <li>
                            <RouterLink to="/manageC"><a class="dropdown-item" href="#">權限C</a></RouterLink>
                        </li>
                        <!--  備份預覽用的隱藏式權限B、C 做完確認後記得刪除 -->
                    </ul>
                </li>
                <li class="nav-item" id="manageLi4">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn" id="manageBtn1" @click="switchModal">登出</button>
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

        <Footer></Footer>

    </div>
</template>
<style lang="scss">
#manageQuizHead {
    height: 150px;
    background-color: #b0eaff;
    position: relative;



    #manageHeadText1 {
        position: absolute;
        top: 30px;
        left: 70px;
    }

    #manageHeadText2 {
        position: absolute;
        top: 80px;
        left: 230px;
    }

    #manageNavsAndTabs {
        position: absolute;
        left: 63%;
        top: 80px;

        #manageLiName {
            position: relative;
            top: 8px;
            right: 65px;
        }

        #manageLi2 {
            position: relative;
            left: 34px;
        }

        #manageLi3 {
            position: relative;
            left: 70px;
        }

        #manageLi4 {
            position: relative;
            left: 100px;
            top: 2px;

            #manageBtn1 {
                color: #0d6efd;
                border: none;
            }
        }
    }
}

#manageBody {
    height: 500px;
    position: relative;

    #manageBody1 {
        position: absolute;


        #manageNavsDiv2 {
            width: 370px;
            height: 510px;
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