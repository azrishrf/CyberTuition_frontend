<template>
    <div class="bg-slate-50 w-screen min-h-screen grid place-items-center">
        <!-- Center div -->
        <div class="m-auto bg-white rounded-2xl p-16 shadow-login">
            <!-- Logo Cyber Tuition -->
            <img src="/LogoCyberTuition.png" class="w-64 m-auto mb-5" />
            <!-- Login Form -->
            <form @submit.prevent="login">
                <!-- Email -->
                <div
                    class="border-2 shadow-login rounded-2xl w-96 py-3 mb-5 text-base pl-4 flex"
                >
                    <i class="bi bi-person inline mr-3 text-grey text-lg"></i>
                    <input
                        class="focus:outline-none w-full"
                        type="email"
                        placeholder="E-Mel"
                        v-model="email"
                    />
                </div>
                <!-- Password -->
                <div
                    class="border-2 shadow-login rounded-2xl w-96 py-3 mb-5 text-base pl-4 flex"
                >
                    <i class="bi bi-lock inline mr-3 text-grey text-base"></i>
                    <input
                        class="focus:outline-none w-full"
                        type="password"
                        placeholder="Kata Laluan"
                        v-model="password"
                    />
                </div>
                <!-- Login Button -->
                <SubmitButton
                    type="submit"
                    txt="Log Masuk"
                    class="mt-16 mb-5 flex m-auto"
                />
            </form>
            <!-- Redirect to Sign Up Page -->
            <p class="text-xs text-center">
                <i class="bi bi-question-circle-fill text-slate-600"></i>
                Belum mendaftar lagi?
                <router-link to="/signup" class="hover:font-bold"
                    >Tekan disini</router-link
                >
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { baseAPI } from "../stores";
import SubmitButton from "../components/SubmitButton.vue";
import router from "../router";

export default {
    data() {
        return {
            email: "",
            password: "",
            toast: useToast(),
        };
    },
    mounted() {
        document.title = "Log Masuk";
    },
    components: {
        SubmitButton,
    },
    methods: {
        // check and send input to database to login
        async login() {
            // this.shouldValidate = true;
            console.log(this.email);

            if (!this.email || !this.password) {
                this.toast.error("E-mel dan kata laluan diperlukan!", {
                    timeout: 3000,
                });
            } else {
                axios
                    .post(baseAPI + "/api/login", {
                        email: this.email,
                        password: this.password,
                    })
                    .then(async (response) => {
                        // Handle successful login
                        sessionStorage.setItem(
                            "idUser",
                            JSON.stringify(response.data)
                        );
                        const responseUser = await axios.get(
                            baseAPI + `/api/user/${response.data}`
                        );

                        if (
                            responseUser.data.role === "Student" &&
                            responseUser.data.student.isRegistered === true
                        ) {
                            this.toast.success("Log Masuk Berjaya", {
                                timeout: 3000,
                            });
                            router.push("/pelajar/dashboard");
                        } else if (responseUser.data.role === "Teacher") {
                            this.toast.success("Log Masuk Berjaya", {
                                timeout: 3000,
                            });
                            router.push("/guru/dashboard");
                        } else if (responseUser.data.role === "Clerk") {
                            this.toast.success("Log Masuk Berjaya", {
                                timeout: 3000,
                            });
                            router.push("/kerani/dashboard");
                        } else if (
                            responseUser.data.student.isRegistered === false
                        ) {
                            this.toast.warning(
                                "Akaun anda masih belum mendapatkan pengesahan",
                                { timeout: 3000 }
                            );
                        }
                    })
                    .catch((error) => {
                        // Handle error
                        if (error.response && error.response.status === 401) {
                            const errorMessage = error.response.data.error;

                            this.toast.warning(errorMessage, { timeout: 3000 });
                        }
                    });
            }
        },
    },
};
</script>

<!-- <style>
.input:-webkit-autofill,
.input:-webkit-autofill:hover,
.input:-webkit-autofill:focus,
.input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: black !important;
}
</style> -->
