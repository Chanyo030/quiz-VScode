// 路由 => 換頁用

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TrainingEnd from "../views/TrainingEnd.vue";
import AddQuizBook from "../views/AddQuizBook.vue";

// Manage - 11 個
import ManageLogin from "../views/Manage/ManageLogin.vue";
import ManageAdd from "../views/Manage/ManageAdd.vue";
import ManageUpdate from "../views/Manage/ManageUpdate.vue";
import Manage from "../views/Manage/Manage.vue";
import ManageAll from "../views/Manage/ManageAll.vue";
import ManageAddAuthority from "../views/Manage/ManageAddAuthority.vue";
// ManageB
import ManageB from "../views/Manage/ManageB.vue";
import ManageBAdd from "../views/Manage/ManageBAdd.vue";
import ManageBUpdate from "../views/Manage/ManageBUpdate.vue";
// ManageC
import ManageC from "../views/Manage/ManageC.vue";
import ManageCUpdate from "../views/Manage/ManageCUpdate.vue";

//Student - 8 個
import StudentLogin from "../views/Student/StudentLogin.vue";
import StudentIndex from "../views/Student/StudentIndex.vue";
import StudentSignUp from "../views/Student/StudentSignUp.vue";
import StudentUpdate from "../views/Student/StudentUpdate.vue";
import StudentInformation from "../views/Student/StudentInformation.vue";
import StudentResults from "../views/Student/StudentResults.vue";
import StudentResultsAll from "../views/Student/StudentResultsAll.vue";
import StudentPersonalInformation from "../views/Student/StudentPersonalInformation.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        // 登入
        {
            path: "/studentLogin",
            name: "studentLogin",
            component: StudentLogin,
        },
        {
            path: "/manageLogin",
            name: "manageLogin",
            component: ManageLogin,
        },
        // ---------Manage----------------
        // A, Add
        {
            path: "/manageAdd",
            name: "manageAdd",
            component: ManageAdd,
        },
        
         // A, Update
        {
            path: "/manageUpdate",
            name: "manageUpdate",
            component: ManageUpdate,
        },
        // A, Tainan、Kaohsiung
        {
            path: "/manage",
            name: "manage",
            component: Manage,
            children: [
                {
                    path: "tainan",
                    component: () => import("../components/ManageCourse/Tainan.vue"),
                },
                {
                    path: "kaohsiung",
                    component: () => import("../components/ManageCourse/Kaohsiung.vue"),
                },
            ],
        },
        // manageAll
        {
            path: "/manageAll",
            name: "manageAll",
            component: ManageAll,
        },
        // AddAuthority
        {
            path: "/manageAddAuthority",
            name: "manageAddAuthority",
            component: ManageAddAuthority,
        },
        // B, TainanB、KaohsiungB
        {
            path: "/manageB",
            name: "manageB",
            component: ManageB,
            children: [
                {
                    path: "tainanB",
                    component: () => import("../components/ManageCourse/TainanB.vue"),
                },
                {
                    path: "kaohsiungB",
                    component: () => import("../components/ManageCourse/KaohsiungB.vue"),
                },
            ],
        },
        // B, Update
        {
            path: "/manageBUpdate",
            name: "manageBUpdate",
            component: ManageBUpdate,
        },
         // B, Add
        {
            path: "/manageBAdd",
            name: "manageBAdd",
            component: ManageBAdd,
        },
        // C & TainanC、KaohsiungC
        {
            path: "/manageC",
            name: "manageC",
            component: ManageC,
            children: [
                {
                    path: "tainanC",
                    component: () => import("../components/ManageCourse/TainanC.vue"),
                },
                {
                    path: "kaohsiungC",
                    component: () => import("../components/ManageCourse/KaohsiungC.vue"),
                },
            ],
        },
        // C, Update
        {
            path: "/manageCUpdate",
            name: "manageCUpdate",
            component: ManageCUpdate,
        },
        // ------------ Student ----------------
        // SignUp
        {
            path: "/studentSignUp",
            name: "studentSignUp",
            component: StudentSignUp,
        },
        // Index
        {
            path: "/studentIndex",
            name: "studentIndex",
            component: StudentIndex,
            children: [
                {
                    path: "purple",
                    component: () => import("../components/Mockexam/Purple.vue"),
                },
                {
                    path: "black",
                    component: () => import("../components/Mockexam/Black.vue"),
                },
            ],
        },
        // PersonalInformation
        {
            path: "/studentPersonalInformation",
            name: "studentPersonalInformation",
            component: StudentPersonalInformation,
        },
        // Update
        {
            path: "/studentUpdate",
            name: "studentUpdate",
            component: StudentUpdate,
        },
        // Information
        {
            path: "/studentInformation",
            name: "studentInformation",
            component: StudentInformation,
            children: [
                {
                    path: "studentTainan",
                    component: () => import("../components/Student/StudentTainan.vue"),
                },
                {
                    path: "studentKaohsiung",
                    component: () => import("../components/Student/StudentKaohsiung.vue"),
                },
            ],
        },
        // Results
        {
            path: "/studentResults",
            name: "studentResults",
            component: StudentResults,
            children: [
                {
                    path: "studentResultsPurpleTable",
                    component: () =>
                        import("../components/Student/StudentResultsPurpleTable.vue"),
                },
                {
                    path: "studentResultsBlackTable",
                    component: () =>
                        import("../components/Student/StudentResultsBlackTable.vue"),
                },
            ],
        },
        // ResultsAll
        {
            path: "/studentResultsAll",
            name: "studentResultsAll",
            component: StudentResultsAll,
            children: [
                {
                    path: "kaohsiungStudentResultsAll",
                    component: () =>
                        import("../components/Student/KaohsiungStudentResultsAll.vue"),
                },
                {
                    path: "tainanStudentResultsAll",
                    component: () =>
                        import("../components/Student/TainanStudentResultsAll.vue"),
                },
            ],
        },
        // ----- otherSystem ------
        // trainingEnd
        {
            path: "/trainingEnd",
            name: "trainingEnd",
            component: TrainingEnd,
        },
        // addQuizBook
        {
            path: "/addQuizBook",
            name: "addQuizBook",
            component: AddQuizBook,
        },
    ],
});

export default router;
