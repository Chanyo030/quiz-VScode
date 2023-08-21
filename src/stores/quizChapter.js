import { defineStore } from "pinia";

export default defineStore("quizChapter" ,{
    state:() =>({
        classify:"",
        chNum:"",
        chName:"",
        chQuestionNum:"",
        answer:"",
        quizTime:""
    }),
    getters:{

    },
    actions:{
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
        }
    }
})