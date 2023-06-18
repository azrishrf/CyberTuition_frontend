<script setup>
import SidebarGuru from "../../components/SidebarGuru.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";

document.title = "Profil Diri | Guru";

// Kemaskin profil
async function kemaskiniProfilDiri() {
    router.push("/guru/profil/kemaskiniprofildiri");
}
// Ubah Kata Laluan
async function ubahKataLaluan() {
    router.push("/guru/profil/katalaluan");
}
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarGuru linkActive="profil" />

        <!-- Page Content -->
        <div class="w-full px-12 py-4">
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
            <h1 class="my-2 font-semibold text-xl">PROFIL DIRI</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Profil Diri &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kemaskini</span
                >
            </p>

            <!-- Profil Diri -->
            <!-- Maklumat Guru -->
            <div class="shadow-login bg-white py-5 px-11 rounded-2xl my-5">
                <form
                    class="bg-white m-auto"
                    v-on:submit.prevent="updateProfile()"
                >
                    <!-- Maklumat Diri Pelajar -->
                    <h4 class="text-lg font-semibold mt-2 mb-4">
                        Maklumat Diri Guru
                    </h4>

                    <div class="flex gap-9 max-md:flex-col">
                        <div class="grow">
                            <!-- Full Name -->
                            <p class="text-sm mb-3">Nama Penuh</p>
                            <input
                                type="text"
                                placeholder="Nama Penuh"
                                name="fullname"
                                v-model="teacherData.nameTeacher"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(teacherData.nameTeacher)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- IC Number-->
                            <p class="text-sm mb-3">No Kad Pengenalan</p>
                            <input
                                type="text"
                                placeholder="No Kad Pengenalan"
                                name="noIC"
                                v-model="teacherData.noICTeacher"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(teacherData.noICTeacher)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Phone Number -->
                            <p class="text-sm mb-3">No Telefon</p>
                            <input
                                type="text"
                                placeholder="No Telefon"
                                name="noPhone"
                                v-model="teacherData.noPhoneTeacher"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(
                                              teacherData.noPhoneTeacher
                                          )
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                        <div class="grow">
                            <!-- Email -->
                            <p class="text-sm mb-3">E-Mel</p>
                            <input
                                type="email"
                                placeholder="E-Mel"
                                name="email"
                                v-model="userEmail"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(userEmail)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Birth Date -->
                            <p class="text-sm mb-3">Umur</p>
                            <input
                                type="number"
                                placeholder="Umur"
                                name="age"
                                v-model="teacherData.ageTeacher"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(teacherData.ageTeacher)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                    </div>
                    <!-- Address -->
                    <p class="text-sm mb-3">Alamat Rumah</p>
                    <input
                        type="text"
                        placeholder="Alamat Rumah"
                        name="address"
                        v-model="teacherData.addressTeacher"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(teacherData.addressTeacher)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
                    />

                    <SubmitButton
                        type="submit"
                        txt="Sahkan"
                        class="mt-6 px-9"
                    />
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
        </div>
    </div>
</template>

<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { useToast } from "vue-toastification";
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            teacherData: "",
            userEmail: "",
            teacherId: "",
            toast: useToast(),
            shouldValidate: false,
        };
    },

    async mounted() {
        // Get Student Data
        axios
            .get(baseAPI + `/api/user/${user}`)
            .then((response) => {
                this.teacherId = response.data.teacher.idTeacher;
                this.userEmail = response.data.email;
                axios
                    .get(baseAPI + `/api/teacher/${this.teacherId}`)
                    .then((response) => {
                        this.teacherData = response.data;
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        // input change to red if blank
        validateInput(input) {
            if (input === "") {
                return "rgb(200 61 40)"; // Example: Set border color to red for empty input
            }
        },
        // update profile
        async updateProfile() {
            this.shouldValidate = true;
            if (
                !this.teacherData.nameTeacher ||
                !this.teacherData.noICTeacher ||
                !this.teacherData.ageTeacher ||
                !this.teacherData.noPhoneTeacher ||
                !this.teacherData.addressTeacher
            ) {
                this.toast.error("Sila isi semua maklumat!", {
                    timeout: 3000,
                });
                window.scrollTo({
                    top: window.innerHeight / 3,
                    behavior: "smooth", // Use 'smooth' for smooth scrolling effect
                });
            } else {
                const updatedUser = {
                    email: this.userEmail,
                };
                const updatedTeacher = {
                    nameTeacher: this.teacherData.nameTeacher,
                    noICTeacher: this.teacherData.noICTeacher,
                    ageTeacher: this.teacherData.ageTeacher,
                    noPhoneTeacher: this.teacherData.noPhoneTeacher,
                    addressTeacher: this.teacherData.addressTeacher,
                };
                await axios.put(baseAPI + `/api/user/${user}`, updatedUser);
                await axios.put(
                    baseAPI + `/api/teacher/${this.teacherId}`,
                    updatedTeacher
                );
                this.toast.success("Kemaskini Profil Berjaya", {
                    timeout: 3000,
                });
                this.$router.back();
            }
        },
        // cancel update
        cancel() {
            this.$router.back();
        },
    },
};
</script>
