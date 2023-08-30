<script>
export default {
    data() {
        return {

        }
    },
    props: [
        "images",
    ],
    methods:{
        
    },
}
</script>

<template>
    <div class="previewArea">
        <div class="background">
            <font-awesome-icon class="manageIcon" :icon="['fas', 'x']"  @click="$emit('offWindow')"/>
            <div class="imgDiv">
                <img v-for="image in images" :key="image.id" :src="image.url" alt="Image" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.previewArea {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background:rgb(30, 30, 30,0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .background {
        width: 80vw;
        height: 80vh;
        font-size: 36pt;
        background-color: white;
        position: relative;
        

        .manageIcon{
            position: absolute;
            right: 2rem;
            top: 1rem;
        }

        .imgDiv{
            width: 90%;
            height: 100%;
            overflow: auto ;
        }
    }
}
</style>