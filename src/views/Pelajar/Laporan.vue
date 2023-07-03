<template>
    <SideBarPelajar linkActive="laporan">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">LAPORAN</h1>
            <p class="mb-5 font-semibold text-xs md:text-xs text-black">
                Dashboard &nbsp;
                <span class="font-semibold text-xs text-red"
                    >> &nbsp; Laporan</span
                >
            </p>
            <!-- Loading -->
            <div
                class="fixed inset-0 flex items-center justify-center z-50"
                v-if="loading"
            >
                <Loading />
            </div>
            <div v-if="!loading">
                <!-- Maklumat Pelajar -->
                <div
                    class="shadow-login bg-white py-2 px-3 lg:py-7 lg:px-36 rounded-2xl mb-5"
                    id="data-laporan"
                >
                    <div class="text-center">
                        <img
                            src="/LogoCyberTuition.png"
                            class="w-40 lg:w-64 m-auto"
                        />
                        <h1 class="font-semibold text-sm">LAPORAN PELAJAR</h1>
                        <h1 class="font-semibold mb-1 lg:mb-5 text-sm">
                            {{ this.formattedDate }}
                        </h1>
                    </div>

                    <!-- Laporan -->
                    <div class="flex lg:pl-10 flex-col md:flex-row md:gap-8">
                        <!-- 1 -->
                        <div class="grow">
                            <!-- Pelajar -->
                            <div class="flex flex-col lg:w-128 mb-5">
                                <h1
                                    class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                                >
                                    Maklumat Diri Pelajar
                                </h1>
                                <table class="text-xs bg-slate-100 rounded-2xl">
                                    <tr>
                                        <td
                                            class="font-semibold py-3 w-28 block"
                                        >
                                            Nama Penuh:
                                        </td>
                                        <td
                                            class="font-semibold py-3 px-2 text-center text-fontgrey"
                                        >
                                            {{ this.studentData.nameStudent }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-semibold pb-3 pl-4">
                                            E-mel:
                                        </td>
                                        <td
                                            class="font-semibold pb-3 px-2 text-fontgrey"
                                        >
                                            {{ this.userEmail }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-semibold pb-3 pl-4">
                                            No KP:
                                        </td>
                                        <td
                                            class="font-semibold pb-3 px-2 text-fontgrey"
                                        >
                                            {{ this.studentData.noICStudent }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-semibold pb-3 pl-4">
                                            Tingkatan:
                                        </td>
                                        <td
                                            class="font-semibold pb-3 px-2 text-fontgrey"
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
                            <div class="flex flex-col lg:w-96 mb-5">
                                <h1
                                    class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                                >
                                    Yuran
                                </h1>
                                <table class="text-xs bg-slate-100 rounded-2xl">
                                    <tr>
                                        <td class="font-semibold py-3 pl-4">
                                            Jumlah Yuran:
                                        </td>
                                        <td
                                            class="font-semibold py-3 px-4 text-fontgrey"
                                        >
                                            RM
                                            {{
                                                tuitionFeeCurrentMonth.amount
                                            }}.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-semibold pb-3 pl-4">
                                            Yuran Telah Dibayar:
                                        </td>
                                        <td
                                            class="font-semibold pb-3 px-4 text-fontgrey"
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
                                            class="font-semibold pb-3 px-4 text-fontgrey"
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

                    <div
                        class="flex justify-center md:gap-3 lg:gap-10 flex-col md:flex-row"
                    >
                        <!-- Kedatangan -->
                        <div
                            class="flex flex-col lg:w-72 mb-5"
                            v-for="subjectData in subjectsData"
                        >
                            <h1
                                class="font-semibold my-2 bg-gray-600 text-sm text-white py-2 px-2 rounded-2xl text-center w-full"
                            >
                                Subjek {{ subjectData.subjectName }}
                            </h1>
                            <table class="text-xs bg-slate-100 rounded-2xl">
                                <tr>
                                    <td class="font-semibold py-3 pl-4">
                                        Jumlah Kelas:
                                    </td>
                                    <td
                                        class="font-semibold py-3 px-4 text-fontgrey"
                                    >
                                        {{ subjectData.totalClass }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Kelas Hadir:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-fontgrey"
                                    >
                                        {{ subjectData.attendanceCount }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Peratus Hadir:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-fontgrey"
                                    >
                                        {{ subjectData.attendancePercentage }}%
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Kelas Tidak Hadir:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-fontgrey"
                                    >
                                        {{ subjectData.classNotAttended }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold pb-3 pl-4">
                                        Peratus Tidak Hadir:
                                    </td>
                                    <td
                                        class="font-semibold pb-3 px-4 text-fontgrey"
                                    >
                                        {{
                                            subjectData.notAttendancePercentage
                                        }}%
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
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
            userEmail: "",
            formattedDate: "",
            attendances: [],
            studentSubject: [],
            attendanceCurrentMonth: [],
            totalAttend: [],
            tuitionFee: [],
            tuitionFeeCurrentMonth: [],
            subjectsData: {},
            loading: false,
        };
    },

    async mounted() {
        document.title = "Dashboard | Pelajar";
        this.loading = true;

        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.userEmail = response.data.email;
            this.studentId = response.data.student.idStudent;

            axios
                .get(baseAPI + `/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    this.attendances = this.studentData.student_Attendance;
                    this.studentSubject = this.studentData.student_Subject;
                    this.tuitionFee = this.studentData.tuitionFee;

                    this.filterAttendanceCurrentMonth();
                    this.filterTotalAttend();
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
                .get(baseAPI + `/api/tuitionfeereport/${this.studentId}`)
                .then((response) => {
                    this.tuitionFeeCurrentMonth = response.data;
                    this.loading = false;
                });

            // Get data attendance
            axios
                .get(baseAPI + `/api/student/classes/${this.studentId}`)
                .then((response) => {
                    this.subjectsData = response.data.subjectData;
                    this.loading = false;
                });
        });
        // this.loading = false;
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
        // Generate pdf
        // generatePDF() {
        //     const element = document.getElementById("data-laporan");

        //     html2pdf()
        //         .set({
        //             html2canvas: {
        //                 scale: 2, // Adjust the scale value to make the PDF smaller (e.g., 2 for half the size)
        //             },
        //             pagebreak: { mode: "avoid-all" }, // Optional: Set page break mode to avoid splitting content across pages
        //             filename: `Laporan Bulanan Pelajar.pdf`, // Optional: Set the desired file name
        //             jsPDF: {
        //                 orientation: "landscape", // Set the page orientation to landscape
        //             },
        //         })

        //         .from(element)
        //         .save();
        // },
    },
};
</script>
