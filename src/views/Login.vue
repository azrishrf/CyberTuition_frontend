<script setup>
import SubmitButton from "../components/SubmitButton.vue";
import { ref } from "vue";
import router from "../router";

document.title = "Log Masuk";
</script>

<template>
    <div class="bg-slate-50 w-screen min-h-screen grid place-items-center">
        <!-- Center div -->
        <div class="m-auto bg-white rounded-2xl p-16 shadow-login">
            <!-- Logo Cyber Tuition -->
            <img src="assets/Logo V1.jpg.png" class="w-64 m-auto mb-5" />
            <!-- Login Form -->
            <form v-on:submit.prevent="login()">
                <!-- Email -->
                <div
                    class="shadow-login rounded-2xl w-96 py-3 mb-5 text-base pl-4 flex"
                >
                    <i class="bi bi-person inline mr-3 text-grey text-lg"></i>
                    <input
                        class="focus:outline-none w-full"
                        type="email"
                        placeholder="E-Mel"
                        name="email"
                        v-model="email"
                    />
                </div>
                <!-- Password -->
                <div
                    class="shadow-login rounded-2xl w-96 py-3 mb-5 text-base pl-4 flex"
                >
                    <i class="bi bi-lock inline mr-3 text-grey text-base"></i>
                    <input
                        class="focus:outline-none w-full"
                        type="password"
                        placeholder="Kata Laluan"
                        name="psw"
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
const baseurl = "http://localhost:3001";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post(baseurl + "/api/login", {
                    email: this.email,
                    password: this.password,
                });
                sessionStorage.setItem("idUser", JSON.stringify(response.data));

                const responseUser = await axios.get(
                    `http://localhost:3001/api/user/${response.data}`
                );

                if (
                    responseUser.data.role === "Student" &&
                    responseUser.data.student.isRegistered === true
                ) {
                    router.push("/pelajar/dashboard");
                } else if (responseUser.data.role === "Teacher") {
                    router.push("/guru/dashboard");
                } else if (responseUser.data.role === "Clerk") {
                    router.push("/kerani/dashboard");
                } else if (responseUser.data.student.isRegistered === false) {
                    alert("Not registered yet");
                }
            } catch (error) {
                console.error(error);
                alert("Invalid email or password");
            }
        },
    },
};
</script>
