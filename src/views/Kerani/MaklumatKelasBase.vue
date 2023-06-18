<script setup>
import router from "../../router";
</script>

<template>
    <!-- Maklumat Subjek -->
    <div class="shadow-login bg-white py-5 px-11 rounded-2xl my-5">
        <div>
            <RouterLink
                class="bg-red hover:bg-darkred text-white py-2 px-5 text-xs rounded-2xl font-semibold float-right"
                v-bind:to="
                    `/kerani/kelas/maklumatkelas/` +
                    subjectData.idSubject +
                    `/kemaskinikelas`
                "
            >
                <i class="fa-solid fa-pen-to-square mr-1"></i>
                Kemaskini
            </RouterLink>
            <h1 class="text-lg font-semibold mt-2 mb-4">Maklumat Subjek</h1>
            <table class="text-sm">
                <tr>
                    <td class="font-semibold pb-3 w-80">Nama Subjek:</td>
                    <td class="text-fontgrey font-medium pb-3">
                        {{ subjectData.name }}
                    </td>
                </tr>
                <tr>
                    <td class="font-semibold pb-3">Hari:</td>
                    <td class="text-fontgrey font-medium pb-3">
                        {{ subjectData.day }}
                    </td>
                </tr>
                <tr>
                    <td class="font-semibold pb-3">Masa:</td>
                    <td class="text-fontgrey font-medium pb-3">
                        {{ subjectData.time }}
                    </td>
                </tr>
                <tr>
                    <td class="font-semibold pb-3">Nama Guru:</td>
                    <td class="text-fontgrey font-medium pb-3">
                        {{ teacher.nameTeacher }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
    data() {
        return {
            subjectData: {},
            idSubject: router.currentRoute.value.params.id,
            teacher: [],
        };
    },
    async mounted() {
        const response = await axios.get(
            `http://localhost:3001/api/subject/${this.idSubject}`
        );
        this.subjectData = response.data;
        this.teacher = this.subjectData.teacher;
    },
};
</script>
