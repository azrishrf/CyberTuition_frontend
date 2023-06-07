<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";
import SubmitButton from "../../components/SubmitButton.vue";
import FileUploader from "../../components/FileUploader.vue";
import { ref } from "vue";

document.title = "Muat Naik Resit Bank | Pelajar";

window.addEventListener("LR_UPLOAD_FINISH", async (e) => {
    const dataUpload = e.detail.data[0];
    await uploadNewResume(dataUpload.cdnUrl + dataUpload.name);
});

const file = ref({});
function handleUploaderEvent(e) {
    const { data: uploadedFiles } = e.detail;
    file.value = uploadedFiles;
    console.log(e.detail);
}
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SideBarPelajar linkActive="kedatangan" />
        <!-- Page Content -->
        <div class="w-full px-6 lg:px-12 pb-4 pt-2">
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
            <h1 class="mt-2 font-semibold text-xl">YURAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Yuran &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Muat Naik Resit Bank</span
                >
            </p>
            <!-- Maklumat Akaun Bank -->
            <div class="">
                <div
                    class="shadow-login bg-white gap-8 rounded-2xl py-6 px-4 lg:px-6 my-6 max-md:flex-col flex lg:w-3/6"
                >
                    <div>
                        <h1 class="text-base font-semibold mb-3">
                            Maklumat Akaun Bank
                        </h1>
                        <table class="text-sm">
                            <tr>
                                <td class="font-semibold text-black pb-2">
                                    Nama Akaun:
                                </td>
                                <td
                                    class="font-semibold text-fontgrey pl-1 pb-2"
                                >
                                    Cyber Tuition Saujana Utama
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold text-black pb-2">
                                    Nama Bank:
                                </td>
                                <td
                                    class="font-semibold text-fontgrey pl-1 pb-2"
                                >
                                    Bank Islam
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold text-black pb-2">
                                    Nombor Akaun:
                                </td>
                                <td
                                    class="font-semibold text-fontgrey pl-1 pb-2"
                                >
                                    12168020201895
                                </td>
                            </tr>
                        </table>
                    </div>

                    <img
                        src="../../../assets/duitnowqr.png"
                        class="w-52 h-auto mx-auto"
                    />
                </div>
            </div>
            <!-- Upload receipt bank -->
            <div class="">
                <div
                    class="shadow-login bg-white gap-8 rounded-2xl py-6 px-4 lg:px-6 mb-6 max-md:flex-col flex lg:w-3/6"
                >
                    <div>
                        <h1 class="text-base font-semibold mb-3">
                            Muat Naik Resit Bank
                        </h1>

                        <FileUploader v-on:upload="handleUploaderEvent" />
                        <!-- <button
                            class="font-semibold bg-slate-200 py-4 px-6 rounded-2xl hover:bg-gray-300"
                        >
                            <i
                                class="fa-sharp fa-solid fa-cloud-arrow-up text-gray-500"
                            ></i>
                            Upload File
                        </button> -->
                    </div>
                </div>
            </div>
            <div class="justify-center">
                <SubmitButton type="submit" txt="Sahkan" class="px-9" />
                <button
                    txt="Batalkan"
                    type="button"
                    class="bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                    @click="redirectlogin()"
                >
                    Batalkan
                </button>
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
            studentAttendanceData: router.currentRoute.value.params.id,
            studentData: {},
            subjectData: {},
            attendanceData: {},
        };
    },

    async mounted() {
        const response = await axios.get(
            `http://localhost:3001/api/studentAttendance/${this.studentAttendanceData}`
        );
        this.studentAttendanceData = response.data;
        this.studentData = this.studentAttendanceData.student;
        this.subjectData = this.studentAttendanceData.attendance.subject;
        this.attendanceData = this.studentAttendanceData.attendance;

        // location.reload();
        if (!sessionStorage.getItem("pageReloaded")) {
            sessionStorage.setItem("pageReloaded", "true");
            location.reload();
        }
    },
    methods: {
        redirectKedatangan() {
            router.push("/pelajar/kedatangan");
        },
        convertDate(dateString) {
            const options = {
                day: "numeric",
                month: "long",
                year: "numeric",
            };
            const date = new Date(dateString);
            return date.toLocaleDateString("ms-MY", options);
        },
        convertDay(dateString) {
            const options = {
                weekday: "long",
            };
            const date = new Date(dateString);
            return date.toLocaleDateString("ms-MY", options);
        },
    },
};
</script>
