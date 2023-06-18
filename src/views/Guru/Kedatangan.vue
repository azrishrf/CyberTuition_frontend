<script setup>
import SidebarGuru from "../../components/SidebarGuru.vue";
import SubmitButton from "../../components/SubmitButton.vue";
document.title = "Kedatangan | Guru";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarGuru linkActive="kedatangan" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user text-xs"></i>Guru
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="my-2 font-semibold text-xl">KEDATANGAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kedatangan</span
                >
            </p>

            <!-- Maklumat Subjek -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <div class="flex gap-6">
                    <h4 class="text-lg font-semibold mb-3 grow-0">Subjek</h4>
                </div>

                <div class="flex max-md:flex-col">
                    <div class="grow">
                        <!-- Nama Subjek -->
                        <p class="text-sm mb-3">Nama Subjek</p>
                        <select
                            placeholder="Nama Subjek"
                            name="subjectData"
                            v-model="subjectData"
                            class="border-2 border-slate-grey rounded-md w-10/12 py-3 px-4 block mb-3 text-sm"
                        >
                            <option disabled value="">
                                -- Pilih Subjek --
                            </option>
                            <option
                                v-for="subjectData in subjects"
                                :key="subjectData.idSubject"
                                :value="subjectData.name"
                            >
                                {{ subjectData.name }}
                            </option>
                        </select>
                    </div>
                    <div class="grow">
                        <!-- Tarikh -->
                        <p class="text-sm mb-3">Tarikh</p>
                        <input
                            type="date"
                            placeholder="Tarikh"
                            name="date"
                            v-model="date"
                            class="border-2 border-slate-grey rounded-md w-10/12 py-3 px-4 block mb-3 text-sm"
                        />
                    </div>
                    <div class="grow">
                        <!-- Masa -->
                        <p class="text-sm mb-3">Masa</p>
                        <select
                            placeholder="Masa"
                            name="Masa"
                            v-model="time"
                            class="border-2 border-slate-grey rounded-md w-10/12 py-3 px-4 block mb-3 text-sm"
                        >
                            <option disabled value="">-- Pilih Masa --</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                        </select>
                    </div>
                </div>
                <p
                    class="error-message text-xs text-red grow mb-3 font-semibold"
                >
                    {{ errorMessage }}
                </p>
                <div class="flex gap-6">
                    <SubmitButton
                        type="button"
                        txt="Sahkan"
                        class="px-9"
                        @click="confirmForm()"
                    />
                    <button
                        type="button"
                        class="bg-gray-200 text-black px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                        @click="resetForm()"
                    >
                        Set Semula
                    </button>
                </div>
            </div>

            <!-- QR Code for subject chosen -->
            <div v-if="isConfirm" class="py-4 px-5 my-5">
                <h1 class="font-semibold text-lg mt-1">
                    {{ this.subjectName }}
                </h1>
                <p class="font-semibold text-sm text-fontgrey">
                    {{ this.formattedDate }}
                </p>

                <!-- Total -->
                <div class="flex justify-center gap-5 mb-10">
                    <div
                        class="bg-white shadow-login flex py-3 px-3 items-center rounded-2xl"
                    >
                        <div>
                            <img
                                src="../../../assets/student.png"
                                class="w-14 h-full"
                            />
                        </div>
                        <div class="px-5 flex-col-reverse">
                            <p class="text-sm">Jumlah Pelajar</p>
                            <p
                                class="text-xl text-black font-medium text-center"
                            >
                                {{ totalStudents }}
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-login flex py-3 px-3 items-center rounded-2xl"
                    >
                        <div>
                            <img
                                src="../../../assets/hadir.png"
                                class="w-14 h-full"
                            />
                        </div>
                        <div class="px-6 flex-col-reverse">
                            <p class="text-sm">Jumlah Hadir</p>
                            <p
                                class="text-xl text-black font-medium text-center"
                            >
                                {{ totalStudentsAttend }}
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-login flex py-3 px-3 items-center rounded-2xl"
                    >
                        <div>
                            <img
                                src="../../../assets/tidak hadir.png"
                                class="w-14 h-full"
                            />
                        </div>
                        <div class="px-6 flex-col-reverse">
                            <p class="text-sm">Jumlah Tidak Hadir</p>
                            <p
                                class="text-xl text-black font-medium text-center"
                            >
                                {{ totalStudents - totalStudentsAttend }}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Create QR COde -->
                <template v-if="isConfirm">
                    <CanvasQR
                        :key="attendanceId"
                        v-bind:attendanceid="attendanceId"
                    />
                </template>

                <!-- Jadual Senarai Pelajar -->
                <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                    <h1 class="font-semibold mb-4">
                        Senarai Kehadiran Pelajar
                    </h1>

                    <table
                        class="text-center"
                        v-if="listStudentsAttendance.length > 0"
                    >
                        <tr class="bg-red text-sm text-white">
                            <th
                                class="font-semibold py-2 px-2 rounded-l-2xl"
                                style="width: 3rem"
                            >
                                No
                            </th>
                            <th class="font-semibold" style="width: 30rem">
                                Nama Penuh
                            </th>
                            <th class="font-semibold" style="width: 8rem">
                                Tingkatan
                            </th>
                            <th class="font-semibold" style="width: 17rem">
                                Status
                            </th>
                            <th
                                class="font-semibold rounded-r-2xl"
                                style="width: 17rem"
                            >
                                Tindakan
                            </th>
                        </tr>

                        <tr
                            class="text-fontgrey text-sm border-b-2"
                            v-for="student in listStudentsAttendance"
                        >
                            <td class="py-3 text-center">
                                {{
                                    listStudentsAttendance.indexOf(student) + 1
                                }}
                            </td>
                            <td class="font-semibold">
                                {{ student.name }}
                            </td>
                            <td class="font-semibold">{{ student.form }}</td>
                            <td class="font-semibold text-green">
                                <p v-if="student.isAttend">Hadir</p>
                                <p class="text-red" v-else>Tidak Hadir</p>
                            </td>
                            <td class="font-semibold">
                                <button
                                    type="button"
                                    class="bg-green text-white px-4 py-1 rounded-xl text-xs mx-1 hover:bg-cyan-700"
                                    @click="markAttend(student.idStudent)"
                                >
                                    Hadir
                                </button>
                                <button
                                    type="button"
                                    class="bg-red text-white px-3 py-1 rounded-xl text-xs hover:bg-rose-800"
                                    @click="markNotAttend(student.idStudent)"
                                >
                                    Tidak Hadir
                                </button>
                            </td>
                        </tr>
                    </table>
                    <div
                        class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login"
                        v-else
                    >
                        <p class="text-center text-red font-semibold">
                            Tiada data pelajar yang sudah berdaftar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import CanvasQR from "../../components/CanvasQR.vue";
import dayjs from "dayjs";
import "dayjs/locale/ms-my";
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            subjects: "",
            subjectData: "",
            date: "",
            time: "",
            isConfirm: false,
            errorMessage: "",
            selectedSubject: "",
            subjectId: "",
            subjectName: "",
            formattedDate: "",
            attendanceId: "",
            totalStudents: "",
            totalStudentsAttend: "",
            attendanceUpdateInterval: null,
            listStudentsAttendance: {},
        };
    },

    async mounted() {
        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            const teacherId = response.data.teacher.idTeacher;

            axios
                .get(baseAPI + `/api/teacher/${teacherId}`)
                .then((response) => {
                    const teacherData = response.data;
                    this.subjects = teacherData.subjects;
                });
        });
    },
    unmounted() {
        // destroyed  in Vue 2
        clearInterval(this.attendanceUpdateInterval);
    },
    watch: {
        subjectData(newSubject) {
            if (newSubject) {
                // Set current date to input date
                const currentDate = new Date().toISOString().substr(0, 10);
                this.date = currentDate;
                // Get subject data based on subject name and set time to input time
                axios
                    .get(baseAPI + `/api/subject/data/${newSubject}`)
                    .then((response) => {
                        this.selectedSubject = response.data;
                        this.time = response.data.time;
                    });
            }
        },
        date(newDate) {
            if (newDate) {
                this.errorMessage = ""; // Clear the error message
            }
        },
        time(newTime) {
            if (newTime) {
                this.errorMessage = ""; // Clear the error message
            }
        },
    },

    methods: {
        // Confirm all detail subject and display qr code
        confirmForm() {
            if (!this.subjectData || !this.date || !this.time) {
                this.errorMessage = "* Sila isi semua maklumat";
            } else {
                const attendance = {
                    idSubject: this.selectedSubject.idSubject,
                    date: this.date,
                    time: this.time,
                };

                axios
                    .post(baseAPI + "/api/attendance", attendance)
                    .then((response) => {
                        this.attendanceId = response.data.idAttendance;
                        this.subjectId = response.data.idSubject;
                        this.subjectName = this.selectedSubject.name;
                        this.convertDate(response.data.date);
                        this.startAttendanceUpdateInterval(this.attendanceId);
                        this.createStudentAttendance(
                            this.subjectId,
                            this.attendanceId
                        );

                        axios
                            .get(baseAPI + `/api/subject/${this.subjectId}`)
                            .then((response) => {
                                const subjectInfo = response.data;
                                this.totalStudents =
                                    subjectInfo.student_Subject.length;
                            });

                        this.isConfirm = true;
                        this.errorMessage = "";
                    });
            }
        },

        // Convert date to day and date
        convertDate(subjectId) {
            const dateString = subjectId;
            const dateParts = dateString.split("-");
            const year = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]) - 1;
            const day = parseInt(dateParts[2]);

            const fullDate = dayjs()
                .locale("ms-my")
                .year(year)
                .month(month)
                .date(day);

            this.formattedDate = fullDate.format("dddd, DD MMMM YYYY");
        },

        // Create student_attendance
        createStudentAttendance(subjectId, attendanceId) {
            // Create all attendance for student and set attend to false first
            axios
                .post(
                    baseAPI +
                        `/api/student_attendance/${subjectId}/${attendanceId}/${this.date}`
                )
                .then((response) => {});
        },

        // Start updating attendance data periodically
        startAttendanceUpdateInterval(attendanceId) {
            // Clearing the previous interval
            clearInterval(this.attendanceUpdateInterval);
            // Fetch the updated attendance data initially
            this.countStudentAttend();
            // Set the interval to fetch updated attendance data every 5 seconds
            this.attendanceUpdateInterval = setInterval(() => {
                this.countStudentAttend();
            }, 3000);
        },

        // Count total student attend
        countStudentAttend() {
            // Get total student that attend
            axios
                .get(baseAPI + `/api/studentattend/${this.attendanceId}`)
                .then((response) => {
                    this.totalStudentsAttend = response.data;
                    console.log(
                        "Jumlah Pelajar Hadir:" + this.totalStudentsAttend
                    );
                });

            axios
                .get(baseAPI + `/api/attendance/students/${this.attendanceId}`)
                .then((response) => {
                    this.listStudentsAttendance = response.data;
                });
        },

        // Reset all input and clear interval
        resetForm() {
            this.subjectData = "";
            this.date = "";
            this.time = "";

            // Reset the isConfirm flag to false
            this.isConfirm = false;
            // Clear the attendance update interval
            clearInterval(this.attendanceUpdateInterval);
        },

        // Change status to Hadir
        markAttend(idStudent) {
            // Update the student's attendance status locally
            const studentIndex = this.listStudentsAttendance.findIndex(
                (student) => student.idStudent === idStudent
            );

            if (studentIndex !== -1) {
                this.listStudentsAttendance[studentIndex].isAttend = true;
            }

            // Update the student's attendance status in database
            const updateDataAttend = {
                idAttendance: this.attendanceId,
                idStudent: idStudent,
            };
            axios
                .put(
                    baseAPI + `api/markAttend/student_attendance`,
                    updateDataAttend
                )
                .then((response) => {})
                .catch((error) => {
                    console.error(error);
                });
        },

        // Change status to Tidak Hadir
        markNotAttend(idStudent) {
            // Update the student's attendance status locally
            const studentIndex = this.listStudentsAttendance.findIndex(
                (student) => student.idStudent === idStudent
            );

            if (studentIndex !== -1) {
                // Update the student's attendance status locally
                this.listStudentsAttendance[studentIndex].isAttend = false;
            }

            // Update the student's attendance status in database
            const updateDataNotAttend = {
                idAttendance: this.attendanceId,
                idStudent: idStudent,
            };
            axios
                .put(
                    baseAPI + `/api/markNotAttend/student_attendance`,
                    updateDataNotAttend
                )
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>
