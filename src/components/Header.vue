<script>
import { RouterLink } from 'vue-router';
import Modal from '../components/Mockexam/Modal.vue';
import { mapState, mapActions } from 'pinia';
import LoginState from '../stores/LoginState';
import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
export default {
    data() {
        return {
            showManageList: true,
            showStudentList: false,
            showHomeTitle: false,
            showLoginTitle: false,
        }
    },
    computed: {
        ...mapState(LoginState, ["isShow"])
    },

    methods: {
        ...mapActions(LoginState, ["switchModal"]),
        judgeManage() {
            if (this.$route.path == "/manage" || this.$route.path == "/manageB" || this.$route.path == "/manageC") {
                this.showManageList = true;
                this.showStudentList = false;
                this.showHomeTitle = false;
                this.showLoginTitle = false;
            } else {
                this.showManageList = false;
            }
        },
        judgeStudent() {
            if (this.$route.path == "/studentIndex") {
                this.showManageList = false;
                this.showStudentList = true;
                this.showHomeTitle = false;
                this.showLoginTitle = false;
            } else {
                this.showStudentList = false;
            }
        },
        judgeLogin() {
            if (this.$route.path == "/studentLogin" || this.$route.path == "/manageLogin") {
                this.showManageList = false;
                this.showStudentList = false;
                this.showHomeTitle = false;
                this.showLoginTitle = true;
            } else {
                this.showLoginTitle = false;
            }
        },
        judgeHome(){
            if( this.$route.path == "/"){
                this.showManageList = false;
                this.showStudentList = false;
                this.showHomeTitle = true;
                this.showLoginTitle = false;
            }else{
                this.showHomeTitle = false;
            }
        },
        studentLogout(){
            this.switchModal();
            this.$router.push('/studentLogin')
        },
        manageLogout(){
            this.switchModal();
            this.$router.push('/manageLogin')
        },
    },
    props: [
        'secondTitle',
        'homeTitle',
        'homeTitle2',
        'LoginTitle',
    ],
    components: {
        RouterLink,
        Modal,
    },
    updated() {
        this.judgeManage();
        this.judgeLogin();
    },
    created() {
        this.judgeManage();
        this.judgeLogin();
        this.judgeStudent();
        this.judgeHome();
    }
}
</script>


<template>
    <div class="manageQuizHead">
        <!-- Manage & Student -->
        <div class="manageList" v-if="showHomeTitle === false">
            <font-awesome-icon id="manageicon" :icon="['fab', 'java']" @click="$emit('home')" />
            <h2 class="HeadText1">Java 全端培訓班</h2>
            <h2 class="HeadText2">{{ secondTitle }}</h2>
        </div>

        <!-- Home -->
        <div class="homeList" v-if="showHomeTitle === true">
            <font-awesome-icon id="manageicon" :icon="['fab', 'java']" />
            <h2 class="HeadText1">{{ homeTitle }}</h2>
            <h2 class="HeadText2">{{ homeTitle2 }}</h2>
        </div>

        <!-- Login -->
        <div class="loginList" v-if="showLoginTitle === true">
            <font-awesome-icon id="manageicon" :icon="['fab', 'java']" />
            <h2 class="HeadText1">Java 全端培訓班</h2>
            <h2 class="HeadText2">{{ LoginTitle }}</h2>
        </div>

        <!-- Manage -->
        <ul class="nav nav-pills" id="manageNavsAndTabs" v-if="showManageList === true">

            <li class="nav-item" id="Name">姓名</li>

            <!-- StudentAffaris -->
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

            <!-- Course -->
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

            <!-- HRManagement -->
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

            <!-- Logout or Not -->
            <li class="nav-item" id="manageLi4">
                <!-- Button trigger modal -->
                <button type="button" class="btn" id="manageBtn1" @click="switchModal">登出</button>
                <Modal v-if="isShow" @alertMessage="switchModal">

                    <h2 class="modalTitle">確定要登出嗎?</h2>

                    <div id="modalBtnDiv">
                        <button type="button" class="btn btn-secondary" id="modalBtn1" @click="switchModal">取消</button>
                        <button type="button" class="btn btn-primary" id="modalBtn2"
                            @click="manageLogout">確定</button>
                    </div>
                </Modal>

            </li>
        </ul>

        <!-- Student -->
        <ul class="nav nav-pills" id="quizNavsAndTabs" v-if="showStudentList === true">

            <li id="Name">姓名</li>

            <!-- 成績查詢 -->
            <li class="nav-item dropdown" id="quizLi2">
                <RouterLink to="/studentResults" id="navbarBtn1">成績查詢</RouterLink>
            </li>

            <!-- 帳號設定 -->
            <li class="nav-item dropdown" id="quizLi3">
                <RouterLink to="/StudentPersonalInformation" id="navbarBtn2">帳號設定</RouterLink>
            </li>

            <!-- Logout or Not -->
            <li class="nav-item" id="quizLi4">
                <!-- Button trigger modal -->
                <button type="button" class="btn" id="quizBtn1" @click="switchModal">登出</button>
                <Modal v-if="isShow" @alertMessage="switchModal">

                    <h2 class="modalTitle">確定要登出嗎?</h2>

                    <div id="modalBtnDiv">
                        <button type="button" class="btn btn-secondary" id="modalBtn1" @click="switchModal">取消</button>
                        <!-- <button type="button" class="btn btn-primary" id="modalBtn2" @click="logout">確定</button> -->
                        <button type="button" class="btn btn-primary" id="modalBtn2" @click="studentLogout">確定</button>
                    </div>
                </Modal>
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
.manageQuizHead {
    // min-width: 1800px;
    height: 150px;
    background-color: #b0eaff;
    position: relative;

    #manageNavsAndTabs {
        position: absolute;
        left: 63%;
        top: 80px;

        #Name {
            position: relative;
            top: 8px;
            right: 70px;
        }

        #manageLi1 {
            position: relative;
            left: 10px;
        }

        #manageLi2 {
            position: relative;
            left: 40px;
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



    #manageicon {
        font-size: 30pt;
        position: absolute;
        top: 30px;
        left: 30px;

        &:hover {
            cursor: pointer;
        }
    }

    .HeadText1 {
        position: absolute;
        top: 30px;
        left: 70px;

        &:hover {
            cursor: pointer;
        }
    }

    .HeadText2 {
        position: absolute;
        top: 80px;
        left: 200px;
    }
}

#quizNavsAndTabs {
    position: absolute;
    left: 72%;
    top: 80px;

    #Name {
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