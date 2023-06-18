<script setup>
import router from "../../router";
import SubmitButton from "../../components/SubmitButton.vue";
</script>
<template>
    <div class="shadow-login bg-white py-5 px-11 rounded-2xl my-5">
        <form class="bg-white m-auto" @submit.prevent="register()">
            <!-- Maklumat Diri Pelajar -->
            <h4 class="text-lg font-semibold mb-4 mt-2">
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
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(studentData.nameStudent)
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
                        v-model="studentData.noPhoneStudent"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(studentData.noPhoneStudent)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                </div>
                <div class="grow">
                    <!-- Birth Date -->
                    <p class="text-sm mb-3">Tarikh Lahir</p>
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
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
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
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    >
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <!-- Address -->
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
                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
            />

            <!-- Maklumat Ibu Bapa -->
            <h4 class="text-lg font-semibold mb-4">Maklumat Ibu Bapa</h4>

            <div class="flex gap-9 max-md:flex-col">
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
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
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
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(studentData.noPhoneParent)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                </div>
            </div>

            <SubmitButton type="submit" txt="Sahkan" class="mt-6 px-9" />
            <button
                @click="cancel"
                txt="Batalkan"
                type="button"
                class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
            >
                Batalkan
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            studentData: "",
            idStudent: router.currentRoute.value.params.id,
            toast: useToast(),
            shouldValidate: false,
            allSubjects: "",
            studentSubject: "",

            studentNotSubject: "",
        };
    },
    async mounted() {
        const response = await axios.get(
            baseAPI + `/api/student/${this.idStudent}`
        );
        this.studentData = response.data;
        this.studentSubject = this.studentData.student_Subject;

        // Get all subject
        const responseSubject = await axios.get(baseAPI + `/api/subjects`);
        this.allSubjects = responseSubject.data;

        // Filter out subjects that the student has registered for
        const registeredSubjects = this.studentSubject.map(
            (subjectData) => subjectData.subject.name
        );

        // Filter and assign the subjects that the student has not taken
        this.studentNotSubject = this.allSubjects.filter(
            (subject) => !registeredSubjects.includes(subject.name)
        );
    },
    methods: {
        validateInput(input) {
            if (input === "") {
                return "rgb(200 61 40)";
            }
        },
        async register() {
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
                this.toast.success("Maklumat Pelajar Berjaya Dikemaskini", {
                    timeout: 3000,
                });
                this.$router.back();
                // this.$emit("submitted", this.studentData);
            }
        },
        cancel() {
            this.$router.back();
        },
    },
};
</script>
