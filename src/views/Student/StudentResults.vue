<!-- 學員個人成績查詢 -->

<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";
import { mapState, mapActions } from "pinia";
import LoginState from "../../stores/LoginState";
import quizChapter from "../../stores/quizChapter";

export default {
    data() {
        return {
            titleText: "成績查詢",
            studentResults:[],
            classify:"",
            chapter:"",
            testArr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
    },
    components: {
        Footer,
        Header
    },
    methods: {
        ...mapActions(quizChapter,["allQuizChaptersFun", "classifyAllCh"]),
        backIndex() {
            this.$router.push('/studentIndex')
        },
        getStudentResult() {
            let req = {
                "studentId": this.showStudentId,
                "classify": "",
                "unit": ""
            }
            fetch("http://localhost:8080/api/get_exam_score", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.studentResults = data.scoreList
                })
                .catch(error => console.log(error))
        }
    },
    computed: {
        ...mapState(LoginState, ["showStudentId", 'showStudentName']),
        ...mapState(quizChapter, ["classifyArr", 'classifyChapters'])
    },
    watch:{
        classify(){
            console.log(this.classify)
        },
        chapter(){
            console.log(this.chapter)
        },
        classifyChapters(){
            console.log(this.classifyChapters)
        }
        
    },
    created() {
        console.log(this.showStudentId)
        console.log(this.classifyArr)
        this.getStudentResult()
        this.allQuizChaptersFun()
    }
}
</script>
<template>
    <div class="sticky-footer">

        <div id="quizHead">
            <Header v-bind:secondTitle="titleText" @home="backIndex" />
        </div>


        <!-- <div id="quizBody">
            <div id="quizBody1">

                <div class="d-flex align-items-start" id="quizNavsDiv1">
                    <div id="quizNavsDiv1-1">
                        <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">

                            <RouterLink to="/studentResults/studentResultsPurpleTable" class="quizNavsBtn1">紫本</RouterLink>
                            <RouterLink to="/studentResults/studentResultsBlackTable" class="quizNavsBtn2">黑本</RouterLink>



                        </div>

                    </div>

                    <div class="tab-content quizNavsDiv2" id="v-pills-tabContent">

                        <RouterView />

                    </div>

                </div>

            </div>
        </div> -->

        <div class="selectArea">
            <h3 v-html="this.showStudentId + ' ' + this.showStudentName"></h3>
            <select name="" id="" class="classify" v-model="this.classify" @change="classifyAllCh(this.classify)">
                <option value="">請選擇</option>
                <option v-for="item in this.classifyArr" :value="item">{{ item }}</option>
            </select>
            <select name="" id="" class="classifyUnit" v-model="this.chapter">
                <option value="">請選擇</option>
                <option v-for="item in this.classifyChapters" :value="item.classifyUnit">{{ item.classifyUnit }}</option>
            </select>
        </div>
        <div class="tableArea">
            <!-- <p v-for="item in this.studentResults" v-text="item"></p> -->
            <table class="table table-hover table-sm">
                <thead >
                    <tr>
                        <th scope="col" id="num">排序</th>
                        <th scope="col" id="classify">題本</th>
                        <th scope="col" id="unit">章節</th>
                        
                        <th scope="col" id="startTime">開始考試時間</th>
                        <th scope="col" id="endTime">結束考試時間</th>
                        <th scope="col" id="costTime">考試作答時間</th>

                        <th scope="col" id="totalQues">總題數</th>
                        <th scope="col" id="rightQues">正確題數</th>
                        <th scope="col" id="wrongQues">錯誤題數</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in this.studentResults" >
                        <th scope="row" v-text="index+1"></th>
                        <td v-text="item.classify"></td>
                        <td v-text="item.classifyUnit"></td>

                        <td v-text="item.quizStartTime"></td>
                        <td v-text="item.quizEndTime"></td>
                        <td v-text="item.studentQuizTime"></td>
                        
                        <td v-text="item.accuracyTotalNum + item.wrongTotalNum"></td>
                        <td v-text="item.accuracyTotalNum" style="color:green"></td>
                        <td v-text="item.wrongTotalNum" style="color:red"></td>
                    </tr>
                </tbody>
            </table>
        </div>




        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
/* #quizBody {
//     height: 500px;
//     position: relative;

//     #quizBody1 {
//         position: absolute;


//         #quizNavsDiv1-1 {
//             width: 200px;
//             height: 510px;
//             border: 5px solid #b0eaff;
//             position: relative;
//             bottom: 5px;
//             display: flex;
//             justify-content: center;

//             .quizNavsBtn1 {
//                 position: relative;
//                 top: 25px;
//             }

//             .quizNavsBtn2 {
//                 position: relative;
//                 top: 40px;
//             }

//         }

//         .quizNavsDiv2 {
//             position: relative;
//             top: 20px;

//         }
//     }
 }*/

.selectArea {
    width: 100%;
    height: 10vh;
    padding-left: 2.5%;
    display: flex;
    align-items: center;

    select {
        margin: 0 10px;
        height: 8vh;
        width: 15%;
        font-size: 24pt;
    }

}

.tableArea {
    width:95%;
    height: 60vh;
    margin-left: 2.5%;
    margin-right: 2.5%;
    box-sizing: border-box;
    border: 1px solid black;
    overflow: auto;
    thead{
        text-align: center;
    }
    tbody{
        text-align: center;
    }
}
</style>