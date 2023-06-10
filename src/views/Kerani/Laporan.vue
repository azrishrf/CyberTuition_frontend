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
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Laporan</span
                >
            </p>

            <!-- Bilangan pelajar -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <h1 class="mt-3 mb-2 font-semibold text-xl">
                    Laporan Statistik Bilangan Pelajar
                </h1>
                <div>
                    <BarChart
                        :chartData="chartData1"
                        :chartOptions="chartOptions"
                    />
                </div>
            </div>

            <!-- Bilangan guru -->
            <!-- <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <h1 class="mt-3 mb-2 font-semibold text-xl">
                    Laporan Statistik Bilangan Guru
                </h1>
                <div>
                    <BarChart
                        :chartData="chartData2"
                        :chartOptions="chartOptions"
                    />
                </div>
            </div> -->

            <!-- Combined chart -->
            <!-- <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <h1 class="mt-3 mb-2 font-semibold text-xl">Combined Graph</h1>
                <div>
                    <BarChart
                        :chartData="combinedChartData"
                        :chartOptions="chartOptions"
                    />
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import BarChart from "../../components/BarChart.vue";
import axios from "axios";

export default {
    name: "BarChart",
    components: { BarChart },
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
                        data: [],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
            },
        };
    },
    async mounted() {
        try {
            const response = await axios.get(
                "http://localhost:3001/api/totalstudents"
            );
            const totalStudents = response.data;
            console.log("Total Students:", totalStudents);
            this.chartData1.datasets[0].data = totalStudents;
            console.log(this.chartData1.datasets[0].data);
        } catch (error) {
            console.error("Error:", error);
        }
    },
};
</script>
