<script setup>
import router from "../../router";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import SubmitButton from "../../components/SubmitButton.vue";

document.title = "Kemaskini Pelajar | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="pelajar1" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user"></i>Kerani
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="mt-3 mb-2 font-semibold text-xl">KEMASKINI PELAJAR</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Pelajar &nbsp; > &nbsp; Senarai
                Pelajar &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Kemaskini Pelajar</span
                >
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login">
                <form
                    class="bg-white m-auto py-1 px-6"
                    v-on:submit.prevent="updateTeacher()"
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
                                type="email"
                                placeholder="E-Mel"
                                name="email"
                                v-model="userData.email"
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
                    <p class="text-sm mb-3">Alamat Rumah</p>
                    <input
                        type="text"
                        placeholder="Alamat Rumah"
                        name="address"
                        v-model="studentData.address"
                        class="border-2 border-slate-grey rounded-md w-11/12 py-3 px-4 block mb-5 text-sm h-16"
                    />

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
                    <button
                        txt="Batalkan"
                        class="mt-6 bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                        @click="redirect()"
                    >
                        Batalkan
                    </button>
                </form>
            </div>
            <!-- Maklumat Kelas -->
            <div class="bg-white my-6 rounded-2xl py-5 px-10 shadow-login">
                <h4 class="text-lg font-semibold">Subjek Yang Didaftar</h4>
                <div class="flex flex-wrap gap-8 py-5">
                    <div
                        class="bg-white relative shadow-login flex flex-col py-4 px-5 items-center rounded-2xl w-36 text-center"
                        v-for="subjectData in studentSubject"
                        :key="subjectData.idStudentSubject"
                    >
                        <img
                            v-bind:src="
                                '../../../../assets/subjek/' +
                                subjectData.subject.name +
                                '.png'
                            "
                            class="w-20"
                        />

                        <label class="font-semibold gap-9 text-sm pt-2">
                            {{ subjectData.subject.name }}
                        </label>
                        <i
                            type="button"
                            class="absolute top-3 right-3 fa-regular fa-trash-can text-gray-400 cursor-pointer hover:text-red"
                            @click="
                                toggleConfirmDelete(
                                    subjectData.idStudentSubject
                                )
                            "
                        ></i>
                        <!-- Dialog delete subject -->
                        <div
                            v-if="showDialogDeleteSubject"
                            class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-10"
                        >
                            <div
                                class="w-2/6 bg-white px-3 py-4 top-1/3 rounded-xl"
                            >
                                <div>
                                    <i
                                        class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                                    ></i>

                                    <h1
                                        class="font-semibold text-base text-left"
                                    >
                                        Memadam Data Subjek
                                    </h1>
                                    <p class="font-normal text-xs text-left">
                                        Adakah anda pasti mahu memadamkan subjek
                                        {{ subjectData.subject.name }} bagi
                                        pelajar ini?
                                    </p>

                                    <button
                                        @click="deleteData()"
                                        class="bg-red hover:bg-darkred text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                                    >
                                        Sahkan
                                    </button>
                                    <button
                                        @click="showDialogDeleteSubject = false"
                                        class="text-black hover:bg-slate-300 py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                                    >
                                        Batalkan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-red hover:bg-darkred cursor-pointer shadow-login py-4 px-5 items-center rounded-2xl flex justify-center h-20 my-auto"
                        @click="openDialog"
                    >
                        <i
                            class="fa-sharp fa-solid fa-circle-plus text-5xl text-white"
                        ></i>
                    </div>
                </div>
            </div>
            <!-- Dialog add subject-->
            <div
                v-if="showDialog"
                class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-30"
            >
                <div class="bg-white rounded-2xl shadow-lg p-6 w-5/12">
                    <h3 class="text-lg font-semibold mb-4 text-center">
                        Menambah Subjek Pelajar
                    </h3>
                    <!-- Render subjects that the student has not taken -->
                    <div class="flex flex-wrap gap-4 py-5">
                        <button
                            type="button"
                            class="bg-white relative shadow-login flex flex-col pt-5 pb-3 px-2 items-center rounded-2xl w-36 text-center transition duration-300 ease-in-out hover:scale-110"
                            v-for="subject in studentNotSubject"
                            :key="subject.id"
                            v-bind:class="{
                                'bg-red text-white ': selectedSubjects.includes(
                                    subject.name
                                ),
                            }"
                            @click="selectSubject(subject.name)"
                        >
                            <img
                                v-bind:src="`../../../../assets/subjek/${subject.name}.png`"
                                class="w-20"
                            />
                            <label class="font-semibold gap-9 text-sm pt-2">
                                {{ subject.name }}
                            </label>
                            <i
                                v-bind:class="{
                                    'fa-solid fa-circle-check absolute right-3 top-3 text-white':
                                        selectedSubjects.includes(subject.name),
                                }"
                            ></i>
                        </button>
                    </div>
                    <button
                        @click="addSubject()"
                        class="bg-red hover:bg-darkred text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                    >
                        Sahkan
                    </button>
                    <button
                        @click="showDialog = false"
                        class="text-black hover:bg-slate-300 py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                    >
                        Batalkan
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
    data() {
        return {
            userData: "",
            studentData: "",
            idStudent: router.currentRoute.value.params.id,
            studentSubject: "",
            studentNotSubject: "",
            showDialog: false,
            allSubjects: "",
            selectedSubjects: [],
            toast: useToast(),
            showDialogDeleteSubject: false,
            selectedDeleteSubject: "",
        };
    },

    async mounted() {
        console.log(this.idStudent);
        const response = await axios.get(
            `http://localhost:3001/api/student/${this.idStudent}`
        );
        this.studentData = response.data;
        this.studentSubject = this.studentData.student_Subject;
        this.userData = this.studentData.user;
        // Get all subject
        const responseSubject = await axios.get(
            `http://localhost:3001/api/subjects`
        );
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
        async updateTeacher() {
            const updatedUser = {
                email: this.userData.email,
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
                `http://localhost:3001/api/user/${this.userData.idUser}`,
                updatedUser
            );
            await axios.put(
                `http://localhost:3001/api/student/${this.studentData.idStudent}`,
                updatedStudent
            );
            this.toast.success("Kemaskini Pelajar Berjaya", {
                timeout: 3000,
            });
        },
        // open dialog subjects
        openDialog() {
            this.showDialog = true;
            console.log(this.selectedSubjects);
        },
        // toggle confirm delete student
        toggleConfirmDelete(idStudentSubject) {
            console.log(idStudentSubject);
            this.selectedDeleteSubject = idStudentSubject;
            this.showDialogDeleteSubject = true;
        },
        // remove subject student
        async deleteData() {
            await axios
                .delete(
                    `http://localhost:3001/api/student_subject/${this.selectedDeleteSubject}`
                )

                .then((response) => {
                    console.log(response.data.subject);

                    this.studentSubject = this.studentSubject.filter(
                        (subject) =>
                            subject.idStudentSubject !==
                            this.selectedDeleteSubject
                    );
                    this.studentNotSubject.push(response.data.subject);
                    console.log(this.selectedSubjects);

                    // this.selectedSubjects = this.selectedSubjects.filter(
                    //     (subject) =>
                    //         subject.idStudentSubject !==
                    //         response.data.idStudentSubject
                    // );
                })
                .catch((error) => console.log(error));
            this.toast.success("Subjek Telah Dipadam", {
                timeout: 3000,
            });
            this.showDialogDeleteSubject = false;
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
            // this.createTuitionFee();
        },
        // Add subject selected for student
        async addSubject() {
            try {
                for (const subjectName of this.selectedSubjects) {
                    const subject = this.allSubjects.find(
                        (s) => s.name === subjectName
                    );
                    console.log(subject.idSubject);

                    await axios
                        .post(
                            "http://localhost:3001/api/student_subject/addsubject",
                            {
                                idSubject: subject.idSubject,
                                idStudent: this.idStudent,
                            }
                        )
                        .then((response) => {
                            console.log(response.data);
                            const addedSubject = response.data;
                            this.studentSubject.push(addedSubject);
                            this.studentNotSubject =
                                this.studentNotSubject.filter(
                                    (subject) =>
                                        subject.idSubject !==
                                        addedSubject.subject.idSubject
                                );
                        });
                    // console.log(subject);
                }

                this.toast.success("Kemaskini Subjek Berjaya", {
                    timeout: 3000,
                });

                this.showDialog = false;
                this.selectedSubjects = [];
            } catch (error) {
                console.error("Error creating student_subject:", error);
            }
        },
    },
};
</script>
