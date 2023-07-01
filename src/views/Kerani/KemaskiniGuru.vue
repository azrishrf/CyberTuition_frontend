<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="guru1" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user"></i>Kerani
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="mt-3 mb-2 font-semibold text-xl">KEMASKINI GURU</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Guru &nbsp; > &nbsp; Senarai Guru
                &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kemaskini Guru</span
                >
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <form
                    class="bg-white py-1 px-6"
                    v-on:submit.prevent="updateTeacher()"
                >
                    <!-- Maklumat Diri Pelajar -->
                    <h4 class="text-lg font-semibold mb-4">
                        Maklumat Diri Guru
                    </h4>
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
                        class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-5 text-sm"
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
                                ? validateInput(teacherData.noPhoneTeacher)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- Birth Date -->
                    <p class="text-sm mb-3">Umur</p>
                    <input
                        type="number"
                        placeholder="Umur"
                        name="umur"
                        v-model="teacherData.ageTeacher"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(teacherData.ageTeacher)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-5 text-sm"
                    />
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
                        class="border-2 border-slate-grey rounded-md w-6/12 py-3 px-4 block mb-5 text-sm h-16"
                    />

                    <SubmitButton
                        type="submit"
                        txt="Sahkan"
                        class="mt-6 px-9"
                    />
                    <button
                        txt="Batalkan"
                        type="button"
                        class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                        @click="redirect()"
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
import { baseAPI } from "../../stores";
import router from "../../router";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import { useToast } from "vue-toastification";

export default {
    components: {
        SubmitButton,
        SidebarDashboard,
    },
    data() {
        return {
            userData: "",
            teacherData: "",
            idTeacher: router.currentRoute.value.params.id,
            toast: useToast(),
            shouldValidate: false,
        };
    },
    async mounted() {
        document.title = "Kemaskini Guru | Kerani";

        const response = await axios.get(
            baseAPI + `/api/teacher/${this.idTeacher}`
        );
        this.teacherData = response.data;
        this.userData = this.teacherData.user;
    },
    methods: {
        validateInput(input) {
            if (input === "") {
                return "rgb(200 61 40)"; // Example: Set border color to red for empty input
            }
        },
        async updateTeacher() {
            this.shouldValidate = true;
            if (
                !this.teacherData.nameTeacher ||
                !this.teacherData.noPhoneTeacher ||
                !this.teacherData.ageTeacher ||
                !this.teacherData.addressTeacher
            ) {
                this.toast.error("Sila Isi Semua Maklumat!", {
                    timeout: 3000,
                });
                window.scrollTo({
                    top: window.innerHeight / 3,
                    behavior: "smooth", // Use 'smooth' for smooth scrolling effect
                });
            } else {
                // Check existing user
                const checkUser = await axios.post(
                    baseAPI + `/api/existinguser/${this.teacherData.email}`
                );
                const existingUser = checkUser.data;

                if (existingUser) {
                    this.toast.error("Email Sudah Digunakan!", {
                        timeout: 3000,
                    });
                } else if (this.teacherData.noPhoneTeacher.length > 11) {
                    this.toast.error("Nombor Telefon Melebihi 11 Digit", {
                        timeout: 3000,
                    });
                } else if (!/^\d+$/.test(this.teacherData.noPhoneTeacher)) {
                    this.toast.error(
                        "Nombor Telefon Hanya Digit Yang Dibenarkan",
                        {
                            timeout: 3000,
                        }
                    );
                } else {
                    const updatedUser = {
                        email: this.userData.email,
                    };
                    const updatedTeacher = {
                        nameTeacher: this.teacherData.nameTeacher,
                        noICTeacher: this.teacherData.noICTeacher,
                        noPhoneTeacher: this.teacherData.noPhoneTeacher,
                        ageTeacher: parseInt(this.teacherData.ageTeacher),
                        addressTeacher: this.teacherData.addressTeacher,
                    };

                    await axios.put(
                        baseAPI + `/api/user/${this.userData.idUser}`,
                        updatedUser
                    );
                    await axios.put(
                        baseAPI + `/api/teacher/${this.teacherData.idTeacher}`,
                        updatedTeacher
                    );

                    this.toast.success("Pendaftaran Guru Berjaya", {
                        timeout: 3000,
                    });
                    router.push("/kerani/guru/senaraiguru");
                }
            }
        },
        redirect() {
            router.push("/kerani/guru/senaraiguru");
        },
    },
};
</script>
