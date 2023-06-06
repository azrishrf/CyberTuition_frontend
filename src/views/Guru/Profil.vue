<script setup>
// import { ref } from "vue";
import SidebarGuru from "../../components/SidebarGuru.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";
import KemaskiniPelajar from "../Kerani/KemaskiniPelajar.vue";

document.title = "Profil Diri | Guru";

// Kemaskin profil
async function kemaskiniProfilDiri() {
    router.push("/guru/profil/kemaskini");
}
// Ubah Kata Laluan
async function ubahKataLaluan() {
    router.push("/guru/profil/katalaluan");
}
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
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <button
                    class="bg-red text-white py-2 px-5 text-xs rounded-2xl font-semibold float-right"
                    @click="kemaskiniProfilDiri()"
                >
                    <i class="fa-solid fa-pen-to-square text-xs"></i>
                    Kemaskini
                </button>
                <div>
                    <h1 class="text-base font-semibold my-2">
                        Maklumat Diri Guru
                    </h1>
                    <table class="text-sm w-4/5">
                        <tr>
                            <td class="font-semibold pb-2">Nama Penuh:</td>
                            <td class="text-fontgrey font-medium">
                                Muhammad Hafiz Taufik
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">E-mel:</td>
                            <td class="text-fontgrey font-medium">
                                hafiztau@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">
                                No Kad Pengenalan:
                            </td>
                            <td class="text-fontgrey font-medium">
                                8704241010632
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">Tarikh Lahir:</td>
                            <td class="text-fontgrey font-medium">
                                04/03/1987
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">No Telefon:</td>
                            <td class="text-fontgrey font-medium">
                                01156484550
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">Alamat Rumah:</td>
                            <td class="text-fontgrey font-medium">
                                No.8, Jln SP 3/2 Seri Pristana, 47000 Sungai
                                Buloh, Selangor
                            </td>
                        </tr>
                    </table>
                </div>
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
                        class="bg-red text-white py-2 px-5 text-xs rounded-2xl font-semibold"
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
