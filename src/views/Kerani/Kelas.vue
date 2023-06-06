<script setup>
import SidebarDashboard from "../../components/SidebarDashboard.vue";
document.title = "Kelas | Kerani";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="kelas" />
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
            <h1 class="mt-3 mb-2 font-semibold text-xl">SENARAI SUBJEK</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp;Subjek</span
                >
            </p>
            <!-- Content -->
            <!-- <div class="bg-white my-6 rounded-2xl py-5 px-5 shadow-login"> -->
            <!-- Jadual Kelas -->
            <!-- <table class="w-11/12 text-center">
                    <tr class="bg-red text-sm text-white">
                        <th class="font-semibold py-2 px-2 rounded-l-2xl">
                            No
                        </th>
                        <th class="font-semibold">Nama Subjek</th>
                        <th class="font-semibold">Nama Guru</th>
                        <th class="font-semibold">Hari</th>
                        <th class="font-semibold">Masa</th>
                        <th class="font-semibold rounded-r-2xl">Tindakan</th>
                    </tr>

                    <tr
                        class="text-fontgrey text-sm border-b-2"
                        v-for="subjectData in subjects"
                    >
                        <td class="py-3 text-center">
                            {{ subjects.indexOf(subjectData) + 1 }}
                        </td>
                        <td class="font-semibold">
                            {{ subjectData.name }}
                        </td>
                        <td class="font-semibold">
                            {{
                                subjectData.teacher
                                    ? subjectData.teacher.nameTeacher
                                    : "null"
                            }}
                        </td>
                        <td class="font-semibold">{{ subjectData.day }}</td>
                        <td class="font-semibold">
                            {{ subjectData.time }}
                        </td>
                        <td class="font-semibold">
                            <router-link
                                class="fa-solid fa-pen-to-square text-lg text-black mx-2 cursor-pointer hover:text-red"
                                v-bind:to="
                                    `/kerani/kelas/kemaskinikelas/` +
                                    subjectData.idSubject
                                "
                            ></router-link>
                            <button
                                type="button"
                                class="fa-regular fa-trash-can text-lg text-black mx-2 cursor-pointer hover:text-red"
                                @click="
                                    toggleConfirmDelete(subjectData.idSubject)
                                "
                            ></button>
                        </td>
                        <dialog
                            class="z-50 w-2/6 bg-white px-3 pt-4 top-1/3 rounded-xl"
                            v-bind:open="isOpen"
                        >
                            <div>
                                <i
                                    class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                                ></i>

                                <h1 class="font-semibold text-base text-left">
                                    Padam Subjek
                                </h1>
                                <p class="font-normal text-xs text-left">
                                    Adakah anda pasti mahu memadamkan data
                                    subjek ini?
                                </p>

                                <button
                                    @click="deleteData()"
                                    class="bg-red text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                                >
                                    Sahkan
                                </button>
                                <button
                                    @click="toggleConfirmDelete()"
                                    class="text-black py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                                >
                                    Batalkan
                                </button>
                            </div>
                        </dialog>
                        <div
                            class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-20"
                            v-bind:class="{ hidden: !isOpen }"
                        ></div>
                    </tr>
                </table> -->
            <!-- </div> -->

            <!-- test  -->
            <div class="flex flex-wrap gap-8 py-5">
                <div
                    class="bg-white shadow-login flex gap-6 py-4 px-5 items-center rounded-2xl w-[22rem] relative"
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
                    <div class="flex flex-col">
                        <label class="font-bold gap-9">
                            {{ subjectData.name }}
                        </label>
                        <!-- Nama Guru -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Nama Guru:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{
                                    subjectData.teacher
                                        ? subjectData.teacher.nameTeacher
                                        : "null"
                                }}
                            </label>
                        </div>
                        <!-- Hari -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Hari:</label
                            >
                            <label
                                class="font-semibold text-fontgrey text-sm"
                                >{{ subjectData.day }}</label
                            >
                        </div>
                        <!-- Masa -->
                        <div class="flex gap-2">
                            <label class="font-semibold text-black text-sm"
                                >Masa:</label
                            >
                            <label class="font-semibold text-fontgrey text-sm">
                                {{ subjectData.time }}
                            </label>
                        </div>
                    </div>
                    <router-link
                        class="fa-solid fa-pen-to-square text-base text-gray-500 cursor-pointer hover:text-red absolute right-4 top-2"
                        v-bind:to="
                            `/kerani/kelas/kemaskinikelas/` +
                            subjectData.idSubject
                        "
                    ></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            subjects: "",
            isOpen: false,
            selectedSubject: null,
        };
    },
    async mounted() {
        const response = await axios.get(`http://localhost:3001/api/subjects`);
        this.subjects = response.data;
    },
    methods: {
        // toggleConfirmDelete(idSubject) {
        //     this.selectedSubject = idSubject;
        //     this.isOpen = !this.isOpen;
        // },
        // async deleteData() {
        //     await axios
        //         .delete(
        //             `http://localhost:3001/api/subject/${this.selectedSubject}`
        //         )
        //         .then((response) => {
        //             this.isOpen = !this.isOpen;
        //             this.subjects = this.subjects.filter(
        //                 (subject) => subject.idSubject !== this.selectedSubject
        //             );
        //         })
        //         .catch((error) => console.log(error));
        // },
    },
};
</script>
