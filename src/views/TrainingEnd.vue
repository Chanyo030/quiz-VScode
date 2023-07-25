<!-- 課務管理系統 權限A -->

<script>
import Footer from "../components/Footer.vue";

export default {
    components: {
        Footer
    },
    mounted() {
        this.clearDateInput
    },
    methods: {
        clearDateInput() {
            this.trainingEndDate = '';
        }
    }
}
</script>
<template>
    <div class="sticky-footer">

        <div id="quizHead">
            <h2 id="headText1">Java 全端培訓班</h2>
            <h2 id="headText2">課務管理系統</h2>
        </div>

        <div class="classHideCard">
            <img class="classHideImg1" src="../../public/certificate-removebg-preview.png" alt="user">
            <img class="classHideImg2" src="../../public/191059.png" alt="data">
            <img class="classHideImg3" src="../../public/191059.png" alt="data">
            <img class="classHideImg4" src="../../public/191059.png" alt="data">
            <img class="classHideImg5" src="../../public/191059.png" alt="data">

            <div class="input-group mb-3" id="classHideDiv">
                <span class="input-group-text" id="basic-addon1">上課地點 / 梯次</span>
                <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>-------------------------- 選擇 --------------------------</option>
                    <option value="台南 - 跨域互動C#程式開發(第三梯次)">台南 - 跨域互動C#程式開發(第三梯次)</option>
                    <option value="高雄義大 - 跨域互動C#程式開發(第四梯次)">高雄義大 - 跨域互動C#程式開發(第四梯次)</option>
                </select>
            </div>

            <div class="input-group mb-3 trainingStart">
                <span class="input-group-text" id="basic-addon1">入訓日期</span>
                <input type="date" autocomplete="off" class="form-control" id="trainingEndInput" aria-label="trainingStart"
                    aria-describedby="basic-addon1" v-model="trainingEndDate">
            </div>

            <div class="input-group mb-3 trainingEnd">
                <span class="input-group-text" id="basic-addon1">結訓日期</span>
                <input type="date" autocomplete="off" class="form-control" id="trainingEndInput" aria-label="trainingEnd"
                    aria-describedby="basic-addon1" v-model="trainingEndDate">
            </div>




            <button type="button" class="btn btn-outline-secondary" id="classHideBtn">創建</button>
        </div>


        <Footer></Footer>

    </div>
</template>
<style lang="scss">
.classHideCard {
    width: 50%;
    height: 500px;
    border-radius: 50px;
    background-color: rgba(129, 188, 227, 0.397);

    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-top: 5px;

    .classHideImg1 {
        border-radius: 30px;
        max-width: 500px;
        max-height: 200px;
        position: relative;
        right: 13px;
    }

    .classHideImg2 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        right: 80px;
    }

    .classHideImg3 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        right: 88px;
    }

    .classHideImg4 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        right: 96px;
    }

    .classHideImg5 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 77%;
        bottom: 30.3%;
    }

    #classHideDiv {
        width: 80%;
        position: relative;
        left: 100px;
        bottom: 15%;

    }

    .trainingStart,
    .trainingEnd {
        width: 80%;
        position: relative;
        left: 100px;
        bottom: 15%;
    }

    #classHideBtn {
        position: relative;
        left: 46%;
        bottom: 50px;
    }
}
</style>