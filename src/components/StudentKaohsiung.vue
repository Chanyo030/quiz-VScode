<script></script>
<template>
    <div class="table-container">
        <div class="table-scroll">
            <table class="table table-hover" id="studentInformationTable">
                <thead>
                    <tr>
                        <th scope="col" id="studentNo">排序</th>
                        <th scope="col" id="studentId">學號</th>
                        <th scope="col" id="studentName">姓名</th>
                        <th scope="col" id="gender">性別</th>
                        <th scope="col" id="age">年齡</th>
                        <th scope="col" id="diploma">學歷</th>
                        <th scope="col" id="school">學校</th>
                        <th scope="col" id="department">科系</th>
                        <th scope="col" id="diplomaStatus">學歷狀態</th>
                        <th scope="col" id="militaryService">兵役</th>
                        <th scope="col" id="japaneseType">日文考試類型</th>
                        <th scope="col" id="japaneseLvFraction">日文考試級別/分數</th>
                        <th scope="col" id="englishType">英文考試類型</th>
                        <th scope="col" id="englishLvFraction">英文考試級別/分數</th>
                        <th scope="col" id="registration">報名</th>
                        <th scope="col" id="subsidy">補助</th>
                        <th scope="col" id="note">備註</th>
                        <th scope="col" id="phone">聯絡電話</th>
                        <th scope="col" id="studentCourse">課程</th>
                        <th scope="col" id="trainingStatus">培訓狀態</th>
                        <th scope="col" id="trainingStart">入訓日期</th>
                        <th scope="col" id="trainingEnd">結訓日期</th>
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
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss">
.table-container {
    width: 1077px;
    height: 480px;
    overflow-x: auto;
    overflow-y: auto;
    position: relative;
    left: 400px;

    .table-scroll {
        display: inline-block;



        #studentInformationTable {
            width: 1560px;
            position: relative;
            top: 20px;
        }

    }

}
</style>