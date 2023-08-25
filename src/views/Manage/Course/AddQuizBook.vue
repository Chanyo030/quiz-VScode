<script>
import Header from "../../../components/Header.vue";
import AddQuestion from "./AddQuestion.vue";
import AddAnswer from "./AddAnswer.vue";
import AddDetailContent from "./AddDetailContent.vue";
import AddCode from "./AddCode.vue";

export default {
    components: {
        Header,
        AddQuestion,
        AddAnswer,
        AddDetailContent,
        AddCode,
        TitleText: "新增題庫題型",
        AddQuestion,
        AddCode
    },

    data() {
        return {
            step1: true,
            step2: false,
            step3: false,
            step4: false,


        };
    },
    methods: {
        goStep2() {
            this.step1 = !this.step1;
            this.step2 = !this.step2;
        },
        goStep3() {
            this.step3 = !this.step3;
            this.step2 = !this.step2;
        },
        goStep4() {
            this.step3 = !this.step3;
            this.step4 = !this.step4;
        }


    },
    watch: {

    }
};
</script>

<template>
    <Header v-bind:secondTitle="TitleText" />
    <AddQuestion v-show="step1"/>
    <AddAnswerVue v-show="step2"/>
    <AddDetailContentVue v-show="step3"/>
    <AddCode v-show="step4"/>
</template>
  
<style lang="scss" scoped></style>
  