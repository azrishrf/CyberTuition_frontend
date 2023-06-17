<script setup>
import SidebarGuru from "../../components/SidebarGuru.vue";
import router from "../../router";

document.title = "Profil Diri | Guru";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarGuru linkActive="profil" />

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
            <h1 class="my-2 font-semibold text-xl">PROFIL DIRI</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Profil Diri</span
                >
            </p>

            <!-- Profil Diri -->
            <!-- Maklumat Guru -->
            <div class="shadow-login bg-white py-5 px-11 rounded-2xl my-5">
                <button
                    class="bg-red hover:bg-darkred text-white py-2 px-5 text-xs rounded-2xl font-semibold float-right"
                    @click="kemaskiniProfilDiri()"
                >
                    <i class="fa-solid fa-pen-to-square text-xs"></i>
                    Kemaskini
                </button>
                <div>
                    <h1 class="text-lg font-semibold mt-2 mb-4">
                        Maklumat Diri Guru
                    </h1>
                    <table class="text-sm w-4/5">
                        <tr>
                            <td class="font-semibold pb-3 w-80">Nama Penuh:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ teacherData.nameTeacher }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">E-mel:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ userEmail }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">
                                No Kad Pengenalan:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ teacherData.noICTeacher }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Umur:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ teacherData.ageTeacher }} Tahun
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">No Telefon:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ teacherData.noPhoneTeacher }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Alamat Rumah:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ teacherData.addressTeacher }}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- Ubah kata laluan -->
            <!-- <div
                class="shadow-login bg-white py-4 px-5 rounded-2xl my-6 w-1/2 flex gap-10"
            >
                <div>
                    <h1 class="text-base font-semibold my-2">
                        Ubah Kata Laluan
                    </h1>
                    <p class="text-fontgrey font-medium text-sm mt-2 mb-4">
                        Untuk melindungi akaun anda, pastikan anda menggunakan
                        kata laluan yang kukuh.
                    </p>
                    <button
                        class="bg-red text-white py-2 px-5 text-xs rounded-2xl font-semibold"
                        @click="ubahKataLaluan()"
                    >
                        Tekan disini
                    </button>
                </div>
                <div>
                    <img src="../../../assets/password.png" class="w-48" />
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));

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
        axios.get(`http://localhost:3001/api/user/${user}`).then((response) => {
            this.teacherId = response.data.teacher.idTeacher;
            this.userEmail = response.data.email;

            axios
                .get(`http://localhost:3001/api/teacher/${this.teacherId}`)
                .then((response) => {
                    this.teacherData = response.data;
                });
        });
    },

    methods: {
        // Kemaskini profil
        async kemaskiniProfilDiri() {
            router.push("/guru/profil/kemaskini");
        },
    },
};
</script>
