<!-- 學生考試主頁 -->

<script>

import Footer from "../../components/Footer.vue";
import Modal from "../../components/Mockexam/Modal.vue";
import ClassifyTable from "../../components/ClassifyTable.vue";
import Header from '../../components/Header.vue';

export default {
    components: {
        Footer,
        Modal,
        ClassifyTable,
        Header

    },

    data() {
        return {
            titleText:"線上模擬試題",
        }
    },
    computed:{
        
    },
    methods: {
        
    }
}
</script>
<template>
    <div class="sticky-footer">
        <div id="quizHead">
            <Header v-bind:secondTitle="titleText" />
        </div>

        <ClassifyTable />

        <Footer />

    </div>
</template>
<style lang="scss">

</style>