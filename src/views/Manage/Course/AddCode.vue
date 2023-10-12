<script>
export default {
    data() {
        return {
            titleText: "新增程式碼",
        }
    },
    components: {

    },
    props: [
        "questionImages",
        "answerImages",
        "detailImages",
        "QandAObject"
    ],
    methods: {
        getQuestionImages(e) {
            const files = e.target.files;
            const reader = new FileReader();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                reader.onload = (e) => {
                    this.questionImages.push({
                        id: i,
                        url: e.target.result,
                    });
                    console.log(e.target.result)
                };

                reader.readAsDataURL(file);
                this.$emit("questionImages",)
            }
        },
        getAnswerImages(e) {
            const files = e.target.files;
            const reader = new FileReader();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                reader.onload = (e) => {
                    this.answerImages.push({
                        id: i,
                        url: e.target.result,
                    });
                };

                reader.readAsDataURL(file);
            }
        },
        getDetailImages(e) {
            const files = e.target.files;
            const reader = new FileReader();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                reader.onload = (e) => {
                    this.detailImages.push({
                        id: i,
                        url: e.target.result,
                    });
                };

                reader.readAsDataURL(file);
            }
        },
        submitImages(targetArr){
            this.$emit("getArr",targetArr);
        },
        clean(itemArr){
            const imgSelect = document.getElementById("imgInput");
            imgSelect.value = '';
            itemArr.splice(0,itemArr.length)
            this.$emit('cleanArr', itemArr)
        },
    }
}
</script>

<template>
    <div class="codeArea">
        <h1>程式碼內容</h1>
        <div class="buttonArea">

            <div class="photoSelect">
                <h2>題目圖片</h2>
                <button @click="submitImages(questionImages)">預覽</button>
                <button @click="clean(questionImages)">清除</button>
            </div>
            <input class="" type="file" id="imgInput" @change="getQuestionImages" multiple>
            <div class="photoSelect">
                <h2>答案圖片</h2>
                <button @click="submitImages(answerImages)">預覽</button>
                <button @click="clean(answerImages)">清除</button>
            </div>
            <input class="" type="file" id="imgInput" @change="getAnswerImages" multiple>
            <div class="photoSelect">
                <h2>詳解圖片</h2>
                <button @click="submitImages(detailImages)">預覽</button>
                <button @click="clean(detailImages)">清除</button>
            </div>
            <input class="" type="file" id="imgInput" @change="getDetailImages" multiple>
        </div>
        <!-- <div class="photo">
            
            <label for="">新增圖片</label>
            <input class="" type="file" id="imgInput" @change="getImages" multiple>
        </div>
        <div class="imgContainer">   -->
        <!-- <div class="imgDiv" v-for="image in images" :key="image.id"> -->
        <!-- <div class="imgDiv" >
                <img    v-for="image in images" :key="image.id" :src="image.url" alt="Image" />
            </div> 
        </div> -->

        <div class="btnArea">
                    <button type="button" @click="$emit('backStep3')">
                        <font-awesome-icon :icon="['fas', 'play']" rotation="180" />
                    </button>
                    <button type="button" @click="$emit('submitObject')">
                        <font-awesome-icon :icon="['fas', 'play']" />
                    </button>
                </div>


    </div>
</template>

<style lang="scss" scoped>
.codeArea {
    width: 90vw;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    // .photo {
    //     width: 100%;
    //     height: 10vh;
    //     display: flex;
    //     justify-content: space-around;
    // }

    // .imgContainer {
    //     width: 100%;
    //     height: 70vh;

    //     .imgDiv {
    //         width: 100%;
    //         height: 100%;
    //         border: 1px solid black;
    //         overflow: auto;
    //     }
    // }

    .buttonArea {
        width: 60%;
        height: inherit;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        flex-direction: column;

        .photoSelect {
            width: 80%;
            height: 5vh;
            margin: 5vh;
            display: flex;
            justify-content: space-around;

            button {
                height: 5vh;
                background-color: #b0eaff;
                color: #0059c6;
                font-size: 16pt;
                transition: 0.5s;
                border: none;

                &:hover {
                    font-size: 20pt;
                    background-color: #6f7b9e;
                    color: #ffffff;
                }

            }
        }
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