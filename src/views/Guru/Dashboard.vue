<script setup>
import SidebarGuru from "../../components/SidebarGuru.vue";

document.title = "Dashboard | Guru";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarGuru linkActive="dashboard" />
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
            <!-- Welcome Text -->
            <h1 class="mt-5 mb-1 font-semibold text-xl">Hi, Selamat Datang</h1>
            <p class="mb-5 font-semibold text-sm text-grey2">Dashboard</p>

            <!-- Total -->
            <div class="flex justify-center gap-5">
                <!-- <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="../../../assets/class.png" class="w-20" />
                    </div>
                    <div class="px-7 flex-col-reverse">
                        <p class="text-sm">Subjek</p>
                        <p class="text-xl text-black font-medium text-center">
                            3
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img
                            src="../../../assets/attendance.png"
                            class="w-20"
                        />
                    </div>
                    <div class="px-6 flex-col-reverse">
                        <p class="text-sm">Kedatangan</p>
                        <p class="text-xl text-black font-medium text-center">
                            92%
                        </p>
                    </div>
                </div>

                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="../../../assets/fee.png" class="w-20" />
                    </div>
                    <div class="px-5 flex-col-reverse">
                        <p class="text-sm text-center">Yuran</p>
                        <p class="text-xl text-black font-medium text-center">
                            RM170.00
                        </p>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
