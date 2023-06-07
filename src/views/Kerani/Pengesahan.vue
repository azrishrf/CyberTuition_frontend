<script setup>
import { ref } from "vue";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import { onMounted } from "vue";
import router from "../../router";
import { pengesahan } from "../../stores/index";

document.title = "Pengesahan | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="pelajar2" />
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">
                PENGESAHAN PENDAFTARAN PELAJAR BARU
            </h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Pelajar &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Pengesahan</span
                >
            </p>
            <!-- Content -->
            <div
                class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login"
                v-if="students.length > 0"
            >
                <!-- Search bar -->
                <div
                    class="font-semibold border-2 border-grey text-sm px-8 py-2 mb-6 rounded-xl w-11/12 flex justify-between items-center"
                >
                    <input
                        type="text"
                        placeholder="Carian Nama Pelajar..."
                        class="w-full focus:outline-none"
                    />
                    <i class="fa-solid fa-magnifying-glass text-grey"></i>
                </div>

                <!-- Jadual Senarai Pelajar -->
                <table class="w-11/12 text-center">
                    <tr class="bg-red text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Penuh</th>
                        <th class="font-semibold">E-Mel</th>
                        <th class="font-semibold">Tingkatan</th>
                        <th class="font-semibold">No Kad Pengenalan</th>
                        <th class="font-semibold">Tarikh Lahir</th>
                        <th class="font-semibold rounded-r-2xl">Tindakan</th>
                    </tr>

                    <tr
                        class="text-fontgrey text-sm border-b-2"
                        v-for="studentData in students"
                    >
                        <td class="py-3 text-center">
                            {{ students.indexOf(studentData) + 1 }}
                        </td>
                        <td class="font-semibold">
                            {{ studentData.nameStudent }}
                        </td>
                        <td class="font-semibold">
                            {{ studentData.user.email }}
                        </td>
                        <td class="font-semibold">
                            {{ studentData.form }}
                        </td>
                        <td class="font-semibold">
                            {{ studentData.noICStudent }}
                        </td>
                        <td class="font-semibold">
                            {{ formatDate(studentData.dateOfBirth) }}
                        </td>
                        <td
                            class="font-semibold py-3 flex items-center justify-center"
                        >
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                                @click="lihatButiran(studentData.idStudent)"
                            >
                                quick_reference_all
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Display text if student not available -->
            <div
                class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login"
                v-else
            >
                <p class="text-center text-red font-semibold">
                    Tiada sebarang pengesahan pelajar pada masa ini
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            students: [],
            isOpen: false,
            selectedStudent: null,
        };
    },
    async mounted() {
        const response = await axios.get(
            `http://localhost:3001/api/students_notregistered`
        );
        this.students = response.data;
    },
    methods: {
        async lihatButiran(id) {
            const response = await axios.get(
                `http://localhost:3001/api/student/${id}`
            );
            pengesahan.value = response;
            router.push("/kerani/pelajar/pengesahan/maklumatpengesahan");
        },
        // format date
        formatDate(dateString) {
            const parts = dateString.split("-"); // Split the date string by "-"
            const day = parts[2];
            const month = parts[1];
            const year = parts[0];

            return `${day}/${month}/${year}`;
        },
    },
};
</script>
