<script setup>
import { ref } from "vue";
import SidebarGuru from "../../components/SidebarGuru.vue";

document.title = "Kedatangan | Guru";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarGuru linkActive="kedatangan" />
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
            <h1 class="my-2 font-semibold text-xl">KEDATANGAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Kedatangan
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kelas</span
                >
            </p>

            <!-- Maklumat Kelas -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <h1 class="font-semibold mb-4">Bahasa Inggeris</h1>
                <!-- Search bar -->
                <div
                    class="font-semibold border-2 border-grey text-sm px-8 py-2 mb-6 rounded-xl w-11/12 flex justify-between items-center"
                >
                    <input
                        type="text"
                        placeholder="Carian Nama Pelajar..."
                        class="w-full focus:outline-none"
                    />
                    <i class="fa-solid fa-magnifying-glass text-grey"></i>
                </div>

                <!-- Jadual Senarai Pelajar -->
                <table class="w-11/12 text-center">
                    <tr class="bg-red text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Penuh</th>
                        <th class="font-semibold">Tingkatan</th>
                        <th class="font-semibold">Status</th>
                        <th class="font-semibold rounded-r-2xl">Tindakan</th>
                    </tr>

                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">1</td>
                        <td class="font-semibold">
                            Muhammad Azri Ishraf Bin Harun
                        </td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold text-green">Hadir</td>
                        <td class="font-semibold">
                            <button
                                class="bg-green text-white px-4 py-1 rounded-xl text-xs mx-1 hover:bg-cyan-700"
                            >
                                Hadir
                            </button>
                            <button
                                class="bg-red text-white px-3 py-1 rounded-xl text-xs hover:bg-rose-800"
                            >
                                Tidak Hadir
                            </button>
                        </td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">2</td>
                        <td class="font-semibold">
                            Muhammad Iqmal bin Abdullah
                        </td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold text-green">Hadir</td>
                        <td class="font-semibold">
                            <button
                                class="bg-green text-white px-4 py-1 rounded-xl text-xs mx-1 hover:bg-cyan-700"
                            >
                                Hadir
                            </button>
                            <button
                                class="bg-red text-white px-3 py-1 rounded-xl text-xs hover:bg-rose-800"
                            >
                                Tidak Hadir
                            </button>
                        </td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">3</td>
                        <td class="font-semibold">
                            Nurshahirah binti Shuhaimi
                        </td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold text-darkred">Tidak Hadir</td>
                        <td class="font-semibold">
                            <button
                                class="bg-green text-white px-4 py-1 rounded-xl text-xs mx-1 hover:bg-cyan-700"
                            >
                                Hadir
                            </button>
                            <button
                                class="bg-red text-white px-3 py-1 rounded-xl text-xs hover:bg-rose-800"
                            >
                                Tidak Hadir
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
