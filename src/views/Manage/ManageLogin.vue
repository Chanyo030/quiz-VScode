<!-- 管理者登入系統 -->

<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";

export default {
    data() {
        return {
            titleText:"人員登入系統"
        }
    },
    methods: {
        goBack() {
            this.$router.push("/")
        },
        Login(){
            this.$router.push("/manage")
        }
    },
    components: {
        Footer,
        Header,
    }
}
</script>
<template>
    <div class="sticky-footer">

        <Header v-bind:LoginTitle="titleText" />

        <div class="manageGearCard">
            <img class="manageGear1" src="../../../public/removebg-preview.png" alt="user">
            <img class="manageGear2" src="../../../public/191059.png" alt="data">
            <img class="manageGear3" src="../../../public/191059.png" alt="data">
            <img class="manageGear4" src="../../../public/191059.png" alt="data">
            <img class="manageGear5" src="../../../public/191059.png" alt="data">
            <div class="input-group mb-3 manageIdDiv">
                <span class="input-group-text" id="manageId">編號</span>
                <input type="text" class="form-control" id="manageIdInput" placeholder="ID" aria-label="UserId"
                    aria-describedby="manageId">
            </div>

            <div class="input-group mb-3 managePwdDiv">
                <span class="input-group-text" id="managePwd">密碼</span>
                <input type="text" class="form-control" id="managePwdInput" placeholder="Password" aria-label="Password"
                    aria-describedby="managePwd">
            </div>

            <div class="input-group mb-3 manageNameDiv">
                <span class="input-group-text" id="manageName">姓名</span>
                <input type="text" class="form-control" id="manageNameInput" placeholder="Name" aria-label="Username"
                    aria-describedby="manageName">
            </div>

            <div id="manageBtnDiv">
                <button class="btn btn-outline-secondary" id="logInBtn1" @click="goBack">返回</button>
                <button type="button" class="btn btn-outline-secondary" id="logInBtn2" @click="Login">登入</button>
            </div>

        </div>


        <Footer></Footer>

    </div>
</template>
<style lang="scss">
.manageGearCard {
    width: 50%;
    height: 500px;
    border-radius: 50px;
    background-color: rgba(129, 188, 227, 0.397);

    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-top: 40px;

    .manageGear1 {
        border-radius: 30px;
        max-width: 200px;
        max-height: 200px;
        position: relative;
        left: 70px;
        top: 30px;
    }

    .manageGear2 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 130px;
        top: 35px;
    }

    .manageGear3 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 36px;
        top: 35px;
    }

    .manageGear4 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 25px;
        top: 35px;
    }

    .manageGear5 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 12px;
        top: 35px;
    }


    .manageIdDiv,
    .manageNameDiv,
    .managePwdDiv {
        width: 80%;
        position: relative;
        left: 100px;
        top: 65px;
    }

}

#manageBtnDiv {
    position: relative;
    justify-content: center;
    align-items: center;

    #logInBtn1 {
        position: absolute;
        left: 40%;
        top: 80px;
    }

    #logInBtn2{
        position: absolute;
        left: 50%;
        top: 80px;
    }

}
</style>