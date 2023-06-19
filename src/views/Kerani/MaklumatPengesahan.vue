<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="pelajar2" />
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
            <!-- Breadcrumbs -->
            <h1 class="mt-3 mb-2 font-semibold text-xl">
                MAKLUMAT PENGESAHAN PELAJAR BARU
            </h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Pelajar &nbsp;> &nbsp; Pengesahan
                &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Maklumat Pengesahan</span
                >
            </p>
            <!-- Profil Diri -->
            <!-- Maklumat Pelajar -->
            <div class="shadow-login bg-white py-5 px-11 rounded-2xl my-5">
                <h1 class="text-lg font-semibold mt-2 mb-4">
                    Maklumat Diri Pelajar
                </h1>
                <table class="text-sm">
                    <tr>
                        <td class="font-semibold pb-3 w-80">Nama Penuh:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.nameStudent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3">E-mel:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ userData.email }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3">No Kad Pengenalan:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.noICStudent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3">Tarikh Lahir:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.dateOfBirth }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3">Tingkatan:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.form }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3">No Telefon:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.noPhoneStudent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3">Alamat Rumah:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.address }}
                        </td>
                    </tr>
                </table>

                <h1 class="text-lg font-semibold mb-4 mt-5">
                    Maklumat Ibu Bapa
                </h1>
                <table class="text-sm w-5/12">
                    <tr>
                        <td class="font-semibold pb-3 w-80">Nama Penuh:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.nameParent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3">No Kad Pengenalan</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.noICParent }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3">No Telefon</td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ studentData.noPhoneParent }}
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Maklumat Kelas -->
            <div class="shadow-login bg-white py-5 px-11 rounded-2xl my-5">
                <h1 class="text-lg font-semibold mt-3 mb-2">
                    Subjek Yang Dipilih
                </h1>
                <div class="flex flex-wrap gap-8 py-2">
                    <div
                        class="bg-white relative shadow-login flex flex-col py-4 px-5 items-center rounded-2xl w-36 text-center"
                        v-for="subjectData in studentSubject"
                        :key="subjectData.idStudentSubject"
                    >
                        <img
                            v-bind:src="
                                '/subjek/' + subjectData.subject.name + '.png'
                            "
                            class="w-20"
                        />

                        <label class="font-semibold gap-9 text-sm pt-2">
                            {{ subjectData.subject.name }}
                        </label>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center space-x-10 mb-20">
                <button
                    txt="Setuju"
                    class="bg-green text-white px-9 py-3 rounded-2xl hover:bg-cyan-700 text-sm font-bold"
                    @click="sahkanPendaftaran(studentData.idStudent)"
                >
                    Setuju
                </button>
                <button
                    txt="Batalkan"
                    class="bg-red text-white px-9 py-3 rounded-2xl hover:bg-darkred text-sm font-bold"
                    @click="toggleConfirmDelete()"
                >
                    Batalkan
                </button>
            </div>
            <!-- Dialog delete subject -->
            <div
                v-if="showDialog"
                class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-10"
            >
                <div class="w-2/6 bg-white px-3 py-4 top-1/3 rounded-xl">
                    <div>
                        <i
                            class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                        ></i>

                        <h1 class="font-semibold text-base text-left">
                            Membatalkan Pendaftaran Pelajar
                        </h1>
                        <p class="font-normal text-xs text-left">
                            Adakah anda pasti mahu membatalkan pendaftaran bagi
                            pelajar ini?
                        </p>

                        <button
                            @click="batalkanPendaftaran()"
                            class="bg-red hover:bg-darkred text-white py-2 px-7 rounded-xl border-2 border-red hover:border-darkred float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                        >
                            Ya
                        </button>
                        <button
                            @click="showDialog = false"
                            class="text-black hover:bg-slate-300 py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                        >
                            Tidak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { baseAPI } from "../../stores";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";

export default {
    components: {
        SubmitButton,
        SidebarDashboard,
    },
    data() {
        return {
            studentData: "",
            userData: "",
            idStudent: router.currentRoute.value.params.id,
            showDialog: false,
            toast: useToast(),
        };
    },
    async mounted() {
        document.title = "Maklumat Pengesahan | Kerani";

        const response = await axios.get(
            baseAPI + `/api/student/${this.idStudent}`
        );
        this.studentData = response.data;
        this.studentSubject = this.studentData.student_Subject;
        this.userData = this.studentData.user;
    },
    methods: {
        // Sahkan pendaftaran pelajar
        async sahkanPendaftaran(idStudent) {
            try {
                const updatedStudent = {
                    isRegistered: true,
                };
                await axios.put(
                    baseAPI + `/api/student/${idStudent}`,
                    updatedStudent
                );
                router.push("/kerani/pelajar/pengesahan");
            } catch (error) {
                return { error: error.message };
            }
            this.toast.success("Pendaftaran Pelajar Telah Disahkan", {
                timeout: 3000,
            });
        },
        // Batalkan pendaftaran pelajar
        async batalkanPendaftaran() {
            try {
                await axios.delete(baseAPI + `/api/student/${this.idStudent}`);
                router.push("/kerani/pelajar/pengesahan");
            } catch (error) {
                return { error: error.message };
            }
            this.toast.error("Pendaftaran Pelajar Telah Dibatalkan", {
                timeout: 3000,
            });
        },
        // open dialog box delete student
        toggleConfirmDelete() {
            this.showDialog = true;
        },
    },
};
</script>
