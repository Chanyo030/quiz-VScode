<script>

export default {
    data() {
        return {
            ansNums: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            ansInfo:{
                select:"",
                content:""
            },
            addAnsArr:[],

        }
    },
    props: [
        "QandAObject",
    ],
    components: {

    },
    methods:{
        inputAnsArr(){
            
        },
        changeAddType(x){
            
        }
    }
}
</script>

<template>
    <div class="answerArea">
        <div class="topArea">
            <div class="selectInfo" >

                <div class="selectName">
                    <h2>答案內容</h2>
                    <p style="font-size: 16pt; ">選項代號</p>
                    <select name="" id="" style="height: 2rem; width: 5.5rem;">
                        <option value="">請選擇</option>
                        <option :value="item" v-for="item in ansNums">{{ item }}</option>
                    </select>
                </div>
                <div class="selectContent">
                    <p style="font-size: 16pt;">正確答案選項</p>
                    <input type="text" name="" id="">
                    <p style="font-size: 16pt;">選項內容(日)</p>
                    <input type="text" name="" id="">
                    <p style="font-size: 16pt;">選項內容(中)</p>
                    <input type="text" name="" id="">
                </div>
                <div class="selectBtn">
                    <button>新增</button>
                </div>
            </div>
        </div>
        <div class="downArea" >
            <table>
                <tr>
                    <th class="rightBr">選項</th>
                    <th class="rightText">內容</th>
                </tr>
                <tr v-for="item in addAnsArr">
                    <td class="rightBr">{{ item }}</td>
                    <td class="rightText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, nihil?</td>
                </tr>

            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.answerArea {
    width: 90vw;
    height: 80vh;

    .topArea {
        width: 95%;
        height: 40%;
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

            .rightText{
                text-align: center;
                border-bottom: 1px solid black;
            }
        }

    }



}
</style>