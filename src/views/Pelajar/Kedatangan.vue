<template>
    <SideBarPelajar linkActive="kedatangan">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">KEDATANGAN</h1>
            <p class="mb-5 font-semibold text-xs md:text-xs text-black">
                Dashboard &nbsp;
                <span class="font-semibold text-xs text-red"
                    >> &nbsp; Kedatangan</span
                >
            </p>
            <!-- Loading -->
            <div
                class="fixed inset-0 flex items-center justify-center z-50"
                v-if="loading"
            >
                <Loading />
            </div>
            <!-- Imbas Kod QR -->
            <div
                class="shadow-login bg-white py-4 px-5 rounded-2xl w-full md:w-9/12 flex items-center"
            >
                <div>
                    <h1 class="text-base font-semibold">Imbasan Kod QR</h1>
                    <p
                        class="text-fontgrey font-medium text-xs lg:text-sm mb-4"
                    >
                        Urusan pengambilan kedatangan akan menjadi lebih pantas
                        dan mudah dengan menggunakan pengimbas kod QR
                    </p>
                    <button
                        class="bg-red hover:bg-darkred text-white py-2 px-5 text-xs rounded-2xl font-semibold"
                        @click="imbasKodQR()"
                    >
                        Imbas Kod QR
                    </button>
                </div>

                <img src="/scan1.png" class="w-32 md:w-44 h-full" />
            </div>

            <!-- Butiran Kedatangan -->
            <div
                class="shadow-login bg-white py-4 px-3 md:px-5 rounded-2xl my-3"
            >
                <h1 class="text-base font-semibold ml-2 md:ml-0">
                    Butiran Kedatangan
                </h1>
                <table
                    class="w-3/4 text-center my-2 md:my-5"
                    v-if="attendances.length > 0"
                >
                    <tr class="bg-red text-xs md:text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Kelas</th>
                        <th class="font-semibold">Tarikh</th>
                        <th class="font-semibold">Hari</th>
                        <th class="font-semibold">Masa</th>
                        <th class="font-semibold rounded-r-2xl">Status</th>
                    </tr>

                    <tr
                        class="text-fontgrey text-xs md:text-sm border-b-2"
                        v-for="attendanceData in attendances"
                    >
                        <td class="py-3 text-center">
                            {{ attendances.indexOf(attendanceData) + 1 }}
                        </td>
                        <td class="font-semibold px-2">
                            {{ attendanceData.attendance.subject.name }}
                        </td>
                        <td class="font-semibold px-2 py-1">
                            {{ convertDate(attendanceData.attendance.date) }}
                        </td>
                        <td class="font-semibold px-2">
                            {{ convertDay(attendanceData.attendance.date) }}
                        </td>
                        <td class="font-semibold px-2">
                            {{ attendanceData.attendance.time }}
                        </td>
                        <td
                            class="font-semibold text-green px-2"
                            v-if="attendanceData.isAttend === true"
                        >
                            Hadir
                        </td>
                        <td class="font-semibold text-red px-2" v-else>
                            Tidak Hadir
                        </td>
                    </tr>
                </table>
                <div v-else>
                    <p class="text-center text-red font-semibold py-6">
                        Tiada data kedatangan yang direkodkan
                    </p>
                </div>
            </div>
        </template>
    </SideBarPelajar>
</template>

<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { baseAPI } from "../../stores";
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";
import Loading from "../../components/Loading.vue";

export default {
    components: {
        SideBarPelajar,
        Loading,
    },
    data() {
        return {
            studentData: "",
            studentId: "",
            attendances: "",
            statusAttendance: false,
            loading: false,
        };
    },

    async mounted() {
        document.title = "Kedatangan | Pelajar";
        this.loading = true;

        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.studentId = response.data.student.idStudent;

            axios
                .get(baseAPI + `/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    this.attendances = this.studentData.student_Attendance;
                    this.sortAttendancesByDate(); // Call the sorting method
                    this.loading = false;
                });
        });

        const date = new Date();
        const dateString = date.toISOString().substring(0, 10);
    },

    methods: {
        sortAttendancesByDate() {
            this.attendances.sort((a, b) => {
                const dateA = new Date(a.attendance.date);
                const dateB = new Date(b.attendance.date);
                return dateA - dateB;
            });
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
        // imbas Kod QR
        imbasKodQR() {
            router.push("/pelajar/kedatangan/imbasankodqr");
        },
    },
};
</script>
