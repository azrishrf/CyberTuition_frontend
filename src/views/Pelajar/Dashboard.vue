<template>
    <SideBarPelajar linkActive="dashboard">
        <template v-slot:content>
            <!-- Welcome Text -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">
                Hi, Selamat Datang
            </h1>
            <p class="mb-5 font-semibold text-xs md:text-sm text-grey2">
                Dashboard
            </p>
            <!-- Total -->
            <div class="flex flex-col md:flex-row justify-center gap-5">
                <div class="flex justify-center gap-4">
                    <div
                        class="bg-white shadow-login flex flex-col md:flex-row py-4 px-5 items-center rounded-2xl"
                    >
                        <div>
                            <img src="/class.png" class="w-20" />
                        </div>
                        <div class="px-7 flex-col-reverse">
                            <p class="text-sm">Subjek</p>
                            <p
                                class="text-xl text-black font-medium text-center"
                            >
                                {{ countSubject }}
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-login flex flex-col md:flex-row py-4 px-2 items-center rounded-2xl"
                    >
                        <div>
                            <img src="/attendance.png" class="w-20" />
                        </div>
                        <div class="px-6 flex-col-reverse">
                            <p class="text-sm">Kedatangan</p>
                            <p
                                class="text-xl text-black font-medium text-center"
                            >
                                {{ attendancePercentage }}%
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center justify-center rounded-2xl w-10/12 mx-auto md:w-64 md:mx-0"
                >
                    <div>
                        <img src="/fee.png" class="w-20" />
                    </div>
                    <div class="px-5 flex-col-reverse">
                        <p class="text-sm text-center">Yuran</p>
                        <p class="text-xl text-black font-medium text-center">
                            RM{{ getAmountForCurrentMonth() }}.00
                        </p>
                    </div>
                </div>
            </div>
            <!-- Jadual Kelas -->
            <div
                class="bg-white shadow-login lg:w-5/12 py-4 pl-4 pr-16 mt-5 md:mt-7 rounded-2xl relative"
            >
                <p class="font-semibold text-base text-black">Jadual Kelas</p>
                <p class="font-semibold text-sm text-fontgrey mb-3">
                    Julai 2023
                </p>
                <button
                    class="bg-red hover:bg-darkred text-white py-1 px-4 md:px-6 text-xs rounded-2xl font-semibold absolute right-4 top-5"
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
                        <p class="font-semibold text-xs text-fontgrey mb-3">
                            {{ day }}
                        </p>
                    </div>
                    <table>
                        <tr
                            v-for="subject in group"
                            :key="subject.idSubject"
                            class="flex items-start ml-3 md:ml-10"
                        >
                            <td class="w-28 md:w-32 font-medium text-sm pb-2">
                                {{ subject.name }}
                            </td>
                            <td
                                class="font-semibold text-xs bg-green text-white py-1 w-[70px] md:w-20 text-center rounded-full ml-3 md:ml-20"
                            >
                                {{ subject.time }}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- Alert tuition fee -->
            <div
                class="shadow-login bg-white py-4 px-4 rounded-2xl mt-6 md:w-4/6 lg:w-1/2 md:gap-10 items-center"
                v-if="hasUnpaidTuitionFees"
            >
                <h1 class="text-base font-semibold mt-2">
                    Pembayaran Yuran Tuisyen
                </h1>
                <div class="flex">
                    <div>
                        <p class="text-fontgrey font-medium text-xs mt-2 mb-4">
                            Terdapat yuran tertunggak yang masih belum
                            dijelaskan
                        </p>
                        <button
                            class="bg-red hover:bg-darkred my-auto text-white py-1 px-5 text-xs rounded-2xl font-semibold"
                            @click="redirectToTuitionFee()"
                        >
                            Lihat Yuran
                        </button>
                    </div>
                    <img src="/tuitionfeeunpaid.png" class="w-28" />
                </div>
            </div>
        </template>
    </SideBarPelajar>
</template>

<script>
import axios from "axios";
import SideBarPelajar from "../../components/SideBarPelajar.vue";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { baseAPI } from "../../stores";
import router from "../../router";

export default {
    components: {
        SideBarPelajar,
    },
    data() {
        return {
            studentId: "",
            studentData: "",
            subjects: [],
            tuitionFees: [],
            countSubject: "",
            attendancePercentage: "",
        };
    },
    mounted() {
        document.title = "Dashboard | Pelajar";
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.studentId = response.data.student.idStudent;
            axios
                .get(baseAPI + `/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    console.log(this.studentData);
                    this.tuitionFees = this.studentData.tuitionFee;
                    this.countSubject = this.studentData.student_Subject.length;
                    axios
                        .get(
                            baseAPI + `/api/students/${this.studentId}/subjects`
                        )
                        .then((response) => {
                            this.subjects = response.data;
                            axios
                                .get(
                                    baseAPI +
                                        `/api/attendancemonthly/${this.studentId}`
                                )
                                .then((response) => {
                                    this.attendancePercentage = response.data;
                                    console.log(this.attendancePercentage);
                                });
                        });
                });
        });
        // get percentage attendance
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
        hasUnpaidTuitionFees() {
            return this.tuitionFees.some(
                (tuition) => tuition.statusPayment === "Belum Dibayar"
            );
        },
        currentMonth() {
            const currentDate = new Date();
            return currentDate.getMonth() + 1; // Adding 1 because months are zero-based
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
            router.push("/pelajar/kelas");
        },
        redirectToTuitionFee() {
            router.push("/pelajar/yuran");
        },
        getAmountForCurrentMonth() {
            const currentMonthTuitionFee = this.tuitionFees.find(
                (tuition) => tuition.month === this.currentMonth
            );
            return currentMonthTuitionFee ? currentMonthTuitionFee.amount : 0;
        },
    },
};
</script>
