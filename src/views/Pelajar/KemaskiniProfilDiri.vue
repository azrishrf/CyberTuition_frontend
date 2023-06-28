<template>
    <SideBarPelajar linkActive="profil">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">
                KEMASKINI PROFIL DIRI
            </h1>

            <p class="mb-5 font-semibold text-xs md:text-xs text-black">
                Dashboard &nbsp; > &nbsp; Profil Diri &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kemaskini Profil Diri</span
                >
            </p>
            <div class="bg-white my-6 rounded-2xl py-2 shadow-login">
                <form
                    class="bg-white m-auto pt-1 pb-6 px-5"
                    v-on:submit.prevent="updateProfile()"
                >
                    <!-- Maklumat Diri Pelajar -->
                    <h4 class="text-base md:text-lg font-semibold mt-2 mb-4">
                        Maklumat Diri Pelajar
                    </h4>

                    <div class="flex max-md:flex-col">
                        <div class="grow">
                            <!-- Full Name -->
                            <p class="text-sm mb-2">Nama Penuh</p>
                            <input
                                type="text"
                                placeholder="Nama Penuh"
                                name="fullname"
                                v-model="studentData.nameStudent"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(studentData.nameStudent)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-3 md:mb-5 text-sm"
                            />
                            <!-- Phone Number -->
                            <p class="text-sm mb-2">No Telefon</p>
                            <input
                                type="text"
                                placeholder="No Telefon"
                                name="noPhone"
                                v-model="studentData.noPhoneStudent"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(
                                              studentData.noPhoneStudent
                                          )
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-3 md:mb-5 text-sm"
                            />
                        </div>
                        <div class="grow">
                            <!-- Birth Date -->
                            <p class="text-sm mb-2">Tarikh Lahir</p>
                            <input
                                type="date"
                                placeholder="Tarikh Lahir"
                                name="birthdate"
                                v-model="studentData.dateOfBirth"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(studentData.dateOfBirth)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-3 md:mb-5 text-sm"
                            />
                            <!-- Form -->
                            <p class="text-sm mb-3">Tingkatan</p>
                            <select
                                name="tingkatan"
                                v-model="studentData.form"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(studentData.form)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-3 md:mb-5 text-sm"
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
                            :style="{
                                borderColor: shouldValidate
                                    ? validateInput(studentData.address)
                                    : '',
                            }"
                            class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-3 md:mb-5 text-sm h-16"
                        />
                    </div>

                    <!-- Maklumat Ibu Bapa -->
                    
                    <h4 class="text-base md:text-lg font-semibold mt-6 mb-4">
                        Maklumat Ibu Bapa
                    </h4>

                    <div class="flex max-md:flex-col">
                        <div class="grow">
                            <!-- FullName -->
                            <p class="text-sm mb-3">Nama Penuh Ibu Bapa</p>
                            <input
                                type="text"
                                placeholder="Nama Penuh Ibu Bapa"
                                name="fullnameParents"
                                v-model="studentData.nameParent"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(studentData.nameParent)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-3 md:mb-5 text-sm"
                            />
                            <!-- No KP -->
                            <p class="text-sm mb-3">No Kad Pengenalan</p>
                            <input
                                type="text"
                                placeholder="No Kad Pengenalan"
                                name="noICParents"
                                v-model="studentData.noICParent"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(studentData.noICParent)
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-3 md:mb-5 text-sm"
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
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(
                                              studentData.noPhoneParent
                                          )
                                        : '',
                                }"
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-3 md:mb-5 text-sm"
                            />
                        </div>
                    </div>

                    <SubmitButton
                        type="submit"
                        txt="Sahkan"
                        class="mt-6 "
                    />
                </form>
            </div>
        </template>
    </SideBarPelajar>
</template>

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
            studentData: "",
            userEmail: "",
            studentId: "",
            toast: useToast(),
            shouldValidate: false,
        };
    },

    async mounted() {
        document.title = "Kemaskini Profil | Pelajar";
        // Get Student Data
        axios
            .get(baseAPI + `/api/user/${user}`)
            .then((response) => {
                this.studentId = response.data.student.idStudent;
                axios
                    .get(baseAPI + `/api/student/${this.studentId}`)
                    .then((response) => {
                        this.studentData = response.data;
                    });
            })
            .catch((error) => {
                console.error(error);
            });

        // Get Student email from user table
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
        // update profile
        async updateProfile() {
            this.shouldValidate = true;
            if (
                !this.studentData.nameStudent ||
                !this.studentData.dateOfBirth ||
                !this.studentData.noPhoneStudent ||
                !this.studentData.form ||
                !this.studentData.address ||
                !this.studentData.nameParent ||
                !this.studentData.noICParent ||
                !this.studentData.noPhoneParent
            ) {
                this.toast.error("Sila isi semua maklumat!", {
                    timeout: 3000,
                });
                window.scrollTo({
                    top: window.innerHeight / 3,
                    behavior: "smooth", // Use 'smooth' for smooth scrolling effect
                });
            } else {
                const updatedStudent = {
                    nameStudent: this.studentData.nameStudent,
                    dateOfBirth: this.studentData.dateOfBirth,
                    noPhoneStudent: this.studentData.noPhoneStudent,
                    form: parseInt(this.studentData.form),
                    address: this.studentData.address,
                    nameParent: this.studentData.nameParent,
                    noICParent: this.studentData.noICParent,
                    noPhoneParent: this.studentData.noPhoneParent,
                };

                await axios
                    .put(
                        baseAPI + `/api/student/${this.studentData.idStudent}`,
                        updatedStudent
                    )
                    .then((response) => {
                        this.studentData = response.data;
                    })
                    .catch((error) => {});
                this.toast.success("Kemaskini Profil Diri Berjaya", {
                    timeout: 3000,
                });
                router.push("/pelajar/profil");
            }
        },
    },
};
</script>
