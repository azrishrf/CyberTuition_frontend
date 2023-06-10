<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

export default {
    name: "BarChart",
    components: { Bar },
    props: {
        chartData: {
            type: Object,
            required: true,
        },
        chartOptions: {
            type: Object,
            default: () => {},
        },
    },
    mounted() {
        this.renderChart();
    },
    watch: {
        chartData: {
            deep: true,
            handler() {
                this.renderChart();
            },
        },
    },
    methods: {
        renderChart() {
            if (this.$refs.chart) {
                this.$refs.chart.renderChart(this.chartData, this.chartOptions);
            }
        },
    },
};
</script>
