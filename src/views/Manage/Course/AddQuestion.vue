<script>
import { mapState, mapActions } from "pinia";
import quizChapter from "../../../stores/quizChapter";
export default {
    data() {
        return {
        }
    },
    props: [
        "leftArr",
        "QandAObject",
    ],
    components: {

    },
    computed: {
        ...mapState(quizChapter, ["allChapters", "classifyArr", "classifyChapters", "chapterQuestionNums"])
    },
    methods: {
        ...mapActions(quizChapter, ["allQuizChaptersFun", "classifyAllCh", "getUnitQuestionNums"]),
        checkOn(){

        },
        teamOn(){

        }
    },
    updated() {
        console.log(this.QandAObject)
        console.log(this.chapterQuestionNums)
    },
    created() {
        this.allQuizChaptersFun()
    }
}
</script>

<template>
    <div class="questionArea">
        <p></p>
        <div class="topInfo">
            <h2>題目內容</h2>
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
                <input type="checkbox" @change="$emit('teamOn')" >
                <!-- 若為特殊題型，則連結何種題型 -->
                <label for="">連結題型</label>
                <input type="text" class="contentQuesion" placeholder="題目代碼" :disabled="this.QandAObject.extraordinary == false">
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
                height: 11rem;
                font-size: 14pt;
                margin-bottom: 20px;
            }
        }
    }
}
</style>