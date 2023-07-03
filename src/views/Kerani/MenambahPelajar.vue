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
            <!-- Loading -->
            <div
                class="fixed inset-0 flex items-center justify-center z-50"
                v-if="loading"
            >
                <Loading />
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
                    class="bg-white m-auto pl-5 py-2"
                    @submit.prevent="register()"
                >
                    <!-- Maklumat Diri Pelajar -->
                    <h4 class="text-lg font-semibold mb-4">
                        Maklumat Diri Pelajar
                    </h4>

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
                            borderColor: shouldValidate
                                ? validateInput(address)
                                : '',
                        }"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
                    />

                    <!-- Maklumat Ibu Bapa -->
                    <h4 class="text-lg font-semibold mb-4">
                        Maklumat Ibu Bapa
                    </h4>

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

                    <div class="flex">
                        <SubmitButton
                            type="submit"
                            txt="Sahkan"
                            class="mt-6 px-9"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { baseAPI } from "../../stores";
import { useToast } from "vue-toastification";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import Loading from "../../components/Loading.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";

export default {
    components: {
        SidebarDashboard,
        SubmitButton,
        Loading,
    },
    data() {
        return {
            email: "",
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
            loading: false,
        };
    },
    async mounted() {
        this.loading = true;
        // Fetch all subjects and store them in the `subjects` array
        const response = await axios.get(baseAPI + "/api/subjects");
        this.subjects = response.data;
        this.loading = false;
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
                this.selectedSubjects.length === 0
            ) {
                this.toast.error("Sila Isi Semua Maklumat!", {
                    timeout: 3000,
                });
                window.scrollTo({
                    top: window.innerHeight / 3,
                    behavior: "smooth", // Use 'smooth' for smooth scrolling effect
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
                this.loading = true;
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
                    this.toast.error("Email Sudah Digunakan!", {
                        timeout: 3000,
                    });
                } else if (existingStudent) {
                    this.toast.error("Nombor Kad Pengenalan Sudah Digunakan!", {
                        timeout: 3000,
                    });
                } else {
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
                        isRegistered: true,
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
                                .post(baseAPI + "/api/student", student)
                                .then((response) => {
                                    this.studentId = response.data.idStudent;
                                    this.createStudentSubjects();
                                    this.createTuitionFee();
                                    this.loading = false;
                                    this.toast.success(
                                        "Pendaftaran Pelajar Berjaya",
                                        {
                                            timeout: 3000,
                                        }
                                    );
                                    router.push(
                                        "/kerani/pelajar/senaraipelajar"
                                    );
                                })
                                .catch((error) => {
                                    this.loading = false;

                                    this.toast.error(
                                        "Gagal Mendaftar Pelajar. Sila Semak Input Anda!",
                                        {
                                            timeout: 3000,
                                        }
                                    );
                                });
                        })
                        .catch((error) => {
                            this.loading = false;

                            this.toast.error(
                                "Gagal Mendaftar Pelajar. Sila Semak Input Anda!",
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
    },
};
</script>
