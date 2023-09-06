<script>

export default {
    data() {
        return {

        }
    },
    components: {
    },
    props:[
        "QandAObject"
    ],
}
</script>

<template>

    <div class="detailArea">
        <h2>詳解內容</h2>
        <textarea name="" id="" cols="30" rows="10" v-model="this.QandAObject.explanationText"></textarea>
    </div>
</template>

<style lang="scss" scoped>
.detailArea {
    width: 90vw;
    height: 80vh;

    textArea {
                resize: none;
                width: 95%;
                height: 30rem;
                font-size: 14pt;
                margin-bottom: 20px;
            }
   

}
</style>