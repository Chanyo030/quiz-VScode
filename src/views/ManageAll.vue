<!-- 管理人員總覽 權限A -->

<script>
import Footer from "../components/Footer.vue";

export default {
    components: {
        Footer
    }
}
</script>
<template>
    <div class="sticky-footer">
        <header>
            <div id="quizHead">
                <h2 id="headText1">Java 全端培訓班</h2>
                <h2 id="headText2">管理人員總覽</h2>
            </div>
        </header>

        <div class="manageSearchDiv">
            <div class="input-group flex-nowrap" id="manageSearchIdDiv">
                <span class="input-group-text manageSearchSpan" id="addon-wrapping">編號</span>
                <input type="text" class="form-control" id="manageSearchInput" placeholder="ID" aria-label="Username"
                    aria-describedby="addon-wrapping">
            </div>

            <p class="manageSearchP">
                <button class="btn btn-secondary" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample"
                    id="manageSearchBtn">
                    查詢
                </button>
            </p>
        </div>

        <div class="manageAllDiv">

            <table class="table table-hover" id="manageAllTable">
                <thead>
                    <tr>
                        <th scope="col" id="manageNo">排序</th>
                        <th scope="col" id="manageId">編號</th>
                        <th scope="col" id="manageName">姓名</th>
                        <th scope="col" id="manageName">權限</th>
                        <th scope="col" id="manageName"></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button type="button" class="btn btn-light">隱藏</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Footer></Footer>

    </div>
</template>
<style lang="scss">
.manageSearchDiv {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 75%;
    top: 58px;



    .manageSearchP {
        width: 80px;
        position: relative;
        left: 15px;
        top: 7px;
    }
}

.manageAllDiv {
    width: 500px;
    position: relative;
    bottom: 10px;

    #manageAllTable {
        position: relative;
        left: 94%;

    }
}
</style>