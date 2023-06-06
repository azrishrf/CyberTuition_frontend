<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";

document.title = "Dashboard | Pelajar";

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
        <SideBarPelajar linkActive="laporan" />
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
            <h1 class="my-2 font-semibold text-xl">LAPORAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Laporan</span
                >
            </p>

            <!-- Profil Diri -->
            <!-- Maklumat Pelajar -->
            <div class="shadow-login bg-white py-7 px-36 rounded-2xl my-5">
                <div class="text-center">
                    <img
                        src="../../../assets/Logo V1.jpg.png"
                        class="w-60 m-auto"
                    />
                    <h1 class="font-semibold">LAPORAN PELAJAR</h1>
                    <h1 class="font-semibold mb-5">JULAI 2022</h1>
                </div>

                <div class="flex">
                    <!-- 1 -->
                    <div class="grow">
                        <!-- Maklumat Diri -->
                        <div>
                            <h1 class="font-semibold my-2">
                                Maklumat Diri Pelajar
                            </h1>
                            <table class="text-sm w-4/5">
                                <tr>
                                    <td class="font-semibold pb-2 w-3/6">
                                        Nama Penuh:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        Muhammad Azri Ishraf Bin Harun
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">E-mel:</td>
                                    <td class="text-fontgrey font-medium">
                                        ishrafazri@gmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        No Kad Pengenalan:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        010424101067
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Tingkatan:
                                    </td>
                                    <td class="text-fontgrey font-medium">5</td>
                                </tr>
                            </table>
                        </div>
                        <!-- Kedatangan -->
                        <div class="mt-10">
                            <h1 class="font-semibold my-2">Kedatangan</h1>
                            <table class="text-sm w-4/5">
                                <tr>
                                    <td class="font-semibold pb-2 w-3/6">
                                        Jumlah Kelas:
                                    </td>
                                    <td class="text-fontgrey font-medium">7</td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Kelas Hadir:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        6/7
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Peratus Hadir:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        85%
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Kelas Tidak Hadir:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        1/7
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Peratus Tidak Hadir:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        15%
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="grow">
                        <!-- Kelas -->
                        <div>
                            <h1 class="font-semibold my-2">Kelas</h1>
                            <p class="text-sm font-semibold pb-2">
                                - Bahasa Inggeris
                            </p>
                            <p class="text-sm font-semibold pb-2">
                                - Matematik Tambahan
                            </p>
                            <p class="text-sm font-semibold pb-2">
                                - Prinsip Perakaunan
                            </p>
                        </div>
                        <!-- Yuran -->
                        <div class="mt-12">
                            <h1 class="font-semibold my-2">Yuran</h1>
                            <table class="text-sm w-4/5">
                                <tr>
                                    <td class="font-semibold pb-2 w-3/6">
                                        Jumlah Yuran:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        RM 170.00
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Yuran Belum Dibayar:
                                    </td>
                                    <td class="text-fontgrey font-medium">0</td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">Bulan:</td>
                                    <td class="text-fontgrey font-medium">
                                        Julai 2022
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2 -->
        </div>
    </div>
</template>
