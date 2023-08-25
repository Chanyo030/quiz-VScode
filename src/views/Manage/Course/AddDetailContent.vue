<script>
import Header from "../../../components/Header.vue";
export default {
    data() {
        return {

        }
    },
    components: {
        Header,
    }
}
</script>

<template>
    <Header />
    <div class="addArea">
        <div class="left">

        </div>
        <div class="right">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.addArea {
    width: 100vw;
    height: 100vh;

    .left {
        width: 10vw;
        height: 100vh;
        background-color: #7c7c7c;
    }

    .right {
        width: 90vw;
        height: 100vh;
    }

}
</style>