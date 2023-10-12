
import { defineStore } from "pinia";

export default defineStore("LoginState",{
    state:() =>({
        isShow:false,
        showStudentName:"",
        showStudentId:"",
        showStudentInfo:{},
    }),
    getters:{

    },
    actions:{
        switchModal(){
            this.isShow =  !this.isShow;
        },
        getStudentInfo(id){
            let req={
                "studentId":id,
            } 
            fetch("http://localhost:8080/api/get_student_info", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                this.showStudentName = data.studentInfo.studentName;
                this.showStudentId = data.studentInfo.studentId;
                this.showStudentInfo = data.studentInfo;
            })
            .catch(error => console.log(error))
        }
    }
})