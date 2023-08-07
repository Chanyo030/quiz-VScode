// 路由 => 換頁用

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TrainingEnd from "../views/Manage/Course/TrainingEnd.vue";
import AddQuizBook from "../views/Manage/Course/AddQuizBook.vue";

// Manage - 2 個
import ManageLogin from "../views/Manage/ManageLogin.vue";
import Manage from "../views/Manage/Manage.vue";

//HRManagement - 4個
import ManageAdd from "../views/Manage/HRManagement/ManageAdd.vue";
import ManageAddAuthority from "../views/Manage/HRManagement/ManageAddAuthority.vue";
import ManageUpdate from "../views/Manage/HRManagement/ManageUpdate.vue";
import ManageAll from "../views/Manage/HRManagement/ManageAll.vue";

// ManageB - 3個
import ManageB from "../views/Manage/ManagerB/ManageB.vue";
import ManageBAdd from "../views/Manage/ManagerB/ManageBAdd.vue";
import ManageBUpdate from "../views/Manage/ManagerB/ManageBUpdate.vue";

// ManageC - 2個
import ManageC from "../views/Manage/ManagerC/ManageC.vue";
import ManageCUpdate from "../views/Manage/ManagerC/ManageCUpdate.vue";

// Manage/StudentArraris  - 4個
import StudentSignUp from "../views/Manage/StudentAffaris/StudentSignUp.vue";
import StudentUpdate from "../views/Manage/StudentAffaris/StudentUpdate.vue";
import StudentInformation from "../views/Manage/StudentAffaris/StudentInformation.vue";
import StudentResultsAll from "../views/Manage/StudentAffaris/StudentResultsAll.vue";

//Student - 4 個
import StudentLogin from "../views/Student/StudentLogin.vue";
import StudentIndex from "../views/Student/StudentIndex.vue";
import StudentResults from "../views/Student/StudentResults.vue";
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
        // ----- Course ------
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
