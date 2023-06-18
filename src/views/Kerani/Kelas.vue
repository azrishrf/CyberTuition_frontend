<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";
document.title = "Kelas | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="kelas" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user text-xs"></i>Kerani
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="mt-3 mb-2 font-semibold text-xl">SENARAI SUBJEK</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp;Subjek</span
                >
            </p>

            <!-- Maklumat Kelas  -->
            <div class="flex flex-wrap gap-8 py-5">
                <div
                    class="bg-white shadow-login flex gap-6 py-4 px-5 items-center rounded-2xl w-[22rem] relative"
                    v-for="subjectData in subjects"
                    :key="subjectData.idSubject"
                >
                    <img
                        v-bind:src="
                            '/subjek/' +
                            subjectData.name +
                            '.png'
                        "
                        class="w-20"
                    />
                    <div class="flex flex-col">
                        <label class="font-bold gap-9">
                            {{ subjectData.name }}
                        </label>
                        <!-- Nama Guru -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Nama Guru:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{
                                    subjectData.teacher
                                        ? subjectData.teacher.nameTeacher
                                        : "N/A"
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
                        class="fa-solid fa-pen-to-square text-base text-gray-500 cursor-pointer hover:text-red absolute right-4 top-2"
                        v-bind:to="
                            `/kerani/kelas/maklumatkelas/` +
                            subjectData.idSubject
                        "
                    ></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            subjects: "",
            isOpen: false,
            selectedSubject: null,
        };
    },
    async mounted() {
        const response = await axios.get(baseAPI + `/api/subjects`);
        this.subjects = response.data;
    },
};
</script>
