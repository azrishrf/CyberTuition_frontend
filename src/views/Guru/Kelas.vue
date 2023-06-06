<script setup>
import { ref } from "vue";
import SidebarGuru from "../../components/SidebarGuru.vue";
import router from "../../router";

document.title = "Kelas | Guru";

async function lihatMaklumatKelas() {
    router.push("/guru/kelas/maklumatkelas");
}
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
                <table class="w-3/4 text-center my-7 ml-5">
                    <tr class="bg-red text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Kelas</th>
                        <th class="font-semibold">Hari</th>
                        <th class="font-semibold">Masa</th>
                        <th class="font-semibold rounded-r-2xl">Tindakan</th>
                    </tr>

                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">1</td>
                        <td class="font-semibold">Bahasa Inggeris</td>
                        <td class="font-semibold">Selasa</td>
                        <td class="font-semibold">20:00</td>
                        <td>
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                                @click="lihatMaklumatKelas()"
                            >
                                quick_reference_all
                            </button>
                        </td>
                    </tr>
                    <tr class="text-fontgrey text-sm border-b-2">
                        <td class="py-3 text-center">2</td>
                        <td class="font-semibold">Matematik</td>
                        <td class="font-semibold">Selasa</td>
                        <td class="font-semibold">20:00</td>
                        <td>
                            <button
                                class="material-symbols-outlined text-black mx-1 cursor-pointer hover:text-red"
                                @click="lihatMaklumatKelas()"
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
