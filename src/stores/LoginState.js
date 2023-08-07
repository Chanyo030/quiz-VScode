
import { defineStore } from "pinia";

export default defineStore("LoginState",{
    state:() =>({
        isShow:false,
    }),
    getters:{

    },
    actions:{
        switchModal(){
            this.isShow =  !this.isShow;
        },
    }
})