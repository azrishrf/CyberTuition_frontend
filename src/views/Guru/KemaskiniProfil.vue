<script setup>
// import { ref } from "vue";
import SidebarGuru from "../../components/SidebarGuru.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";
import KemaskiniPelajar from "../Kerani/KemaskiniPelajar.vue";

document.title = "Profil Diri | Guru";

// Kemaskin profil
async function kemaskiniProfilDiri() {
    router.push("/guru/profil/kemaskiniprofildiri");
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
                    <i class="fa-solid fa-user text-xs"></i>Pelajar
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="my-2 font-semibold text-xl">PROFIL DIRI</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Profil Diri &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kemaskini</span
                >
            </p>

            <!-- Profil Diri -->
            <!-- Maklumat Guru -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <form
                    class="bg-white m-auto py-1 px-6"
                    v-on:submit.prevent="kemaskiniGuru()"
                >
                    <!-- Maklumat Diri Pelajar -->
                    <h4 class="text-lg font-semibold mb-4">
                        Maklumat Diri Guru
                    </h4>

                    <div class="flex gap-9 max-md:flex-col">
                        <div class="grow">
                            <!-- Full Name -->
                            <p class="text-sm mb-3">Nama Penuh</p>
                            <input
                                type="text"
                                placeholder="Nama Penuh"
                                name="fullname"
                                v-model="fullname"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- IC Number-->
                            <p class="text-sm mb-3">No Kad Pengenalan</p>
                            <input
                                type="text"
                                placeholder="No Kad Pengenalan"
                                name="noIC"
                                v-model="noIC"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Phone Number -->
                            <p class="text-sm mb-3">No Telefon</p>
                            <input
                                type="text"
                                placeholder="No Telefon"
                                name="noPhone"
                                v-model="noPhone"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                        <div class="grow">
                            <!-- Email -->
                            <p class="text-sm mb-3">E-Mel</p>
                            <input
                                type="email"
                                placeholder="E-Mel"
                                name="email"
                                v-model="email"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Birth Date -->
                            <p class="text-sm mb-3">Tarikh Lahir</p>
                            <input
                                type="date"
                                placeholder="Tarikh Lahir"
                                name="birthdate"
                                v-model="birthdate"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                    </div>
                    <!-- Address -->
                    <p class="text-sm mb-3">Alamat Rumah</p>
                    <input
                        type="text"
                        placeholder="Alamat Rumah"
                        name="address"
                        v-model="address"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
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
                </form>
            </div>
        </div>
    </div>
</template>
