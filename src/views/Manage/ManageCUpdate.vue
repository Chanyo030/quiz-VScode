<!-- 管理者變更 權限C -->

<script>
import ManageAddAndUpdate from "../../components/ManageAddAndUpdate.vue"
import Footer from "../../components/Footer.vue"

export default {
    components: {
        ManageAddAndUpdate,
        Footer
    }
}
</script>
<template>
    <div class="sticky-footer">

        <div id="quizHead">
            <h2 id="headText1">Java 全端培訓班</h2>
            <h2 id="headText2">帳號變更系統</h2>
        </div>

        <div class="manageAddAndUpdateDiv1">
            <div class="manageAddAndUpdateDiv2">
                <h3 class="manageAddAndUpdate">變更</h3>

                <ManageAddAndUpdate></ManageAddAndUpdate>

                <div class="manageAddAndUpdateBtnDiv">
                    <RouterLink to="/manageC"><button type="button" class="btn btn-outline-secondary"
                            id="manageAddAndUpdateBtn1">取消</button></RouterLink>
                    <button type="button" class="btn btn-outline-secondary" id="manageAddAndUpdateBtn2">確認</button>
                    <RouterView />
                </div>
            </div>

        </div>


        <Footer></Footer>

    </div>
</template>
<style></style>