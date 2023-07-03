<template>
    <SideBarPelajar linkActive="kelas">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">KELAS</h1>
            <p class="font-semibold text-xs md:text-xs text-black">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kelas</span
                >
            </p>
            <!-- Loading -->
            <div
                class="fixed inset-0 flex items-center justify-center z-50"
                v-if="loading"
            >
                <Loading />
            </div>
            <!-- Maklumat Kelas -->
            <div class="flex flex-wrap gap-4 md:gap-8 py-5">
                <div
                    class="bg-white shadow-login flex gap-4 py-4 px-4 md:px-5 items-center rounded-2xl w-[22rem]"
                    v-for="subjectData in studentData.student_Subject"
                    :key="subjectData.idStudentSubject"
                >
                    <img
                        v-bind:src="
                            '/subjek/' + subjectData.subject.name + '.png'
                        "
                        class="w-16 md:w-20"
                    />
                    <div class="flex flex-col">
                        <label class="font-bold gap-9">
                            {{ subjectData.subject.name }}
                        </label>
                        <!-- Nama Guru -->
                        <div class="flex gap-1">
                            <label class="font-semibold text-black text-sm"
                                >Nama Guru:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{
                                    subjectData.subject.teacher
                                        ? formatTeacherName(
                                              subjectData.subject.teacher
                                                  .nameTeacher
                                          )
                                        : "null"
                                }}
                            </label>
                        </div>
                        <!-- Hari -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Hari:</label
                            >
                            <label
                                class="font-semibold text-fontgrey text-sm"
                                >{{ subjectData.subject.day }}</label
                            >
                        </div>
                        <!-- Masa -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Masa:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{ subjectData.subject.time }}
                            </label>
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
            subjects: "",
            studentId: "",
            loading: false,
        };
    },

    async mounted() {
        document.title = "Kelas | Pelajar";
        this.loading = true;

        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.studentId = response.data.student.idStudent;
            axios
                .get(baseAPI + `/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    this.loading = false;
                });
        });
    },
    methods: {
        formatTeacherName(name) {
            const words = name.split(" ");
            if (words.length === 1) {
                return words[0];
            } else if (words.length === 2) {
                return `${words[0]} ${words[1]}`;
            } else if (words.length >= 3) {
                return `${words[1]} ${words[2]}`;
            }
        },
    },
};
</script>
