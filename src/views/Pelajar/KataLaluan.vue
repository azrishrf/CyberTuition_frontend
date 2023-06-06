<script setup>
// import { ref } from "vue";
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import SubmitButton from "../../components/SubmitButton.vue";

document.title = "Dashboard | Pelajar";
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
                Dashboard &nbsp;> &nbsp;Profil Diri &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Ubah Kata Laluan</span
                >
            </p>

            <!-- Ubah Kata Laluan -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <div>
                    <h1 class="text-base font-semibold mt-2 mb-4">
                        Ubah Kata Laluan
                    </h1>
                    <p class="text-sm mb-3">Kata Laluan Semasa</p>
                    <input
                        type="text"
                        class="border-2 border-slate-grey rounded-md w-2/5 py-3 px-4 block mb-5 text-sm"
                    />
                    <p class="text-sm mb-3">Kata Laluan Baru</p>
                    <input
                        type="text"
                        class="border-2 border-slate-grey rounded-md w-2/5 py-3 px-4 block mb-5 text-sm"
                    />
                    <p class="text-sm mb-3">Pengesahan Kata Laluan Baru</p>
                    <input
                        type="text"
                        class="border-2 border-slate-grey rounded-md w-2/5 py-3 px-4 block mb-5 text-sm"
                    />
                    <SubmitButton
                        type="submit"
                        txt="Sahkan"
                        class="mt-6 px-9"
                    />
                    <button
                        txt="Batalkan"
                        class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                        @click="redirect()"
                    >
                        Batalkan
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
