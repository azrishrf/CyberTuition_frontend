<script setup>
import { ref } from "vue";
import SidebarGuru from "../../components/SidebarGuru.vue";

document.title = "Kelas | Guru";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarGuru linkActive="kelas" />
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
            <h1 class="my-2 font-semibold text-xl">KELAS</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kelas</span
                >
            </p>

            <!-- Maklumat Kelas -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <div>
                    <h1 class="text-base font-semibold my-2">Maklumat Kelas</h1>
                    <table class="text-sm w-4/5">
                        <tr>
                            <td class="font-semibold pb-2">Nama Kelas:</td>
                            <td class="text-fontgrey font-medium">
                                Bahasa Inggeris
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">Hari:</td>
                            <td class="text-fontgrey font-medium">Isnin</td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">Masa:</td>
                            <td class="text-fontgrey font-medium">20:00</td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">Nama Guru:</td>
                            <td class="text-fontgrey font-medium">
                                Muhammad Hafiz Taufik
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <h1 class="text-base font-semibold my-2">Senarai Pelajar</h1>

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
                        <th class="font-semibold">E-Mel</th>
                        <th class="font-semibold">Tingkatan</th>
                        <th class="font-semibold">No Kad Pengenalan</th>
                        <th class="font-semibold rounded-r-2xl">
                            Tarikh Lahir
                        </th>
                    </tr>

                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">1</td>
                        <td class="font-semibold">
                            Muhammad Azri Ishraf Bin Harun
                        </td>
                        <td class="font-semibold">ishrafazri@gmail.com</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">010424101067</td>
                        <td class="font-semibold">24/04/2001</td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">2</td>
                        <td class="font-semibold">
                            Muhammad Iqmal bin Abdullah
                        </td>
                        <td class="font-semibold">iqmal@gmail.com</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">010424101067</td>
                        <td class="font-semibold">24/04/2001</td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">3</td>
                        <td class="font-semibold">
                            Nurshahirah binti Shuhaimi
                        </td>
                        <td class="font-semibold">shahirah@gmail.com</td>
                        <td class="font-semibold">5</td>
                        <td class="font-semibold">010424101067</td>
                        <td class="font-semibold">24/04/2001</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
