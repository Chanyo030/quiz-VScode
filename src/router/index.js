// 路由 => 換頁用

import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import StudentLogin from "../views/StudentLogin.vue";
import ManageLogin from "../views/ManageLogin.vue";
import ManageAdd from "../views/ManageAdd.vue";
import ManageBAdd from "../views/ManageBAdd.vue";
import ManageUpdate from "../views/ManageUpdate.vue";
import StudentIndex from "../views/StudentIndex.vue";
import Manage from "../views/Manage.vue";
import StudentSignUp from "../views/StudentSignUp.vue";
import StudentUpdate from "../views/StudentUpdate.vue";
import StudentInformation from "../views/StudentInformation.vue";
import StudentResults from "../views/StudentResults.vue";
import ManageAll from "../views/ManageAll.vue";
import ManageAddAuthority from "../views/ManageAddAuthority.vue";
import StudentResultsAll from "../views/StudentResultsAll.vue";
import ManageB from "../views/ManageB.vue";
import ManageBUpdate from "../views/ManageBUpdate.vue";
import ManageC from "../views/ManageC.vue";
import ManageCUpdate from "../views/ManageCUpdate.vue";
import TrainingEnd from "../views/TrainingEnd.vue";
import StudentPersonalInformation from "../views/StudentPersonalInformation.vue";
import AddQuizBook from "../views/AddQuizBook.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/studentLogin',
            name: 'studentLogin',
            component: StudentLogin
        },
        {
            path: '/manageLogin',
            name: 'manageLogin',
            component: ManageLogin
        },
        {
            path: '/manageAdd',
            name: 'manageAdd',
            component: ManageAdd
        },
        {
            path: '/manageBAdd',
            name: 'manageBAdd',
            component: ManageBAdd
        },
        {
            path: '/manageUpdate',
            name: 'manageUpdate',
            component: ManageUpdate
        },
        {
            path: '/studentIndex',
            name: 'studentIndex',
            component: StudentIndex,
            children: [
                {
                    path: "purple",
                    component: () => import("../components/Purple.vue")
                },
                {
                    path: "black",
                    component: () => import("../components/Black.vue")
                }
            ]
        },
        {
            path: '/manage',
            name: 'manage',
            component: Manage,
            children: [
                {
                    path: "tainan",
                    component: () => import("../components/Tainan.vue")
                },
                {
                    path: "kaohsiung",
                    component: () => import("../components/Kaohsiung.vue")
                }
            ]
        },
        {
            path: '/studentSignUp',
            name: 'studentSignUp',
            component: StudentSignUp
        },
        {
            path: '/studentPersonalInformation',
            name: 'studentPersonalInformation',
            component: StudentPersonalInformation
        },
        {
            path: '/studentUpdate',
            name: 'studentUpdate',
            component: StudentUpdate
        },
        {
            path: '/studentInformation',
            name: 'studentInformation',
            component: StudentInformation,
            children: [
                {
                    path: "studentTainan",
                    component: () => import("../components/StudentTainan.vue")
                },
                {
                    path: "studentKaohsiung",
                    component: () => import("../components/StudentKaohsiung.vue")
                }
            ]
        },
        {
            path: '/studentResults',
            name: 'studentResults',
            component: StudentResults,
            children: [
                {
                    path: "studentResultsPurpleTable",
                    component: () => import("../components/StudentResultsPurpleTable.vue")
                },
                {
                    path: "studentResultsBlackTable",
                    component: () => import("../components/StudentResultsBlackTable.vue")
                }
            ]
        },
        {
            path: '/manageAll',
            name: 'manageAll',
            component: ManageAll
        },
        {
            path: '/manageAddAuthority',
            name: 'manageAddAuthority',
            component: ManageAddAuthority
        },
        {
            path: '/studentResultsAll',
            name: 'studentResultsAll',
            component: StudentResultsAll,
            children: [
                {
                    path: "kaohsiungStudentResultsAll",
                    component: () => import("../components/KaohsiungStudentResultsAll.vue")
                },
                {
                    path: "tainanStudentResultsAll",
                    component: () => import("../components/TainanStudentResultsAll.vue")
                }
            ]
        },
        {
            path: '/manageB',
            name: 'manageB',
            component: ManageB,
            children: [
                {
                    path: "tainanB",
                    component: () => import("../components/TainanB.vue")
                },
                {
                    path: "kaohsiungB",
                    component: () => import("../components/KaohsiungB.vue")
                }
            ]
        },
        {
            path: '/manageBUpdate',
            name: 'manageBUpdate',
            component: ManageBUpdate
        },
        {
            path: '/manageC',
            name: 'manageC',
            component: ManageC,
            children: [
                {
                    path: "tainanC",
                    component: () => import("../components/TainanC.vue")
                },
                {
                    path: "kaohsiungC",
                    component: () => import("../components/KaohsiungC.vue")
                }
            ]
        },
        {
            path: '/manageCUpdate',
            name: 'manageCUpdate',
            component: ManageCUpdate
        },
        {
            path: '/trainingEnd',
            name: 'trainingEnd',
            component: TrainingEnd
        },
        {
            path: '/studentPersonalInformation',
            name: 'studentPersonalInformation',
            component: StudentPersonalInformation
        },
        {
            path: '/addQuizBook',
            name: 'addQuizBook',
            component: AddQuizBook
        }

    ]
})

export default router
