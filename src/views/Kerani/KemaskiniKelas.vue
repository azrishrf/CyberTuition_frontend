<template>
    <div class="bg-white my-5 rounded-2xl py-5 px-11 shadow-login">
        <form class="bg-white m-auto" v-on:submit.prevent="updateSubject()">
            <!-- Maklumat Diri Pelajar -->
            <h4 class="text-lg font-semibold mt-2 mb-4">Maklumat Subjek</h4>

            <div class="flex gap-9 max-md:flex-col">
                <!-- Loading -->
                <div
                    class="fixed inset-0 flex items-center justify-center z-50"
                    v-if="loading"
                >
                    <Loading />
                </div>
                <div class="grow">
                    <!-- Full Name -->
                    <p class="text-sm mb-3">Nama Subjek</p>
                    <input
                        type="text"
                        placeholder="Nama Subjek"
                        name="namaSubjek"
                        v-model="subjectData.name"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- INama Guru-->
                    <p class="text-sm mb-3">Nama Guru</p>
                    <select
                        name="namaGuru"
                        v-model="teacherData.nameTeacher"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    >
                        <option disabled value="">-- Pilih Guru --</option>
                        <option
                            v-for="teacher in teachers"
                            :key="teacher.idTeacher"
                            :value="teacher.nameTeacher"
                        >
                            {{ teacher.nameTeacher }}
                        </option>
                    </select>
                </div>
                <div class="grow">
                    <!-- Hari-->
                    <p class="text-sm mb-3">Hari</p>
                    <select
                        name="hari"
                        v-model="subjectData.day"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    >
                        <option disabled value="">-- Pilih Hari --</option>
                        <option value="Isnin">Isnin</option>
                        <option value="Selasa">Selasa</option>
                        <option value="Rabu">Rabu</option>
                        <option value="Khamis">Khamis</option>
                        <option value="Jumaat">Jumaat</option>
                        <option value="Sabtu">Sabtu</option>
                        <option value="Ahad">Ahad</option>
                    </select>
                    <!-- Masa -->
                    <p class="text-sm mb-3">Masa</p>
                    <select
                        name="masa"
                        v-model="subjectData.time"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
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

            <SubmitButton type="submit" txt="Sahkan" class="mt-6 px-9" />
            <button
                type="button"
                txt="Batalkan"
                class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                @click="cancel()"
            >
                Batalkan
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { baseAPI } from "../../stores";
import router from "../../router";
import SubmitButton from "../../components/SubmitButton.vue";
import Loading from "../../components/Loading.vue";

export default {
    components: {
        SubmitButton,
        Loading,
    },
    data() {
        return {
            toast: useToast(),
            subjectData: {},
            idSubject: router.currentRoute.value.params.id,
            teacherData: {},
            teachers: [],
            loading: false,
        };
    },
    async mounted() {
        this.loading = true;

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
        this.loading = false;
    },

    methods: {
        async updateSubject() {
            this.loading = true;

            const response = await axios.get(
                baseAPI + `/api/teacher/id/${this.teacherData.nameTeacher}`
            );
            const teacherId = response.data;

            const updatedSubject = {
                name: this.subjectData.name,
                time: this.subjectData.time,
                day: this.subjectData.day,
                idTeacher: teacherId,
            };

            await axios.put(
                baseAPI + `/api/subject/${this.subjectData.idSubject}`,
                updatedSubject
            );

            this.toast.success("Subjek Berjaya Dikemaskini", {
                timeout: 3000,
            });
            this.loading = false;

            this.$router.back();
        },
        cancel() {
            this.$router.back();
        },
    },
};
</script>
