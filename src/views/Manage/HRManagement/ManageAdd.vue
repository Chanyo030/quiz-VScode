<!-- 創建管理者 權限A -->

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
export default {
    data(){
        return{
            titleText:"人員創建系統",
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

        <Header v-model:secondTitle="titleText" />

        <div class="manageAddAndUpdateDiv1">
            <div class="manageAddAndUpdateDiv2">
                <h3 class="manageAddAndUpdate">創建</h3>

                <div class="manageAddIdDiv">
                    <div class="mb-3" id="manageAddDiv1">
                        <label for="exampleFormControlInput1" class="form-label">編號</label>
                        <input type="email" class="form-control" id="manageAddInput" placeholder="&emsp;&ensp;ID">

                        <font-awesome-icon id="manageAddIcon" :icon="['fas', 'id-card-clip']" />
                    </div>

                    <div class="mb-3" id="manageAddDiv2">
                        <label for="exampleFormControlInput1" class="form-label">姓名</label>
                        <input type="email" class="form-control" id="manageAddInput" placeholder="&emsp;&ensp;Name">

                        <font-awesome-icon id="manageAddIcon" :icon="['fas', 'user']" />
                    </div>

                    <div class="mb-3" id="manageAddDiv3">
                        <label for="exampleFormControlInput1" class="form-label">密碼</label>
                        <input type="email" class="form-control" id="manageAddInput" placeholder="&emsp;&ensp;∗∗∗∗∗∗∗∗∗">

                        <font-awesome-icon id="manageAddIcon" :icon="['fas', 'lock']" />

                    </div>

                    <div class="mb-3" id="manageAddDiv4">
                        <label for="exampleFormControlInput1" class="form-label">確認密碼</label>
                        <input type="email" class="form-control" id="manageAddInput">

                        <font-awesome-icon id="manageAddIcon" :icon="['fas', 'lock']" />

                    </div>

                    <div class="input-group mb-3" id="manageAuthorityDiv">
                        <span class="input-group-text" id="basic-addon1">權限</span>
                        <select class="form-select" id="manageAuthorityInputGroupSelect"
                            aria-label="Example select with button addon">
                            <option selected>-------------------- 選擇 --------------------</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>

                </div>




                <div class="manageAddBtnDiv">
                    <RouterLink to="/manage"><button type="button" class="btn btn-outline-secondary"
                            id="manageAddBtn1">取消</button></RouterLink>
                    <button type="button" class="btn btn-outline-secondary" id="manageAddBtn2">確認</button>

                </div>
            </div>

        </div>



        <Footer></Footer>

    </div>
</template>
<style lang="scss">
.manageAddIdDiv {
    width: 50ex;
    height: 325px;
    position: relative;
    margin: auto;


    #manageAddDiv2 {
        position: relative;
        bottom: 30px;
    }

    #manageAddDiv3 {
        position: relative;
        bottom: 60px;
    }

    #manageAddDiv4 {
        position: relative;
        bottom: 90px;
    }

    #manageAddInput {
        padding-left: 30px;
    }

    #manageAddIcon {
        position: relative;
        bottom: 30px;
        left: 12px;
    }

    #manageAuthorityDiv {
        width: 100%;
        position: relative;
        bottom: 30%;
    }

    .manageAddAndAuthorityBtnDiv {
        position: relative;
        bottom: 5px;
        display: flex;
        justify-content: center;

        #manageAddAndAuthorityBtn1 {
            position: relative;
            right: 10px;
        }

        #manageAddAndAuthorityBtn2 {
            position: relative;
            left: 10px;
        }

    }
}

.manageAddBtnDiv {
    position: relative;
    bottom: 5px;
    display: flex;
    justify-content: center;

    #manageAddBtn1 {
        position: relative;
        right: 10px;
    }

    #manageAddBtn2 {
        position: relative;
        left: 10px;
    }
}
</style>