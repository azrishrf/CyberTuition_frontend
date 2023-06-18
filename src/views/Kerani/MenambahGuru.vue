<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="guru2" />
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">MENAMBAH GURU BARU</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Guru &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Menambah Guru Baru</span
                >
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <form
                    class="bg-white m-auto py-1 px-6"
                    v-on:submit.prevent="register()"
                >
                    <!-- Maklumat Diri Pelajar -->
                    <h4 class="text-lg font-semibold mb-4">
                        Maklumat Diri Guru
                    </h4>

                    <div class="flex gap-9 max-md:flex-col">
                        <div class="grow">
                            <!-- Full Name -->
                            <p class="text-sm mb-3">Nama Penuh</p>
                            <input
                                type="text"
                                placeholder="Nama Penuh"
                                name="fullname"
                                v-model="nameTeacher"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- IC Number-->
                            <p class="text-sm mb-3">No Kad Pengenalan</p>
                            <input
                                type="text"
                                placeholder="No Kad Pengenalan"
                                name="noIC"
                                v-model="noICTeacher"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Phone Number -->
                            <p class="text-sm mb-3">No Telefon</p>
                            <input
                                type="text"
                                placeholder="No Telefon"
                                name="noPhone"
                                v-model="noPhoneTeacher"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                        <div class="grow">
                            <!-- Email -->
                            <p class="text-sm mb-3">E-Mel</p>
                            <input
                                type="email"
                                placeholder="E-Mel"
                                name="email"
                                v-model="email"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Birth Date -->
                            <p class="text-sm mb-3">Umur</p>
                            <input
                                type="number"
                                placeholder="Umur"
                                name="umur"
                                v-model="ageTeacher"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                    </div>
                    <!-- Address -->
                    <p class="text-sm mb-3">Alamat Rumah</p>
                    <input
                        type="text"
                        placeholder="Alamat Rumah"
                        name="address"
                        v-model="addressTeacher"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
                    />

                    <!-- Pilihan Subjek -->
                    <h4 class="text-lg font-semibold mb-4">Pilihan Subjek</h4>

                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Bahasa Melayu"
                            v-model="selectedSubjects"
                            id="subjects"
                        />
                        Bahasa Melayu
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="English"
                            v-model="selectedSubjects"
                        />
                        English
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Matematik"
                            v-model="selectedSubjects"
                        />
                        Matematik
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Sains"
                            v-model="selectedSubjects"
                        />
                        Sains
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Sejarah"
                            v-model="selectedSubjects"
                        />
                        Sejarah
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Matematik Tambahan"
                            v-model="selectedSubjects"
                        />
                        Matematik Tambahan
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Fizik"
                            v-model="selectedSubjects"
                        />
                        Fizik
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Kimia"
                            v-model="selectedSubjects"
                        />
                        Kimia
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Biologi"
                            v-model="selectedSubjects"
                        />
                        Biologi
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Prinsip Perakaunan"
                            v-model="selectedSubjects"
                        />
                        Prinsip Perakaunan
                    </label>

                    <SubmitButton
                        type="submit"
                        txt="Sahkan"
                        class="mt-6 px-9"
                    />
                    <!-- <button
                        txt="Batalkan"
                        class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                        @click="redirect()"
                    >
                        Batalkan
                    </button> -->
                </form>
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
            user: [],
            teacher: [],
            subjects: [],
            selectedSubjects: [],
            teacherId: null,
        };
    },
    async mounted() {
        // Fetch all subjects and store them in the `subjects` array
        const response = await axios.get(baseAPI + "/api/subjects");
        this.subjects = response.data;
    },
    methods: {
        async register() {
            const user = {
                email: this.email,
                password: this.noICTeacher,
                role: "Teacher",
            };

            const teacher = {
                nameTeacher: this.nameTeacher,
                noICTeacher: this.noICTeacher,
                noPhoneTeacher: this.noPhoneTeacher,
                ageTeacher: parseInt(this.ageTeacher),
                addressTeacher: this.addressTeacher,
            };

            axios
                .post(baseAPI + "/api/user", user)
                .then((response) => {
                    // Extract the user ID from the response data
                    const userId = response.data.idUser;
                    // Associate the student with the user by setting its idUser field
                    teacher.idUser = userId;
                    // Make the POST request to create the student
                    axios
                        .post(baseAPI + "/api/teacher", teacher)
                        .then((response) => {
                            const teacherId = response.data.idTeacher;
                            // Associate the teacher with the selected subjects
                            this.selectedSubjects.forEach((subjectName) => {
                                const subject = this.subjects.find(
                                    (s) => s.name === subjectName
                                );

                                axios
                                    .put(
                                        baseAPI +
                                            `/api/subject/${subject.idSubject}`,
                                        {
                                            idTeacher: teacherId,
                                        }
                                    )
                                    .catch((error) => {
                                        console.error(
                                            "Error updating subject:",
                                            error
                                        );
                                    });
                            });

                            alert("Register success!");
                        })
                        .catch((error) => {
                            console.error("Error creating teacher:", error);
                        });
                })
                .catch((error) => {
                    console.error("Error creating user:", error);
                });
        },
    },
};
</script>
