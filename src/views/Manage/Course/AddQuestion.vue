<script>
import { mapState, mapActions } from "pinia";
import quizChapter from "../../../stores/quizChapter";
import Modal from "../../../components/Mockexam/Modal.vue";
export default {
    data() {
        return {
            ansNums: 0,
            ansNumsArr: [],
            ansCode: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            ans: [],
            ansText: "",
            modalShow: false,
        }
    },
    props: [
        "leftArr",
        "QandAObject",
    ],
    components: {
        Modal
    },
    computed: {
        ...mapState(quizChapter, ["allChapters", "classifyArr", "classifyChapters", "chapterQuestionNums", "questionCode"]),
    },
    methods: {
        ...mapActions(quizChapter, ["allQuizChaptersFun", "classifyAllCh", "getUnitQuestionNums", "makeCode"]),
        ansArr(num) {
            this.ansNumsArr = []
            for (let i = 1; i <= num; i++) {
                this.ansNumsArr.push(i)
            }
        },
        addAns() {
            const regx = /[A-H]{1,8}?/;
            if (!regx.test(this.ansText) || this.ansText == "") {
                this.modalShow = !this.modalShow;
            } else {
                console.log(this.ansText.split(""))
                this.ansText.split("").forEach((item, index) => {
                    if (this.ansText.split("")[index] == this.ansText.split("")[index + 1]) {

                        this.modalShow = !this.modalShow;

                    }
                })
                this.ans = this.ansText.split("").join(",")
                console.log(this.ans)
                this.QandAObject.answer = this.ans;
            }


        },
        modalChange() {
            this.modalShow = !this.modalShow;
        }
    },
    updated() {
        console.log(this.QandAObject)
        console.log(this.chapterQuestionNums)
        this.QandAObject.questionCode = this.questionCode
    },
    created() {
        this.allQuizChaptersFun()
    },
}
</script>

<template>
    <div class="questionArea">
        <Modal v-show="modalShow" v-on:alertMessage="modalChange">
            <div class="modalContent" style="align-content: center; font-size: 28pt;">
                <p>答案內容格式要正確</p>
                <p>只可以為英文字母</p>
            </div>
        </Modal>

        <p></p>
        <div class="topInfo">
            <h2>題目內容(第一碼為題本，二三為章節，四五碼為題目)</h2>
            <div class="info">
                <!-- 題目 -->
                <label for="">題本</label>
                <select name="classify" id="quizClassify" v-model="this.QandAObject.classify"
                    @change="this.classifyAllCh(this.QandAObject.classify);">
                    <option value="">請選擇</option>
                    <option :value="item" v-for="item in classifyArr">{{ item }}</option>
                </select>
                <!-- 章節 -->
                <label for="">章節</label>
                <select name="classifyUnit" id="quizClassifyUnit" v-model="this.QandAObject.classifyUnit"
                    :disabled="this.QandAObject.classify == ''"
                    @change="getUnitQuestionNums(this.QandAObject.classifyUnit)">
                    <option value="">請選擇</option>
                    <option v-for="elements in classifyChapters" :value="elements.classifyUnit">
                        {{ elements.classifyUnit }} </option>
                </select>
                <!-- 第幾題 -->
                <label for="">
                    第
                    <select name="" id="" disabled>
                        <option value="" v-if="this.QandAObject.classifyUnit == ''">題數</option>
                        <option :value="chapterQuestionNums.length + 1" v-if="this.QandAObject.classifyUnit !== ''">{{
                            chapterQuestionNums.length + 1 }}</option>
                    </select>
                    題
                </label>
                <!-- 是否複選 -->
                <label for="">是否複選</label>
                <input type="checkbox" @change="$emit('checkOn')">
                <!-- 是否特殊題型 -->
                <label for="">特殊題型</label>
                <input type="checkbox" @change="$emit('teamOn')">
                <!-- 若為特殊題型，則連結何種題型 -->
                <label for="">連結題型</label>
                <input type="text" class="contentQuesion" placeholder="題目代碼 ( ex:10101 )"
                    :disabled="this.QandAObject.extraordinary == false">
            </div>
        </div>
        <div class="downInfo">
            <!-- 日譯題型 -->
            <div class="content">
                <span>題目(日)</span>
                <textarea name="" id="" cols="30" rows="10" v-model="this.QandAObject.topicJp"></textarea>
            </div>
            <!-- 中譯題型 -->
            <div class="content">
                <span>題目(中)</span>
                <textarea name="" id="" cols="30" rows="10" v-model="this.QandAObject.topicTw"></textarea>
            </div>
            <div class="content">
                <span>正確答案</span>
                <div class="rightAns">
                    <input type="text" style="width: 80%;" v-model="ansText">
                    <button type="button" style="margin-left: 30px;" @click="addAns">檢查</button>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.questionArea {
    width: 90vw;
    height: 80vh;
    display: flex;
    flex-direction: column;



    .topInfo {
        width: 95%;
        height: 15vh;
        display: flex;
        flex-direction: column;


        .info {
            // height: 100%;
            display: flex;
            justify-content: space-around;
            font-size: 14pt;

            select {
                height: 2rem;
                width: 5.5rem;
            }

            input {
                height: 2rem;
                width: 2rem;
            }

            .contentQuesion {
                width: 30%;
            }
        }
    }


    .downInfo {
        width: 95%;
        height: 75vh;
        display: flex;
        flex-direction: column;

        .content {
            display: flex;
            flex-direction: column;


            textArea {
                resize: none;
                width: 100%;
                height: 8rem;
                font-size: 14pt;
                margin-bottom: 20px;
            }


        }

        .rightAns {
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 16pt;

            button {
                width: 100px;
                height: 50px;
                background-color: #b0eaff;
                color: #0059c6;
                font-size: 16pt;
                transition: 0.5s;
                border: none;

                &:hover {
                    width: 120px;
                    height: 65px;
                    font-size: 20pt;
                    background-color: #6f7b9e;
                    color: #ffffff;
                }
            }
        }
    }
}
</style>