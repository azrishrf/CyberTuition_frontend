<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";

document.title = "Dashboard | Pelajar";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SideBarPelajar linkActive="profil" />
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
                Dashboard &nbsp;> &nbsp;Profil Diri &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Ubah Kata Laluan</span
                >
            </p>

            <!-- Ubah Kata Laluan -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <form v-on:submit.prevent="updatePassword()">
                    <h1 class="text-base font-semibold mt-2 mb-4">
                        Ubah Kata Laluan
                    </h1>
                    <p class="text-sm mb-3">Kata Laluan Semasa</p>
                    <input
                        type="password"
                        class="border-2 border-slate-grey rounded-md w-2/5 py-3 px-4 block mb-5 text-sm"
                        v-model="currentPassword"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(currentPassword)
                                : '',
                        }"
                    />
                    <p class="text-sm mb-3">Kata Laluan Baru</p>
                    <input
                        type="password"
                        class="border-2 rounded-md py-3 px-4 block w-2/5 text-sm focus:border-cyan-500 focus:outline-none"
                        v-model="newPassword"
                        @click="shouldValidatePassword = true"
                        :style="{
                            borderColor: shouldValidatePassword
                                ? validateInputPassword(newPassword)
                                : '',
                        }"
                    />
                    <p
                        v-if="shouldValidatePassword"
                        class="text-xs mt-2 md:mb-0 inline-block font-semibold text-gray-500"
                    >
                        * Kata laluan hendaklah sekurang-kurangnya 8 aksara
                        panjang dan termasuk huruf besar, huruf kecil, nombor
                        dan aksara khas.
                    </p>
                    <p class="text-sm mb-3 mt-5">Pengesahan Kata Laluan Baru</p>
                    <input
                        type="password"
                        class="border-2 rounded-md w-2/5 py-3 mb-5 px-4 block text-sm focus:border-cyan-500 focus:outline-none"
                        v-model="confirmNewPassword"
                        @click="shouldValidateConfirmPassword = true"
                        :style="{
                            borderColor: shouldValidateConfirmPassword
                                ? validateInputConfirmPassword(
                                      confirmNewPassword
                                  )
                                : '',
                        }"
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
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { useToast } from "vue-toastification";
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            userEmail: "",
            toast: useToast(),
            shouldValidate: false,
            shouldValidatePassword: false,
            shouldValidateConfirmPassword: false,
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        };
    },

    async mounted() {
        // Get Student Data
        axios
            .get(baseAPI + `/api/user/${user}`)
            .then((response) => {
                this.userEmail = response.data.email;
                console.log(this.userEmail);
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        validateInput(input) {
            if (input === "") {
                return "rgb(200 61 40)";
            }
        },
        validateInputPassword(input) {
            if (input.length < 8) {
                return "rgb(200 61 40)"; // Set border color to red for passwords less than 8 characters
            }
            if (!/\d/.test(input)) {
                return "rgb(200 61 40)"; // Set border color to red if no number found
            }
            if (!/[a-z]/.test(input)) {
                return "rgb(200 61 40)"; // Set border color to red if no lowercase letter found
            }
            if (!/[A-Z]/.test(input)) {
                return "rgb(200 61 40)"; // Set border color to red if no uppercase letter found
            }
            if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(input)) {
                return "rgb(200 61 40)"; // Set border color to red if no special character found
            }
            // shouldValidatePassword = false;
            return ""; // No validation errors, no border color applied
        },
        validateInputConfirmPassword(input) {
            if (input.length == 0) {
                return "rgb(200 61 40)"; // Set border color to red for passwords less than 8 characters
            }
            if (input !== this.newPassword) {
                return "rgb(200 61 40)"; // Set border color to red for passwords less than 8 characters
            }
            return ""; // No validation errors, no border color applied
        },
        // update profile
        async updatePassword() {
            this.shouldValidate = true;
            if (
                !this.currentPassword ||
                !this.newPassword ||
                !this.confirmNewPassword
            ) {
                this.toast.error("Sila isi semua maklumat!", {
                    timeout: 3000,
                });
                window.scrollTo({
                    top: window.innerHeight / 3,
                    behavior: "smooth", // Use 'smooth' for smooth scrolling effect
                });
            } else if (this.newPassword !== this.confirmNewPassword) {
                this.toast.error(
                    "Kata Laluan dan Pengesahan Kata Laluan adalah tidak sama!",
                    {
                        timeout: 3000,
                    }
                );
            } else {
                const passwordValidationResult = this.validateInputPassword(
                    this.newPassword
                );
                if (passwordValidationResult) {
                    // Error: Password does not meet requirements
                    this.toast.error("Kata Laluan Tidak Memenuhi Syarat", {
                        timeout: 3000,
                    });
                } else {
                    axios
                        .post(baseAPI + "/api/password", {
                            email: this.userEmail,
                            currentPassword: this.currentPassword,
                            newPassword: this.newPassword,
                        })
                        .then(async (response) => {
                            this.toast.success("Ubah Kata Laluan Berjaya", {
                                timeout: 3000,
                            });
                            router.push("/pelajar/profil");
                        })
                        .catch((error) => {
                            // Handle error
                            if (
                                error.response &&
                                error.response.status === 401
                            ) {
                                const errorMessage = error.response.data.error;
                                this.toast.warning(errorMessage, {
                                    timeout: 3000,
                                });
                            }
                        });
                }
            }
        },
        redirect() {
            router.push("/pelajar/profil");
        },
    },
};
</script>
