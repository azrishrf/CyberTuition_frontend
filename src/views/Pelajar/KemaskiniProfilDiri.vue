<script setup>
// import { ref } from "vue";
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";

document.title = "Dashboard | Pelajar";

// Ubah Kata Laluan
async function ubahKataLaluan() {
    router.push("/pelajar/profil/katalaluan");
}
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
                Dashboard &nbsp; > &nbsp; Profil Diri &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kemaskini Profil Diri</span
                >
            </p>
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <form
                    class="bg-white m-auto py-1 px-6"
                    v-on:submit.prevent="updateProfile()"
                >
                    <!-- Maklumat Diri Pelajar -->
                    <h4 class="text-lg font-semibold mb-4">
                        Maklumat Diri Pelajar
                    </h4>

                    <div class="flex gap-9 max-md:flex-col">
                        <div class="grow">
                            <!-- Full Name -->
                            <p class="text-sm mb-3">Nama Penuh</p>
                            <input
                                type="text"
                                placeholder="Nama Penuh"
                                name="fullname"
                                v-model="studentData.nameStudent"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- IC Number-->
                            <p class="text-sm mb-3">No Kad Pengenalan</p>
                            <input
                                type="text"
                                placeholder="No Kad Pengenalan"
                                name="noIC"
                                v-model="studentData.noICStudent"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Phone Number -->
                            <p class="text-sm mb-3">No Telefon</p>
                            <input
                                type="text"
                                placeholder="No Telefon"
                                name="noPhone"
                                v-model="studentData.noPhoneStudent"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                        <div class="grow">
                            <!-- Email -->
                            <p class="text-sm mb-3">E-Mel</p>
                            <input
                                type="text"
                                placeholder="E-Mel"
                                name="email"
                                v-model="userEmail"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Birth Date -->
                            <p class="text-sm mb-3">Tarikh Lahir</p>
                            <input
                                type="date"
                                placeholder="Tarikh Lahir"
                                name="birthdate"
                                v-model="studentData.dateOfBirth"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Form -->
                            <p class="text-sm mb-3">Tingkatan</p>
                            <select
                                name="tingkatan"
                                v-model="studentData.form"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            >
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <!-- Address -->
                    <div>
                        <p class="text-sm mb-3">Alamat Rumah</p>
                        <input
                            type="text"
                            placeholder="Alamat Rumah"
                            name="address"
                            v-model="studentData.address"
                            class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
                        />
                    </div>

                    <!-- Maklumat Ibu Bapa -->
                    <h4 class="text-lg font-semibold mb-4">
                        Maklumat Ibu Bapa
                    </h4>

                    <div class="flex gap-9 max-md:flex-col">
                        <div class="grow">
                            <!-- FullName -->
                            <p class="text-sm mb-3">Nama Penuh Ibu Bapa</p>
                            <input
                                type="text"
                                placeholder="Nama Penuh Ibu Bapa"
                                name="fullnameParents"
                                v-model="studentData.nameParent"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- No KP -->
                            <p class="text-sm mb-3">No Kad Pengenalan</p>
                            <input
                                type="text"
                                placeholder="No Kad Pengenalan"
                                name="noICParents"
                                v-model="studentData.noICParent"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                        <div class="grow">
                            <!-- FullName -->
                            <p class="text-sm mb-3">No Telefon</p>
                            <input
                                type="text"
                                placeholder="No Telefon"
                                name="noPhoneParents"
                                v-model="studentData.noPhoneParent"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                    </div>

                    <SubmitButton
                        type="submit"
                        txt="Sahkan"
                        class="mt-6 px-9"
                    />
                    <!-- <button
                        txt="Batalkan"
                        class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                        @click="redirect()"
                    >
                        Batalkan
                    </button> -->
                </form>
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
            studentData: "",
            userEmail: "",
            studentId: "",
        };
    },

    async mounted() {
        // Get Student Data
        axios
            .get(`http://localhost:3001/api/user/${user}`)
            .then((response) => {
                this.studentId = response.data.student.idStudent;
                axios
                    .get(`http://localhost:3001/api/student/${this.studentId}`)
                    .then((response) => {
                        this.studentData = response.data;
                    });
            })
            .catch((error) => {
                console.error(error);
            });

        // Get Student email from user table
        axios
            .get(`http://localhost:3001/api/user/${user}`)
            .then((response) => {
                this.userEmail = response.data.email;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        async updateProfile() {
            const updatedUser = {
                email: this.userEmail,
            };
            const updatedStudent = {
                nameStudent: this.studentData.nameStudent,
                noICStudent: this.studentData.noICStudent,
                dateOfBirth: this.studentData.dateOfBirth,
                noPhoneStudent: this.studentData.noPhoneStudent,
                form: parseInt(this.studentData.form),
                address: this.studentData.address,
                nameParent: this.studentData.nameParent,
                noICParent: this.studentData.noICParent,
                noPhoneParent: this.studentData.noPhoneParent,
            };
            await axios.put(
                `http://localhost:3001/api/user/${user}`,
                updatedUser
            );
            await axios.put(
                `http://localhost:3001/api/student/${this.studentId}`,
                updatedStudent
            );
            alert("Profile updated successfully!");
        },
    },
};
</script>
