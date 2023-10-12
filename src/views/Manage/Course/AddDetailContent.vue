<script>

export default {
    data() {
        return {

        }
    },
    components: {
    },
    props: [
        "QandAObject"
    ],
}
</script>

<template>
    <div class="detailArea">
        <h2>詳解內容</h2>
        <textarea name="" id="" cols="30" rows="10" v-model="this.QandAObject.explanationText"></textarea>
        <div class="btnArea">
            <button type="button" @click="$emit('backStep2')">
                <font-awesome-icon :icon="['fas', 'play']" rotation="180" />
            </button>
            <button type="button" @click="$emit('goStep4')">
                <font-awesome-icon :icon="['fas', 'play']" />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.detailArea {
    width: 90vw;
    height: 80vh;

    textArea {
        resize: none;
        width: 95%;
        height: 27rem;
        font-size: 14pt;
        margin-bottom: 20px;
    }

    .btnArea {
            width: 100%;
            font-size: 24pt;
            display: flex;
            justify-content: space-around;
            
            button{
                border-radius: 5px;
                border: 1px solid white;
                background-color: #ffffff;
                color: #0059c6;

                &:hover {
                    font-size: 28pt;
                    color: #6f7b9e;
                }

            }

        }

}
</style>