<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";

// import { guru, pelajar, kelas } from "../../stores/index";

// const pb = new PocketBase("http://127.0.0.1:8090");

// onMounted(async function () {
//     const records = await pb
//         .collection("pelajar")
//         .getFullList(200 /* batch size */, {
//             sort: "created",
//         });
//     pelajar.value = records;
// });

// onMounted(async function () {
//     const records = await pb
//         .collection("guru")
//         .getFullList(200 /* batch size */, {
//             sort: "created",
//         });

//     guru.value = records;
// });

// onMounted(async function () {
//     const records = await pb
//         .collection("kelas")
//         .getFullList(200 /* batch size */, {
//             sort: "created",
//         });

//     kelas.value = records;
// });
document.title = "Dashboard | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="dashboard" />
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
            <!-- Welcome Text -->
            <h1 class="mt-5 mb-1 font-semibold text-xl">Hi, Selamat Datang</h1>
            <p class="mb-5 font-semibold text-sm text-grey2">Dashboard</p>

            <!-- Total -->
            <div class="flex justify-center gap-5">
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="../../../assets/student.png" class="w-20" />
                    </div>
                    <div class="px-5 flex-col-reverse">
                        <p class="text-sm">Pelajar</p>
                        <p class="text-xl text-black font-medium text-center">
                            20
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="../../../assets/teacher.png" class="w-20" />
                    </div>
                    <div class="px-6 flex-col-reverse">
                        <p class="text-sm">Guru</p>
                        <p class="text-xl text-black font-medium text-center">
                            10
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="../../../assets/class.png" class="w-20" />
                    </div>
                    <div class="px-6 flex-col-reverse">
                        <p class="text-sm">Kelas</p>
                        <p class="text-xl text-black font-medium text-center">
                            10
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
                            RM2578.58
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
