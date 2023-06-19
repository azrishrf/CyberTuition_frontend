<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="kelas" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-32 text-white text-sm px-5 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user"></i>Kerani
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="mt-3 mb-2 font-semibold text-xl">MAKLUMAT SUBJEK</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Subjek &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Maklumat Subjek</span
                >
            </p>
            <!-- Maklumat Kelas Router -->
            <RouterView />

            <div class="shadow-login bg-white py-5 px-11 rounded-2xl my-5">
                <h1 class="mt-2 mb-4 font-semibold text-lg">
                    Kedatangan Bulanan Pelajar
                </h1>

                <div class="flex gap-20">
                    <div class="">
                        <!-- Bulan-->
                        <p class="text-sm mb-3">Bulan</p>
                        <select
                            placeholder="Bulan"
                            name="Bulan"
                            v-model="month"
                            class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-3 text-sm w-80"
                        >
                            <option disabled value="">-- Pilih Bulan --</option>
                            <option
                                v-for="option in monthOptions"
                                :value="option.value"
                            >
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                    <div class="">
                        <!-- Tahun -->
                        <p class="text-sm mb-3">Tahun</p>
                        <select
                            placeholder="Tahun"
                            name="Tahun"
                            v-model="year"
                            class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-3 text-sm w-80"
                        >
                            <option disabled value="">-- Pilih Tahun --</option>
                            <option
                                v-for="yearOption in yearOptions"
                                :value="yearOption.value"
                                :key="yearOption.value"
                            >
                                {{ yearOption.text }}
                            </option>
                        </select>
                    </div>
                    <div class="my-auto mt-9">
                        <SubmitButton
                            type="button"
                            txt="Sahkan"
                            class="px-8 bg-slate-700 hover:bg-slate-800"
                            @click="submit()"
                        />
                    </div>
                </div>
                <p
                    class="error-message text-xs text-red grow mb-3 font-semibold"
                >
                    {{ errorMessage }}
                </p>
            </div>
            <!-- Content -->
            <div
                class="bg-white my-6 rounded-2xl py-5 px-11 shadow-login"
                v-if="showAttendance"
            >
                <div v-if="attendanceData.length > 0">
                    <h1 class="text-lg font-semibold mb-4">Senarai Pelajar</h1>
                    <!-- Jadual Senarai Pelajar -->
                    <table class="text-center">
                        <thead>
                            <tr class="bg-red text-sm text-white">
                                <th
                                    class="font-semibold py-2 px-2 rounded-l-2xl"
                                    style="width: 3rem"
                                >
                                    No
                                </th>
                                <th
                                    class="font-semibold py-2 px-2"
                                    style="width: 25rem"
                                >
                                    Nama Penuh
                                </th>
                                <th
                                    class="font-semibold py-2 px-2"
                                    style="width: 8rem"
                                >
                                    Tingkatan
                                </th>
                                <th
                                    v-for="(
                                        attendance, index
                                    ) in attendanceData"
                                    :key="attendance.date"
                                    class="font-semibold py-2 px-2"
                                    :class="{
                                        'rounded-r-2xl':
                                            index === attendanceData.length - 1,
                                    }"
                                    style="width: 10rem"
                                >
                                    {{ formatDate(attendance.date) }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(student, index) in studentData"
                                :key="student.idStudent"
                                class="text-fontgrey text-sm border-b-2"
                            >
                                <td class="py-3 text-center">
                                    {{ index + 1 }}
                                </td>
                                <td class="font-semibold py-3">
                                    {{ student.nameStudent }}
                                </td>
                                <td class="font-semibold py-3">
                                    {{ student.form }}
                                </td>
                                <td
                                    v-for="attendance in attendanceData"
                                    :key="attendance.date"
                                    class="font-semibold py-3"
                                    :class="{
                                        'text-green':
                                            getAttendanceStatus(
                                                student.idStudent,
                                                attendance.date
                                            ) === 'Hadir',
                                        'text-red':
                                            getAttendanceStatus(
                                                student.idStudent,
                                                attendance.date
                                            ) === 'Tidak Hadir',
                                    }"
                                >
                                    {{
                                        getAttendanceStatus(
                                            student.idStudent,
                                            attendance.date
                                        )
                                    }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-else class="text-center text-red font-semibold py-8">
                    Tiada data kehadiran yang direkodkan
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { baseAPI } from "../../stores";
import router from "../../router";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";

export default {
    components: {
        SubmitButton,
        SidebarDashboard,
    },
    data() {
        return {
            subjectData: {},
            idSubject: router.currentRoute.value.params.id,
            teacherData: {},
            teachers: [],
            monthName: "",
            month: "",
            year: "",
            monthOptions: "",
            showAttendance: false,
            attendanceData: "",
            studentData: [],
        };
    },

    async mounted() {
        document.title = "Maklumat Kelas | Kerani";

        const response = await axios.get(
            baseAPI + `/api/subject/${this.idSubject}`
        );
        this.subjectData = response.data;
        if (this.subjectData && this.subjectData.teacher) {
            this.teacherData = this.subjectData.teacher;
        } else {
            this.teacherData = { nameTeacher: "" }; // Set a default value when teacherData is undefined or null
        }

        // get all teachers
        const responseTeacher = await axios.get(baseAPI + `/api/teachers`);
        this.teachers = responseTeacher.data;

        this.malayMonths = [
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

        const currentMonthIndex = new Date().getMonth();
        const monthOptions = [];

        // Set the default value of the month select element to the current month
        this.month = currentMonthIndex + 1;

        for (let i = 0; i < 12; i++) {
            const monthValue = i + 1;
            const monthName = this.malayMonths[i];
            monthOptions.push({ value: monthValue, text: monthName });
        }

        this.monthOptions = monthOptions;

        const currentYear = new Date().getFullYear();
        const yearOptions = [];

        for (let i = 0; i < 3; i++) {
            const yearValue = currentYear - i;
            yearOptions.push({ value: yearValue, text: yearValue.toString() });
        }
        this.yearOptions = yearOptions.reverse();
        this.year = currentYear;
        this.submit();
    },

    methods: {
        async submit() {
            (this.showAttendance = true),
                await axios
                    .get(
                        baseAPI +
                            `/api/attendance?month=${this.month}&year=${this.year}&subjectId=${this.idSubject}`
                    )
                    .then((response) => {
                        this.attendanceData = response.data;

                        this.attendanceData.forEach((attendance) => {
                            attendance.student_Attendance.forEach(
                                (studentAttendance) => {
                                    const studentIndex =
                                        this.studentData.findIndex(
                                            (student) =>
                                                student.idStudent ===
                                                studentAttendance.idStudent
                                        );
                                    if (studentIndex === -1) {
                                        this.studentData.push(
                                            studentAttendance.student
                                        );
                                    }
                                }
                            );
                        });
                    })
                    .catch((error) => {
                        // Handle the error
                        console.error(error);
                    });
        },

        getAttendanceStatus(studentId, attendanceDate) {
            const attendance = this.attendanceData.find(
                (attendance) => attendance.date === attendanceDate
            );
            if (attendance) {
                const studentAttendance = attendance.student_Attendance.find(
                    (studentAttendance) =>
                        studentAttendance.idStudent === studentId
                );
                if (studentAttendance) {
                    return studentAttendance.isAttend ? "Hadir" : "Tidak Hadir";
                }
            }
            return "";
        },

        formatDate(date) {
            const options = {
                day: "2-digit",
                month: "numeric",
                year: "numeric",
            };
            const formattedDate = new Date(date).toLocaleDateString(
                "en-GB",
                options
            );
            return formattedDate;
        },
    },
};
</script>
