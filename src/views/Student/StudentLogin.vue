    <!-- 學員登入系統 -->

<script>
import { setTransitionHooks } from "vue";
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";
import Modal from "../../components/Mockexam/Modal.vue";
import { mapState,mapActions } from "pinia";
import LoginState from "../../stores/LoginState";


export default {
    data() {
        return {
            titleText: "學員登入系統",
            studentId: "",
            studentPassword: "",
            studentName: "",
            successfulMessage:false,
            failMessage:false,
        }
    },
    computed:{
        ...mapState(LoginState,["showStudentName"])
    },
    methods: {
        ...mapActions(LoginState,["getStudentInfo"]),
        scesfulChange(){
            this.successfulMessage = !this.successfulMessage;
        },
        failChange(){
            this.failMessage = !this.failMessage;
        },
        goBack() {
            this.$router.push("/")
        },
        Login() {
            this.studentId = "0" + this.studentId;
            let loginInfo = {
                "studentId": this.studentId,
                "studentPwd": this.studentPassword,
                "studentName": this.studentName,
            }
            console.log(loginInfo)
            fetch("http://localhost:8080/api/student_login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data)

                    if (data.message.includes("successful")) {
                        this.scesfulChange();
                        sessionStorage.setItem("userId",JSON.stringify(this.studentId))
                        this.getStudentInfo(this.studentId)
                    }else{
                        this.failChange();
                    }
                })
                .catch(error => {
                    console.log(error)
                })

        },
        LoginSuccessful(){
            this.scesfulChange();
            this.$router.push("/studentIndex")
        }
    },
    components: {
        Footer,
        Header,
        Modal
    },
    watch: {
        // studentId(){
        //     console.log(this.studentId);
            // console.log(this.studentName);
            // console.log(this.studentPassword);
        // }
    }
}
</script>
<template>
    <div class="sticky-footer">
        <Header v-bind:LoginTitle="this.titleText" />

        <div class="studentCard">
            <img class="img1" src="../../../public/Faculty_Headshot_Thumbnail-removebg-preview.png" alt="user">
            <img class="img2" src="../../../public/191059.png" alt="data">
            <img class="img3" src="../../../public/191059.png" alt="data">
            <img class="img4" src="../../../public/191059.png" alt="data">
            <img class="img5" src="../../../public/191059.png" alt="data">
            <div class="input-group mb-3 studentId">
                <span class="input-group-text" id="basic-addon1">學號</span>
                <input type="text" class="form-control" id="inputId" placeholder="ID" aria-label="UserId"
                    aria-describedby="basic-addon1" v-model="studentId" >
            </div>

            <div class="input-group mb-3 studentPwd">
                <span class="input-group-text" id="basic-addon1">密碼</span>
                <input type="password" class="form-control" id="inputPwd" placeholder="Password" aria-label="UserPwd"
                    aria-describedby="basic-addon1" v-model="studentPassword">
            </div>

            <div class="input-group mb-3 studentName">
                <span class="input-group-text" id="basic-addon1">姓名</span>
                <input type="text" class="form-control" id="inputName" placeholder="Name" aria-label="Username"
                    aria-describedby="basic-addon1" v-model="studentName">
            </div>

            <button class="btn btn-outline-secondary" id="btn1" @click="goBack">返回</button>
            <button type="button" class="btn btn-outline-secondary" id="btn2" @click="Login">登入</button>
        </div>

        <Modal v-show="this.successfulMessage">
            <h2 class="modalTitle">歡迎{{this.studentName}}學員</h2>
            <button class="modalBtn" @click="LoginSuccessful">確定</button>
        </Modal>
        <Modal v-show="this.failMessage">
            <h2 class="modalTitle">輸入資料有誤</h2>
            <button class="modalBtn" @click="failChange">確定</button>
        </Modal>
        <Footer></Footer>

    </div>
</template>
<style lang="scss">
.studentCard {
    width: 50%;
    height: 500px;
    border-radius: 50px;
    background-color: rgba(129, 188, 227, 0.397);

    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-top: 5px;

    .img1 {
        border-radius: 30px;
        max-width: 200px;
        max-height: 200px;
        position: relative;
        left: 70px;
    }

    .img2 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 130px;
    }

    .img3 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 36px;
    }

    .img4 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 25px;
    }

    .img5 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 12px;
    }


    .studentId,
    .studentName,
    .studentPwd {
        width: 80%;
        position: relative;
        left: 100px;
        top: 35px;
    }

    #courseLocation {
        width: 80%;
        position: relative;
        left: 100px;
        top: 10px;

    }


}

#btn1 {
    position: relative;
    left: 40%;
    top: 65px;
}

#btn2 {
    position: relative;
    left: 45%;
    top: 65px;
}

.modalBtn{
    margin-top: 50px;
}

</style>