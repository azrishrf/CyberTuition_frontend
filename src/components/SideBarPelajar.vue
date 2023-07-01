<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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

const showSidebar = ref(false);

function toggleSidebar(route) {
    showSidebar.value = !showSidebar.value;

    setTimeout(() => {
        router.push(route);
    }, 300);
}

const showLogout = ref(false);
function toggleLogout() {
    showLogout.value = !showLogout.value;
}

function handleClickOutside(event) {
    if (showLogout.value && !event.target.closest(".bg-white")) {
        showLogout.value = false;
    }
}
onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <div
            class="bg-white w-72 flex-none z-20 shadow-home px-4 fixed inset-y-0 left-0 lg:relative lg:translate-x-0 transform -translate-x-full transition duration-300 ease-in-out min-h-full"
            :class="{ ' translate-x-0 ': showSidebar }"
        >
            <img src="/LogoCyberTuition.png" class="w-44 m-auto mt-4 mb-5" />
            <!-- Nav Dashboard -->
            <button
                @click="toggleSidebar('/pelajar/dashboard')"
                class="font-bold text-xs py-2 px-4 rounded-2xl flex items-center gap-4 mb-2 w-full removeblue"
                v-bind:class="{
                    'bg-red text-white': linkActive === 'dashboard',
                    'text-grey2 hover:bg-gray-100': linkActive !== 'dashboard',
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
                            'text-white': linkActive === 'dashboard',
                            'text-grey2 ': linkActive !== 'dashboard',
                        }"
                    >
                        space_dashboard
                    </span>
                </div>
                Dashboard
            </button>
            <!-- Profil Diri -->
            <button
                @click="toggleSidebar('/pelajar/profil')"
                class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2 w-full removeblue"
                v-bind:class="{
                    'bg-red text-white': linkActive === 'profil',
                    'text-grey2  hover:bg-gray-100': linkActive !== 'profil',
                }"
            >
                <i class="fa-solid fa-user flex items-center text-base"></i>

                Profil Diri
            </button>

            <!-- Nav Kelas -->
            <button
                @click="toggleSidebar('/pelajar/kelas')"
                class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2 w-full removeblue"
                v-bind:class="{
                    'bg-red text-white': linkActive === 'kelas',
                    'text-grey2 hover:bg-gray-100': linkActive !== 'kelas',
                }"
            >
                <i class="fa-solid fa-book flex items-center text-base"></i>
                Kelas
            </button>
            <!-- Nav Kedatangan -->
            <button
                @click="toggleSidebar('/pelajar/kedatangan')"
                class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2 w-full removeblue"
                v-bind:class="{
                    'bg-red text-white': linkActive === 'kedatangan',
                    'text-grey2  hover:bg-gray-100':
                        linkActive !== 'kedatangan',
                }"
            >
                <i class="fa-solid fa-qrcode flex items-center text-lg"></i>
                Kedatangan
            </button>
            <!-- Nav Yuran -->
            <button
                @click="toggleSidebar('/pelajar/yuran')"
                class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2 w-full removeblue"
                v-bind:class="{
                    'bg-red text-white': linkActive === 'yuran',
                    'text-grey2 hover:bg-gray-100': linkActive !== 'yuran',
                }"
            >
                <i
                    class="fa-sharp fa-solid fa-credit-card flex items-center text-base"
                ></i>
                Yuran
            </button>
            <!-- Nav Laporan -->
            <button
                @click="toggleSidebar('/pelajar/laporan')"
                class="font-bold text-xs py-2 px-5 rounded-2xl flex items-center gap-5 mb-2 w-full removeblue"
                v-bind:class="{
                    'bg-red text-white': linkActive === 'laporan',
                    'text-grey2 hover:bg-gray-100': linkActive !== 'laporan',
                }"
            >
                <i
                    class="fa-solid fa-chart-simple flex items-center text-base"
                ></i>
                Laporan
            </button>
            <!-- log out -->
            <button
                class="text-white bg-slate-700 font-bold text-xs py-3 px-5 rounded-2xl flex items-center justify-center gap-5 mt-10 hover:bg-slate-600 mx-9"
                @click="toggleConfirmDelete()"
            >
                <i class="fa-solid fa-right-from-bracket"></i>Log Keluar
            </button>
        </div>

        <div class="flex-grow w-full px-4 md:px-12 py-2 md:py-4">
            <!-- Header -->
            <div
                class="flex justify-between sticky bg-white shadow-login rounded-full md:rounded-2xl px-5 py-1 md:py-2 z-10 lg:z-0"
                :class="{ sticky: !showSidebar }"
            >
                <button
                    @click="showSidebar = !showSidebar"
                    class="flex items-center justify-center my-auto w-8 rounded-full h-8 hover:bg-slate-100 removeblue"
                >
                    <i class="fa-solid fa-bars my-auto text-base lg:hidden"></i>
                </button>

                <img
                    src="/LogoCyberTuition.png"
                    class="w-32 md:w-40 lg:hidden"
                />

                <div
                    class="flex items-center justify-center my-auto bg-red text-white w-7 lg:w-28 rounded-full lg:rounded-2xl lg:py-2 h-7 lg:h-8"
                >
                    <i class="fa-solid fa-user text-xs"></i>
                    <span class="hidden lg:inline text-xs font-semibold ml-2"
                        >Pelajar</span
                    >
                </div>

                <!-- <div
                    v-show="showLogout"
                    class="bg-white py-2 px-4 rounded-lg mt-2 absolute top-11 right-0 shadow-login animate__animated"
                    :class="{
                        animate__fadeIn: showLogout,
                        animate__fadeOut: !showLogout,
                    }"
                    ref="logoutDiv"
                >
                    <p class="text-center font-semibold text-sm mb-1">
                        Pelajar
                    </p>
                    <div
                        class="text-fontgrey text-xs mb-4 font-semibold text-center bg-gray-200 py-1 px-4 rounded-xl"
                    >
                        <p class="w-36">Muhammad Azri Ishraf Bin Harun</p>
                        <p>010424101067</p>
                    </div>
                    <div class="flex justify-end">
                        <div
                            class="flex text-white bg-slate-700 font-semibold text-xs py-2 w-28 rounded-2xl items-center justify-center gap-2 hover:bg-slate-600"
                        >
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <p>Log Keluar</p>
                        </div>
                    </div>
                </div> -->
            </div>
            <dialog
                class="z-50 bg-white px-3 pt-4 top-1/3 rounded-xl"
                v-bind:open="isOpen"
            >
                <div>
                    <i
                        class="fa-solid fa-right-from-bracket text-black text-4xl float-left mr-3"
                    ></i>
                    <div class="flex flex-col">
                        <h1 class="font-semibold text-base text-left">
                            Log Keluar
                        </h1>
                        <p class="font-normal text-xs text-left">
                            Adakah anda pasti mahu log keluar dari sistem?
                        </p>
                    </div>

                    <button
                        @click="logout()"
                        class="bg-red hover:bg-darkred text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                    >
                        Sahkan
                    </button>
                    <button
                        @click="toggleConfirmDelete()"
                        class="text-black py-2 px-4 rounded-xl border-2 border-grey hover:bg-slate-300 float-right mt-5 font-semibold text-xs"
                    >
                        Batalkan
                    </button>
                </div>
            </dialog>
            <div
                class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"
                v-bind:class="{ hidden: !isOpen }"
            ></div>
            <!-- Main content -->
            <div class="px-4 pb-10">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sticky {
    position: sticky;
    top: 8px;
}
.removeblue {
    -webkit-tap-highlight-color: transparent;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.animate__fadeIn {
    animation: fadeIn 0.2s ease-in;
}

.animate__fadeOut {
    animation: fadeOut 0.3s ease-out;
}
</style>
