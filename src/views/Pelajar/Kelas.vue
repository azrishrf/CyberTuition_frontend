<template>
    <SideBarPelajar linkActive="kelas">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="my-2 font-semibold text-xl">KELAS</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kelas</span
                >
            </p>

            <!-- Maklumat Kelas -->
            <div class="flex flex-wrap gap-8 py-5">
                <div
                    class="bg-white shadow-login flex gap-6 py-4 px-5 items-center rounded-2xl w-[22rem]"
                    v-for="subjectData in studentData.student_Subject"
                    :key="subjectData.idStudentSubject"
                >
                    <img
                        v-bind:src="
                            '/subjek/' + subjectData.subject.name + '.png'
                        "
                        class="w-20"
                    />
                    <div class="flex flex-col">
                        <label class="font-bold gap-9">
                            {{ subjectData.subject.name }}
                        </label>
                        <!-- Nama Guru -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Nama Guru:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{
                                    subjectData.subject.teacher
                                        ? subjectData.subject.teacher
                                              .nameTeacher
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

export default {
    components: {
        SideBarPelajar,
    },
    data() {
        return {
            studentData: "",
            subjects: "",
            studentId: "",
        };
    },

    async mounted() {
        document.title = "Kelas | Pelajar";
        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.studentId = response.data.student.idStudent;
            axios
                .get(baseAPI + `/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                });
        });
    },
    methods: {},
};
</script>
