<template>
    <SideBarPelajar linkActive="kedatangan">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">
                IMBASAN KOD QR
            </h1>
            <p class="mb-5 font-semibold text-xs md:text-xs text-black">
                Dashboard &nbsp; > &nbsp; Kedatangan &nbsp;
                <span class="font-semibold text-xs text-red"
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
        </template>
    </SideBarPelajar>
</template>

<script>
import axios from "axios";
import { baseAPI } from "../../stores";
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";
import SubmitButton from "../../components/SubmitButton.vue";

export default {
    components: {
        SideBarPelajar,
        SubmitButton,
    },
    data() {
        return {
            studentAttendanceData: router.currentRoute.value.params.id,
            studentData: {},
            subjectData: {},
            attendanceData: {},
        };
    },

    async mounted() {
        document.title = "Imbasan Kod QR | Pelajar";

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
