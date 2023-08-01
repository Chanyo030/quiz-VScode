<!-- 手刻 彈跳視窗 -->

<script>

export default {
    methods: {
        modalPush() {
            this.$emit("alertMessage")
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="modal">

            <!-- X Icon - Font Awesome -->
            <font-awesome-icon id="manageIcon" @click="modalPush" :icon="['fas', 'x']" />
            <h2 id="modelTitle"></h2>
            <slot>


            </slot>
        </div>

        <div class="bg"></div>
    </div>
</template>

<style lang="scss" scoped>
.container {

    // 不管滾輪用到哪裡，都會定在原地不動
    position: fixed;
    top: 0;
    left: 0;
    width: 200vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    left: 90px;
    align-items: center;
    z-index: 1;
}

.modal {
    width: 50vw;
    height: 50vh;
    background-color: white;
    border-radius: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    #manageIcon {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    #modelTitle {
        position: relative;
        top: 2.6px;
    }
}

.bg {
    position: absolute;
    top: 0;
    left: -90px;
    width: inherit;
    height: inherit;
    background-color: black;
    opacity: 0.1;
}
</style>