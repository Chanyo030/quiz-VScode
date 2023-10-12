<script>
import { mapState, mapActions } from 'pinia';
import quizChapter from "../../stores/quizChapter";
import LoginState from '../../stores/LoginState';
import ExamState from "../../stores/ExamState";
import Modal from "../Mockexam/Modal.vue";


export default {
    data() {
        return {
            questionArr: [],
            footerArr: [],
            imformation: "",
            quizImg: [],
            comparisonQuestions: [],
//!          學生作答需求的變數
            studentAns: [],
            ansObject: {},
            ansSelect: [],
            pushArr: [],
            checkArr: [],   //!
            showImg: "",
            startTime: "",
            endTime: "",
//
            modalOn:false,

        }
    },
    components: {
        Modal,
    },
    computed: {
        ...mapState(quizChapter, ["classify", "chNum", "chName", "chQuestionNum"]),
        ...mapState(LoginState, ["showStudentName", "showStudentId"]),
        ...mapState(ExamState, ["bookClassify", "classifyUnit"])

    },
    methods: {
        ...mapActions(quizChapter, ["getQuizInfo"]),
//      回首頁
        doneAndHome() {
            this.$router.push('/studentIndex');
        },
//      取得題目資訊
        getQuestions() {
            let req = {
                "classify": this.bookClassify,
                "classif_unit": this.classifyUnit
            }
            fetch("http://localhost:8080/api/get_question_Nums", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
                .then(res => res.json())
                .then(data => {
                    this.questionArr = data.questionAndAnswers;
                    this.questionArr.forEach(item => {
                        this.footerArr.push(item.questionCode);
                    })
                    this.showContent(this.questionArr[0].questionCode);
                    this.comparison(this.questionArr[0].classify, this.questionArr[0].classif_unit);
                })
                .catch(error => console.log(error))
        },
//      根據題號顯示題目內容
        showContent(quizCode) {
            this.imformation = {};
            this.questionArr.forEach(item => {
                if (item.questionCode == quizCode) {
                    this.imformation = item;
                    this.getImgs();
                    this.checkArr = this.imformation.selectionText.split(";");
                    return;
                }
            })

            let req = {
                "classify": this.imformation.classify,
                "topicCode": this.imformation.questionCode
            }
            // console.log(req)
            fetch("http://localhost:8080/api/get_question_picture", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => console.log(error))


        },
//      將作答記錄起來
        addStudentAns(classify, quizCode, ans) {
            let num = 0;
            let req = {
                "studentId": this.showStudentId,
                "classify": classify,
                "questionCode": quizCode,
                "answer": ans,
            }
            this.ansObject = req;
            console.log(this.ansObject);

            if (this.studentAns.length == 0) {
                this.studentAns.push(this.ansObject);
                return;
            }
            this.studentAns.forEach((item, index) => {
                if (item.questionCode == quizCode) {
                    item.ans = ans;
                    console.log(this.studentAns)
                    num = index;
                    return;
                }
            })
            if (this.studentAns[num].questionCode !== (this.ansObject.questionCode)) {
                this.studentAns.push(this.ansObject);
                console.log(this.studentAns);
                return;
            }

        },
//      單選答案送進專有陣列
        appendRadioAns(ans) {
            this.ansSelect.push(ans);
        },
//      複選答案送進專有陣列
        appendCheckBoxAns(text, ans) {
            const target = document.getElementById(text);
            if (target.checked) {
                if (!this.pushArr.includes(ans)) {
                    this.pushArr.push(ans);
                }
            } else {
                this.pushArr.pop(ans);
            }
        },
//      每一題送出答案
        submitAns(cla, code, ans) {
            let arrText = ans.join(",");
            const group = document.getElementsByName(code + "select");
            group.forEach(item => {
                item.checked = false;
            })
            console.log(arrText);
            this.addStudentAns(cla, code, arrText);
            this.ansSelect = [];
            this.pushArr = [];

            if (code >= this.footerArr[this.footerArr.length - 1]) {
                this.showContent(code);
            } else {
                this.showContent(code + 1);
            }

        },
//      取得考試題目的程式碼(圖片)
        getImgs() {

            let req = {
                "classify": this.imformation.classify,
                "topicCode": this.imformation.questionCode
            }
            // console.log(req)
            fetch("http://localhost:8080/api/get_question_picture", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
                .then(res => res.json())
                .then(data => {
                    this.quizImg = data.pictureList;
                    console.log(this.quizImg)
                })
                .catch(error => console.log(error))
        },
//      考試結束並送出答案
        examEnd() {
            let score = 0;
            let wrongScore = 0;
            let wrongQuestion = "";
            //!         時間
            let times = Date.now();
            let date = new Date(times);
            this.endTime = date;
            //          作答花費時間
            let costHours = (this.endTime.getHours() - this.startTime.getHours());
            let costMin = (this.endTime.getMinutes() - this.startTime.getMinutes());
            let costSec = (this.endTime.getSeconds() - this.startTime.getSeconds());
            if (costHours < 10) {
                costHours = "0" + costHours;
            }
            if (costMin < 10) {
                costMin = "0" + costMin;
            }
            if (costSec < 10) {
                costSec = "0" + costSec;
            }
            let examCostTime = costHours + ":" + costMin + ":" + costSec;


            let startTimeText = this.startTime.getFullYear() + "-" + this.dataFormat(this.startTime.getMonth() + 1, this.startTime.getDate(), this.startTime.getHours(), this.startTime.getMinutes(), this.startTime.getSeconds());

            let endTimeText = this.endTime.getFullYear() + "-" + this.dataFormat(this.endTime.getMonth() + 1, this.endTime.getDate(), this.startTime.getHours(), this.startTime.getMinutes(), this.startTime.getSeconds()); //!

            //          取出章節的所有題目及資訊
            if (this.studentAns.length !== this.comparisonQuestions.length) {
                alert("考卷沒寫完")
                return;
            }
            if (this.studentAns.length == this.comparisonQuestions.length) {
                this.comparisonQuestions.forEach((item, index) => {
                    if (item.questionCode == this.studentAns[index].questionCode) {
                        if (item.answer == this.studentAns[index].answer) {
                            score += 1;
                        } else {
                            wrongScore += 1;
                            wrongQuestion += item.questionCode + ",";
                        }
                    }
                })
            }
            let req = {
                "studentScore": {
                    "studentId": this.showStudentId,                    //  學生ID      ( int )
                    "classify": this.imformation.classify,              //  題本分類    ( String )
                    "classifyUnit": this.imformation.classifyUnit,      //  題本章節    (String)
                    "accuracyTotalNum": score,                          //  答對題數    (int)
                    "wrongTotalNum": wrongScore,                        //  答錯題數    (int)
                    "wrongNum": wrongQuestion,                          //  答錯題目    (String)
                    "quizStartTime": startTimeText,                     //  作答開始時間 (LocalDateTime)
                    "quizEndTime": endTimeText,                         //  作答結束時間 (LocalDateTime)
                    "studentQuizTime": examCostTime,                    //  學生作答時間 (LocalTime)
                    "score": score,                                     //  本次作答得分 (int)
                    "pass": false,                                      //  是否及格     (boolean)
                }
            }
            console.log(req)
            fetch("http://localhost:8080/api/add_exam_score", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => console.log(error))
                this.$router.push('/studentIndex')
        },
//      捕捉作答開始時間
        examStart() {
            //!         時間
            let times = Date.now();
            let date = new Date(times);
            this.startTime = date;
            this.modalOn = false;

        },
//      取出要與學生答案比對的題目們
        comparison(classify, unit) {
            let req = {
                "classify": classify,
                "classify-unit": unit
            }
            fetch("http://localhost:8080/api/get_question_Nums", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
                .then(res => res.json())
                .then(data => {
                    this.comparisonQuestions = data.questionAndAnswers;
                })
                .catch(error => console.log(error))
        },
//      結束作答的考試時間格式
        dataFormat(month, day, hours, min, sec) {
            if (month < 10) {
                month = "0" + month;
            }
            if (day < 10) {
                day = "0" + day;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            let timeGroup = month + "-" + day + " " + hours + ":" + min + ":" + sec;
            return timeGroup
        },


    },
    created() {
        this.getQuestions();
        this.examStart();
    },
    watch: {
        imformation() {
            console.log(this.imformation)
        },
        comparisonQuestions() {
            console.log(this.comparisonQuestions)
        }
    },
    updated() {
    }
}

</script>

<template>
    <div class="examArea">
        <div class="examContent">
            <div class="examHeaderLeft">
                <div class="quizHeader">
                    <!-- <div class="iconArea"> -->
                    <font-awesome-icon id="manageicon" :icon="['fab', 'java']" @click="doneAndHome" />
                    <span>&emsp; {{ this.imformation.classify }}</span>
                    <!-- </div> -->
                    <!-- <div class="title"> -->
                    <span>{{ this.showStudentName }}</span>
                    <span>{{ this.imformation.classifyUnit }}</span>
                    <span>第{{ this.imformation.questionCode.toString().substr(3) }}題</span>
                    <!-- </div> -->
                </div>
                <div class="quizContent">
                    <h4>題目內容</h4>
                    <h5>{{ this.imformation.topicJp }}</h5>
                    <h5>&emsp;</h5>
                    <h5>{{ this.imformation.topicTw }}</h5>
                </div>

                <div class="quizAns">

                    <div class="radio1" v-for="(item, index) in this.imformation.selectionText.split(';')"
                        v-if="this.imformation.checkOn == false && (this.imformation.questionCode % 2) !== 0">
                        <input type="radio" name="ans" id="" @change="appendRadioAns(item.split(',')[0])">
                        <label>&emsp;{{ item.split(",")[0] }}</label>
                        <label>&emsp;{{ item.split(",")[1] }}</label>
                        <label v-show="item.split(',')[2] !== ''"> &emsp;{{ item.split(",")[2] }}</label>
                    </div>

                    <div class="radio2" v-for="(item, index) in this.imformation.selectionText.split(';')"
                        v-if="this.imformation.checkOn == false && (this.imformation.questionCode % 2) == 0">
                        <input type="radio" name="ans" id="" @change="appendRadioAns(item.split(',')[0])">
                        <label>&emsp;{{ item.split(",")[0] }}</label>
                        <label>&emsp;{{ item.split(",")[1] }}</label>
                        <label v-show="item.split(',')[2] !== ''"> &emsp;{{ item.split(",")[2] }}</label>
                    </div>

                    <div class="check1" v-for="(item, index) in this.imformation.selectionText.split(';')"
                        v-if="this.imformation.checkOn && (this.imformation.questionCode % 2) !== 0">

                        <input type="checkbox" :value="item.split(',')[0]"
                            :id="this.imformation.questionCode.toString() + [index]"
                            :name="this.imformation.questionCode + 'select'"
                            @change="appendCheckBoxAns(this.imformation.questionCode.toString() + [index], item.split(',')[0])">
                        <label :for="this.imformation.questionCode + index">&emsp;{{ item.split(",")[0] }}</label>
                        <label> &emsp; {{ item.split(",")[1] }}</label>
                        <label v-show="item.split(',')[2] !== ''">&emsp;{{ item.split(",")[2] }}</label>
                    </div>

                    <div class="check2" v-for="(item, index) in this.imformation.selectionText.split(';')"
                        v-if="this.imformation.checkOn && (this.imformation.questionCode % 2) == 0">

                        <input type="checkbox" :value="item.split(',')[0]"
                            :id="this.imformation.questionCode.toString() + [index]"
                            :name="this.imformation.questionCode + 'select'"
                            @change="appendCheckBoxAns(this.imformation.questionCode.toString() + [index], item.split(',')[0])">
                        <label :for="this.imformation.questionCode + index">&emsp;{{ item.split(",")[0] }}</label>
                        <label> &emsp; {{ item.split(",")[1] }}</label>
                        <label v-show="item.split(',')[2] !== ''">&emsp;{{ item.split(",")[2] }}</label>
                    </div>

                </div>
                <div class="quizBtn">
                    <button @click="submitAns(this.imformation.classify, this.imformation.questionCode, this.ansSelect)"
                        v-if="this.imformation.checkOn == false">送出答案</button>
                    <button @click="submitAns(this.imformation.classify, this.imformation.questionCode, this.pushArr)"
                        v-if="this.imformation.checkOn == true">送出答案</button>
                </div>
            </div>
            <div class="examHeaderRight">
                <div class="quizCode">
                    <div class="imgArea" v-for="(item, index) in this.quizImg">
                        <img v-if="item.topicImg !== ''"
                            :src="'../../../public/' + item.classify + '/' + item.topicImg + '.jpg'" alt="">
                        <h1 v-if="item.topicImg == ''">&emsp;沒有 Code</h1>
                    </div>
                </div>
            </div>

        </div>
        <div class="examFooter">
            <div class="quizNum">
                <span class="footerItem" v-for="item in this.footerArr" @click="showContent(item)">
                    {{ item.toString().substr(3) }}</span>

            </div>
            <div class="footerBtn">
                <button @click="examEnd">結束作答</button>
            </div>
        </div>
        <Modal v-if="modalOn == true">
            
        </Modal>
    </div>
</template>

<style lang="scss" scoped>
.examArea {
    width: 100%;
    height: 100vh;
    background-color: #b0eaff;


    .examContent {
        width: inherit;
        height: 90vh;
        background-color: #fff;
        display: flex;

        .examHeaderLeft {
            width: 50%;
            height: inherit;
            // border: 1px solid black;

            .quizHeader {
                width: 80%;
                height: 10%;
                display: flex;
                justify-content: space-around;
                padding-top: 3%;
                // align-items: center;
                // flex-direction: column;
                margin-left: 15%;
                font-size: 16pt;
                // border: 1px solid black;

                // .title {
                //     width: 300px;
                //     font-size: 18pt;
                //     display: flex;
                //     justify-content: space-between;

                //     .span {
                //         width: 50px;
                //     }
                // }

                #manageicon {
                    font-size: 28pt;
                }

            }

            .quizContent {
                width: 85%;
                height: 45%;
                margin-top: 3%;
                // margin-bottom: 2%;
                margin-left: 15%;
                overflow-y: auto;
                // border: 1px solid black;
            }

            .quizAns {
                width: 85%;
                height: 35%;
                // border: 1px solid black;
                display: flex;
                margin-left: 15%;
                justify-content: start;
                align-items: start;
                flex-direction: column;
                overflow-y: auto;

                .check1 {
                    height: 6vh;
                    margin-bottom: 1%;
                    display: flex;
                    // justify-content: center;
                    // align-items: center;
                    // flex-direction: column;
                }

                .check2 {
                    height: 6vh;
                    margin-bottom: 1%;
                }

                .radio1 {
                    height: 6vh;
                    margin-bottom: 1%;
                }

                .radio2 {
                    height: 6vh;
                    margin-bottom: 1%;
                }
            }

            .quizBtn {
                height: 2%;
                margin-left: 15%;

                button {
                    height: 38px;
                    width: 100px;
                    border: 0;
                    color: white;
                    background-color: #0361fa;
                    transition: 0.2s;

                    &:hover {
                        height: 40px;
                        width: 105px;
                    }

                    &:active {
                        height: 38px;
                        width: 100px;
                    }
                }
            }
        }

        .examHeaderRight {
            width: 50%;
            height: inherit;


            .quizCode {
                width: 100%;
                height: 98%;
                // border: 1px solid black;
                display: flex;
                justify-content: center;
                align-items: center;

                .imgArea {
                    width: 95%;
                    height: 98%;
                    // border: 1px solid black;
                    overflow: auto;

                    img {
                        max-height: 200%;
                        max-width: 200%;
                    }
                }
            }

            // .quizAns {
            //     width: 100%;
            //     height: 30%;
            //     display: flex;
            //     justify-content: start;
            //     align-items: center;
            //     flex-direction: column;
            //     overflow-y: auto;

            //     .ansNum {
            //         height: 6vh;
            //         margin-bottom: 1%;

            //     }
            // }
        }
    }

    .examFooter {
        width: inherit;
        height: 10vh;
        // border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;

        .quizNum {
            width: 80%;
            height: 10vh;
            display: flex;
            // align-items: center;
            // justify-content: center;
            overflow: auto;

            span {
                display: block;
                margin: 0.5rem;
                font-size: 16pt;

            }

            .footerItem {
                transition: 0.2s;

                &:hover {
                    font-size: 20pt;
                    color: #791dcf;
                    cursor: pointer;
                }

                &:active {
                    font-size: 16pt;
                }
            }

            .writed {
                display: block;
                margin: 0.5rem;
                font-size: 20pt;
                color: red;
            }
        }

        .footerBtn {
            width: 8%;
            height: 8vh;

            // border: 1px solid black;
            button {
                width: 80%;
                height: 80%;
                transition: 0.3s;
                background-color: #0d94ee;
                border: 0;
                font-size: 14pt;
                color: white;

                &:hover {
                    width: 90%;
                    height: 90%;
                    background-color: #5250f5;
                    font-size: 18pt;
                }

                &:active {
                    width: 80%;
                    height: 80%;
                    font-size: 14pt;
                    background-color: #0d94ee;
                }
            }
        }
    }
}
</style>