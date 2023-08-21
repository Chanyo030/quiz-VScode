<!-- 創建管理者權限 權限A -->

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
export default {
    data(){
        return{
            titleText:"權限管理系統",
        }
    },
    components: {
        Footer,
        Header,
    },
    methods:{
        goBack(){
            this.$router.push("/manage")
        }
    }
}
</script>
<template>
    <div class="sticky-footer">

        <Header v-model:secondTitle="titleText" @home="goBack"/>

        <div class="manageAddAuthorityDiv1">
            <div class="manageAddAuthorityDiv2">
                <h3 class="manageAddAuthority">權限設置</h3>

                <div class="ManageSignUpAndUpdateAuthorityIdDiv">
                    <div class="mb-3" id="ManageSignUpAndUpdateAuthorityInput1">
                        <label for="exampleFormControlInput1" class="form-label">編號</label>
                        <input type="email" class="form-control" id="ManageSignUpAndUpdateAuthorityInput"
                            placeholder="&emsp;&ensp;ID">

                        <font-awesome-icon id="ManageSignUpAndUpdateAuthorityIcon" :icon="['fas', 'id-card-clip']" />
                    </div>

                    <div class="mb-3" id="ManageSignUpAndUpdateAuthorityInput2">
                        <label for="exampleFormControlInput1" class="form-label">姓名</label>
                        <input type="email" class="form-control" id="ManageSignUpAndUpdateAuthorityInput"
                            placeholder="&emsp;&ensp;Name">

                        <font-awesome-icon id="ManageSignUpAndUpdateAuthorityIcon" :icon="['fas', 'user']" />
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

                    <div class="manageSignUpAndUpdateAuthorityBtnDiv">
                        <RouterLink to="/manage"><button type="button" class="btn btn-outline-secondary"
                                id="manageSignUpAndUpdateAuthorityBtn1">取消</button></RouterLink>
                        <button type="button" class="btn btn-outline-secondary"
                            id="manageSignUpAndUpdateAuthorityBtn2">確認</button>

                    </div>

                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<style lang="scss">
.manageAddAuthorityDiv1 {
    width: 600px;
    height: 600px;
    margin: auto;
    display: flex;
    justify-content: center;


    .manageAddAuthorityDiv2 {
        height: 550px;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        bottom: 35px;
    }

    .manageAddAuthority {
        position: absolute;
        top: 70px;
        left: 152px;
    }


    .ManageSignUpAndUpdateAuthorityIdDiv {
        width: 50ex;
        height: 325px;
        position: relative;
        margin: auto;
    }

    #ManageSignUpAndUpdateAuthorityInput2 {
        position: relative;
        bottom: 30px;
    }

    .ManageSignUpAndUpdateAuthorityBtnDiv {
        position: relative;
        bottom: 60px;
        display: flex;
        justify-content: center;

        #ManageSignUpAndUpdateAuthorityBtn1 {
            position: relative;
            right: 10px;
        }

        #ManageSignUpAndUpdateAuthorityBtn2 {
            position: relative;
            left: 10px;
        }
    }

    #ManageSignUpAndUpdateAuthorityInput {
        padding-left: 30px;
    }

    #ManageSignUpAndUpdateAuthorityIcon {
        position: relative;
        bottom: 30px;
        left: 12px;
    }

    #manageAuthorityDiv {
        width: 100%;
        position: relative;
        bottom: 10%;
    }

    .manageSignUpAndUpdateAuthorityBtnDiv {
        position: relative;
        bottom: 5px;
        display: flex;
        justify-content: center;

        #manageSignUpAndUpdateAuthorityBtn1 {
            position: relative;
            right: 10px;
        }

        #manageSignUpAndUpdateAuthorityBtn2 {
            position: relative;
            left: 10px;
        }

    }
}
</style>