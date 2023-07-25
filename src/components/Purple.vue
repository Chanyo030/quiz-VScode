<!-- 紫本 -->

<script>
import Modal from "../components/Modal.vue";

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
        <ul id="purple">
            <li style="list-style-type: none;">

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn"
                    @click="switchModal">ch1&emsp;Javaプログラミング基礎&ensp;(基礎)</button>
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
                    @click="switchModal">ch2&emsp;配列&ensp;(陣列)</button>
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
                    @click="switchModal">ch3&emsp;演算子と分岐文&ensp;(運算子)</button>
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
                    @click="switchModal">ch4&emsp;繰り返し文と繰り返し制御文&ensp;(迴圈)</button>
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
                    @click="switchModal">ch5&emsp;クラス定義とオブジェクトの生成・使用&ensp;(方法定義及物件創建與應用)</button>
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
                    @click="switchModal">ch6&emsp;継承とポリモフィズム&ensp;(繼承與多型)</button>
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

                <button type="button" class="btn btn-link quizA" id="quizTitleBtn" @click="switchModal">ch7&emsp;Java
                    APIの利用&ensp;(Java
                    API)</button>
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
                    @click="switchModal">ch8&emsp;例外処理&ensp;(異常處理)</button>
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
                    @click="switchModal">ch9&emsp;模擬試題</button>
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

<style></style>