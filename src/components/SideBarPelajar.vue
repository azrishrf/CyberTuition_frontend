<script setup>
import { ref } from "vue";
import router from "../router";

// dropdown for navigation pelajar
const pelajarDropdown = ref(false);

function dropdown1() {
    pelajarDropdown.value = !pelajarDropdown.value;
}

// dropdown for navigation guru
const guruDropdown = ref(false);

function dropdown2() {
    guruDropdown.value = !guruDropdown.value;
}

defineProps({
    linkActive: String,
});

// Confirmation Box for delete
const isOpen = ref(false);

function toggleConfirmDelete() {
    isOpen.value = !isOpen.value;
}

async function logout() {
    sessionStorage.clear();
    router.push("/");
}
</script>

<template>
    <div class="bg-white w-80 min-h-full shadow-home px-4">
        <img
            src="/LogoCyberTuition.png"
            class="w-44 m-auto mt-4 mb-5"
        />
        <!-- Nav Dashboard -->
        <router-link
            to="/pelajar/dashboard"
            class="font-bold text-xs py-2 px-4 rounded-2xl flex items-center gap-4 mb-2"
            v-bind:class="{
                'bg-red text-white': linkActive === 'dashboard',
                'text-grey2 hover:bg-gray-100': linkActive !== 'dashboard',
            }"
            ><div
                class="flex items-center"
                style="font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 20;"
            >
                <span
                    class="material-symbols-outlined"
                    v-bind:class="{
                        'text-white': linkActive === 'dashboard',
                        'text-grey2 ': linkActive !== 'dashboard',
                    }"
                >
                    space_dashboard
                </span>
            </div>
            Dashboard
        </router-link>
        <!-- Profil Diri -->
        <router-link
            to="/pelajar/profil"
            class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2"
            v-bind:class="{
                'bg-red text-white': linkActive === 'profil',
                'text-grey2  hover:bg-gray-100': linkActive !== 'profil',
            }"
            ><i class="fa-solid fa-user flex items-center text-base"></i>

            Profil Diri
        </router-link>

        <!-- Nav Kelas -->
        <router-link
            to="/pelajar/kelas"
            class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2"
            v-bind:class="{
                'bg-red text-white': linkActive === 'kelas',
                'text-grey2 hover:bg-gray-100': linkActive !== 'kelas',
            }"
            ><i class="fa-solid fa-book flex items-center text-base"></i>
            Kelas
        </router-link>
        <!-- Nav Kedatangan -->
        <router-link
            to="/pelajar/kedatangan"
            class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2"
            v-bind:class="{
                'bg-red text-white': linkActive === 'kedatangan',
                'text-grey2  hover:bg-gray-100': linkActive !== 'kedatangan',
            }"
            ><i class="fa-solid fa-qrcode flex items-center text-lg"></i>
            Kedatangan
        </router-link>
        <!-- Nav Yuran -->
        <router-link
            to="/pelajar/yuran"
            class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2"
            v-bind:class="{
                'bg-red text-white': linkActive === 'yuran',
                'text-grey2 hover:bg-gray-100': linkActive !== 'yuran',
            }"
            ><i
                class="fa-sharp fa-solid fa-credit-card flex items-center text-base"
            ></i>
            Yuran
        </router-link>
        <!-- Nav Laporan -->
        <router-link
            to="/pelajar/laporan"
            class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2"
            v-bind:class="{
                'bg-red text-white': linkActive === 'laporan',
                'text-grey2 hover:bg-gray-100': linkActive !== 'laporan',
            }"
            ><i
                class="fa-solid fa-chart-simple flex items-center text-base"
            ></i>
            Laporan
        </router-link>
        <!-- log out -->
        <router-link
            to=""
            class="text-white bg-slate-700 font-bold text-xs py-3 px-5 rounded-2xl flex items-center justify-center gap-5 mt-10 hover:bg-slate-600 mx-9"
            @click="toggleConfirmDelete()"
            ><i class="fa-solid fa-right-from-bracket"></i>Log
            Keluar</router-link
        >
        <dialog
            class="z-50 w-2/6 bg-white px-3 pt-4 top-1/3 rounded-xl"
            v-bind:open="isOpen"
        >
            <div>
                <i
                    class="fa-solid fa-right-from-bracket text-black text-4xl float-left mr-3"
                ></i>

                <h1 class="font-semibold text-base text-left">Log Keluar</h1>
                <p class="font-normal text-xs text-left">
                    Adakah anda pasti mahu log keluar dari sistem?
                </p>

                <button
                    @click="logout()"
                    class="bg-red text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                >
                    Sahkan
                </button>
                <button
                    @click="toggleConfirmDelete()"
                    class="text-black py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                >
                    Batalkan
                </button>
            </div>
        </dialog>
        <div
            class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"
            v-bind:class="{ hidden: !isOpen }"
        ></div>
    </div>
</template>
