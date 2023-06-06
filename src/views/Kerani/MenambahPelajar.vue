<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="pelajar3" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user text-xs"></i>Kerani
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="mt-3 mb-2 font-semibold text-xl">
                MENAMBAH PELAJAR BARU
            </h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Pelajar &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Menambah Pelajar Baru</span
                >
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <form
                    class="bg-white m-auto py-1 px-6"
                    v-on:submit.prevent="register()"
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
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <!-- Password -->
                            <!-- <p class="text-sm mb-3">Kata Laluan</p>
                    <input
                        type="text"
                        placeholder="password"
                        name="password"
                        v-model="password"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    /> -->
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
                    <h4 class="text-lg font-semibold mb-4">
                        Maklumat Ibu Bapa
                    </h4>

                    <div class="flex gap-9 max-md:flex-col mb-10">
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
                                class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block text-sm"
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

                    <!-- Pilihan Subjek -->
                    <h4 class="text-lg font-semibold mb-4">Pilihan Subjek</h4>

                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Bahasa Malaysia"
                            v-model="selectedSubjects"
                        />
                        Bahasa Malaysia
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Bahasa Inggeris"
                            v-model="selectedSubjects"
                        />
                        Bahasa Inggeris
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Matematik"
                            v-model="selectedSubjects"
                        />
                        Matematik
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Sains"
                            v-model="selectedSubjects"
                        />
                        Sains
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Sejarah"
                            v-model="selectedSubjects"
                        />
                        Sejarah
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Matematik Tambahan"
                            v-model="selectedSubjects"
                        />
                        Matematik Tambahan
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Fizik"
                            v-model="selectedSubjects"
                        />
                        Fizik
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Kimia"
                            v-model="selectedSubjects"
                        />
                        Kimia
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Biologi"
                            v-model="selectedSubjects"
                        />
                        Biologi
                    </label>
                    <label class="block mb-2 text-base">
                        <input
                            type="checkbox"
                            value="Prinsip Perakaunan"
                            v-model="selectedSubjects"
                        />
                        Prinsip Perakaunan
                    </label>

                    <SubmitButton
                        type="submit"
                        txt="Sahkan"
                        class="mt-6 px-9"
                    />
                    <!-- <button
                        txt="Batalkan"
                        class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                        @click="redirectlogin()"
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
            studentId: null,
        };
    },
    async mounted() {
        // Fetch all subjects and store them in the `subjects` array
        const response = await axios.get("http://localhost:3001/api/subjects");
        this.subjects = response.data;
        console.log(response.data);
    },
    methods: {
        async register() {
            console.log(this.password, this.confirmPassword);
            if (this.password !== this.confirmPassword) {
                alert("Kata Laluan dan Sahkan Kata Laluan tidak sama.");
                return;
            }
            // const hashedPassword = await bcrypt.hash(this.password, 10);

            const user = {
                email: this.email,
                password: this.noICStudent,
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
                .post("http://localhost:3001/api/user", user)
                .then((response) => {
                    // Extract the user ID from the response data
                    const userId = response.data.idUser;
                    // Associate the student with the user by setting its idUser field
                    student.idUser = userId;
                    // Make the POST request to create the student
                    axios
                        .post("http://localhost:3001/api/student", student)
                        .then((response) => {
                            console.log("Student created:", response.data);
                            this.studentId = response.data.idStudent;
                            this.createStudentSubjects();
                        })
                        .catch((error) => {
                            console.error("Error creating student:", error);
                        });
                })
                .catch((error) => {
                    console.error("Error creating user:", error);
                });
        },

        createStudentSubjects() {
            // subjects
            this.selectedSubjects.forEach(async (subjectName) => {
                const subject = this.subjects.find(
                    (s) => s.name === subjectName
                );
                axios
                    .post("http://localhost:3001/api/student_subject", {
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
