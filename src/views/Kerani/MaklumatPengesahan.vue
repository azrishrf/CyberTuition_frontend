<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import router from "../../router";

document.title = "Maklumat Pengesahan | Kerani";
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
                MAKLUMAT PENGESAHAN PELAJAR BARU
            </h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Pelajar &nbsp;> &nbsp; Pengesahan
                &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Maklumat Pengesahan</span
                >
            </p>
            <!-- Profil Diri -->
            <!-- Maklumat Pelajar -->
            <div
                class="shadow-login bg-white py-4 px-5 rounded-2xl my-5"
                v-if="studentData"
            >
                <h1 class="text-base font-semibold my-2">
                    Maklumat Diri Pelajar
                </h1>
                <table class="text-sm w-4/5">
                    <tr>
                        <td class="font-semibold pb-2">Nama Penuh:</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.nameStudent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-2">E-mel:</td>
                        <td class="text-fontgrey font-medium">
                            {{ userEmail }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-2">No Kad Pengenalan:</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.noICStudent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-2">Tarikh Lahir:</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.dateOfBirth }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-2">Tingkatan:</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.form }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-2">No Telefon:</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.noPhoneStudent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-2">Alamat Rumah:</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.address }}
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Maklumat Ibu Bapa -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <h1 class="text-base font-semibold my-2">Maklumat Ibu Bapa</h1>
                <table class="text-sm w-5/12">
                    <tr>
                        <td class="font-semibold pb-2">Nama Penuh:</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.nameParent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-2">No Kad Pengenalan</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.noICParent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-2">No Telefon</td>
                        <td class="text-fontgrey font-medium">
                            {{ studentData.noPhoneParent }}
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Maklumat Kelas -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <h1 class="text-base font-semibold my-3">
                    Subjek Yang Dipilih
                </h1>
                <ul class="text-sm">
                    <li
                        v-for="subject in studentData.student_Subject"
                        :key="subject.idStudentSubject"
                        class="text-fontgrey font-medium mb-3"
                    >
                        &bull; {{ subject.subject.name }}
                    </li>
                </ul>
            </div>
            <div class="flex flex-row justify-center space-x-10">
                <button
                    txt="Setuju"
                    class="bg-green text-white px-9 py-3 rounded-2xl hover:bg-cyan-700 text-sm font-bold"
                    @click="sahkanPendaftaran(studentData.idStudent)"
                >
                    Setuju
                </button>
                <button
                    txt="Batalkan"
                    class="bg-red text-white px-9 py-3 rounded-2xl hover:bg-rose-800 text-sm font-bold"
                    @click="batalkanPendaftaran(studentData.idStudent)"
                >
                    Batalkan
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { pengesahan } from "../../stores/index";

export default {
    data() {
        return {
            studentData: "",
            userEmail: "",
            studentId: "",
        };
    },

    async mounted() {
        console.log(this.pengesahan.data.idUser);

        // Get Student Data
        axios
            .get(
                `http://localhost:3001/api/user/${this.pengesahan.data.idUser}`
            )
            .then((response) => {
                this.studentId = response.data.student.idStudent;
                axios
                    .get(`http://localhost:3001/api/student/${this.studentId}`)
                    .then((response) => {
                        this.studentData = response.data;
                        console.log(this.studentData);
                    });
            });
        // console.log(this.studentData);

        // Get Student email from user table
        axios
            .get(
                `http://localhost:3001/api/user/${this.pengesahan.data.idUser}`
            )
            .then((response) => {
                this.userEmail = response.data.email;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        // Sahkan pendaftaran pelajar
        async sahkanPendaftaran(idStudent) {
            try {
                const updatedStudent = {
                    isRegistered: true,
                };
                await axios.put(
                    `http://localhost:3001/api/student/${idStudent}`,
                    updatedStudent
                );
                router.push("/kerani/pelajar/pengesahan");
            } catch (error) {
                return { error: error.message };
            }
        },
        // Batalkan pendaftaran pelajar
        async batalkanPendaftaran(idStudent) {
            try {
                await axios.delete(
                    `http://localhost:3001/api/student/${idStudent}`
                );
                router.push("/kerani/pelajar/pengesahan");
            } catch (error) {
                return { error: error.message };
            }
        },
    },
};
</script>
