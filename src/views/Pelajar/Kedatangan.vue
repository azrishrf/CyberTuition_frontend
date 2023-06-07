<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";
document.title = "Kedatangan | Pelajar";
// import SubmitButton from "../../components/SubmitButton.vue";

// imbas Kod QR
async function imbasKodQR() {
    router.push("/pelajar/kedatangan/imbasankodqr");
}
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SideBarPelajar linkActive="kedatangan" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
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
            <h1 class="my-2 font-semibold text-xl">KELAS</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kelas</span
                >
            </p>

            <!-- Imbas Kod QR -->
            <div
                class="shadow-login bg-white py-4 px-5 rounded-2xl my-6 w-7/12 flex"
            >
                <div>
                    <h1 class="text-base font-semibold my-2">Imbasan Kod QR</h1>
                    <p class="text-fontgrey font-medium text-sm mt-2 mb-4">
                        Urusan pengambilan kedatangan akan menjadi lebih pantas
                        dan mudah dengan menggunakan pengimbas kod QR
                    </p>
                    <button
                        class="bg-red text-white py-2 px-5 text-xs rounded-2xl font-semibold"
                        @click="imbasKodQR()"
                    >
                        Imbas Kod QR
                    </button>
                </div>

                <img src="../../../assets/scan1.png" class="w-48 h-full" />
            </div>

            <!-- Butiran Kedatangan -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <h1 class="text-base font-semibold my-2">Butiran Kedatangan</h1>
                <table class="w-3/4 text-center my-5">
                    <tr class="bg-red text-sm text-white">
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
                        class="text-fontgrey text-sm border-b-2"
                        v-for="attendanceData in attendances"
                    >
                        <td class="py-3 text-center">
                            {{ attendances.indexOf(attendanceData) + 1 }}
                        </td>
                        <td class="font-semibold">
                            {{ attendanceData.attendance.subject.name }}
                        </td>
                        <td class="font-semibold">
                            {{ convertDate(attendanceData.attendance.date) }}
                        </td>
                        <td class="font-semibold">
                            {{ convertDay(attendanceData.attendance.date) }}
                        </td>
                        <td class="font-semibold">
                            {{ attendanceData.attendance.time }}
                        </td>
                        <td
                            class="font-semibold text-green"
                            v-if="attendanceData.isAttend === true"
                        >
                            Hadir
                        </td>
                        <td class="font-semibold text-red" v-else>
                            Tidak Hadir
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));

export default {
    data() {
        return {
            studentData: "",
            studentId: "",
            attendances: "",
            statusAttendance: false,
        };
    },

    async mounted() {
        // Get Student Data
        axios.get(`http://localhost:3001/api/user/${user}`).then((response) => {
            // console.log(response.data.student.idStudent);
            this.studentId = response.data.student.idStudent;
            // console.log(this.studentId);
            axios
                .get(`http://localhost:3001/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    console.log(this.studentData);
                    this.attendances = this.studentData.student_Attendance;
                    console.log(this.attendances);
                    this.sortAttendancesByDate(); // Call the sorting method
                });
        });

        const date = new Date();
        const dateString = date.toISOString().substring(0, 10);
        console.log(dateString);
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
    },
};
</script>
