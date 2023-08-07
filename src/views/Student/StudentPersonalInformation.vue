<!-- 學生個人資料新增 -->

<script>
import Footer from "../../components/Footer.vue";

// 日期清空
export default {

    components: {
        Footer
    },

    mounted() {
        this.clearInput();
    },
    methods: {
        clearInput() {
            this.empty = '';
        },
        backIndex(){
            this.$router.push('/StudentIndex')
        }
    }
}
</script>
<template>
    <div class="sticky-footer">
        <div id="quizHead">
            <h2 id="headText1" @click="backIndex">Java 全端培訓班</h2>
            <h2 id="headText2">帳號設定</h2>
        </div>


        <div class="studentPersonalInformationDiv">
            <div id="studentPersonalInformationCardImg">
                <img class="studentPersonalInformationImg1"
                    src="../../../public/Faculty_Headshot_Thumbnail-removebg-preview.png" alt="user">
                <img class="studentPersonalInformationImg2" src="../../../public/191059.png" alt="data">
                <img class="studentPersonalInformationImg3" src="../../../public/191059.png" alt="data">
                <img class="studentPersonalInformationImg4" src="../../../public/191059.png" alt="data">
                <img class="studentPersonalInformationImg5" src="../../../public/191059.png" alt="data">

            </div>

            <!-- autocomplete="off" 不要有紀錄 -->
            <div id="studentPersonalInformationCardPadding">

                <div class="input-group mb-3 studentPersonalInformationId">
                    <span class="input-group-text" id="basic-addon1">學號</span>
                    <input type="text" class="form-control" id="studentPersonalInformationInputId" placeholder="ID"
                        aria-label="UserId" aria-describedby="basic-addon1" readonly v-model="empty">
                </div>
                <div class="input-group mb-3 studentPersonalInformationName">
                    <span class="input-group-text" id="basic-addon1">姓名</span>
                    <input type="text" class="form-control" id="studentPersonalInformationInputName" placeholder="Name"
                        aria-label="Username" aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
                </div>

                <div id="sex">
                    <p>性別</p>
                    <div class="form-check form-check-inline" id="sexBoy">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="body" value="男"
                            v-model="empty">
                        <label class="form-check-label" for="body">男</label>
                    </div>
                    <div class="form-check form-check-inline" id="sexGirl">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="girl" value="女"
                            v-model="empty">
                        <label class="form-check-label" for="girl">女</label>
                    </div>
                </div>

                <div id="militaryService">
                    <p>兵役</p>
                    <div class="form-check form-check-inline" id="militaryServiceYes">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="militaryServiceYes1"
                            value="已服役" v-model="empty">
                        <label class="form-check-label" for="militaryServiceYes1">已服役</label>
                    </div>
                    <div class="form-check form-check-inline" id="militaryServiceNo">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="militaryServiceNo1"
                            value="尚未服役" v-model="empty">
                        <label class="form-check-label" for="militaryServiceNo1">未服役</label>
                    </div>

                    <div class="form-check form-check-inline" id="militaryServiceNone">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="militaryServiceNone1"
                            value="無" v-model="empty">
                        <label class="form-check-label" for="militaryServiceNone1">無</label>
                    </div>

                </div>

                <div class="input-group mb-3" id="age">
                    <span class="input-group-text" id="basic-addon1">年齡</span>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                        <option selected>--------------------------------- 選擇 ---------------------------------</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>

                    </select>
                </div>

                <div class="input-group mb-3 diplomaDiv1">
                    <span class="input-group-text" id="basic-addon1">學歷</span>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                        <option selected>--------------------------------- 選擇 ---------------------------------</option>
                        <option value="高中">高中</option>
                        <option value="大學">大學</option>
                        <option value="碩士">碩士</option>

                    </select>

                </div>
                <div class="input-group mb-3 diplomaDiv2">
                    <span class="input-group-text" id="basic-addon1">學校</span>
                    <input type="text" class="form-control" id="inputDiploma" aria-label="Username"
                        aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
                </div>
                <div class="input-group mb-3 diplomaDiv3">
                    <span class="input-group-text" id="basic-addon1">科系</span>
                    <input type="text" class="form-control" id="inputDiploma" aria-label="Username"
                        aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
                </div>

                <div id="diplomaStatusDiv">
                    <p>學歷狀態</p>
                    <div class="form-check form-check-inline" id="graduateDiv">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="graduate" value="true"
                            v-model="empty">
                        <label class="form-check-label" for="graduate">畢業</label>
                    </div>
                    <div class="form-check form-check-inline" id="droppingOutDiv">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="droppingOut"
                            value="false" v-model="empty">
                        <label class="form-check-label" for="droppingOut">肄業</label>
                    </div>
                </div>

                <div id="japaneseType">
                    <p>日文考試類型</p>
                    <div class="form-check form-check-inline" id="japaneseNoneDiv">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="japaneseNone" value="無"
                            v-model="empty">
                        <label class="form-check-label" for="japaneseNone">無</label>
                    </div>
                    <div class="form-check form-check-inline" id="japaneseType1">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="japaneseJLPT"
                            value="JLPT" v-model="empty">
                        <label class="form-check-label" for="japaneseJLPT">JLPT</label>
                    </div>
                    <div class="form-check form-check-inline" id="japaneseType2">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="japaneseJTEST"
                            value="J-TEST" v-model="empty">
                        <label class="form-check-label" for="japaneseJTEST">J-TEST</label>
                    </div>

                    <p class="japaneseLvFraction">級別/分數</p>
                    <div class="form-check form-check-inline" id="japaneseType3">

                        <input type="text" class="form-control" id="japaneseInput" aria-label="Username"
                            aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
                    </div>
                </div>

                <div id="englishType">
                    <p>英文考試類型</p>
                    <div class="form-check form-check-inline" id="englishNoneDiv">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="englishNone" value="無"
                            v-model="empty">
                        <label class="form-check-label" for="englishNone">無</label>
                    </div>
                    <div class="form-check form-check-inline" id="englishType1">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="englishTOEIC"
                            value="TOEIC" v-model="empty">
                        <label class="form-check-label" for="englishTOEIC">TOEIC</label>
                    </div>
                    <div class="form-check form-check-inline" id="englishType2">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="englishTOELF"
                            value="TOELF" v-model="empty">
                        <label class="form-check-label" for="englishTOELF">TOELF</label>
                    </div>

                    <p class="englishLvFraction">級別/分數</p>
                    <div class="form-check form-check-inline" id="englishType3">

                        <input type="text" class="form-control" id="englishInput" aria-label="Username"
                            aria-describedby="basic-addon1" autocomplete="off" v-model="empty">
                    </div>
                </div>


                <div class="input-group mb-3 studentPersonalInformationInputDiv">
                    <span class="input-group-text" id="basic-addon1">連絡電話</span>
                    <input type="text" class="form-control" id="phone" aria-label="Username" aria-describedby="basic-addon1"
                        autocomplete="off" v-model="empty">
                </div>


                <div class="studentPersonalInformationBtnDiv">
                    <button type="button" class="btn btn-outline-secondary" id="studentPersonalInformationBtn">確認</button>

                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>
<style lang="scss">
.studentPersonalInformationDiv {
    width: 50%;
    height: 900px;
    border-radius: 50px;
    background-color: rgba(129, 188, 227, 0.397);

    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-top: 5px;

    

    #studentPersonalInformationCardImg {
        position: relative;
        top: 30px;

        .studentPersonalInformationImg1 {
            border-radius: 30px;
            max-width: 200px;
            max-height: 200px;
            position: relative;
            left: 70px;
        }

        .studentPersonalInformationImg2 {
            border-radius: 30px;
            max-width: 100px;
            max-height: 150px;
            position: relative;
            left: 130px;
        }

        .studentPersonalInformationImg3 {
            border-radius: 30px;
            max-width: 100px;
            max-height: 150px;
            position: relative;
            left: 36px;
        }

        .studentPersonalInformationImg4 {
            border-radius: 30px;
            max-width: 100px;
            max-height: 150px;
            position: relative;
            left: 25px;
        }

        .studentPersonalInformationImg5 {
            border-radius: 30px;
            max-width: 100px;
            max-height: 150px;
            position: relative;
            left: 12px;
        }
    }

    #studentPersonalInformationCardPadding {

        position: relative;
        top: 40px;

        .studentPersonalInformationId,
        .studentPersonalInformationName,
        .studentPersonalInformationPwd,
        .diplomaDiv1,
        .diplomaDiv2,
        .diplomaDiv3,
        .studentNoteInputDiv,
        .studentPersonalInformationInputDiv {
            width: 80%;
            position: relative;
            left: 80px;
            top: 10px;
        }

        #sex {
            display: flex;
            justify-content: center;
            position: relative;
            right: 215px;
            top: 10px;

            #sexBoy {
                position: relative;
                left: 25px;
            }

            #sexGirl {
                position: relative;
                left: 63px;
            }
        }

        #militaryService {
            display: flex;
            justify-content: center;
            position: relative;
            right: 19.2%;
            top: 10px;

            #militaryServiceYes {
                position: relative;
                left: 25px;
            }

            #militaryServiceNo {
                position: relative;
                left: 30px;
            }

            #militaryServiceNone {
                position: relative;
                left: 40px;
            }
        }

        #age {
            width: 80%;
            position: relative;
            left: 80px;
            top: 10px;

        }

        #diplomaStatusDiv {
            display: flex;
            justify-content: center;
            position: relative;
            right: 182px;
            top: 10px;

            #graduateDiv {
                position: relative;
                left: 51px;
            }

            #droppingOutDiv {
                position: relative;
                left: 67px;
            }
        }

        #japaneseType {
            display: flex;
            justify-content: center;
            position: relative;
            left: 2px;
            top: 10px;

            #japaneseNoneDiv {
                position: relative;
                left: 18px;
            }

            #japaneseType1 {
                position: relative;
                left: 18px;
            }

            #japaneseType2 {
                position: relative;
                left: 32px;
            }

            .japaneseLvFraction {
                position: relative;
                left: 40px;
            }

            #japaneseType3 {
                width: 175px;
                position: relative;
                left: 34px;
                bottom: 6px;
            }

        }

        #englishType {
            display: flex;
            justify-content: center;
            position: relative;
            left: 6px;
            top: 10px;

            #englishNoneDiv {
                position: relative;
                left: 18px;
            }

            #englishType1 {
                position: relative;
                left: 18px;
            }

            #englishType2 {
                position: relative;
                left: 21px;
            }

            .englishLvFraction {
                position: relative;
                left: 30px;
            }

            #englishType3 {
                width: 175px;
                position: relative;
                left: 25px;
                bottom: 5px;
            }
        }

        .studentPersonalInformationBtnDiv {
            position: relative;
            top: 20px;
            display: flex;
            justify-content: center;

        }
    }

}
</style>