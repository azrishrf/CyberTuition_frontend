<script setup>
import { ref } from "vue";
import router from "../router";
import SubmitButton from "../components/SubmitButton.vue";

document.title = "Pendaftaran";

async function redirectlogin() {
    router.push("/");
}
</script>

<template>
    <!-- Header -->
    <div class="bg-red pt-3 pb-3">
        <img src="assets/Logo V1.jpg.png" class="w-40 ml-8 inline" />
        <button
            class="px-6 py-2 mr-8 float-right bg-amber-500 text-white rounded-2xl text-sm font-bold hover:bg-orange-500"
            @click="redirectlogin()"
        >
            LOG MASUK
        </button>
    </div>
    <!-- Body -->
    <div class="bg-slate-50 w-screen min-h-screen">
        <h1 class="text-center text-3xl font-semibold my-7">
            PENDAFTARAN PELAJAR
        </h1>
        <form
            class="bg-white m-auto w-5/6 py-10 px-10"
            @submit.prevent="register()"
        >
            <!-- Maklumat Diri Pelajar -->
            <h4 class="text-lg font-semibold mb-4">Maklumat Diri Pelajar</h4>

            <div class="flex max-md:flex-col">
                <div class="grow">
                    <!-- Full Name -->
                    <p class="text-sm mb-3">Nama Penuh</p>
                    <input
                        type="text"
                        placeholder="Nama Penuh"
                        name="fullname"
                        v-model="nameStudent"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- IC Number-->
                    <p class="text-sm mb-3">No Kad Pengenalan</p>
                    <input
                        type="text"
                        placeholder="No Kad Pengenalan"
                        name="noIC"
                        v-model="noICStudent"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- Phone Number -->
                    <p class="text-sm mb-3">No Telefon</p>
                    <input
                        type="text"
                        placeholder="No Telefon"
                        name="noPhone"
                        v-model="noPhoneStudent"
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
                        v-model="email"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- Birth Date -->
                    <p class="text-sm mb-3">Tarikh Lahir</p>
                    <input
                        type="date"
                        placeholder="Tarikh Lahir"
                        name="birthdate"
                        v-model="dateOfBirth"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- Form -->
                    <p class="text-sm mb-3">Tingkatan</p>
                    <select
                        name="tingkatan"
                        v-model="form"
                        class="border-2 border-slate-grey rounded-md w-4/12 py-3 px-4 block mb-5 text-sm"
                    >
                        <option disabled value="" selected>
                            -- Pilih Tingkatan --
                        </option>
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
                v-model="address"
                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
            />

            <!-- Maklumat Ibu Bapa -->
            <h4 class="text-lg font-semibold mb-4">Maklumat Ibu Bapa</h4>

            <div class="flex max-md:flex-col mb-10">
                <div class="grow">
                    <!-- FullName IbuBapa -->
                    <p class="text-sm mb-3">Nama Penuh Ibu Bapa</p>
                    <input
                        type="text"
                        placeholder="Nama Penuh Ibu Bapa"
                        name="fullnameParents"
                        v-model="nameParent"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- No KP IbuBapa-->
                    <p class="text-sm mb-3">No Kad Pengenalan</p>
                    <input
                        type="text"
                        placeholder="No Kad Pengenalan"
                        name="noICParents"
                        v-model="noICParent"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                </div>
                <div class="grow">
                    <!-- No Telefon IbuBapa -->
                    <p class="text-sm mb-3">No Telefon</p>
                    <input
                        type="text"
                        placeholder="No Telefon"
                        name="noPhoneParents"
                        v-model="noPhoneParent"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block text-sm"
                    />
                </div>
            </div>
            <!-- Kata Laluan -->
            <h4 class="text-lg font-semibold mb-4">Kata Laluan Akaun</h4>
            <div class="flex max-md:flex-col mb-10">
                <div class="grow">
                    <!-- Kata Laluan -->
                    <p class="text-sm mb-3">Kata Laluan</p>
                    <input
                        type="password"
                        placeholder="Kata Laluan"
                        name="Kata Laluan"
                        v-model="password"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 mb-5 px-4 block text-sm"
                    />
                </div>
                <div class="grow">
                    <!-- Pengesahan Kata Laluan-->
                    <p class="text-sm mb-3">Pengesahan Kata Laluan</p>
                    <input
                        type="password"
                        placeholder="Pengesahan Kata Laluan"
                        name="Pengesahan Kata Laluan"
                        v-model="confirmPassword"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block text-sm"
                    />
                </div>
            </div>

            <!-- Pilihan Subjek -->
            <h4 class="text-lg font-semibold mb-4">Pilihan Subjek</h4>

            <div class="flex flex-wrap gap-8 py-5">
                <button
                    type="button"
                    class="relative bg-white shadow-login py-4 px-2 items-center rounded-2xl w-36 transition duration-300 ease-in-out hover:scale-110 flex flex-col"
                    v-bind:class="{
                        'bg-red text-white ': selectedSubjects.includes(
                            subjectData.name
                        ),
                    }"
                    @click="selectSubject(subjectData.name)"
                    v-for="subjectData in subjects"
                    :key="subjectData.idSubject"
                >
                    <img
                        v-bind:src="
                            '../../../assets/subjek/' +
                            subjectData.name +
                            '.png'
                        "
                        class="w-20"
                    />
                    <label class="font-bold gap-9 text-sm pt-2">
                        {{ subjectData.name }}
                    </label>
                    <i
                        class=""
                        v-bind:class="{
                            'fa-solid fa-circle-check absolute right-3 top-3 text-white':
                                selectedSubjects.includes(subjectData.name),
                        }"
                    ></i>
                </button>
            </div>

            <div class="flex">
                <SubmitButton type="submit" txt="Sahkan" class="mt-6 px-9" />
                <button
                    txt="Batalkan"
                    type="button"
                    class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                    @click="redirectlogin()"
                >
                    Batalkan
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { baseAPI } from "../stores/index.js";

export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
            student: {
                nameStudent: "",
                noICStudent: "",
                dateOfBirth: "",
                noPhoneStudent: "",
                form: "",
                address: "",
                nameParent: "",
                noICParent: "",
                noPhoneParent: "",
                isRegistered: false,
            },
            subjects: [],
            selectedSubjects: [],
            // selectedSubjects2: [],
            studentId: null,
        };
    },
    async mounted() {
        // Fetch all subjects and store them in the `subjects` array
        const response = await axios.get(baseAPI + "/api/subjects");
        this.subjects = response.data;
        console.log(response.data);
        document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    },
    methods: {
        async register() {
            console.log(this.selectedSubjects);
            if (this.password !== this.confirmPassword) {
                alert("Kata Laluan dan Sahkan Kata Laluan tidak sama.");
                return;
            }

            const user = {
                email: this.email,
                password: this.password,
                role: "Student",
            };

            const student = {
                nameStudent: this.nameStudent,
                noICStudent: this.noICStudent,
                dateOfBirth: this.dateOfBirth,
                noPhoneStudent: this.noPhoneStudent,
                form: parseInt(this.form),
                address: this.address,
                nameParent: this.nameParent,
                noICParent: this.noICParent,
                noPhoneParent: this.noPhoneParent,
                isRegistered: false,
            };

            axios
                .post(baseAPI + "/api/user", user)
                .then((response) => {
                    // Extract the user ID from the response data
                    const userId = response.data.idUser;
                    // Associate the student with the user by setting its idUser field
                    student.idUser = userId;
                    // Make the POST request to create the student
                    axios
                        .post(baseAPI + "/api/students_notregistered", student)
                        .then((response) => {
                            console.log("Student created:", response.data);
                            this.studentId = response.data.idStudent;
                            this.createStudentSubjects();
                            // create tuition fee
                            // Get current date
                            const currentDate = new Date();
                            const month = currentDate.getMonth() + 1; // Add 1 because months are zero-based
                            const year = currentDate.getFullYear();
                            const tuitionFee = {
                                idStudent: this.studentId,
                                month: month,
                                year: year,
                                subjectsList: this.selectedSubjects.join(", "),
                            };
                            console.log(tuitionFee);
                            axios
                                .post(baseAPI + "/api/tuitionfee", tuitionFee)
                                .then((response) => {});
                        })
                        .catch((error) => {
                            console.error("Error creating student:", error);
                        });
                })
                .catch((error) => {
                    console.error("Error creating user:", error);
                });
        },

        // Insert subject into array selectedSubjects
        selectSubject(subject) {
            const index = this.selectedSubjects.indexOf(subject);
            if (index > -1) {
                this.selectedSubjects.splice(index, 1); // Remove the subject from the array
            } else {
                this.selectedSubjects.push(subject); // Add the subject to the array
            }
            console.log(this.selectedSubjects);
        },

        // Create data subjects for student
        createStudentSubjects() {
            this.selectedSubjects.forEach(async (subjectName) => {
                const subject = this.subjects.find(
                    (s) => s.name === subjectName
                );
                console.log(subject);
                axios
                    .post(baseAPI + "/api/student_subject", {
                        idSubject: subject.idSubject,
                        idStudent: this.studentId,
                    })
                    .then((responses) => {
                        console.log("Created student_subject");
                    })
                    .catch((error) => {
                        console.error("Error creating student_subject:", error);
                    });
            });
            alert("Register success!");
        },
    },
};
</script>
