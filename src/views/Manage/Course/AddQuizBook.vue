<script>
import Header from "../../../components/Header.vue";
import AddQuestion from "./AddQuestion.vue";
import AddAnswer from "./AddAnswer.vue";
import AddDetailContent from "./AddDetailContent.vue";
import AddCode from "./AddCode.vue";
import CodePreview from "./CodePreview.vue";

export default {
    components: {
        Header,
        AddQuestion,
        AddAnswer,
        AddDetailContent,
        AddCode,
        CodePreview,
    },

    data() {
        return {
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            TitleText: "新增題庫題型",
            previewOn: false,
            QandA: {
                questionCode: "", // 題目代碼
                classify: "", // 題本分類
                classifyUnit: "",
                topicJp: "", // 題目(日)
                topicTw: "", // 題目(中)
                selectionText: "", // 選項文字
                answer: "", // 答案
                explanationText: "", // 詳解文字
                extraordinary: false, // 是否特殊題型
                extraordSet: "", // 連結題型
                uploadName: "洞么么", // 更新者的名字
                uploadTime: "", // 更新題目的時間
                checkOn: false, // 是否複選
            },
            questionImages: [], // 題目圖片
            answerImages: [], // 答案圖片
            detailImages: [], // 詳解圖片
            previewImages: [],
        };
    },
    methods: {
        goStep2() {
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
        },
        goStep3() {
            this.step1 = false;
            this.step2 = false;
            this.step3 = true;
            this.step4 = false;
        },
        goStep4() {
            this.step1 = false;
            this.step2 = false;
            this.step3 = false;
            this.step4 = true;
        },
        backStep1() {
            this.step1 = true;
            this.step2 = false;
            this.step3 = false;
            this.step4 = false;
        },
        backStep2() {
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
        },
        backStep3() {
            this.step1 = false;
            this.step2 = false;
            this.step3 = true;
            this.step4 = false;
        },
        goManage() {
            this.$router.push("./manage");
        },
        inputImages(itemArr) {
            this.previewImages = itemArr;
            this.previewOn = !this.previewOn;
        },
        cleanImages(targetArr) {
            this.previewImages = targetArr;
        },
        previewOff() {
            this.previewOn = !this.previewOn;
        },
        checkOn() {
            this.QandA.checkOn = !this.QandA.checkOn;
        },
        extraordinaryOn() {
            this.QandA.extraordinary = !this.QandA.extraordinary;
        },
        submitImg() {
            let req = {
                pictureList: [],
            };

            let item = {
                classify: this.QandA.classify,
                topicCode: this.QandA.questionCode,
                topicImg: "",
                selectionImg: "",
                explanationImg: "",
                extraordinary: this.QandA.extraordinary,
            };

            let sum = 0;
            let x = this.questionImages.length;
            let y = this.answerImages.length;
            let z = this.detailImages.length;
            if (x > y && x > z) {
                sum = x;
            } else if (y > x && y > z) {
                sum = y;
            } else {
                sum = z;
            }
            for (let i = 0; i < sum; i++) {
                if (x > 0) {
                    item.topicImg = this.questionImages[i].url.substr(22);
                }
                if (y > 0) {
                    item.selectionImg = this.answerImages[i].url.substr(22);
                }
                if (z > 0) {
                    item.explanationImg = this.detailImages[i].url.substr(22);
                }
                req.pictureList.push(item);
            }

            console.log(req);
            fetch("http://localhost:8080/api/add_question_picture", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => alert(error));
            console.log(req);
        },
        submitQuestion() {
            let req = {
                QandA: {},
            };
            console.log(req);
            req.QandA = this.QandA;

            fetch("http://localhost:8080/api/add_question_and_answer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        submitObject() {
            this.submitImg();
            this.submitQuestion();
        },
    },
    updated() { },
    created() {
        console.log(this.classifyArr);
    },
};
</script>

<template>
    <Header v-bind:secondTitle="TitleText" @home="goManage" />
    <div class="addArea">
        <div class="left">
            <span class="quizArr">{{ QandA.questionCode }}</span>
            <!-- <span class="quizArr" v-for="item in questionArr"></span> -->
        </div>

        <div class="right">
            <!-- step1 -->
            <div class="stepAreaOff" :class="{ stepAreaOn: step1 }">
                <AddQuestion v-show="step1" v-model:QandAObject="QandA" v-on:checkOn="checkOn"
                    v-on:teamOn="extraordinaryOn" v-on:backStep1="backStep1" v-on:goStep2="goStep2"/>
            </div>
            <!-- step2 -->
            <div class="stepAreaOff" :class="{ stepAreaOn: step2 }">
                <AddAnswer v-show="step2" v-model:QandAObject="QandA" v-on:backStep1="backStep1" v-on:goStep3="goStep3" />
            </div>
            <!-- step3 -->
            <div class="stepAreaOff" v-bind:class="{ stepAreaOn: step3 }">
                <AddDetailContent v-show="step3" v-model:QandAObject="QandA" v-on:backStep2="backStep2" v-on:goStep4="goStep4" />
            </div>
            <!-- step4 -->
            <div class="stepAreaOff" v-bind:class="{ stepAreaOn: step4 }">
                <AddCode v-show="step4" v-bind:questionImages="questionImages" v-bind:answerImages="answerImages"
                    v-bind:detailImages="detailImages" v-model:QandAObject="QandA" v-on:getArr="inputImages"
                    v-on:cleanArr="cleanImages" v-on:backStep3="backStep3" v-on:submitObject="submitObject"/>
            </div>
        </div>
        <CodePreview v-if="previewOn" v-model:images="previewImages" v-on:offWindow="previewOff" />
    </div>
</template>

<style lang="scss" scoped>
.addArea {
    width: 100vw;
    height: 80vh;
    display: flex;

    .left {
        width: 10vw;
        height: 100%;
        padding: 2rem;

        .quizArr {
            font-size: 20pt;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
                "Lucida Sans", Arial, sans-serif;
        }
    }

    .right {
        width: 77vw;
        height: 100%;
        border-left: 10px solid #b0eaff;
        display: flex;

        .stepAreaOff {
            width: 50px;
            height: 80vh;

            
        }

        .stepAreaOn {
            padding-left: 1%;
            width: 100%;
            display: flex;
            transition: 0.2s;
        }
    }
}
</style>
