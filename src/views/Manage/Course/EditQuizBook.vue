<script>
import Header from "../../../components/Header.vue";

export default {
    components: {

        Header,
    },

    data() {
        return {
            titleText: "題本管理",
            allChapters: "",
            classifyArr: [],
            unitInfo:[],


        };
    },
    methods: {

        goBack() {
            this.$router.push("/manage")
        },
        catchAllChapters() {
            let req = {
                "classify": ""
            }
            fetch("http://localhost:8080/api/get_All_Classify_Chapters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.allChapters = data;
                    this.allChapters.forEach(item => {
                        if (!this.classifyArr.includes(item.classify)) {
                            this.classifyArr.push(item.classify)
                        }
                    })

                })
                .catch(error => console.log(error))
        },
        getUnitAndName(classify, unit){
            let req ={
                "classify":classify,
                "classifyUnit":unit
            }

            fetch("http://localhost:8080/api/get_Chapter_Info" ,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(req)
            }).then( res => res.json())
            .then(data => {
                console.log(data)
                this.unitInfo = data.quizBookChapter
                console.log(this.unitInfo)
            }).catch(error => console.log(error))

        }



    },
    created() {
        this.catchAllChapters();

    },
    updated() {

    }
};
</script>

<template>
    <!-- 此乃新增頁面 -->
    <div class="sticky-footer">

        <Header v-model:secondTitle="titleText" @home="goBack" />

        <div class="contentArea">


            <div class="darkLeft">
                <!-- <h1>已有題本</h1> -->
                <!-- <label for="" v-for="(item, index) in classifyArr" @click="getChaptersInfo(item)">{{ item }}
                    <ol v-show="liShow">
                        <li v-for="elements in chapterInfoArr">{{ elements.classifyUnit }}</li>
                    </ol>
                </label> -->

                <div class="accordion" id="accordionExample">
                    <div class="accordion-item classifyTitle" v-for="(item, index) in classifyArr">

                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button bigItem" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#collapse' + [index]" aria-expanded="true"
                                :aria-controls="'collapse' + [index]" @click="catchAllChapters()">
                                {{ item }}
                            </button>
                        </h2>
                        <div :id="'collapse' + [index]" class="accordion-collapse collapse " aria-labelledby="headingOne"
                            v-for="elements in allChapters" data-bs-parent="#accordionExample">
                            <div class="accordion-body deatilItems" v-show="elements.classify == item">
                                <button type="button" class="btn btn-outline-primary" @click="getUnitAndName(item,elements.classifyUnit)">
                                    {{ elements.classifyUnit }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lightRight" v-show="this.unitInfo.classify !== undefined">
                <p>{{ this.unitInfo.classify }} >> {{ this.unitInfo.classifyUnit }} >> {{ this.unitInfo.unitName }}</p>
            </div>
        </div>



    </div>
</template>

<style lang="scss" scoped>
.contentArea {
    width: 100vw;
    height: 80vh;
    display: flex;

    .darkLeft {
        padding-top: 2%;
        width: 15%;
        height: 100vh;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        border-right: 2px solid rgb(144, 135, 251);

        .accordion{
        
            width: 90%;
            .classifyTitle {
                border: 0;
    
                .accordion-header {
    
    
                    .bigItem {
                        font-size: 24pt;
                        padding: 0;
                        margin-bottom: 10%;
                        color: rgb(19, 2, 149);
                        transition: 0.5s;
                    }
                }
    
    
                .deatilItems {
                    padding: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
    
                }
    
    
            }
        }

        // label {
        //     font-size: 24pt;
        //     color: rgb(250, 250, 250);
        //     transition: 0.5s;

        //     ol {
        //         font-size: 12pt;
        //     }

        //     &:hover {
        //         cursor: pointer;
        //         font-size: 32pt;
        //     }

        // }


    }

    .lightRight {
        width: 85%;
        height: 80vh;
    }
}
</style>
