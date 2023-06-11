<script setup>
import { LogRequest } from "pocketbase";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";

document.title = "Laporan | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="laporan" />
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">LAPORAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red">
                    >> &nbsp; Laporan</span
                >
            </p>

            <h1 class="mt-3 mb-2 font-semibold text-lg">
                Graf Statistik Bulanan
            </h1>

            <!-- Graf Bilangan pelajar -->
            <div
                class="bg-white rounded-2xl py-5 px-5 shadow-login inline-block"
            >
                <h1 class="mb-2 font-semibold text-base">
                    Laporan Statistik Bilangan Pelajar
                </h1>
            </div>

            <!-- Laporan Bulanan -->
            <h1 class="mt-3 mb-2 font-semibold text-lg">Laporan Bulanan</h1>
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <div class="flex gap-20">
                    <div class="">
                        <!-- Bulan-->
                        <p class="text-sm mb-3">Bulan</p>
                        <select
                            placeholder="Bulan"
                            name="Bulan"
                            v-model="month"
                            class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-3 text-sm w-80"
                        >
                            <option disabled value="">-- Pilih Bulan --</option>
                            <option value="Januari">Januari</option>
                            <option value="Februari">Februari</option>
                            <option value="Mac">Mac</option>
                            <option value="April">April</option>
                            <option value="Mei">Mei</option>
                            <option value="Jun">Jun</option>
                            <option value="Julai">Julai</option>
                            <option value="Ogos">Ogos</option>
                            <option value="September">September</option>
                            <option value="Oktober">Oktober</option>
                            <option value="November">November</option>
                            <option value="Disember">Disember</option>
                        </select>
                    </div>
                    <div class="">
                        <!-- Tahun -->
                        <p class="text-sm mb-3">Tahun</p>
                        <select
                            placeholder="Tahun"
                            name="Tahun"
                            v-model="currentYear"
                            class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-3 text-sm w-80"
                        >
                            <option disabled value="">-- Pilih Tahun --</option>
                            <option :value="currentYear - 2">
                                {{ currentYear - 2 }}
                            </option>
                            <option :value="currentYear - 1">
                                {{ currentYear - 1 }}
                            </option>
                            <option :value="currentYear" selected>
                                {{ currentYear }}
                            </option>
                        </select>
                    </div>
                </div>
                <p
                    class="error-message text-xs text-red grow mb-3 font-semibold"
                >
                    {{ errorMessage }}
                </p>
                <div class="flex gap-6">
                    <SubmitButton
                        type="button"
                        txt="Sahkan"
                        class="px-8"
                        @click="confirmForm()"
                    />
                </div>
            </div>

            <!-- Data Laporan -->
            <div class="shadow-login bg-white py-7 px-20 rounded-2xl my-5">
                <div class="text-center">
                    <img
                        src="../../../assets/Logo V1.jpg.png"
                        class="w-60 m-auto"
                    />
                    <h1 class="font-semibold">LAPORAN PELAJAR</h1>
                    <h1 class="font-semibold mb-5">{{ this.formattedDate }}</h1>
                </div>

                <div class="flex pl-10 gap-4">
                    <!-- 1 -->
                    <div class="grow">
                        <!-- Pelajar -->
                        <div class="flex flex-col w-72 mb-5">
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Pelajar
                            </h1>
                            <table class="text-sm bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Jumlah Pelajar:
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-center text-fontgrey"
                                    >
                                        113
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Jumlah Pelajar Baru Berdaftar:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        12
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Tingkatan 4:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        50
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Tingkatan 5:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        63
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <!-- Guru -->
                        <div class="flex flex-col w-72 mb-5">
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Guru
                            </h1>
                            <table class="text-sm bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Jumlah Guru:
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-center text-fontgrey"
                                    >
                                        10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Jumlah Guru Baru Berdaftar:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        2
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <!-- Kelas -->
                        <div class="flex flex-col w-72 mb-5">
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Kelas
                            </h1>
                            <table class="text-sm bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Jumlah Kelas:
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-center text-fontgrey"
                                    >
                                        10
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="grow">
                        <!-- Kedatangan Pelajar -->
                        <div class="flex flex-col w-72 mb-5">
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Kedatangan Pelajar
                            </h1>
                            <table class="text-sm bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Jumlah Kelas Bulan Ini:
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-center text-fontgrey"
                                    >
                                        40
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Kelas Hadir:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        380/400
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Peratus Kehadiran:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        80%
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Kelas Tidak Hadir
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        20/400
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Peratus Ketidakhadiran:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        20%
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <!-- Yuran -->
                        <div class="flex flex-col w-72 mb-5">
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Yuran
                            </h1>
                            <table class="text-sm bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Jumlah Yuran:
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-center text-fontgrey"
                                    >
                                        RM 1199.00
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Yuran Sudah Dibayar:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        RM 978.00
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Yuran Belum Dibayar:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        RM 153.00
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="grow">
                        <!-- Jumlah Pelajar Mengikut Kelas -->
                        <div class="flex flex-col w-72 mb-5">
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Jumlah Pelajar Mengikut Kelas
                            </h1>
                            <table class="text-sm bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Bahasa Inggeris
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-center text-fontgrey"
                                    >
                                        10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Matematik Tambahan
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        12
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Prinsip Perakaunan
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        11
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            month: "",
            currentYear: "",
        };
    },
    async mounted() {
        // Create an array of month names in Malay
        const malayMonthNames = [
            "Januari",
            "Februari",
            "Mac",
            "April",
            "Mei",
            "Jun",
            "Julai",
            "Ogos",
            "September",
            "Oktober",
            "November",
            "Disember",
        ];

        // Get the current month index (0-11)
        const currentMonthIndex = new Date().getMonth();

        // Set the default value of the month select element to the current month in Malay
        this.month = malayMonthNames[currentMonthIndex];

        // Get the current year
        this.currentYear = new Date().getFullYear();
    },
    methods: {
        confirmForm() {
            // this.monthYear = this.month + " / " + this.year;
            // console.log(this.monthYear);
        },
    },
};
</script>
