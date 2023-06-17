<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";
// import { kemaskini } from "../../stores/index";

document.title = "Pengesahan Resit Bank | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="yuran" />
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
                PENYATA KEWANGAN PELAJAR
            </h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; > Yuran
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Penyata Kewangan Pelajar
                </span>
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-11 shadow-login flex">
                <div class="flex-1">
                    <h1 class="mb-4 font-semibold text-lg">
                        Penyata Kewangan Pelajar
                    </h1>
                    <table class="text-sm">
                        <tr>
                            <td class="font-semibold pb-3 w-80">
                                Nama Pelajar:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                Muhammad Azri Ishraf
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Tingkatan:</td>
                            <td class="text-fontgrey font-medium pb-3">5</td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">
                                No Kad Pengenalan:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                018273717
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Bulan/Tahun</td>
                            <td class="text-fontgrey font-medium pb-3">
                                6 / 2023
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Jumlah Yuran:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                24/4/2001
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Bulan:</td>
                            <td class="text-fontgrey font-medium pb-3">5</td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">
                                Status Pembayaran:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                <p
                                    class="bg-green text-white px-8 py-1 rounded-xl text-xs inline-block"
                                >
                                    Telah Dibayar
                                </p>
                                <!-- <p
                                    class="bg-darkred text-white px-8 py-1 rounded-xl text-xs inline-block"
                                >
                                    Belum Dibayar
                                </p>
                                <p
                                    class="bg-yellow-400 text-white px-8 py-1 rounded-xl text-xs inline-block"
                                >
                                    Menunggu Pengesahan
                                </p> -->
                            </td>
                        </tr>
                    </table>
                </div>

                <table class="text-center my-auto ml-5 flex-1">
                    <tr class="bg-red text-sm text-white">
                        <th
                            class="font-semibold py-2 px-2 rounded-l-2xl"
                            style="height: 3rem"
                        >
                            No
                        </th>
                        <th class="font-semibold" style="height: 3rem">
                            Nama Kelas
                        </th>

                        <th
                            class="font-semibold rounded-r-2xl"
                            style="height: 3rem"
                        >
                            Jumlah (RM)
                        </th>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center" style="height: 3rem">1</td>
                        <td class="font-semibold" style="height: 3rem">math</td>
                        <td class="font-semibold" style="height: 3rem">20</td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center" style="height: 3rem">1</td>
                        <td class="font-semibold" style="height: 3rem">math</td>
                        <td class="font-semibold" style="height: 3rem">20</td>
                    </tr>

                    <tr class="text-sm bg-slate-200">
                        <td class="rounded-bl-2xl"></td>
                        <td class="py-3 font-semibold" style="height: 3rem">
                            Jumlah Pembayaran
                        </td>
                        <td
                            class="font-semibold rounded-br-2xl"
                            style="height: 3rem"
                        >
                            RM 200
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Maklumat Pembayaran -->
            <div class="bg-white my-6 rounded-2xl py-5 px-11 shadow-login">
                <h1 class="mb-4 font-semibold text-lg">Maklumat Pembayaran</h1>
                <table class="text-sm">
                    <tr>
                        <td class="font-semibold pb-3 w-80">
                            Kaedah Pembayaran:
                        </td>
                        <td class="text-fontgrey font-medium pb-3">
                            PG/Tunai/Resit
                        </td>
                    </tr>
                    <!-- Payment Gateway -->
                    <tr>
                        <td class="font-semibold pb-3 w-80">ID Transaksi:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            TP183542185082923030623
                        </td>
                    </tr>

                    <!-- Resit Bank -->
                    <tr>
                        <td class="font-semibold pb-3 w-80">Resit Bank:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            <div
                                class="shadow-login bg-gray-200 rounded-2xl py-2 px-4 inline"
                            >
                                <a :href="filePath" download target="_blank"
                                    ><p
                                        class="inline font-medium mr-3 hover:text-blue-800 hover:underline text-sm"
                                    >
                                        receiptbank.pdf
                                    </p>
                                </a>
                                <i
                                    class="fa-solid fa-circle-down text-xl text-gray-600"
                                ></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3 w-80">
                            Tarikh Pembayaran:
                        </td>
                        <td class="text-fontgrey font-medium pb-3">2/5/2023</td>
                    </tr>
                </table>
            </div>

            <!-- Resit Bukti Pembayaran -->
            <div class="bg-white my-6 rounded-2xl py-5 px-11 shadow-login">
                <h1 class="mb-4 font-semibold text-lg">
                    Resit Bukti Pembayaran
                </h1>
            </div>

            <div
                class="shadow-login bg-white py-5 px-11 rounded-2xl my-6 w-1/2"
            >
                <div class="flex gap-10">
                    <div class="w-10/12">
                        <h1 class="text-lg font-semibold my-2">
                            Pembayaran Secara Tunai
                        </h1>
                        <p
                            class="text-fontgrey font-semibold text-sm mt-2 mb-4"
                        >
                            Kaedah pembayaran yang boleh juga digunakan oleh
                            pelajar untuk membuat pembayaran yuran bulanan
                            secara langsung.
                        </p>
                    </div>
                    <div>
                        <img src="/cash.png" class="w-32" />
                    </div>
                </div>

                <!-- Instruction -->
                <div
                    class="bg-slate-100 py-3 px-5 text-sm font-medium rounded-2xl mt-3 mb-8 text-gray-700"
                >
                    <p class="mb-2 text-black font-semibold">Arahan:</p>
                    <ul class="list-decimal list-inside">
                        <li class="mb-2">
                            Rujuk penyata kewangan pelajar yang tertera di atas
                            dan sahkan ketepatan jumlah pembayaran yang
                            dipaparkan.
                        </li>
                        <li class="mb-2">
                            Terima bayaran tunai daripada pelajar.
                        </li>
                        <li class="mb-2">
                            Klik pada butang "Bayaran Diterima" di bawah untuk
                            menunjukkan bahawa pembayaran telah diterima secara
                            tunai.
                        </li>
                    </ul>
                </div>

                <button
                    class="bg-green hover:bg-cyan-700 text-white py-1 px-4 text-sm rounded-2xl font-semibold flex gap-2 items-center mx-auto"
                    @click="ubahKataLaluan()"
                >
                    <i class="fa-solid fa-circle-check text-lg"></i>

                    Bayaran Diterima
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            receiptsBank: "",
            malayMonths: "",
        };
    },
    async mounted() {
        // const response = await axios.get(
        //     `http://localhost:3001/api/receiptbank`
        // );
        // this.receiptsBank = response.data;
        // this.malayMonths = [
        //     "Januari",
        //     "Februari",
        //     "Mac",
        //     "April",
        //     "Mei",
        //     "Jun",
        //     "Julai",
        //     "Ogos",
        //     "September",
        //     "Oktober",
        //     "November",
        //     "Disember",
        // ];
    },
};
</script>
