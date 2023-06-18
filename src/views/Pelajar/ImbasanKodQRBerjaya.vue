<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";
import SubmitButton from "../../components/SubmitButton.vue";

document.title = "Imbasan Kod QR | Pelajar";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <!-- <SideBarPelajar linkActive="kedatangan" /> -->
        <!-- Page Content -->
        <div class="w-full px-8 lg:px-12 py-4">
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
            <h1 class="mt-2 font-semibold text-xl">IMBASAN KOD QR</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Kedatangan &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Imbasan Kod QR</span
                >
            </p>
            <!-- Div berjaya -->
            <div class="flex justify-center">
                <div
                    class="shadow-login bg-white rounded-2xl my-6 w-11/12 md:w-8/12"
                >
                    <div
                        class="bg-green w-full px-6 py-4 rounded-t-2xl flex flex-col items-center"
                    >
                        <i
                            class="fa-solid fa-circle-check text-7xl"
                            style="color: #ffffff"
                        ></i>
                        <p class="font-semibold text-lg text-white my-2">
                            Imbasan Kod QR Berjaya
                        </p>
                    </div>
                    <div class="flex justify-center py-5">
                        <div class="px-4 flex flex-col gap-2">
                            <p class="font-semibold text-black text-sm">
                                Nama:
                            </p>
                            <p class="font-semibold text-black text-sm">
                                Nama subjek:
                            </p>
                            <p class="font-semibold text-black text-sm">
                                Tarikh:
                            </p>
                            <p class="font-semibold text-black text-sm">
                                Hari:
                            </p>
                            <p class="font-semibold text-black text-sm">
                                Masa:
                            </p>
                            <p class="font-semibold text-black text-sm">
                                Status:
                            </p>
                        </div>
                        <div class="pl-4 flex flex-col gap-2">
                            <p class="font-semibold text-fontgrey text-sm">
                                {{ studentData.nameStudent }}
                            </p>
                            <p class="font-semibold text-fontgrey text-sm">
                                {{ subjectData.name }}
                            </p>
                            <p class="font-semibold text-fontgrey text-sm">
                                {{ convertDate(attendanceData.date) }}
                            </p>
                            <p class="font-semibold text-fontgrey text-sm">
                                {{ convertDay(attendanceData.date) }}
                            </p>
                            <p class="font-semibold text-fontgrey text-sm">
                                {{ attendanceData.time }}
                            </p>
                            <p class="font-semibold text-fontgrey text-sm">
                                Hadir
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center pb-6">
                        <SubmitButton
                            type="submit"
                            txt="Kedatangan"
                            class="px-3 py-1 text-sm font-semibold"
                            @click="redirectKedatangan()"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            studentAttendanceData: router.currentRoute.value.params.id,
            studentData: {},
            subjectData: {},
            attendanceData: {},
        };
    },

    async mounted() {
        const response = await axios.get(
            baseAPI + `/api/studentAttendance/${this.studentAttendanceData}`
        );
        this.studentAttendanceData = response.data;
        this.studentData = this.studentAttendanceData.student;
        this.subjectData = this.studentAttendanceData.attendance.subject;
        this.attendanceData = this.studentAttendanceData.attendance;

        // location.reload();
        if (!sessionStorage.getItem("pageReloaded")) {
            sessionStorage.setItem("pageReloaded", "true");
            location.reload();
        }
    },
    methods: {
        redirectKedatangan() {
            router.push("/pelajar/kedatangan");
        },
        convertDate(dateString) {
            const options = {
                day: "numeric",
                month: "long",
                year: "numeric",
            };
            const date = new Date(dateString);
            return date.toLocaleDateString("ms-MY", options);
        },
        convertDay(dateString) {
            const options = {
                weekday: "long",
            };
            const date = new Date(dateString);
            return date.toLocaleDateString("ms-MY", options);
        },
    },
};
</script>
