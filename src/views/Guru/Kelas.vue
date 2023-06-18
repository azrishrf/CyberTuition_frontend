<script setup>
import SidebarGuru from "../../components/SidebarGuru.vue";
import router from "../../router";

document.title = "Kelas | Guru";

async function lihatMaklumatKelas() {
    router.push("/guru/kelas/maklumatkelas");
}
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarGuru linkActive="kelas" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user text-xs"></i>Guru
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
                    class="bg-white shadow-login flex gap-6 py-4 px-5 items-center rounded-2xl w-[22rem] relative"
                    v-for="subjectData in teacherData.subjects"
                    :key="subjectData.idSubject"
                >
                    <img
                        v-bind:src="'/subjek/' + subjectData.name + '.png'"
                        class="w-20"
                    />
                    <div class="flex flex-col">
                        <label class="font-bold gap-9">
                            {{ subjectData.name }}
                        </label>

                        <!-- Hari -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Hari:</label
                            >
                            <label
                                class="font-semibold text-fontgrey text-sm"
                                >{{ subjectData.day }}</label
                            >
                        </div>
                        <!-- Masa -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Masa:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{ subjectData.time }}
                            </label>
                        </div>
                    </div>
                    <router-link
                        style="
                            font-variation-settings: 'FILL' 0, 'wght' 600,
                                'GRAD' 0, 'opsz' 48;
                        "
                        class="material-symbols-outlined text-xl text-gray-500 cursor-pointer hover:text-red absolute right-4 top-3"
                        v-bind:to="
                            `/guru/kelas/maklumatkelas/` + subjectData.idSubject
                        "
                        >quick_reference_all</router-link
                    >
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
            teacherData: "",
            userEmail: "",
            teacherId: "",
        };
    },

    async mounted() {
        // Get Teacher Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.teacherId = response.data.teacher.idTeacher;

            axios
                .get(baseAPI + `/api/teacher/${this.teacherId}`)
                .then((response) => {
                    this.teacherData = response.data;
                });
        });
    },
};
</script>
