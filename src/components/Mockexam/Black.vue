<!-- 黑本 -->

<script>
import Modal from "./Modal.vue";
import examPage from './examPage.vue';
import { mapState, mapActions } from 'pinia';
import quizChapter from "../../stores/quizChapter";

export default {
    components: {
        Modal,
        examPage
    },
    data() {
        return {
            isShow: false,
            isExam: false,
            allChapters: ""
        }
    },
    computed: {
        ...mapState(quizChapter, ["classify", "chNum", "chName", "chQuestionNum"])
    },

    methods: {
        ...mapActions(quizChapter, ["getQuizInfo"]),
        switchModal(book, ch) {
            this.isShow = !this.isShow
            if (this.isShow == true) {
                this.getQuizInfo(book, ch)
            }
        },
        goExam() {
            console.log("XXX")
            this.switchModal();
            this.isExam = !this.isExam
        },
        catchAllChapters() {
            let req = {
                "classify": "黑本"
            }
            fetch("http://localhost:8080/api/get_All_Classify_Chapters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.allChapters = data;
                })
                .catch(error => console.log(error))
        }
    },
    created() {
        this.catchAllChapters();
    }
}

</script>
<template>
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <ul id="Black">
            <li style="list-style-type: none;" v-for="(item, index) in this.allChapters">
                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal(item.classify, item.classifyUnit)">{{ item.classifyUnit }}&emsp;{{ item.unitName
                    }}</button>
            </li>
            <Modal v-if="isShow" @alertMessage="switchModal">
                <h2>考試說明</h2>
                <div id="content">
                    <p>題本&emsp;&emsp;：{{ this.classify }}</p>
                    <p>單元名稱：{{ this.chName }}</p>
                    <p>題數&emsp;&emsp;：{{ this.chQuestionNum }}&emsp;題</p>
                    <p>考試時間：&thinsp;分</p>
                    <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                    <div class="directionsBtnDiv">
                        <button type="button" class="btn btn-secondary" id="directionsBtn1" @click="switchModal">取消</button>
                        <RouterLink to="/examPage"><button type="button" class="btn btn-primary"
                                id="directionsBtn2">確定</button>
                        </RouterLink>
                    </div>
                </div>
            </Modal>
        </ul>

    </div>
</template>
<style lang="scss">
#content {
    width: 48vw;
    height: 48vh;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;

    .directionsBtnDiv {
        width: 48vw;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>