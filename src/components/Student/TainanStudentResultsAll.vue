<!-- 台南學員成績總覽 -->

<script></script>
<template>
    <div class="studentResultsAllSearchDiv">
        <div class="input-group flex-nowrap" id="studentResultsAllIdDiv">
            <span class="input-group-text manageSearchSpan" id="addon-wrapping">學號</span>
            <input type="text" class="form-control" id="studentResultsAllInput" placeholder="ID" aria-label="Username"
                aria-describedby="addon-wrapping">
        </div>

        <p class="studentResultsAllSearchP">
            <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
                aria-expanded="false" aria-controls="collapseWidthExample" id="studentResultsAllBtn">
                查詢
            </button>
        </p>
    </div>

    <div class="classifySearchDiv1">
        <div class="input-group flex-nowrap" id="classifySearchDiv2">
            <span class="input-group-text manageSearchSpan" id="addon-wrapping">題本</span>
            <input type="text" class="form-control" id="studentResultsAllInput" placeholder="名稱" aria-label="Username"
                aria-describedby="addon-wrapping">
        </div>

        <p class="classifySearchP">
            <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
                aria-expanded="false" aria-controls="collapseWidthExample" id="classifySearchBtn">
                查詢
            </button>
        </p>
    </div>

    <div class="studentResultsAllDiv">

        <table class="table table-hover" id="studentResultsAllTable">
            <thead>
                <tr>
                    <th scope="col" id="studentResultsAllNo">排序</th>
                    <th scope="col" id="studentIdAll">學號</th>
                    <th scope="col" id="classifyAll">題本</th>
                    <th scope="col" id="unitNameAll">單元名稱</th>
                    <th scope="col" id="quizTime">考試時間</th>
                    <th scope="col" id="studentQuizTimeAll">學員作答時間</th>
                    <th scope="col" id="accuracyTotalNumAll">正確總題數</th>
                    <th scope="col" id="wrongTotalNumAll">錯誤總題數</th>
                    <th scope="col" id="wrongNumAll">錯誤題號</th>
                    <th scope="col" id="scoreAll">成績</th>
                    <th scope="col" id="passAll">及格</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss">
.studentResultsAllSearchDiv {
    height: 0;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 80%;
    bottom: 454px;

    .studentResultsAllSearchP {
        width: 80px;
        position: relative;
        left: 15px;
        top: 7px;
    }
}

.classifySearchDiv1 {
    height: 0;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 80%;
    bottom: 400px;

    .classifySearchP {
        width: 80px;
        position: relative;
        left: 15px;
        top: 7px;
    }
}

.studentResultsAllDiv {
    height: 0;
    width: 790px;

    #studentResultsAllTable {
        position: relative;
        left: 51%;
        bottom: 484px;
    }
}
</style>