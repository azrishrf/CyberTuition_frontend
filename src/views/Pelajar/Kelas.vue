<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";

document.title = "Kelas | Pelajar";

// // Kemaskin profil
// async function kemaskiniProfilDiri() {
//     router.push("/pelajar/profil/kemaskiniprofildiri");
// }
// // Ubah Kata Laluan
// async function ubahKataLaluan() {
//     router.push("/pelajar/profil/katalaluan");
// }
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SideBarPelajar linkActive="kelas" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user text-xs"></i>Pelajar
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="my-2 font-semibold text-xl">KELAS</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kelas</span
                >
            </p>

            <!-- Maklumat Kelas -->
            <div class="flex flex-wrap gap-8 py-5">
                <div
                    class="bg-white shadow-login flex gap-6 py-4 px-5 items-center rounded-2xl w-[22rem]"
                    v-for="subjectData in studentData.student_Subject"
                    :key="subjectData.idStudentSubject"
                >
                    <img
                        v-bind:src="
                            '/subjek/' +
                            subjectData.subject.name +
                            '.png'
                        "
                        class="w-20"
                    />
                    <div class="flex flex-col">
                        <label class="font-bold gap-9">
                            {{ subjectData.subject.name }}
                        </label>
                        <!-- Nama Guru -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Nama Guru:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{
                                    subjectData.subject.teacher
                                        ? subjectData.subject.teacher
                                              .nameTeacher
                                        : "null"
                                }}
                            </label>
                        </div>
                        <!-- Hari -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Hari:</label
                            >
                            <label
                                class="font-semibold text-fontgrey text-sm"
                                >{{ subjectData.subject.day }}</label
                            >
                        </div>
                        <!-- Masa -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Masa:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{ subjectData.subject.time }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            studentData: "",
            subjects: "",
            studentId: "",
        };
    },

    async mounted() {
        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.studentId = response.data.student.idStudent;
            axios
                .get(baseAPI + `/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    console.log(this.studentData);
                });
        });
    },
    methods: {},
};
</script>
