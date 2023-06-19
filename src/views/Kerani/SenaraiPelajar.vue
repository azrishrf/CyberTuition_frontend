<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="pelajar1" />
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">SENARAI PELAJAR</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Pelajar &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Senarai Pelajar</span
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
                        <!-- <th class="font-semibold">Tarikh Lahir</th> -->
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
                        <!-- <td class="font-semibold">
                            {{ formatDate(studentData.dateOfBirth) }}
                        </td> -->
                        <td class="font-semibold">
                            <router-link
                                v-bind:to="
                                    `/kerani/pelajar/senaraipelajar/kemaskinipelajar/` +
                                    studentData.idStudent
                                "
                                class="fa-solid fa-pen-to-square text-lg text-black mx-2 cursor-pointer hover:text-red"
                            >
                            </router-link>
                            <button
                                type="button"
                                class="fa-regular fa-trash-can text-lg text-black mx-2 cursor-pointer hover:text-red"
                                @click="
                                    toggleConfirmDelete(studentData.idStudent)
                                "
                            ></button>
                        </td>
                        <dialog
                            class="z-50 w-2/6 bg-white px-3 pt-4 top-1/3 rounded-xl"
                            v-bind:open="isOpen"
                        >
                            <div>
                                <i
                                    class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                                ></i>

                                <h1 class="font-semibold text-base text-left">
                                    Padam Pelajar
                                </h1>
                                <p class="font-normal text-xs text-left">
                                    Adakah anda pasti mahu memadamkan data
                                    pelajar ini?
                                </p>

                                <button
                                    @click="deleteData(studentData.idStudent)"
                                    class="bg-red text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                                >
                                    Sahkan
                                </button>
                                <button
                                    @click="toggleConfirmDelete"
                                    class="text-black py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                                >
                                    Batalkan
                                </button>
                            </div>
                        </dialog>
                        <div
                            class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"
                            v-bind:class="{ hidden: !isOpen }"
                        ></div>
                    </tr>
                </table>
            </div>
            <!-- Display text if student not available -->
            <div
                class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login"
                v-else
            >
                <p class="text-center text-red font-semibold">
                    Tiada data pelajar yang sudah berdaftar
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { baseAPI } from "../../stores";
import SidebarDashboard from "../../components/SidebarDashboard.vue";

export default {
    data() {
        return {
            students: [],
            isOpen: false,
            selectedStudent: null,
        };
    },
    async mounted() {
        const response = await axios.get(baseAPI + `/api/students_registered`);
        this.students = response.data;
    },
    methods: {
        // toggle confirm delete student
        toggleConfirmDelete(idStudent) {
            document.title = "Senarai Pelajar | Kerani";
            this.selectedStudent = idStudent;
            this.isOpen = !this.isOpen;
        },
        // Delete data
        async deleteData() {
            await axios
                .delete(baseAPI + `/api/student/${this.selectedStudent}`)

                .then((response) => {
                    this.isOpen = !this.isOpen;
                    this.students = this.students.filter(
                        (student) => student.idStudent !== this.selectedStudent
                    );
                })
                .catch((error) => console.log(error));
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
