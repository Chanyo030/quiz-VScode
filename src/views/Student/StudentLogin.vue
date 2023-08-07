    <!-- 學員登入系統 -->

<script>
import { RouterLink } from 'vue-router';
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";

export default {
    data() {
        return {
            titleText:"學員登入系統"
        }
    },
    methods:{
        goBack(){
            this.$router.push("/")
        },
        Login(){
            this.$router.push('/studentIndex')
        }
    },
    components: {
        Footer,
        Header
    }
}
</script>
<template>
    <div class="sticky-footer">
        <Header  v-bind:LoginTitle="this.titleText" />

        <div class="studentCard">
            <img class="img1" src="../../../public/Faculty_Headshot_Thumbnail-removebg-preview.png" alt="user">
            <img class="img2" src="../../../public/191059.png" alt="data">
            <img class="img3" src="../../../public/191059.png" alt="data">
            <img class="img4" src="../../../public/191059.png" alt="data">
            <img class="img5" src="../../../public/191059.png" alt="data">
            <div class="input-group mb-3 studentId">
                <span class="input-group-text" id="basic-addon1">學號</span>
                <input type="text" class="form-control" id="inputId" placeholder="ID" aria-label="UserId"
                    aria-describedby="basic-addon1">
            </div>

            <div class="input-group mb-3 studentPwd">
                <span class="input-group-text" id="basic-addon1">密碼</span>
                <input type="text" class="form-control" id="inputPwd" placeholder="Password" aria-label="UserPwd"
                    aria-describedby="basic-addon1">
            </div>

            <div class="input-group mb-3 studentName">
                <span class="input-group-text" id="basic-addon1">姓名</span>
                <input type="text" class="form-control" id="inputName" placeholder="Name" aria-label="Username"
                    aria-describedby="basic-addon1">
            </div>

            <button class="btn btn-outline-secondary" id="btn1" @click="goBack">返回</button>
            <button type="button" class="btn btn-outline-secondary" id="btn2" @click="Login">登入</button>
            <RouterView />
        </div>


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
</style>