<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="guru2" />
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">MENAMBAH GURU BARU</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Guru &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Menambah Guru Baru</span
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
                        Maklumat Diri Guru
                    </h4>

                    <div class="flex gap-9 max-md:flex-col">
                        <div class="grow">
                            <!-- Full Name -->
                            <p class="text-sm mb-3">Nama Penuh</p>
                            <input
                                type="text"
                                placeholder="Nama Penuh"
                                name="fullname"
                                v-model="nameTeacher"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(nameTeacher)
                                        : '',
                                }"
                                class="border-2 rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- IC Number-->
                            <p class="text-sm mb-3">No Kad Pengenalan</p>
                            <input
                                type="text"
                                placeholder="No Kad Pengenalan"
                                name="noIC"
                                v-model="noICTeacher"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(noICTeacher)
                                        : '',
                                }"
                                class="border-2 rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Phone Number -->
                            <p class="text-sm mb-3">No Telefon</p>
                            <input
                                type="text"
                                placeholder="No Telefon"
                                name="noPhone"
                                v-model="noPhoneTeacher"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(noPhoneTeacher)
                                        : '',
                                }"
                                class="border-2 rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
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
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(email)
                                        : '',
                                }"
                                class="border-2 rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                            <!-- Birth Date -->
                            <p class="text-sm mb-3">Umur</p>
                            <input
                                type="number"
                                placeholder="Umur"
                                name="umur"
                                v-model="ageTeacher"
                                :style="{
                                    borderColor: shouldValidate
                                        ? validateInput(ageTeacher)
                                        : '',
                                }"
                                class="border-2 rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                            />
                        </div>
                    </div>
                    <!-- Address -->
                    <p class="text-sm mb-3">Alamat Rumah</p>
                    <input
                        type="text"
                        placeholder="Alamat Rumah"
                        name="address"
                        v-model="addressTeacher"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(addressTeacher)
                                : '',
                        }"
                        class="border-2 rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
                    />

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
                                    '/subjek/' + subjectData.name + '.png'
                                "
                                class="w-20"
                            />
                            <label class="font-semibold gap-9 text-sm pt-2">
                                {{ subjectData.name }}
                            </label>
                            <i
                                class=""
                                v-bind:class="{
                                    'fa-solid fa-circle-check absolute right-3 top-3 text-white':
                                        selectedSubjects.includes(
                                            subjectData.name
                                        ),
                                }"
                            ></i>
                        </button>
                    </div>

                    <SubmitButton
                        type="submit"
                        txt="Sahkan"
                        class="mt-6 px-9"
                    />
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { baseAPI } from "../../stores";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import { useToast } from "vue-toastification";
import router from "../../router";

export default {
    components: {
        SubmitButton,
        SidebarDashboard,
    },
    data() {
        return {
            email: "",
            nameTeacher: "",
            noICTeacher: "",
            noPhoneTeacher: "",
            ageTeacher: "",
            addressTeacher: "",
            toast: useToast(),
            subjects: [],
            selectedSubjects: [],
            teacherId: null,
            shouldValidate: false,
        };
    },
    async mounted() {
        // Fetch all subjects and store them in the `subjects` array
        const response = await axios.get(baseAPI + "/api/subjects");
        this.subjects = response.data;
    },

    methods: {
        validateInput(input) {
            if (input === "") {
                return "rgb(200 61 40)"; // Example: Set border color to red for empty input
            }
        },
        async register() {
            this.shouldValidate = true;
            if (
                !this.email ||
                !this.nameTeacher ||
                !this.noICTeacher ||
                !this.noPhoneTeacher ||
                !this.ageTeacher ||
                !this.addressTeacher ||
                this.selectedSubjects.length === 0
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
                    baseAPI + `/api/existinguser/${this.email}`
                );
                const existingUser = checkUser.data;

                if (existingUser) {
                    this.toast.error("Email Sudah Digunakan!", {
                        timeout: 3000,
                    });
                } else if (this.noPhoneTeacher.length > 11) {
                    this.toast.error("Nombor Telefon Melebihi 11 Digit", {
                        timeout: 3000,
                    });
                } else if (!/^\d+$/.test(this.noPhoneTeacher)) {
                    this.toast.error(
                        "Nombor Telefon Hanya Digit Yang Dibenarkan",
                        {
                            timeout: 3000,
                        }
                    );
                } else if (!/^\d+$/.test(this.noICTeacher)) {
                    this.toast.error(
                        "Nombor Kad Pengenalan Hanya Digit Yang Dibenarkan",
                        {
                            timeout: 3000,
                        }
                    );
                } else {
                    const user = {
                        email: this.email,
                        password: this.noICTeacher,
                        role: "Teacher",
                    };

                    const teacher = {
                        nameTeacher: this.nameTeacher,
                        noICTeacher: this.noICTeacher,
                        noPhoneTeacher: this.noPhoneTeacher,
                        ageTeacher: parseInt(this.ageTeacher),
                        addressTeacher: this.addressTeacher,
                    };

                    axios
                        .post(baseAPI + "/api/user", user)
                        .then((response) => {
                            // Extract the user ID from the response data
                            const userId = response.data.idUser;
                            // Associate the student with the user by setting its idUser field
                            teacher.idUser = userId;
                            // Make the POST request to create the student
                            axios
                                .post(baseAPI + "/api/teacher", teacher)
                                .then((response) => {
                                    const teacherId = response.data.idTeacher;
                                    // Associate the teacher with the selected subjects
                                    this.selectedSubjects.forEach(
                                        (subjectName) => {
                                            const subject = this.subjects.find(
                                                (s) => s.name === subjectName
                                            );

                                            axios
                                                .put(
                                                    baseAPI +
                                                        `/api/subject/${subject.idSubject}`,
                                                    {
                                                        idTeacher: teacherId,
                                                    }
                                                )
                                                .catch((error) => {
                                                    this.toast.error(
                                                        "Gagal Mendaftar Subjek!",
                                                        {
                                                            timeout: 3000,
                                                        }
                                                    );
                                                });
                                        }
                                    );
                                    this.toast.success(
                                        "Pendaftaran Guru Berjaya",
                                        {
                                            timeout: 3000,
                                        }
                                    );
                                    router.push("/kerani/guru/senaraiguru");
                                })
                                .catch((error) => {
                                    this.toast.error(
                                        "Gagal Mendaftar Guru. Sila Semak Input Anda!",
                                        {
                                            timeout: 3000,
                                        }
                                    );
                                });
                        })
                        .catch((error) => {
                            this.toast.error(
                                "Gagal Mendaftar Guru. Sila Semak Input Anda!",
                                {
                                    timeout: 3000,
                                }
                            );
                        });
                }
            }
        },
        // Insert subject into array selectedSubjects
        selectSubject(subject) {
            const index = this.selectedSubjects.indexOf(subject);
            if (index > -1) {
                this.selectedSubjects.splice(index, 1); // Remove the subject from the array
            } else {
                this.selectedSubjects.push(subject); // Add the subject to the array
            }
        },
    },
};
</script>
