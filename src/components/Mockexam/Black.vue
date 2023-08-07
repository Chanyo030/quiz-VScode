<!-- 黑本 -->

<script>
import Modal from "./Modal.vue";

export default {
    components: {
        Modal
    },
    data() {
        return {
            isShow: false
        }
    },

    methods: {

        switchModal() {
            this.isShow = !this.isShow
        }
    }
}
</script>
<template>
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <ul id="Black">
            <li style="list-style-type: none;">
                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch1&emsp;Javaの基本&ensp;(基礎)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch2&emsp;Javaのデータ型の操作&ensp;(資料型別)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch3&emsp;演算子と判定構造の使用&ensp;(運算子)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch4&emsp;配列の作成と使用&ensp;(陣列)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch5&emsp;ループ構造の使用&ensp;(迴圈)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch6&emsp;メソッドとカプセル化の操作&ensp;(方法及封裝)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch7&emsp;継承の操作&ensp;(繼承)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch8&emsp;例外の処理&ensp;(異常處理)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn" @click="switchModal">ch9&emsp;Java
                    APIの主要なクラスの操作&ensp;(Java API)</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>
            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch10&emsp;模擬題目</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>
            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch11&emsp;模擬題目</button>
                <Modal v-if="isShow" @alertMessage="switchModal">
                    <h2>考試說明</h2>
                    <div id="content">
                        <p>題本：</p>
                        <p>單元名稱：</p>
                        <p>題數：&thinsp;題</p>
                        <p>考試時間：&thinsp;分</p>
                        <p>扣分方式：一&thinsp;題&ensp;/&ensp;分</p>
                        <div class="directionsBtnDiv">
                            <button type="button" class="btn btn-secondary" id="directionsBtn1"
                                @click="switchModal">取消</button>
                            <RouterLink to=""><button type="button" class="btn btn-primary" id="directionsBtn2">確定</button>
                            </RouterLink>
                        </div>
                    </div>
                </Modal>

            </li>

        </ul>

    </div>
</template>
<style lang="scss">
#content {
    margin-top: 10px;

    .directionsBtnDiv {
        display: flex;
        justify-content: center;
        position: relative;
        top: 10px;

        #directionsBtn1 {
            position: relative;
            right: 5%;
        }

        #directionsBtn2 {
            position: relative;
            left: 5%;
        }

    }

}
</style>