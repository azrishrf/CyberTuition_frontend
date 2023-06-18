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

                <!-- New -->
                <div class="flex pl-10">
                    <!-- 1 -->
                    <div class="grow">
                        <!-- Pelajar -->
                        <div class="flex flex-col w-128 mb-5">
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Maklumat Diri Pelajar
                            </h1>
                            <table class="text-sm bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Nama Penuh:
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-center text-fontgrey"
                                    >
                                        {{ this.studentData.nameStudent }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        E-mel:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        {{ this.user.email }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        No Kad Pengenalan:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        {{ this.studentData.noICStudent }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Tingkatan:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        {{ this.studentData.form }}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="grow">
                        <!-- Yuran -->
                        <div class="flex flex-col w-96 mb-5">
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Yuran
                            </h1>
                            <table class="text-sm bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Jumlah Yuran:
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-center text-fontgrey"
                                    >
                                        RM
                                        {{ tuitionFeeCurrentMonth.amount }}.00
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Yuran Telah Dibayar:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        <p
                                            v-if="
                                                tuitionFeeCurrentMonth.statusPayment ===
                                                'Telah Dibayar'
                                            "
                                        >
                                            RM
                                            {{
                                                tuitionFeeCurrentMonth.amount
                                            }}.00
                                        </p>
                                        <p v-else>RM 0</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Yuran Belum Dibayar:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                    >
                                        <p
                                            v-if="
                                                tuitionFeeCurrentMonth.statusPayment ===
                                                'Telah Dibayar'
                                            "
                                        >
                                            RM 0
                                        </p>
                                        <p v-else>
                                            RM
                                            {{
                                                tuitionFeeCurrentMonth.amount
                                            }}.00
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center gap-10">
                    <!-- Kedatangan -->
                    <div
                        class="flex flex-col w-72 mb-5"
                        v-for="subjectData in subjectsData"
                    >
                        <h1
                            class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                        >
                            Subjek {{ subjectData.subjectName }}
                        </h1>
                        <table class="text-sm bg-slate-100 rounded-2xl">
                            <tr>
                                <td class="font-semibold py-3 pl-4">
                                    Jumlah Kelas:
                                </td>
                                <td
                                    class="font-semibold py-3 px-4 text-center text-fontgrey"
                                >
                                    {{ subjectData.totalClass }}
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold pb-3 pl-4">
                                    Kelas Hadir:
                                </td>
                                <td
                                    class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                >
                                    {{ subjectData.attendanceCount }}
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold pb-3 pl-4">
                                    Peratus Hadir:
                                </td>
                                <td
                                    class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                >
                                    {{ subjectData.attendancePercentage }}%
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold pb-3 pl-4">
                                    Kelas Tidak Hadir:
                                </td>
                                <td
                                    class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                >
                                    {{ subjectData.classNotAttended }}
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold pb-3 pl-4">
                                    Peratus Tidak Hadir:
                                </td>
                                <td
                                    class="font-semibold pb-3 px-4 text-center text-fontgrey"
                                >
                                    {{ subjectData.notAttendancePercentage }}%
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
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
            userEmail: "",
            studentId: "",
            formattedDate: "",
            attendances: [],
            studentSubject: [],
            attendanceCurrentMonth: [],
            totalAttend: [],
            tuitionFee: [],
            tuitionFeeCurrentMonth: [],
            subjectsData: {},
        };
    },

    async mounted() {
        // Get Student Data
        axios.get(`http://localhost:3001/api/user/${user}`).then((response) => {
            this.user = response.data;

            this.studentId = response.data.student.idStudent;

            axios
                .get(`http://localhost:3001/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    this.attendances = this.studentData.student_Attendance;
                    this.studentSubject = this.studentData.student_Subject;
                    this.tuitionFee = this.studentData.tuitionFee;

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

            // Get data tuition fee
            axios
                .get(
                    `http://localhost:3001/api/tuitionfeereport/${this.studentId}`
                )
                .then((response) => {
                    this.tuitionFeeCurrentMonth = response.data;
                    console.log(this.tuitionFeeCurrentMonth);
                });

            // Get data attendance
            axios
                .get(
                    `http://localhost:3001/api/student/classes/${this.studentId}`
                )
                .then((response) => {
                    this.subjectsData = response.data.subjectData;
                });
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

        // filterTuitionFee() {
        //     const currentDate = new Date();
        //     const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

        //     this.tuitionFeeCurrentMonth = this.tuitionFee.filter(
        //         (tuitionFee) => tuitionFee.month === currentMonth
        //     );

        //     console.log(this.tuitionFeeCurrentMonth);
        // },
    },
};
</script>
