<script setup>
import PocketBase from "pocketbase";
import { ref } from "vue";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import { onMounted } from "vue";
import router from "../../router";
// import { kemaskini } from "../../stores/index";

document.title = "Yuran | Kerani";
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">YURAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Yuran</span
                >
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <h1 class="mt-3 mb-2 font-semibold text-xl">
                    Pengesahan Resit Bank
                </h1>

                <!-- Jadual Senarai Pelajar -->
                <table class="w-11/12 text-center">
                    <tr class="bg-red text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Penuh</th>
                        <th class="font-semibold">Tingkatan</th>
                        <th class="font-semibold">Tarikh Pembayaran</th>
                        <th class="font-semibold rounded-r-2xl">Tindakan</th>
                    </tr>

                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">1</td>
                        <td class="font-semibold">Azri Ishraf</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">2023-01-19</td>
                        <td class="font-semibold">
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                            >
                                quick_reference_all
                            </button>
                        </td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">2</td>
                        <td class="font-semibold">Syamil Afizan</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">2023-01-19</td>
                        <td class="font-semibold">
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                            >
                                quick_reference_all
                            </button>
                        </td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">3</td>
                        <td class="font-semibold">Syahir Hamid</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">2023-01-19</td>
                        <td class="font-semibold">
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                            >
                                quick_reference_all
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <h1 class="mt-3 mb-2 font-semibold text-xl">
                    Status Pembayaran Yuran
                </h1>

                <!-- Jadual Senarai Pelajar -->
                <table class="w-11/12 text-center">
                    <tr class="bg-red text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Penuh</th>
                        <th class="font-semibold">Tingkatan</th>
                        <th class="font-semibold">Status Pembayaran</th>
                        <th class="font-semibold rounded-r-2xl">Tindakan</th>
                    </tr>

                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">1</td>
                        <td class="font-semibold">Hassan Abdullah</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">
                            <p
                                class="bg-green text-white px-8 py-1 rounded-xl text-xs hover:bg-cyan-700 inline-block"
                            >
                                Sudah Dibayar
                            </p>
                        </td>
                        <td class="font-semibold">
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                            >
                                quick_reference_all
                            </button>
                        </td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">2</td>
                        <td class="font-semibold">Afizan Rahim</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">
                            <p
                                class="bg-green text-white px-8 py-1 rounded-xl text-xs hover:bg-cyan-700 inline-block"
                            >
                                Sudah Dibayar
                            </p>
                        </td>
                        <td class="font-semibold">
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                            >
                                quick_reference_all
                            </button>
                        </td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">3</td>
                        <td class="font-semibold">Muhammad Abdullah</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">
                            <p
                                class="bg-darkred text-white px-8 py-1 rounded-xl text-xs hover:bg-cyan-700 inline-block"
                            >
                                Belum Dibayar
                            </p>
                        </td>
                        <td class="font-semibold">
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                            >
                                quick_reference_all
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<style></style>
