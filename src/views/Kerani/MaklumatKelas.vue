<script setup>
import router from "../../router";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";
document.title = "Maklumat Kelas | Kerani";
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
                    class="flex items-center justify-between bg-red w-32 text-white text-sm px-5 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user"></i>Kerani
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="mt-3 mb-2 font-semibold text-xl">MAKLUMAT SUBJEK</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Subjek &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Maklumat Subjek</span
                >
            </p>
            <!-- Maklumat Kelas Router -->
            <RouterView />

            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <h1 class="text-lg font-semibold mb-4">Senarai Pelajar</h1>

                <!-- Jadual Senarai Pelajar -->
                <table class="w-11/12 text-center">
                    <tr class="bg-red text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Penuh</th>

                        <th class="font-semibold">Tingkatan</th>

                        <th class="font-semibold rounded-r-2xl">
                            No Kad Pengenalan
                        </th>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">1</td>
                        <td class="font-semibold">
                            Muhammad Azri Ishraf Bin Harun
                        </td>

                        <td class="font-semibold">5</td>
                        <td class="font-semibold">010424101067</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            subjectData: {},
            idSubject: router.currentRoute.value.params.id,
            teacherData: {},
            teachers: [],
        };
    },

    async mounted() {
        const response = await axios.get(
            `http://localhost:3001/api/subject/${this.idSubject}`
        );
        this.subjectData = response.data;
        if (this.subjectData && this.subjectData.teacher) {
            this.teacherData = this.subjectData.teacher;
        } else {
            this.teacherData = { nameTeacher: "" }; // Set a default value when teacherData is undefined or null
        }

        // get all teachers
        const responseTeacher = await axios.get(
            `http://localhost:3001/api/teachers`
        );
        this.teachers = responseTeacher.data;
    },
    methods: {
        async updateSubject() {
            const response = await axios.get(
                `http://localhost:3001/api/teacher/id/${this.teacherData.nameTeacher}`
            );
            const teacherId = response.data;

            const updatedSubject = {
                name: this.subjectData.name,
                time: this.subjectData.time,
                day: this.subjectData.day,
                idTeacher: teacherId, // Add this line
            };

            await axios.put(
                `http://localhost:3001/api/subject/${this.subjectData.idSubject}`,
                updatedSubject
            );

            alert("Subject updated successfully!");
            router.push("/kerani/kelas");
        },
    },
};
</script>
