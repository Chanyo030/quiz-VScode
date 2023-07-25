<!-- 學生帳號創建與更改 -->

<script>

// 日期清空
export default {


    mounted() {
        this.clearInput();
    },
    methods: {
        clearInput() {
            this.empty = '';
        }
    }
}
</script>
<template>
    <div id="StudentAddAndUpdateCardImg">
        <img class="StudentAddAndUpdateImg1" src="../../public/Faculty_Headshot_Thumbnail-removebg-preview.png" alt="user">
        <img class="StudentAddAndUpdateImg2" src="../../public/191059.png" alt="data">
        <img class="StudentAddAndUpdateImg3" src="../../public/191059.png" alt="data">
        <img class="StudentAddAndUpdateImg4" src="../../public/191059.png" alt="data">
        <img class="StudentAddAndUpdateImg5" src="../../public/191059.png" alt="data">

    </div>

    <!-- autocomplete="off" 不要有紀錄 -->
    <div id="StudentAddAndUpdateCardPadding">
        <div class="input-group mb-3 StudentAddAndUpdateId">
            <span class="input-group-text" id="basic-addon1">學號</span>
            <input type="text" class="form-control" id="StudentAddAndUpdateInputId" placeholder="ID" aria-label="UserId"
                aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
        </div>
        <div class="input-group mb-3 StudentAddAndUpdateName">
            <span class="input-group-text" id="basic-addon1">姓名</span>
            <input type="text" class="form-control" id="StudentAddAndUpdateInputName" placeholder="Name"
                aria-label="UserName" aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
        </div>
        <div class="input-group mb-3 StudentAddAndUpdatePwd">
            <span class="input-group-text" id="basic-addon1">密碼</span>
            <input type="text" class="form-control" id="StudentAddAndUpdatePwd" placeholder="Password" aria-label="UserPwd"
                aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
        </div>
        <div class="input-group mb-3 StudentAddAndUpdatePwd">
            <span class="input-group-text" id="basic-addon1">確認密碼</span>
            <input type="text" class="form-control" id="StudentAddAndUpdatePwd" placeholder="Password" aria-label="UserPwd"
                aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
        </div>


        <div id="registrationAdd">
            <p>報名</p>
            <div class="form-check form-check-inline" id="registrationAddYes">
                <input class="form-check-input" type="radio" name="inlineRadioOptions6" id="registrationAddYes1"
                    value="true" v-model="empty">
                <label class="form-check-label" for="registrationAddYes1">是</label>
            </div>
            <div class="form-check form-check-inline" id="registrationAddNo">
                <input class="form-check-input" type="radio" name="inlineRadioOptions6" id="registrationAddNo2"
                    value="false" v-model="empty">
                <label class="form-check-label" for="registrationAddNo2">否</label>
            </div>

            <p class="subsidyAdd">補助</p>
            <div class="form-check form-check-inline" id="subsidyAddYes">
                <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="subsidyAddYes1" value="true"
                    v-model="empty">
                <label class="form-check-label" for="subsidyAddYes1">是</label>

                <div class="form-check form-check-inline" id="subsidyAddNo">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="subsidyAddNo2" value="false"
                        v-model="empty">
                    <label class="form-check-label" for="subsidyAddNo2">否</label>
                </div>
            </div>

        </div>


        <div class="input-group mb-3 studentNoteInputDiv">
            <span class="input-group-text" id="basic-addon1">備註</span>
            <input type="text" class="form-control" id="inputDiploma" aria-label="Username" aria-describedby="basic-addon1"
                autocomplete="off" v-model="empty">
        </div>


        <div class="input-group mb-3" id="courseLocation">
            <span class="input-group-text" id="basic-addon1">課程</span>
            <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                <option selected>---------------------------------- 選擇 --------------------------------</option>
                <option value="台南 - 跨域互動C#程式開發(第三梯次)">台南 - 跨域互動C#程式開發(第三梯次)</option>
                <option value="高雄義大 - 跨域互動C#程式開發(第四梯次)">高雄義大 - 跨域互動C#程式開發(第四梯次)</option>

            </select>
        </div>

        <div class="input-group mb-3" id="courseLocation">
            <span class="input-group-text" id="basic-addon1">培訓狀態</span>
            <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                <option selected>------------------------------- 選擇 -------------------------------</option>
                <option value="已錄訓">已錄訓</option>
                <option value="離訓">離訓</option>
                <option value="結訓">結訓</option>

            </select>
        </div>

        <div class="input-group mb-3 trainingStartAdd">
            <span class="input-group-text" id="basic-addon1">入訓日期</span>
            <input type="date" class="form-control" id="trainingStartAddInput" aria-label="Username"
                aria-describedby="basic-addon1" v-model="empty">
        </div>

    </div>
</template>
<style lang="scss">
#StudentAddAndUpdateCardImg {
    position: relative;
    top: 30px;

    .StudentAddAndUpdateImg1 {
        border-radius: 30px;
        max-width: 200px;
        max-height: 200px;
        position: relative;
        left: 70px;
    }

    .StudentAddAndUpdateImg2 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 130px;
    }

    .StudentAddAndUpdateImg3 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 36px;
    }

    .StudentAddAndUpdateImg4 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 25px;
    }

    .StudentAddAndUpdateImg5 {
        border-radius: 30px;
        max-width: 100px;
        max-height: 150px;
        position: relative;
        left: 12px;
    }
}

#StudentAddAndUpdateCardPadding {

    position: relative;
    top: 40px;

    .StudentAddAndUpdateId,
    .StudentAddAndUpdateName,
    .StudentAddAndUpdatePwd,
    .studentNoteInputDiv {
        width: 80%;
        position: relative;
        left: 80px;
        top: 10px;
    }

    #courseLocation {
        width: 80%;
        position: relative;
        left: 80px;
        top: 10px;

    }

    #registrationAdd {
        display: flex;
        justify-content: center;
        position: relative;
        right: 18.6%;
        top: 10px;

        #registrationAddYes {
            position: relative;
            left: 23px;
        }

        #registrationAddNo {
            position: relative;
            left: 26px;
        }

        .subsidyAdd {
            position: relative;
            left: 58px;
        }

        #subsidyAddYes {
            position: relative;
            left: 82px;
        }

        #subsidyAddNo {
            position: relative;
            left: 28px;
        }
    }

    .trainingStartAdd {
        width: 80%;
        position: relative;
        left: 80px;
        top: 10px;
    }
}
</style>