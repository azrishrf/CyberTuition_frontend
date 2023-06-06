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
                Dashboard &nbsp; > Kedatangan
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Papar Kod QR</span
                >
            </p>

            <!-- Kelas -->
            <h1 class="font-semibold text-lg mt-4 mb-1">Bahasa Inggeris</h1>
            <p class="font-semibold text-sm text-fontgrey">
                Sabtu (9 Julai 2022)
            </p>

            <!-- Total -->
            <div class="flex justify-center gap-5 mb-10">
                <div
                    class="bg-white shadow-login flex py-3 px-3 items-center rounded-2xl"
                >
                    <div>
                        <img
                            src="../../../assets/student.png"
                            class="w-14 h-full"
                        />
                    </div>
                    <div class="px-5 flex-col-reverse">
                        <p class="text-sm">Jumlah Pelajar</p>
                        <p class="text-xl text-black font-medium text-center">
                            12
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-3 px-3 items-center rounded-2xl"
                >
                    <div>
                        <img
                            src="../../../assets/hadir.png"
                            class="w-14 h-full"
                        />
                    </div>
                    <div class="px-6 flex-col-reverse">
                        <p class="text-sm">Jumlah Hadir</p>
                        <p class="text-xl text-black font-medium text-center">
                            10
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-3 px-3 items-center rounded-2xl"
                >
                    <div>
                        <img
                            src="../../../assets/tidak hadir.png"
                            class="w-14 h-full"
                        />
                    </div>
                    <div class="px-6 flex-col-reverse">
                        <p class="text-sm">Jumlah Tidak Hadir</p>
                        <p class="text-xl text-black font-medium text-center">
                            2
                        </p>
                    </div>
                </div>
            </div>

            <!-- kod qr -->
            <!-- <div
                class="bg-white shadow-login rounded-2xl py-4 text-center"
                style="width: 500px; height: 500px; margin: 0 auto"
            >
                <img src="../../../assets/kodqr.png" class="p-8" />
            </div> -->
            <!-- test kod QR -->
            <canvas ref="canvasQR" class="mx-auto"></canvas>
        </div>
    </div>
</template>
<script>
import QRCode from "qrcode";
export default {
    data() {
        return {};
    },
    mounted() {
        QRCode.toCanvas(
            this.$refs.canvasQR,
            "c3419775-b668-47c9-b490-352f12fb5d82",
            { width: 350, height: 350 },
            function (error) {
                if (error) console.error(error);
                console.log("success!");
            }
        );
    },
    methods: {},
};
</script>
