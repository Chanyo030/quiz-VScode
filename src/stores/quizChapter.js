import { defineStore } from "pinia";

export default defineStore("quizChapter" ,{
    state:() =>({
//      學生考試頁面需求元素
        classify:"",
        chNum:"",
        chName:"",
        chQuestionNum:"",
        answer:"",
        quizTime:"",
//      題目新增與管理
        allChapters: "",
        classifyArr: [],
        classifyChapters:[],
        chapterQuestionNums:[],
    }),
    getters:{

    },
    actions:{
//      取得該題本章節詳細資訊(用於學生點選考試章節時)
        getQuizInfo(color,step){
            let req ={
                "classify":color,
                "classifyUnit":step
            }
            console.log(req)
            fetch("http://localhost:8080/api/get_Chapter_Info" ,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(req)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.classify = data.quizBookChapter.classify
                this.chNum = data.quizBookChapter.classifyUnit
                this.chName = data.quizBookChapter.unitName
                this.chQuestionNum = data.quizBookChapter.totalNum
            })
            .catch(error => console.log(error))
        },
//      取得所有題本與該題本章節
        allQuizChaptersFun() {
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
//      取得該題本的所有章節
        classifyAllCh(classify){
            let req = {
                "classify": classify
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
                    this.classifyChapters = data;

                })
                .catch(error => console.log(error))
        },
        getUnitQuestionNums(Unit){
            let req={
                "classify-unit":Unit
            }
            fetch("http://localhost:8080/api/get_question_Nums",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(req)
            })
            .then(res => res.json())
            .then(data => {
                this.chapterQuestionNums = data.questionAndAnswers;
            })
            .catch(error => console.log(error))
        }
    }
})