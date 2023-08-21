<script>
export default {
    data() {
        return {
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            arr2: [],
        }
    },
    methods: {
        addArr2() {
            for (let i = 1; i <= 70; i++) {
                this.arr2.push(i);
            }
        },
        doneAndHome(){
            this.$router.push('/studentIndex');
        }
    },
    created() {
        this.addArr2();
    }
}

</script>

<template>
    <div class="examArea">
        <div class="examContent">
            <div class="examHeaderLeft">
                <div class="quizHeader">
                    <!-- <div class="iconArea"> -->
                        <font-awesome-icon id="manageicon" :icon="['fab', 'java']" @click="doneAndHome" />
                        <span>&emsp; 紫本</span>
                    <!-- </div> -->
                    <!-- <div class="title"> -->
                        <span>洞洞么</span>
                        <span>CH1</span>
                        <span>第幾題</span>
                    <!-- </div> -->
                </div>
                <div class="quizContent">
                    <h4>題目內容</h4>
                    <h5>課手遊尾瀬列等いん。た。きレチヤホ野個手毛津知ャラエリおきメナテヨロツクと列日はネユナサちいっ屋日雲遊列手ちなあかとこみ区魔都らけのら樹以擢課ゆ樹、るそる絵派列るへうよへに、ろっゆとほ目遊、日手しこ。
                        ろなさっむ御模根毛いきれく素日瀬離列課いめら列課くるサロヨチトヌ夜列魔瀬「ぬん夜巣擢」ょこすはと以魔へた。露えもおんまあかチヒチさもひひ樹、け舳みせねと毛毛譜名氏毛巣譜派毛やな。
                        め。けえ野模むき他ょ雲差日鵜か氏素へぬ「むかとと御ふ」そ都御模日樹擢模舳素絵はやく保保保毛遊離津巣ふよもうろめ、夜個舳素やこソャコヤケムめつ。
                    </h5>
                </div>

                <div class="quizAns">
                    <div class="ansNum" v-for="item in arr">
                        <span>{{ item }}</span>
                        <span>&emsp;</span>
                        <input type="radio" name="ans" id="">
                        <span>&emsp;</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia.</span>
                    </div>
                </div>

            </div>
            <div class="examHeaderRight">
                <div class="quizCode">
                    <div class="imgArea">
                        <img src="../../../public/IMG_6584.jpg" alt="">
                    </div>
                </div>
                <!-- <div class="quizAns">
                    <div class="ansNum" v-for="item in arr">
                        <span>{{ item }}</span>
                        <span>&emsp;</span>
                        <input type="radio" name="ans" id="">
                        <span>&emsp;</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia.</span>
                    </div>
                </div> -->
            </div>

        </div>
        <div class="examFooter">
            <div class="quizNum">
                <span v-for="item in arr2">{{ item }}</span>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
.examArea {
    width: 100%;
    height: 100vh;
    background-color: #b0eaff;


    .examContent {
        width: inherit;
        height: 90vh;
        background-color: #fff;
        display: flex;

        .examHeaderLeft {
            width: 50%;
            height: inherit;
            // border: 1px solid black;

            .quizHeader {
                width: 80%;
                height: 10%;
                display: flex;
                justify-content: space-around;
                padding-top: 3%;
                // align-items: center;
                // flex-direction: column;
                margin-left: 15%;
                font-size: 16pt;
                // border: 1px solid black;

                // .title {
                //     width: 300px;
                //     font-size: 18pt;
                //     display: flex;
                //     justify-content: space-between;

                //     .span {
                //         width: 50px;
                //     }
                // }

                #manageicon{
                    font-size: 28pt;
                }

            }

            .quizContent {
                width: 85%;
                height: 52%;
                margin-top: 3%;
                margin-bottom: 2%;
                margin-left: 15%;
                overflow-y: auto;
                // border: 1px solid black;
            }
            .quizAns{
                width: 85%;
                height: 30%;
                // border: 1px solid black;
                display: flex;
                margin-left: 15%;
                justify-content: start;
                align-items:start;
                flex-direction: column;
                overflow-y: auto;

                .ansNum {
                    height: 6vh;
                    margin-bottom: 1%;

                }
            }
        }

        .examHeaderRight {
            width: 50%;
            height: inherit;


            .quizCode {
                width: 100%;
                height: 98%;
                // border: 1px solid black;
                display: flex;
                justify-content: center;
                align-items: center;

                .imgArea {
                    width: 95%;
                    height: 98%;
                    // border: 1px solid black;
                    overflow: auto;

                    img {
                        max-height: 200%;
                        max-width: 200%;
                    }
                }
            }

            // .quizAns {
            //     width: 100%;
            //     height: 30%;
            //     display: flex;
            //     justify-content: start;
            //     align-items: center;
            //     flex-direction: column;
            //     overflow-y: auto;

            //     .ansNum {
            //         height: 6vh;
            //         margin-bottom: 1%;

            //     }
            // }
        }
    }

    .examFooter {
        width: inherit;
        height: 10vh;
        // border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;

        .quizNum {
            width: 80%;
            height: 10vh;
            display: flex;
            // align-items: center;
            // justify-content: center;
            overflow: auto;

            span {
                display: block;
                margin: 0.5rem;

            }
        }
    }
}
</style>