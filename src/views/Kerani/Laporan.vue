<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";

document.title = "Laporan | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="laporan" />
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
            <!-- Breadcrumbs -->
            <h1 class="mt-3 mb-2 font-semibold text-xl">LAPORAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red">
                    >> &nbsp; Laporan</span
                >
            </p>

            <!-- Bilangan pelajar -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <h1 class="mt-3 mb-2 font-semibold text-xl">
                    Laporan Statistik Bilangan Pelajar
                </h1>
                <div v-if="totalStudents !== null">
                    <BarChart
                        :chartData="chartData1"
                        :chartOptions="chartOptions"
                    />
                </div>
                <div v-else>
                    <p>Loading...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from "../../components/BarChart.vue";
import axios from "axios";
import { reactive, toRef } from "vue";
import { LogRequest } from "pocketbase";
// import { LogRequest } from "pocketbase";

export default {
    data() {
        // Get months
        const months = [
            "Januari",
            "Februari",
            "Mac",
            "April",
            "Mei",
            "Jun",
            "Julai",
            "Ogos",
            "September",
            "Oktober",
            "November",
            "Disember",
        ];

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth(); // Get the index of the current month (0-11)

        const monthLabels = [];
        for (let i = 4; i >= 0; i--) {
            const monthIndex = (currentMonth - i + 12) % 12;
            const monthName = months[monthIndex];
            monthLabels.push(monthName);
        }

        return {
            chartData1: {
                labels: monthLabels,
                datasets: [
                    {
                        label: "Pelajar",
                        backgroundColor: "#F59095",
                        data: [1, 2, 3, 4, 5],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
            },
            totalStudents: "",
        };
        const totalStudents = reactive({ value: null });
    },

    async mounted() {
        try {
            const response = await axios.get(
                "http://localhost:3001/api/totalstudents"
            );
            this.totalStudents = response.data;
            this.chartData1.datasets[0].data = this.totalStudents;
            this.$set(this.chartData1.datasets[0], "data", this.totalStudents); // Use $set to ensure reactivity
        } catch (error) {
            console.error("Error:", error);
        }
    },

    methods: {
        // updateChartData() {
        //     // Modify the data array
        //     this.chartData1.datasets[0].data = [10, 20, 30, 40, 50]; // Change the data values here
        // },
    },
};
</script>
