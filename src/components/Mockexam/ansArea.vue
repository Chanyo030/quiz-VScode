<script>
export default {
    data() {
        return {

        }
    },
    props: [
        "contentInfo"
    ],
    updated() {
        console.log(this.contentInfo)
    },
    created() {
        console.log(this.contentInfo)
    }
}

</script>


<template>
    <div class="checkboxArea">

        <div class="select">
            <span v-for="item in this.contentInfo.selectionText.split(';')">{{ item.split(",")[0] }}</span>
        </div>
        <div class="input">
            <input type="checkbox" v-for="item in this.contentInfo.selectionText.split(';')">
        </div>
        <div class="textJp">
            <span v-for="item in this.contentInfo.selectionText.split(';')">
                {{ item.split(",")[1] }}
            </span>
        </div>
        <div class="textTw">
            <span v-for="item in this.contentInfo.selectionText.split(';')">
                {{ item.split(",")[2] }}
            </span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.checkboxArea {
    height: 40vh;
    width: 42vw;
    border: 1px solid black;
    display: flex;

    .select {
        height: inherit;
        width: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .input {
        height: inherit;
        width: 10%;
        display: flex;
        flex-direction: column;
    }

    .textJp {
        height: inherit;
        width: 40%;
        display: flex;
        flex-direction: column;
    }

    .textTw {
        height: inherit;
        width: 40%;
        display: flex;
        flex-direction: column;
    }
}</style>