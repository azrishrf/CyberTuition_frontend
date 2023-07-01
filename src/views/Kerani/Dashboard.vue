<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="dashboard" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user text-xs"></i>Kerani
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Welcome Text -->
            <h1 class="mt-5 mb-1 font-semibold text-xl">Hi, Selamat Datang</h1>
            <p class="mb-5 font-semibold text-sm text-grey2">Dashboard</p>

            <!-- Total -->
            <div class="flex justify-center gap-5">
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="/student.png" class="w-20" />
                    </div>
                    <div class="px-5 flex-col-reverse">
                        <p class="text-sm">Pelajar</p>
                        <p class="text-xl text-black font-medium text-center">
                            {{ countStudents }}
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="/teacher.png" class="w-20" />
                    </div>
                    <div class="px-6 flex-col-reverse">
                        <p class="text-sm">Guru</p>
                        <p class="text-xl text-black font-medium text-center">
                            {{ countTeachers }}
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="/class.png" class="w-20" />
                    </div>
                    <div class="px-6 flex-col-reverse">
                        <p class="text-sm">Kelas</p>
                        <p class="text-xl text-black font-medium text-center">
                            10
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center rounded-2xl"
                >
                    <div>
                        <img src="/fee.png" class="w-20" />
                    </div>
                    <div class="px-5 flex-col-reverse">
                        <p class="text-sm text-center">Yuran</p>
                        <p class="text-xl text-black font-medium text-center">
                            RM{{ countTuitionFee }}.00
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex gap-10 items-start mt-7">
                <!-- Jadual Kelas -->
                <div
                    class="bg-white shadow-login w-5/12 py-4 pl-4 rounded-2xl relative"
                >
                    <p class="font-semibold text-base text-black">
                        Jadual Kelas
                    </p>
                    <p class="font-semibold text-sm text-fontgrey mb-3">
                        Julai 2023
                    </p>
                    <button
                        class="bg-red hover:bg-darkred text-white py-1 px-3 md:px-6 text-xs rounded-2xl font-semibold absolute right-4 top-5"
                        @click="redirectToClass()"
                    >
                        Lihat Kelas
                    </button>
                    <div
                        class="flex flex-row"
                        v-for="(group, day) in sortedGroupedSubjects"
                        :key="day"
                    >
                        <!-- Date -->
                        <div class="border-r-4">
                            <p class="font-semibold text-sm w-14 md:w-20">
                                {{ nextDate(day) }}
                            </p>
                            <p class="font-semibold text-xs text-fontgrey">
                                {{ day }}
                            </p>
                        </div>
                        <table class="mb-4">
                            <tr
                                v-for="subject in group"
                                :key="subject.idSubject"
                                class="flex items-start ml-3 md:ml-10"
                            >
                                <td
                                    class="w-28 md:w-[147px] font-medium text-sm pb-2"
                                >
                                    {{ subject.name }}
                                </td>
                                <td
                                    class="font-semibold text-xs bg-green text-white py-1 w-[70px] md:w-20 text-center rounded-full ml-3 md:ml-16"
                                >
                                    {{ subject.time }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="flex flex-col w-6/12 gap-5">
                    <!-- Jadual pegesahan -->
                    <div
                        class="shadow-login bg-white py-4 px-4 rounded-2xl items-center"
                    >
                        <div class="flex justify-between">
                            <div>
                                <h1 class="text-base font-semibold my-2">
                                    Pengesahan Pelajar
                                </h1>
                                <p
                                    class="text-fontgrey font-medium text-xs mt-2 mb-4"
                                    v-if="students.length > 0"
                                >
                                    Terdapat permohonan pendaftaran pelajar baru
                                    yang memerlukan <br />
                                    pengesahan anda!
                                </p>
                                <p
                                    v-else
                                    class="text-fontgrey font-medium text-xs mt-2 mb-4"
                                >
                                    Tiada permohonan pendaftaran pelajar baru
                                    buat masa ini
                                </p>
                            </div>
                            <div>
                                <img src="/pengesahan.png" class="w-44" />
                            </div>
                        </div>
                        <!-- Jadual Senarai Pelajar -->
                        <table
                            class="w-11/12 text-center mt-3"
                            v-if="students.length > 0"
                        >
                            <tr class="bg-red text-xs text-white">
                                <th
                                    class="font-semibold py-2 px-2 rounded-l-2xl"
                                >
                                    No
                                </th>
                                <th class="font-semibold">Nama Penuh</th>

                                <th class="font-semibold">Tingkatan</th>
                                <th class="font-semibold rounded-r-2xl">
                                    No Kad Pengenalan
                                </th>
                            </tr>

                            <tr
                                class="text-fontgrey text-xs border-b-2"
                                v-for="studentData in students"
                            >
                                <td class="py-3 text-center">
                                    {{ students.indexOf(studentData) + 1 }}
                                </td>
                                <td class="font-semibold">
                                    {{ studentData.nameStudent }}
                                </td>

                                <td class="font-semibold">
                                    {{ studentData.form }}
                                </td>
                                <td class="font-semibold">
                                    {{ studentData.noICStudent }}
                                </td>
                            </tr>
                        </table>
                        <div class="flex justify-end">
                            <button
                                class="bg-red hover:bg-darkred text-white py-1 px-5 mt-5 text-xs rounded-2xl font-semibold"
                                @click="redirectToPengesahan()"
                            >
                                Lihat Pengesahan
                            </button>
                        </div>
                    </div>
                    <!-- Yuran -->
                    <div
                        class="shadow-login bg-white py-4 px-4 rounded-2xl md:gap-10 items-center"
                    >
                        <div class="flex justify-between">
                            <div>
                                <h1 class="text-base font-semibold my-2">
                                    Pembayaran Yuran Tuisyen
                                </h1>
                                <p
                                    class="text-fontgrey font-medium text-xs mt-2 mb-4"
                                >
                                    Terdapat yuran tertunggak yang masih belum
                                    dijelaskan
                                </p>
                            </div>
                            <div>
                                <img
                                    src="/tuitionfeeunpaid.png"
                                    class="w-28 mr-10"
                                />
                            </div>
                        </div>

                        <div class="flex">
                            <button
                                class="bg-red hover:bg-darkred text-white py-1 px-5 text-xs rounded-2xl font-semibold"
                                @click="redirectToYuran()"
                            >
                                Lihat Yuran
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import axios from "axios";
import { baseAPI } from "../../stores";
import router from "../../router";

export default {
    components: {
        SidebarDashboard,
    },
    data() {
        return {
            subjects: [],
            countStudents: "",
            countTeachers: "",
            countTuitionFee: "",
            students: [],
        };
    },
    mounted() {
        document.title = "Dashboard | Kerani";

        axios.get(baseAPI + `/api/subjects`).then((response) => {
            this.subjects = response.data;
        });

        axios.get(baseAPI + `/api/students_registered`).then((response) => {
            this.countStudents = response.data.length;
        });

        axios.get(baseAPI + `/api/teachers`).then((response) => {
            this.countTeachers = response.data.length;
        });

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
        const currentYear = currentDate.getFullYear();
        axios;
        axios
            .post(baseAPI + "/api/report/tuitionfees", {
                month: currentMonth,
                year: currentYear,
            })
            .then((response) => {
                this.countTuitionFee = response.data.totalTuitionFees;
            });

        axios.get(baseAPI + `/api/students_notregistered`).then((response) => {
            this.students = response.data;
        });
    },

    computed: {
        groupedSubjects() {
            const groups = {};
            this.subjects.forEach((subject) => {
                if (!groups[subject.day]) {
                    groups[subject.day] = [];
                }
                groups[subject.day].push(subject);
            });
            return groups;
        },
        sortedGroupedSubjects() {
            const sortedGroups = {};
            const sortedDays = Object.keys(this.groupedSubjects).sort(
                (a, b) => {
                    const dateA = new Date(this.nextDate(a));
                    const dateB = new Date(this.nextDate(b));
                    return dateA - dateB;
                }
            );
            sortedDays.forEach((day) => {
                sortedGroups[day] = this.groupedSubjects[day].sort(
                    (subjectA, subjectB) => {
                        const timeA = this.parseTime(subjectA.time);
                        const timeB = this.parseTime(subjectB.time);
                        const amA = this.parseAMPM(subjectA.time) === "am";
                        const amB = this.parseAMPM(subjectB.time) === "am";

                        if (amA && !amB) {
                            return -1; // AM comes before PM
                        } else if (!amA && amB) {
                            return 1; // PM comes after AM
                        } else if (timeA === timeB) {
                            // If the times are equal, compare based on subject name
                            return subjectA.name.localeCompare(subjectB.name);
                        } else {
                            // If the times are different, sort based on time
                            return timeA - timeB;
                        }
                    }
                );
            });
            return sortedGroups;
        },
    },

    methods: {
        nextDate(day) {
            const currentDate = new Date();
            let nextDayIndex = currentDate.getDay();
            const daysOfWeek = [
                "Ahad",
                "Isnin",
                "Selasa",
                "Rabu",
                "Khamis",
                "Jumaat",
                "Sabtu",
            ];

            const monthsInMalay = [
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

            // Find the index of the given day in the daysOfWeek array
            const givenDayIndex = daysOfWeek.findIndex((d) => d === day);

            // Calculate the difference in days to get to the next occurrence of the given day
            let daysToAdd = givenDayIndex - nextDayIndex;
            if (daysToAdd <= 0) {
                daysToAdd += 7; // If the next occurrence is in the following week
            }

            // Add the calculated number of days to the current date
            const nextDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() + daysToAdd
            );

            // Format the next date as desired
            const dayOfMonth = nextDate.getDate();
            const month = monthsInMalay[nextDate.getMonth()];
            return `${dayOfMonth} ${month}`;
        },
        parseTime(time) {
            const [hour, minute] = time.split(":");
            return parseInt(hour) * 60 + parseInt(minute);
        },
        parseAMPM(time) {
            return time.slice(-2).toLowerCase();
        },
        redirectToClass() {
            router.push("/kerani/kelas");
        },
        redirectToPengesahan() {
            router.push("/kerani/pelajar/pengesahan");
        },
        redirectToYuran() {
            router.push("/kerani/yuran");
        },
    },
};
</script>
