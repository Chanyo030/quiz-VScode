<script>

export default {
    data() {
        return {
            titleText: "新增程式碼",
            images: [],
        }
    },
    components: {

    },
    methods: {
        getImages(e) {
            const files = e.target.files;
            const reader = new FileReader();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                reader.onload = (e) => {
                    this.images.push({
                        id: i,
                        url: e.target.result,
                    });
                };

                reader.readAsDataURL(file);
            }
        },
    }
}
</script>

<template>

    <div class="addArea">
        <div class="left">

        </div>
        <div class="right">
            <h1>程式碼內容編輯</h1>
            <div class="quizBook">
                <label for="" >新增圖片</label>
                <div class="photo" >
                    <input class="form-control" type="file" id="imgInput" @change="getImages" multiple>

                    <div class="imgContainer">

                        <div class="imgDiv" v-for="image in images" :key="image.id">
                            <img :src="image.url" alt="Image" />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.addArea {
    width: 100vw;
    height: 100vh;
    display: flex;

    .left {
        width: 10vw;
        height: 100vh;
        background-color: #7c7c7c;
    }

    .right {
        width: 90vw;
        height: 100vh;

        .quizBook {
            .photo {
                width: 80%;
                // height: 1000px;

                .imgContainer {
                    width: 100%;
                    // height: 1000px;

                    .imgDiv {
                        width: 1000px;
                        // height: 800px;
                        border: 1px solid black;
                        overflow: auto;
                    }
                }
            }
        }
    }

}
</style>