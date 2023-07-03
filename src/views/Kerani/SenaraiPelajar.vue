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
            <!-- Loading -->
            <div
                class="fixed inset-0 flex items-center justify-center z-50"
                v-if="loading"
            >
                <Loading />
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
                        v-model="searchQuery"
                    />
                    <i class="fa-solid fa-magnifying-glass text-grey"></i>
                </div>

                <!-- Jadual Senarai Pelajar -->
                <table class="text-center">
                    <tr class="bg-red text-sm text-white">
                        <th
                            class="font-semibold py-2 px-2 rounded-l-2xl"
                            style="width: 3rem"
                        >
                            No
                        </th>
                        <th class="font-semibold" style="width: 25rem">
                            Nama Penuh
                        </th>
                        <th class="font-semibold" style="width: 13rem">
                            E-Mel
                        </th>
                        <th class="font-semibold" style="width: 10rem">
                            Tingkatan
                        </th>
                        <th class="font-semibold" style="width: 15rem">
                            No Kad Pengenalan
                        </th>
                        <th
                            class="font-semibold rounded-r-2xl"
                            style="width: 8rem"
                        >
                            Tindakan
                        </th>
                    </tr>

                    <tr
                        class="text-fontgrey text-sm border-b-2"
                        v-for="(studentData, index) in displayedStudents"
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

                        <!-- Dialog delete student -->
                        <div
                            v-if="isOpen"
                            class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-10"
                        >
                            <div
                                class="w-2/6 bg-white px-3 py-4 top-1/3 rounded-xl"
                            >
                                <div>
                                    <i
                                        class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                                    ></i>

                                    <h1
                                        class="font-semibold text-base text-left"
                                    >
                                        Memadam Data Pelajar
                                    </h1>
                                    <p class="font-normal text-xs text-left">
                                        Adakah anda pasti mahu memadamkan data
                                        pelajar ini?
                                    </p>

                                    <button
                                        @click="
                                            deleteData(studentData.idStudent)
                                        "
                                        class="bg-red hover:bg-darkred text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                                    >
                                        Sahkan
                                    </button>
                                    <button
                                        @click="isOpen = false"
                                        class="text-black hover:bg-slate-300 py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                                    >
                                        Batalkan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </tr>
                </table>
            </div>

            <!-- Display text if student not available -->
            <!-- <div
                class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login"
                v-else
            >
                <p class="text-center text-red font-semibold">
                    Tiada data pelajar yang sudah berdaftar
                </p>
            </div> -->

            <!-- Pagination controls -->
            <div
                class="flex justify-center items-center text-sm mt-4 font-semibold text-fontgrey"
            >
                <button
                    class="px-2 py-1 rounded-full w-7 bg-red mr-2 text-white hover:bg-darkred"
                    @click="previousPage"
                    :disabled="currentPage === 1"
                >
                    <i
                        class="fa-solid fa-angle-left"
                        style="color: #ffffff"
                    ></i>
                </button>
                <span class="px-2 py-1 rounded bg-gray-200">
                    Page {{ currentPage }} of {{ totalPages }}
                </span>
                <button
                    class="px-2 rounded-full py-1 w-7 bg-red ml-2 text-white hover:bg-darkred"
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                >
                    <i
                        class="fa-solid fa-angle-right"
                        style="color: #ffffff"
                    ></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { baseAPI } from "../../stores";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import Loading from "../../components/Loading.vue";

export default {
    components: {
        SidebarDashboard,
        Loading,
    },
    data() {
        return {
            students: [],
            filteredStudents: [],
            isOpen: false,
            selectedStudent: null,
            currentPage: 1,
            pageSize: 10,
            searchQuery: "",
            loading: false,
        };
    },
    async mounted() {
        this.loading = true;
        const response = await axios.get(baseAPI + `/api/students_registered`);
        this.students = response.data;
        this.filteredStudents = response.data;
        this.currentPage = 1;
        this.loading = false;
    },
    computed: {
        displayedStudents() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.filteredStudents.slice(startIndex, endIndex);
            // return this.filteredStudents.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.students.length / this.pageSize);
        },
    },
    watch: {
        searchQuery: function (newQuery) {
            this.filterStudents(newQuery);
        },
    },
    methods: {
        // toggle confirm delete student
        toggleConfirmDelete(idStudent) {
            document.title = "Senarai Pelajar | Kerani";
            this.selectedStudent = idStudent;
            this.isOpen = true;
        },
        goToPage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.currentPage = pageNumber;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        filterStudents() {
            if (this.searchQuery === "") {
                this.filteredStudents = this.students;
            } else {
                const searchQuery = this.searchQuery.toLowerCase();
                this.filteredStudents = this.students.filter((studentData) => {
                    const studentName = studentData.nameStudent.toLowerCase();
                    return studentName.includes(searchQuery);
                });
            }
        },
        // Delete data
        async deleteData() {
            this.loading = true;
            await axios
                .delete(baseAPI + `/api/student/${this.selectedStudent}`)

                .then((response) => {
                    this.isOpen = !this.isOpen;
                    this.filteredStudents = this.filteredStudents.filter(
                        (student) => student.idStudent !== this.selectedStudent
                    );
                    this.loading = false;
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>
