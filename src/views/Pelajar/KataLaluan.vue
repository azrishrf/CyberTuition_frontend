<template>
    <SideBarPelajar linkActive="profil">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">KATA LALUAN</h1>
            <p class="mb-5 font-semibold text-xs md:text-xs text-black">
                Dashboard &nbsp; > &nbsp; Profil Diri &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Ubah Kata Laluan</span
                >
            </p>

            <!-- Ubah Kata Laluan -->
            <div class="shadow-login bg-white py-2 px-5 rounded-2xl mt-5 pb-4">
                <form v-on:submit.prevent="updatePassword()">
                    <h4 class="text-base md:text-lg font-semibold mt-2 mb-4">
                        Ubah Kata Laluan
                    </h4>
                    <p class="text-sm mb-3">Kata Laluan Semasa</p>
                    <input
                        type="password"
                        class="border-2 border-slate-grey rounded-md lg:w-2/5 py-2 px-4 block mb-5 text-sm w-full"
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
                        class="border-2 rounded-md py-2 px-4 block lg:w-2/5 text-sm focus:border-cyan-500 focus:outline-none w-full"
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
                        class="border-2 rounded-md lg:w-2/5 py-2 mb-5 px-4 block text-sm focus:border-cyan-500 focus:outline-none w-full"
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
                    <div class="flex gap-4 mt-3">
                        <button
                            type="submit"
                            class="bg-red text-white px-5 py-2 rounded-2xl hover:bg-darkred text-xs lg:text-sm font-bold"
                        >
                            Sahkan
                        </button>
                        <button
                            type="button"
                            class="bg-gray-200 text-black px-5 rounded-2xl hover:bg-slate-300 text-xs lg:text-sm font-bold"
                            @click="redirect()"
                        >
                            Batalkan
                        </button>
                    </div>
                </form>
            </div>
        </template>
    </SideBarPelajar>
</template>
<script setup></script>
<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { useToast } from "vue-toastification";
import { baseAPI } from "../../stores";
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";

export default {
    components: {
        SideBarPelajar,
        SubmitButton,
    },
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
        document.title = "Kata Laluan | Pelajar";

        // Get Student Data
        axios
            .get(baseAPI + `/api/user/${user}`)
            .then((response) => {
                this.userEmail = response.data.email;
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
