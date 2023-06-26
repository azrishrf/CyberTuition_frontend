<template>
    <!-- Header -->
    <div class="bg-red pt-3 pb-3">
        <img src="/LogoCyberTuition.png" class="w-40 ml-8 inline" />
        <button
            class="px-6 py-2 mr-8 float-right bg-amber-500 text-white rounded-2xl text-sm font-bold hover:bg-orange-500"
            @click="redirectlogin()"
        >
            LOG MASUK
        </button>
    </div>

    <!-- Body -->
    <div class="bg-slate-50 w-full min-h-screen">
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
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(nameStudent)
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
                        v-model="noICStudent"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(noICStudent)
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
                        v-model="noPhoneStudent"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(noPhoneStudent)
                                : '',
                        }"
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
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(email)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- Birth Date -->
                    <p class="text-sm mb-3">Tarikh Lahir</p>
                    <input
                        type="date"
                        placeholder="Tarikh Lahir"
                        name="birthdate"
                        v-model="dateOfBirth"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(dateOfBirth)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- Form -->
                    <p class="text-sm mb-3">Tingkatan</p>
                    <select
                        name="tingkatan"
                        v-model="form"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(form)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-5 text-sm"
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
                :style="{
                    borderColor: shouldValidate ? validateInput(address) : '',
                }"
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
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(nameParent)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm"
                    />
                    <!-- No KP IbuBapa-->
                    <p class="text-sm mb-3">No Kad Pengenalan</p>
                    <input
                        type="text"
                        placeholder="No Kad Pengenalan"
                        name="noICParents"
                        v-model="noICParent"
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(noICParent)
                                : '',
                        }"
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
                        :style="{
                            borderColor: shouldValidate
                                ? validateInput(noPhoneParent)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block text-sm"
                    />
                </div>
            </div>
            <!-- Kata Laluan -->
            <h4 class="text-lg font-semibold mb-4">Kata Laluan Akaun</h4>
            <div class="flex max-md:flex-col mb-10">
                <div class="flex-1 relative">
                    <!-- Kata Laluan -->
                    <p class="text-sm mb-3">Kata Laluan</p>
                    <input
                        :type="showPassword ? 'text' : 'password'"
                        placeholder="Kata Laluan"
                        name="Kata Laluan"
                        v-model="password"
                        @click="shouldValidatePassword = true"
                        :style="{
                            borderColor: shouldValidatePassword
                                ? validateInputPassword(password)
                                : '',
                        }"
                        class="border-2 rounded-md w-11/12 py-3 px-4 block text-sm focus:border-cyan-500 focus:outline-none"
                    />
                    <i
                        class="absolute top-12 right-11 sm:right-20 cursor-pointer transition duration-300 ease-in-out"
                        :class="{
                            'fa-solid fa-eye-slash hover:text-red':
                                !showPassword,
                            'fa-solid fa-eye hover:text-red': showPassword,
                        }"
                        @click="togglePasswordVisibility"
                    ></i>
                    <p
                        v-if="shouldValidatePassword"
                        class="text-xs mt-2 mb-4 md:mb-0 inline-block font-bold text-red w-11/12"
                    >
                        * Kata laluan hendaklah sekurang-kurangnya 8 aksara
                        panjang dan termasuk huruf besar, huruf kecil, nombor
                        dan aksara khas.
                    </p>
                </div>
                <div class="flex-1 relative">
                    <!-- Pengesahan Kata Laluan-->
                    <p class="text-sm mb-3">Pengesahan Kata Laluan</p>
                    <input
                        :type="showConfirmPassword ? 'text' : 'password'"
                        placeholder="Pengesahan Kata Laluan"
                        name="Pengesahan Kata Laluan"
                        v-model="confirmPassword"
                        @click="shouldValidateConfirmPassword = true"
                        :style="{
                            borderColor: shouldValidateConfirmPassword
                                ? validateInputConfirmPassword(confirmPassword)
                                : '',
                        }"
                        class="border-2 rounded-md w-11/12 py-3 mb-5 px-4 block text-sm focus:border-cyan-500 focus:outline-none"
                    />
                    <i
                        class="absolute top-12 right-11 sm:right-20 cursor-pointer transition duration-300 ease-in-out"
                        :class="{
                            'fa-solid fa-eye-slash hover:text-red':
                                !showConfirmPassword,
                            'fa-solid fa-eye hover:text-red':
                                showConfirmPassword,
                        }"
                        @click="toggleConfirmPasswordVisibility"
                    ></i>
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
                        v-bind:src="'/subjek/' + subjectData.name + '.png'"
                        class="w-20"
                    />
                    <label class="font-semibold gap-9 text-sm pt-2">
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
import { useToast } from "vue-toastification";
import router from "../router";
import SubmitButton from "../components/SubmitButton.vue";

export default {
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
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
            nameStudent: "",
            subjects: [],
            selectedSubjects: [],
            studentId: null,
            toast: useToast(),
            shouldValidate: false,
            shouldValidatePassword: false,
            shouldValidateConfirmPassword: false,
            showPassword: false,
            showConfirmPassword: false,
        };
    },
    components: {
        SubmitButton,
    },
    async mounted() {
        document.title = "Log Masuk";
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
            if (input !== this.password) {
                return "rgb(200 61 40)"; // Set border color to red for passwords less than 8 characters
            }
            return ""; // No validation errors, no border color applied
        },

        async register() {
            this.shouldValidate = true;
            this.shouldValidatePassword = true;
            this.shouldValidateConfirmPassword = true;
            const passwordValidationResult = this.validateInputPassword(
                this.password
            );
            if (
                !this.nameStudent ||
                !this.noICStudent ||
                !this.dateOfBirth ||
                !this.noPhoneStudent ||
                !this.form ||
                !this.address ||
                !this.nameParent ||
                !this.noICParent ||
                !this.noPhoneParent ||
                !this.email ||
                !this.password ||
                !this.confirmPassword ||
                this.selectedSubjects.length === 0
            ) {
                this.toast.error("Sila isi semua maklumat!", {
                    timeout: 3000,
                });
                window.scrollTo({
                    top: window.innerHeight / 3,
                    behavior: "smooth", // Use 'smooth' for smooth scrolling effect
                });
            } else if (this.password !== this.confirmPassword) {
                this.toast.error(
                    "Kata Laluan dan Pengesahan Kata Laluan adalah tidak sama!",
                    {
                        timeout: 3000,
                    }
                );
            } else if (passwordValidationResult) {
                this.toast.error("Kata Laluan Tidak Memenuhi Syarat!", {
                    timeout: 3000,
                });
            } else if (
                this.noPhoneStudent.length > 11 ||
                this.noPhoneParent.length > 11
            ) {
                this.toast.error("Nombor Telefon Melebihi 11 Digit", {
                    timeout: 3000,
                });
            } else if (
                !/^\d+$/.test(this.noPhoneParent) ||
                !/^\d+$/.test(this.noPhoneStudent)
            ) {
                this.toast.error("Nombor Telefon Hanya Digit Yang Dibenarkan", {
                    timeout: 3000,
                });
            } else if (
                !/^\d+$/.test(this.noICStudent) ||
                !/^\d+$/.test(this.noICParent)
            ) {
                this.toast.error(
                    "Nombor Kad Pengenalan Hanya Digit Yang Dibenarkan",
                    {
                        timeout: 3000,
                    }
                );
            } else {
                // Check existing user
                const checkUser = await axios.post(
                    baseAPI + `/api/existinguser/${this.email}`
                );
                const existingUser = checkUser.data;
                // Check existing student
                const checkStudent = await axios.post(
                    baseAPI + `/api/existingstudent/${this.noICStudent}`
                );
                const existingStudent = checkStudent.data;

                if (existingUser) {
                    this.toast.error("Email sudah digunakan!", {
                        timeout: 3000,
                    });
                } else if (existingStudent) {
                    this.toast.error("Nombor Kad Pengenalan sudah digunakan!", {
                        timeout: 3000,
                    });
                } else {
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
                                .post(
                                    baseAPI + "/api/students_notregistered",
                                    student
                                )
                                .then((response) => {
                                    this.studentId = response.data.idStudent;
                                    this.createStudentSubjects();
                                    this.createTuitionFee();
                                })
                                .catch((error) => {
                                    console.error(
                                        "Error creating student:",
                                        error
                                    );
                                });
                        })
                        .catch((error) => {
                            console.error("Error creating user:", error);
                        });
                }
            }
        },

        // Toggle password
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPasswordVisibility() {
            this.showConfirmPassword = !this.showConfirmPassword;
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

        // Create data subjects for student
        createStudentSubjects() {
            this.selectedSubjects.forEach(async (subjectName) => {
                const subject = this.subjects.find(
                    (s) => s.name === subjectName
                );

                axios.post(baseAPI + "/api/student_subject", {
                    idSubject: subject.idSubject,
                    idStudent: this.studentId,
                });
            });
            this.toast.success("Pendaftaran Berjaya", {
                timeout: 3000,
            });
        },

        // Create data for tuition fee
        createTuitionFee() {
            // Filter subjects based on selectedSubjects
            const selectedSubjectsArray = this.subjects.filter((subject) =>
                this.selectedSubjects.includes(subject.name)
            );

            // Calculate the total tuition fee amount
            const totalAmount = selectedSubjectsArray.reduce((sum, subject) => {
                return sum + parseInt(subject.fee);
            }, 0);

            // Get current date
            const currentDate = new Date();
            const month = currentDate.getMonth() + 1; // Add 1 because months are zero-based
            const year = currentDate.getFullYear();
            const tuitionFee = {
                idStudent: this.studentId,
                month: month,
                year: year,
                amount: totalAmount,
                subjectsList: this.selectedSubjects.join(", "),
            };

            axios
                .post(baseAPI + "/api/tuitionfee", tuitionFee)
                .then((response) => {
                    const tuitionFee = response.data;
                });
        },

        redirectlogin() {
            router.push("/");
        },
    },
};
</script>
