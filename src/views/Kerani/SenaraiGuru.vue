<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";

document.title = "Senarai Guru | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="guru1" />
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">SENARAI GURU</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Guru &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Senarai Guru</span
                >
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <!-- Search bar -->
                <div
                    class="font-semibold border-2 border-grey text-sm px-8 py-2 mb-6 rounded-xl w-11/12 flex justify-between items-center"
                >
                    <input
                        type="text"
                        placeholder="Carian Nama Guru..."
                        class="w-full focus:outline-none"
                    />
                    <i class="fa-solid fa-magnifying-glass text-grey"></i>
                </div>

                <!-- Jadual Senarai Guru -->
                <table class="w-11/12 text-center">
                    <tr class="bg-red text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Penuh</th>
                        <th class="font-semibold">E-Mel</th>
                        <th class="font-semibold">Umur</th>
                        <th class="font-semibold">No Kad Pengenalan</th>
                        <th class="font-semibold">No Telefon</th>
                        <th class="font-semibold rounded-r-2xl">Tindakan</th>
                    </tr>

                    <tr
                        class="text-fontgrey text-sm border-b-2"
                        v-for="teacherData in teachers"
                    >
                        <td class="py-3 text-center">
                            {{ teachers.indexOf(teacherData) + 1 }}
                        </td>
                        <td class="font-semibold">
                            {{ teacherData.nameTeacher }}
                        </td>
                        <td class="font-semibold">
                            {{ teacherData.user.email }}
                        </td>
                        <td class="font-semibold">
                            {{ teacherData.ageTeacher }}
                        </td>
                        <td class="font-semibold">
                            {{ teacherData.noICTeacher }}
                        </td>
                        <td class="font-semibold">
                            {{ teacherData.noPhoneTeacher }}
                        </td>
                        <td class="font-semibold">
                            <router-link
                                class="fa-solid fa-pen-to-square text-lg text-black mx-2 cursor-pointer hover:text-red"
                                v-bind:to="
                                    `/kerani/guru/senaraiguru/kemaskiniguru/` +
                                    teacherData.idTeacher
                                "
                            ></router-link>
                            <button
                                type="button"
                                class="fa-regular fa-trash-can text-lg text-black mx-2 cursor-pointer hover:text-red"
                                @click="
                                    toggleConfirmDelete(teacherData.idTeacher)
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
                                    Padam Guru
                                </h1>
                                <p class="font-normal text-xs text-left">
                                    Adakah anda pasti mahu memadamkan data guru
                                    ini?
                                </p>

                                <button
                                    @click="deleteData(teacherData.idTeacher)"
                                    class="bg-red text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                                >
                                    Sahkan
                                </button>
                                <button
                                    @click="toggleConfirmDelete()"
                                    class="text-black py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                                >
                                    Batalkan
                                </button>
                            </div>
                        </dialog>
                        <div
                            class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-20"
                            v-bind:class="{ hidden: !isOpen }"
                        ></div>
                    </tr>
                </table>
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
            teachers: [],
            isOpen: false,
            selectedTeacher: null,
        };
    },
    async mounted() {
        const response = await axios.get(baseAPI + `/api/teachers`);
        this.teachers = response.data;
    },
    methods: {
        toggleConfirmDelete(idTeacher) {
            this.selectedTeacher = idTeacher;
 
            this.isOpen = !this.isOpen;
        },

        async deleteData() {
            await axios
                .delete(baseAPI + `/api/teacher/${this.selectedTeacher}`)

                .then((response) => {
                  
                    this.isOpen = !this.isOpen;
                   
                    this.teachers = this.teachers.filter(
                        (teacher) => teacher.idTeacher !== this.selectedTeacher
                    );
                
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>
