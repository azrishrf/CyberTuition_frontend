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
            <!-- Maklumat Pelajar Router -->
            <RouterView />

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
                                '/subjek/' + subjectData.subject.name + '.png'
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
                                v-bind:src="`/subjek/${subject.name}.png`"
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
import KemaskiniMaklumatPelajar from "./KemaskiniPelajarChild.vue";
import { baseAPI } from "../../stores";
import router from "../../router";
import SidebarDashboard from "../../components/SidebarDashboard.vue";

export default {
    components: {
        KemaskiniMaklumatPelajar,
    },
    data() {
        return {
            userData: "",
            studentData: {
                nameStudent: "",
                noICStudent: "",
                dateOfBirth: "",
                form: "",
                noPhoneStudent: "",
                address: "",
                nameParent: "",
                noICParent: "",
                noPhoneParent: "",
            },
            idStudent: router.currentRoute.value.params.id,
            studentSubject: "",
            studentNotSubject: "",
            showDialog: false,
            allSubjects: "",
            selectedSubjects: [],
            toast: useToast(),
            showDialogDeleteSubject: false,
            selectedDeleteSubject: "",

            updatedStudentData: "",
        };
    },

    async mounted() {
        document.title = "Kemaskini Pelajar | Kerani";

        const response = await axios.get(
            baseAPI + `/api/student/${this.idStudent}`
        );
        this.studentData = response.data;

        this.studentSubject = this.studentData.student_Subject;
        this.userData = this.studentData.user;
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
        handleCancel() {
            this.$router.back(); // Go back to the previous page
        },

        updateStudentDetails(updatedStudentData) {
            this.studentData.nameStudent = updatedStudentData.nameStudent;
            this.studentData.dateOfBirth = updatedStudentData.dateOfBirth;
            this.studentData.form = updatedStudentData.form;
            this.studentData.noPhoneStudent = updatedStudentData.noPhoneStudent;
            this.studentData.address = updatedStudentData.address;
            this.studentData.nameParent = updatedStudentData.nameParent;
            this.studentData.noICParent = updatedStudentData.noICParent;
            this.studentData.noPhoneParent = updatedStudentData.noPhoneParent;
        },
        // open dialog subjects
        openDialog() {
            this.showDialog = true;
        },
        // toggle confirm delete student
        toggleConfirmDelete(idStudentSubject) {
            this.selectedDeleteSubject = idStudentSubject;
            this.showDialogDeleteSubject = true;
        },
        // remove subject student
        async deleteData() {
            await axios
                .delete(
                    baseAPI +
                        `/api/student_subject/${this.selectedDeleteSubject}`
                )

                .then((response) => {
                    this.studentSubject = this.studentSubject.filter(
                        (subject) =>
                            subject.idStudentSubject !==
                            this.selectedDeleteSubject
                    );
                    this.studentNotSubject.push(response.data.subject);
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
        },
        // Add subject selected for student
        async addSubject() {
            try {
                for (const subjectName of this.selectedSubjects) {
                    const subject = this.allSubjects.find(
                        (s) => s.name === subjectName
                    );

                    await axios
                        .post(baseAPI + "/api/student_subject/addsubject", {
                            idSubject: subject.idSubject,
                            idStudent: this.idStudent,
                        })
                        .then((response) => {
                            const addedSubject = response.data;
                            this.studentSubject.push(addedSubject);
                            this.studentNotSubject =
                                this.studentNotSubject.filter(
                                    (subject) =>
                                        subject.idSubject !==
                                        addedSubject.subject.idSubject
                                );
                        });
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
