<script setup>
import { ref } from "vue";
import router from "../router";

// dropdown for navigation pelajar
const pelajarDropdown = ref(false);

function dropdown1() {
    pelajarDropdown.value = !pelajarDropdown.value;
}

// dropdown for navigation guru
const guruDropdown = ref(true);

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
            src="../../../assets/Logo V1.jpg.png"
            class="w-44 m-auto mt-4 mb-5"
        />
        <!-- Nav Dashboard -->
        <router-link
            to="/kerani/dashboard"
            class="font-bold text-xs py-2 px-4 rounded-2xl flex items-center gap-4 mb-2"
            v-bind:class="{
                'bg-red text-white': linkActive === 'dashboard',
                'text-grey2 hover:bg-gray-100': linkActive !== 'dashboard',
            }"
            ><div
                class="flex items-center"
                style="
                    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200,
                        'opsz' 20;
                "
            >
                <span
                    class="material-symbols-outlined"
                    v-bind:class="{
                        'text-white': linkActive === 'dashboard',
                        'text-grey2': linkActive !== 'dashboard',
                    }"
                >
                    space_dashboard
                </span>
            </div>
            Dashboard
        </router-link>
        <!-- Nav Pelajar -->
        <div
            class="font-bold text-xs rounded-2xl gap-4 mb-2 relative cursor-pointer select-none hover:transition duration-200"
            v-bind:class="{
                'bg-red ':
                    linkActive === 'pelajar1' ||
                    linkActive === 'pelajar2' ||
                    linkActive === 'pelajar3',
                'bg-white  hover:bg-gray-100':
                    linkActive !== 'pelajar1' &&
                    linkActive !== 'pelajar2' &&
                    linkActive !== 'pelajar3',
            }"
            v-on:click="dropdown1()"
        >
            <div class="flex items-center py-2 px-4 justify-between">
                <div
                    class="flex items-center gap-4"
                    v-bind:class="{
                        'text-white':
                            linkActive === 'pelajar1' ||
                            linkActive === 'pelajar2' ||
                            linkActive === 'pelajar3',
                        'text-grey2':
                            linkActive !== 'pelajar1' &&
                            linkActive !== 'pelajar2' &&
                            linkActive !== 'pelajar3',
                    }"
                >
                    <div
                        class="flex items-center"
                        style="
                            font-variation-settings: 'FILL' 1, 'wght' 300,
                                'GRAD' 200, 'opsz' 20;
                        "
                    >
                        <span
                            class="material-symbols-outlined"
                            v-bind:class="{
                                'text-white':
                                    linkActive === 'pelajar1' ||
                                    linkActive === 'pelajar2' ||
                                    linkActive === 'pelajar3',
                                'text-grey2':
                                    linkActive !== 'pelajar1' &&
                                    linkActive !== 'pelajar2' &&
                                    linkActive !== 'pelajar3',
                            }"
                        >
                            school
                        </span>
                    </div>
                    Pelajar
                </div>

                <i
                    class="fa-solid fa-angle-right transition duration-200"
                    v-bind:class="{
                        'fa-angle-right': pelajarDropdown,
                        'fa-angle-down': !pelajarDropdown,
                        'text-white':
                            linkActive === 'pelajar1' ||
                            linkActive === 'pelajar2' ||
                            linkActive === 'pelajar3',
                        'text-grey2':
                            linkActive !== 'pelajar1' &&
                            linkActive !== 'pelajar2' &&
                            linkActive !== 'pelajar3',
                    }"
                ></i>
            </div>
            <div
                class="mb-2 flex-col pl-14 pt-1 pb-4 gap-2 transition duration-200 ease-out"
                v-bind:class="{
                    hidden: pelajarDropdown,
                    flex: !pelajarDropdown,
                }"
            >
                <router-link
                    to="/kerani/pelajar/senaraipelajar"
                    v-bind:class="{
                        'text-white': linkActive === 'pelajar1',
                        'text-grey2': linkActive !== 'pelajar1',
                        'hover:text-white':
                            linkActive === 'pelajar2' ||
                            linkActive === 'pelajar3',
                        'hover:text-black':
                            linkActive !== 'pelajar1' &&
                            linkActive !== 'pelajar2' &&
                            linkActive !== 'pelajar3',
                    }"
                    >Senarai Pelajar</router-link
                >
                <router-link
                    to="/kerani/pelajar/pengesahan"
                    v-bind:class="{
                        'text-white': linkActive === 'pelajar2',
                        'text-grey2': linkActive !== 'pelajar2',
                        'hover:text-white':
                            linkActive === 'pelajar1' ||
                            linkActive === 'pelajar3',
                        'hover:text-black':
                            linkActive !== 'pelajar1' &&
                            linkActive !== 'pelajar2' &&
                            linkActive !== 'pelajar3',
                    }"
                    >Pengesahan</router-link
                >
                <router-link
                    to="/kerani/pelajar/menambahpelajar"
                    v-bind:class="{
                        'text-white': linkActive === 'pelajar3',
                        'text-grey2': linkActive !== 'pelajar3',
                        'hover:text-white':
                            linkActive === 'pelajar1' ||
                            linkActive === 'pelajar2',
                        'hover:text-black':
                            linkActive !== 'pelajar1' &&
                            linkActive !== 'pelajar2' &&
                            linkActive !== 'pelajar3',
                    }"
                    >Menambah Pelajar Baru</router-link
                >
            </div>
        </div>
        <!-- Nav Guru -->
        <div
            class="font-bold text-xs rounded-2xl gap-4 mb-2 relative cursor-pointer select-none hover:transition duration-200"
            v-on:click="dropdown2()"
            v-bind:class="{
                'bg-red ': linkActive === 'guru1' || linkActive === 'guru2',
                'bg-white  hover:bg-gray-100':
                    linkActive !== 'guru1' && linkActive !== 'guru2',
            }"
        >
            <div class="flex items-center py-2 px-4 justify-between">
                <div
                    class="flex items-center gap-4"
                    v-bind:class="{
                        'text-white':
                            linkActive === 'guru1' || linkActive === 'guru2',
                        'text-grey2':
                            linkActive !== 'guru1' && linkActive !== 'guru2',
                    }"
                >
                    <i
                        class="fa-solid fa-chalkboard-user flex items-center text-base"
                        v-bind:class="{
                            'text-white':
                                linkActive === 'guru1' ||
                                linkActive === 'guru2',
                            'text-grey2':
                                linkActive !== 'guru1' &&
                                linkActive !== 'guru2',
                        }"
                    ></i>
                    Guru
                </div>

                <i
                    class="fa-solid fa-angle-right transition duration-200"
                    v-bind:class="{
                        'text-white':
                            linkActive === 'guru1' || linkActive === 'guru2',
                        'text-grey2':
                            linkActive !== 'guru1' && linkActive !== 'guru2',
                    }"
                ></i>
            </div>
            <div
                class="mb-2 flex-col pl-14 pt-1 pb-4 gap-2 transition duration-200 ease-out"
                v-bind:class="{
                    hidden: !guruDropdown,
                    flex: guruDropdown,
                }"
            >
                <router-link
                    to="/kerani/guru/senaraiguru"
                    v-bind:class="{
                        'text-white': linkActive === 'guru1',
                        'text-grey2': linkActive !== 'guru1',
                        'hover:text-white': linkActive === 'guru2',
                        'hover:text-black':
                            linkActive !== 'guru1' && linkActive !== 'guru2',
                    }"
                    >Senarai Guru</router-link
                >
                <router-link
                    to="/kerani/guru/menambahguru"
                    v-bind:class="{
                        'text-white': linkActive === 'guru2',
                        'text-grey2': linkActive !== 'guru2',
                        'hover:text-white': linkActive === 'guru1',
                        'hover:text-black':
                            linkActive !== 'guru1' && linkActive !== 'guru2',
                    }"
                    >Menambah Guru Baru</router-link
                >
            </div>
        </div>
        <!-- Nav Kelas -->
        <router-link
            to="/kerani/kelas"
            class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2"
            v-bind:class="{
                'bg-red text-white': linkActive === 'kelas',
                'text-grey2 hover:bg-gray-100': linkActive !== 'kelas',
            }"
            ><i class="fa-solid fa-book flex items-center text-lg"></i>
            Kelas
        </router-link>
        <!-- Nav Yuran -->
        <router-link
            to="/kerani/yuran"
            class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-4 mb-2"
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
            to="/kerani/laporan"
            class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-4 mb-2"
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
