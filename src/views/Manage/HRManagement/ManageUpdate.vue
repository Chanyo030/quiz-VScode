<!-- 管理者變更 權限A -->

<script>
import ManageAddAndUpdate from "../../../components/ManageAddAndUpdate.vue"
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/header.vue";
export default {
    data(){
        return{
            titleText:"帳號變更系統",
        }
    },
    components: {
        ManageAddAndUpdate,
        Footer,
        Header
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

        <Header v-model:secondTitle="titleText" @home="goBack" />


        <div class="manageAddAndUpdateDiv1">
            <div class="manageAddAndUpdateDiv2">
                <h3 class="manageAddAndUpdate">變更</h3>

                <ManageAddAndUpdate></ManageAddAndUpdate>

                <div class="manageAddAndUpdateBtnDiv">
                    <RouterLink to="/manage"><button type="button" class="btn btn-outline-secondary"
                            id="manageAddAndUpdateBtn1">取消</button></RouterLink>
                    <button type="button" class="btn btn-outline-secondary" id="manageAddAndUpdateBtn2">確認</button>

                </div>
            </div>

        </div>


        <Footer></Footer>

    </div>
</template>
<style></style>