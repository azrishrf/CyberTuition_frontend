<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";

document.title = "Dashboard | Pelajar";

// Kemaskin profil
async function kemaskiniProfilDiri() {
    router.push("/pelajar/profil/kemaskiniprofildiri");
}
// Ubah Kata Laluan
async function ubahKataLaluan() {
    router.push("/pelajar/profil/katalaluan");
}
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SideBarPelajar linkActive="laporan" />
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
            <h1 class="my-2 font-semibold text-xl">LAPORAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Laporan</span
                >
            </p>

            <!-- Profil Diri -->
            <!-- Maklumat Pelajar -->
            <div class="shadow-login bg-white py-7 px-36 rounded-2xl my-5">
                <div class="text-center">
                    <img
                        src="../../../assets/Logo V1.jpg.png"
                        class="w-60 m-auto"
                    />
                    <h1 class="font-semibold">LAPORAN PELAJAR</h1>
                    <h1 class="font-semibold mb-5">{{ this.formattedDate }}</h1>
                </div>

                <div class="flex">
                    <!-- 1 -->
                    <div class="grow">
                        <!-- Maklumat Diri -->
                        <div>
                            <h1 class="font-semibold my-2">
                                Maklumat Diri Pelajar
                            </h1>
                            <table class="text-sm w-4/5">
                                <tr>
                                    <td class="font-semibold pb-2 w-3/6">
                                        Nama Penuh:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        {{ this.studentData.nameStudent }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">E-mel:</td>
                                    <td class="text-fontgrey font-medium">
                                        {{ this.user.email }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        No Kad Pengenalan:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        {{ this.studentData.noICStudent }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Tingkatan:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        {{ this.studentData.form }}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <!-- Kedatangan -->
                        <div class="mt-10">
                            <h1 class="font-semibold my-2">Kedatangan</h1>
                            <table class="text-sm w-4/5">
                                <tr>
                                    <td class="font-semibold pb-2 w-3/6">
                                        Jumlah Kelas Yang Diambil:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        {{ this.studentSubject.length }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Kelas Hadir:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        {{ this.totalAttend.length }} /
                                        {{ this.attendanceCurrentMonth.length }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Peratus Hadir:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        {{
                                            (
                                                (this.totalAttend.length /
                                                    this.attendanceCurrentMonth
                                                        .length) *
                                                100
                                            ).toFixed(2)
                                        }}%
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Kelas Tidak Hadir:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        {{
                                            this.attendanceCurrentMonth.length -
                                            this.totalAttend.length
                                        }}
                                        /
                                        {{ this.attendanceCurrentMonth.length }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Peratus Tidak Hadir:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        {{
                                            100 -
                                            (
                                                (this.totalAttend.length /
                                                    this.attendanceCurrentMonth
                                                        .length) *
                                                100
                                            ).toFixed(2)
                                        }}%
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="grow">
                        <!-- Kelas -->
                        <h1 class="font-semibold my-2">Kelas</h1>
                        <div
                            v-for="subjectData in studentSubject"
                            :key="subjectData.idStudentSubject"
                        >
                            <p class="text-sm font-semibold pb-2">
                                &bull; {{ subjectData.subject.name }}
                            </p>
                        </div>

                        <!-- Yuran -->
                        <div class="mt-12">
                            <h1 class="font-semibold my-2">Yuran</h1>
                            <table class="text-sm w-4/5">
                                <tr>
                                    <td class="font-semibold pb-2 w-3/6">
                                        Jumlah Yuran:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        RM
                                        {{
                                            this.tuitionFeeCurrentMonth.length >
                                            0
                                                ? this.tuitionFeeCurrentMonth[0]
                                                      .amount + ".00"
                                                : "0.00"
                                        }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">
                                        Yuran Belum Dibayar:
                                    </td>
                                    <td class="text-fontgrey font-medium">
                                        <p
                                            v-if="
                                                this.tuitionFeeCurrentMonth
                                                    .length > 0 &&
                                                this.tuitionFeeCurrentMonth[0]
                                                    .isPaid === true
                                            "
                                        >
                                            RM 0
                                        </p>
                                        <p v-else>
                                            RM
                                            {{
                                                this.tuitionFeeCurrentMonth
                                                    .length > 0
                                                    ? this
                                                          .tuitionFeeCurrentMonth[0]
                                                          .amount + ".00"
                                                    : "0.00"
                                            }}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-2">Bulan:</td>
                                    <td class="text-fontgrey font-medium">
                                        {{ this.formattedDate }}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2 -->
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
            userEmail: "",
            studentId: "",
            formattedDate: "",
            attendances: [],
            studentSubject: [],
            attendanceCurrentMonth: [],
            totalAttend: [],
            tuitionFee: [],
            tuitionFeeCurrentMonth: [],
        };
    },

    async mounted() {
        // Get Student Data
        axios.get(`http://localhost:3001/api/user/${user}`).then((response) => {
            this.user = response.data;
            // console.log(response.data.student.idStudent);
            this.studentId = response.data.student.idStudent;

            // console.log(this.studentId);
            axios
                .get(`http://localhost:3001/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    this.attendances = this.studentData.student_Attendance;
                    this.studentSubject = this.studentData.student_Subject;
                    this.tuitionFee = this.studentData.tuitionFee;
                    console.log(this.tuitionFee);

                    this.filterAttendanceCurrentMonth();
                    this.filterTotalAttend();
                    this.filterTuitionFee();
                });

            const currentDate = new Date();
            const monthNames = [
                "JANUARI",
                "FEBRUARI",
                "MAC",
                "APRIL",
                "MEI",
                "JUN",
                "JULAI",
                "OGOS",
                "SEPTEMBER",
                "OKTOBER",
                "NOVEMBER",
                "DISEMBER",
            ];
            this.month = monthNames[currentDate.getMonth()];
            const currentYear = currentDate.getFullYear();
            this.formattedDate = `${this.month} ${currentYear}`;
        });
    },

    methods: {
        filterAttendanceCurrentMonth() {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
            const currentYear = currentDate.getFullYear();

            this.attendanceCurrentMonth = this.attendances.filter(
                (attendance) => {
                    const attendanceDate = new Date(attendance.attendance.date);
                    const attendanceMonth = attendanceDate.getMonth() + 1;
                    const attendanceYear = attendanceDate.getFullYear();

                    return (
                        attendanceMonth === currentMonth &&
                        attendanceYear === currentYear
                    );
                }
            );
        },

        filterTotalAttend() {
            this.totalAttend = this.attendanceCurrentMonth.filter(
                (attendance) => attendance.isAttend === true
            );
            return this.totalAttend;
        },

        filterTuitionFee() {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
            console.log(currentMonth);

            this.tuitionFeeCurrentMonth = this.tuitionFee.filter(
                (tuitionFee) => tuitionFee.month === currentMonth
            );
            console.log(this.tuitionFeeCurrentMonth);
        },
    },
};
</script>
