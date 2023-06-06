<script setup>
import router from "../../router";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";
document.title = "Kemaskini Kelas | Kerani";
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">KEMASKINI KELAS</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Kelas &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kemaskini Kelas</span
                >
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <form
                    class="bg-white m-auto py-1 px-6"
                    v-on:submit.prevent="updateSubject()"
                >
                    <!-- Maklumat Diri Pelajar -->
                    <h4 class="text-lg font-semibold mb-4">Maklumat Kelas</h4>

                    <div class="flex gap-9 max-md:flex-col">
                        <div class="grow">
                            <!-- Full Name -->
                            <p class="text-sm mb-3">Nama Kelas</p>
                            <input
                                type="text"
                                placeholder="Nama Kelas"
                                name="namaKelas"
                                v-model="subjectData.name"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- INama Guru-->
                            <p class="text-sm mb-3">Nama Guru</p>
                            <select
                                name="namaGuru"
                                v-model="teacherData.nameTeacher"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            >
                                <option disabled value="">
                                    -- Pilih Guru --
                                </option>
                                <option
                                    v-for="teacher in teachers"
                                    :key="teacher.idTeacher"
                                    :value="teacher.nameTeacher"
                                >
                                    {{ teacher.nameTeacher }}
                                </option>
                            </select>
                        </div>
                        <div class="grow">
                            <!-- Hari-->
                            <p class="text-sm mb-3">Hari</p>
                            <select
                                name="hari"
                                v-model="subjectData.day"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            >
                                <option disabled value="">
                                    -- Pilih Hari --
                                </option>
                                <option value="Isnin">Isnin</option>
                                <option value="Selasa">Selasa</option>
                                <option value="Rabu">Rabu</option>
                                <option value="Khamis">Khamis</option>
                                <option value="Jumaat">Jumaat</option>
                                <option value="Sabtu">Sabtu</option>
                                <option value="Ahad">Ahad</option>
                            </select>
                            <!-- Masa -->
                            <p class="text-sm mb-3">Masa</p>
                            <select
                                name="masa"
                                v-model="subjectData.time"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            >
                                <option disabled value="">
                                    -- Pilih Masa --
                                </option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="8:00 PM">8:00 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                            </select>
                        </div>
                    </div>

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
