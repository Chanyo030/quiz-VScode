<script></script>
<template>
    <div class="studentResultsBlackTableDiv">

        <table class="table table-hover" id="studentResultsBlackTable">
            <thead>
                <tr>
                    <th scope="col" id="studentResultsNo">排序</th>
                    <th scope="col" id="studentId">學號</th>
                    <th scope="col" id="classify">題本</th>
                    <th scope="col" id="unitName">單元名稱</th>
                    <th scope="col" id="quizTime">考試時間</th>
                    <th scope="col" id="studentQuizTime">作答時間</th>
                    <th scope="col" id="accuracyTotalNum">正確總題數</th>
                    <th scope="col" id="wrongTotalNum">錯誤總題數</th>
                    <th scope="col" id="wrongNum">錯誤題號</th>
                    <th scope="col" id="score">成績</th>
                    <th scope="col" id="pass">及格</th>
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
.studentResultsBlackTableDiv {
    width: 1100px;


    #studentResultsBlackTable {
        position: relative;
        left: 9%;
        bottom: 5px;
    }
}
</style>