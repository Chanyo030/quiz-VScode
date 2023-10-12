<script>

export default {
    data() {
        return {
            ansCode: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            //          欲新增的選項，包含代號及內容
            select: "",
            jpContent: "",
            ChContent: "",
            //          把新增的選項轉為字串後都進來
            addAnsArr: [],
            inputQandA: [],

        }
    },
    props: [
        "QandAObject",
    ],
    components: {

    },
    methods: {
        inputAnsArr() {
            let ansInfo = {
                "select": this.select,
                "jpContent": this.jpContent,
                "ChContent": this.ChContent
            }
            this.addAnsArr.push(ansInfo)
            console.log(ansInfo);
            this.inputQandA = [];
            this.addAnsArr.forEach((item, index) => {
                let text = item.select + "," + item.jpContent + "," + item.ChContent
                this.inputQandA.push(text)

            })
            console.log(this.inputQandA)

            this.QandAObject.selectionText = this.inputQandA.join(';');
            console.log(this.QandAObject.selectionText)
        },
    },
    updated() {
    }
}
</script>

<template>
    <div class="answerArea">
        <div class="topArea">
            <div class="selectInfo">

                <div class="selectName">
                    <h2>答案內容</h2>
                    <p style="font-size: 16pt; ">選項代號</p>
                    <select name="" id="" style="height: 2rem; width: 5.5rem;" v-model="this.select">
                        <option value="">請選擇</option>
                        <option :value="item" v-for="item in ansCode">{{ item }}</option>
                    </select>
                </div>

                <div class="selectContent">

                    <p style="font-size: 16pt; margin-bottom: 10px; margin-top: 10px;">選項內容(日)</p>
                    <input type="text" name="" id="" required v-model="this.jpContent">
                    <p style="font-size: 16pt; margin-bottom: 10px;">選項內容(中)</p>
                    <input type="text" name="" id="" required v-model="this.ChContent">
                </div>
                <div class="selectBtn">
                    <button type="submit" @click="inputAnsArr">新增</button>
                </div>

            </div>
        </div>
        <div class="downArea">
            <table>
                <tr>
                    <th class="rightBr">選項</th>
                    <th class="rightText">內容</th>
                </tr>
                <tr v-for="item in addAnsArr">
                    <td class="rightBr">{{ item.select }}</td>
                    <td class="rightText">{{ item.jpContent }} & {{ item.ChContent }}</td>
                </tr>

            </table>
            <div class="btnArea">
                    <button type="button" @click="$emit('backStep1')">
                        <font-awesome-icon :icon="['fas', 'play']" rotation="180" />
                    </button>
                    <button type="button" @click="$emit('goStep3')">
                        <font-awesome-icon :icon="['fas', 'play']" />
                    </button>
                </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.answerArea {
    width: 90vw;
    height: 80vh;

    .topArea {
        width: 95%;
        height: 35%;
        // border: 1px solid black;

        .selectInfo {
            width: 100%;
            display: flex;
            justify-content: space-around;

            .selectName {
                width: 20%;
            }

            .selectContent {
                width: 60%;

                input {
                    width: 100%;
                }
            }

            .selectBtn {
                width: 20%;
                display: flex;
                justify-content: center;
                align-items: center;

                button {
                    width: 100px;
                    height: 50px;
                    background-color: #b0eaff;
                    color: #0059c6;
                    font-size: 16pt;
                    transition: 0.5s;
                    border: none;

                    &:hover {
                        width: 150px;
                        height: 75px;
                        font-size: 24pt;
                        background-color: #6f7b9e;
                        color: #ffffff;
                    }
                }
            }
        }

    }

    .downArea {
        width: 95%;
        height: 60%;
        padding-top: 1%;

        table {
            width: 100%;
            height: 90%;
            border: 1px solid black;

            .rightBr {
                text-align: center;
                border-right: 3px solid black;
                border-bottom: 1px solid black;
            }

            .rightText {
                text-align: center;
                border-bottom: 1px solid black;
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



}
</style>