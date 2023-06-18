<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";

document.title = "Profil Diri | Pelajar";

// Kemaskin profil
async function kemaskiniProfilDiri() {
    router.push("/pelajar/profil/kemaskiniprofildiri");
}
// Ubah Kata Laluan
async function ubahKataLaluan() {
    router.push("/pelajar/profil/katalaluan");
}
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SideBarPelajar linkActive="profil" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user text-xs"></i>Pelajar
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
            <!-- Maklumat Pelajar -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <button
                    class="bg-red hover:bg-darkred text-white py-2 px-5 text-xs rounded-2xl font-semibold float-right"
                    @click="kemaskiniProfilDiri()"
                >
                    <i class="fa-solid fa-pen-to-square text-xs"></i>
                    Kemaskini
                </button>
                <div v-if="studentData">
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
                            <td class="font-semibold pb-2">
                                No Kad Pengenalan:
                            </td>
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

                <div v-if="userData">
                    <h1 class="text-base font-semibold mt-7 mb-2">
                        Maklumat Ibu Bapa
                    </h1>
                    <table class="text-sm w-5/12">
                        <tr>
                            <td class="font-semibold pb-2">Nama Penuh:</td>
                            <td class="text-fontgrey font-medium">
                                {{ studentData.nameParent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">
                                No Kad Pengenalan
                            </td>
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
                <!-- Maklumat Ibu Bapa -->
            </div>
            <!-- Ubah kata laluan -->
            <div
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
                        class="bg-red hover:bg-darkred text-white py-2 px-5 text-xs rounded-2xl font-semibold"
                        @click="ubahKataLaluan()"
                    >
                        Tekan disini
                    </button>
                </div>
                <div>
                    <img src="../../../assets/password.png" class="w-48" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            studentData: "",
            userEmail: "",
            studentId: "",
        };
    },

    async mounted() {
        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.studentId = response.data.student.idStudent;

            axios
                .get(`http://localhost:3001/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                });
        });

        // Get Student email from user table
        axios
            .get(baseAPI + `/api/user/${user}`)
            .then((response) => {
                this.userEmail = response.data.email;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>
