<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SidebarDashboard linkActive="yuran" />
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
                PENGESAHAN RESIT BANK
            </h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp;Yuran&nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Pengesahan Resit Bank
                </span>
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-11 shadow-login flex">
                <div class="flex-1">
                    <h1 class="mb-4 font-semibold text-lg">
                        Pengesahan Resit Bank
                    </h1>
                    <table class="text-sm">
                        <tr>
                            <td class="font-semibold pb-3 w-56">
                                Nama Pelajar:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ studentData.nameStudent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Tingkatan:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ studentData.form }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">
                                Tarikh Pembayaran:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ formatDate(receiptBankData.createdAt) }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Masa:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ formatTime(receiptBankData.createdAt) }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Bulan:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ malayMonths[tuitionFeeData.month - 1] }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">
                                Jumlah Pembayaran:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                RM {{ tuitionFeeData.amount }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">
                                Fail yang telah dimuat naik:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                <div
                                    class="shadow-login bg-gray-200 rounded-2xl py-2 px-4 inline"
                                >
                                    <a
                                        :href="receiptBankData.filePath"
                                        download
                                        target="_blank"
                                        ><p
                                            class="text-black inline font-medium mr-3 hover:text-blue-800 hover:underline text-sm"
                                        >
                                            {{ receiptBankData.fileName }}
                                        </p>
                                    </a>
                                    <i
                                        class="fa-solid fa-circle-down text-xl text-gray-600"
                                    ></i>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <table class="text-center my-auto ml-5 flex-1">
                    <tr class="bg-red text-sm text-white">
                        <th
                            class="font-semibold py-2 px-2 rounded-l-2xl"
                            style="height: 3rem"
                        >
                            No
                        </th>
                        <th class="font-semibold" style="height: 3rem">
                            Nama Kelas
                        </th>

                        <th
                            class="font-semibold rounded-r-2xl"
                            style="height: 3rem"
                        >
                            Jumlah (RM)
                        </th>
                    </tr>
                    <tr
                        class="text-fontgrey text-sm border-b-2"
                        v-for="subjectData in subjectsArray"
                    >
                        <td class="py-3 text-center" style="height: 3rem">
                            {{ subjectsArray.indexOf(subjectData) + 1 }}
                        </td>
                        <td class="font-semibold" style="height: 3rem">
                            {{ subjectData.name }}
                        </td>
                        <td class="font-semibold" style="height: 3rem">
                            {{ subjectData.fee }}
                        </td>
                    </tr>

                    <tr class="text-sm bg-slate-200">
                        <td class="rounded-bl-2xl"></td>
                        <td class="py-3 font-semibold" style="height: 3rem">
                            Jumlah Pembayaran
                        </td>
                        <td
                            class="font-semibold rounded-br-2xl"
                            style="height: 3rem"
                        >
                            {{ tuitionFeeData.amount }}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="flex flex-row justify-center space-x-10 mb-20">
                <button
                    txt="Sahkan"
                    class="bg-green text-white px-9 py-3 rounded-2xl hover:bg-cyan-700 text-sm font-bold"
                    @click="confirmReceiptBank()"
                >
                    Sahkan
                </button>
                <button
                    txt="Batalkan"
                    class="bg-red text-white px-9 py-3 rounded-2xl hover:bg-darkred text-sm font-bold"
                    @click="showDialogCancel()"
                >
                    Batalkan
                </button>
            </div>
            <!-- Dialog cancel receipt bank -->
            <div
                v-if="showDialog"
                class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-10"
            >
                <div
                    class="w-2/6 bg-white px-3 py-4 top-1/3 rounded-xl border-2 border-gray-300"
                >
                    <div>
                        <i
                            class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                        ></i>

                        <h1 class="font-semibold text-base text-left">
                            Membatalkan Pengesahan Resit Bank
                        </h1>
                        <p class="font-normal text-xs text-left">
                            Adakah anda pasti membatalkan resit bank yang dimuat
                            naik oleh pelajar ini?
                        </p>

                        <button
                            @click="cancelReceiptBank()"
                            class="bg-red hover:bg-darkred text-white py-2 px-7 rounded-xl border-2 border-red hover:border-darkred float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                        >
                            Ya
                        </button>
                        <button
                            @click="showDialog = false"
                            class="text-black hover:bg-slate-300 py-2 px-4 rounded-xl border-2 border-grey float-right mt-5 font-semibold text-xs"
                        >
                            Tidak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { baseAPI } from "../../stores";
import router from "../../router";
import SidebarDashboard from "../../components/SidebarDashboard.vue";

export default {
    data() {
        return {
            receiptsBankid: router.currentRoute.value.params.id,
            receiptBankData: "",
            tuitionFeeData: "",
            studentData: "",
            malayMonths: "",
            subjectsArray: "",
            toast: useToast(),
            showDialog: false,
        };
    },
    async mounted() {
        document.title = "Pengesahan Resit Bank | Kerani";

        const response = await axios.get(
            baseAPI + `/api/receiptbank/id/${this.receiptsBankid}`
        );
        this.receiptBankData = response.data;
        this.tuitionFeeData = this.receiptBankData.tuitionFee;
        this.studentData = this.receiptBankData.tuitionFee.student;
        this.malayMonths = [
            "Januari",
            "Februari",
            "Mac",
            "April",
            "Mei",
            "Jun",
            "Julai",
            "Ogos",
            "September",
            "Oktober",
            "November",
            "Disember",
        ];
        // Divide subjectList into separate subjects
        const subjectNames = this.tuitionFeeData.subjectsList
            .split(",")
            .map((subject) => subject.trim())
            .filter((subject) => subject !== ""); // Filter out empty subjects

        // Fetch the Subject data from the server using Prisma
        axios
            .get(baseAPI + `/api/subjects`)
            .then((response) => {
                const subjects = response.data;

                // Map the subject names and fees into subjectsArray
                this.subjectsArray = subjectNames.map((subjectName) => {
                    const subject = subjects.find(
                        (s) => s.name === subjectName
                    );
                    const fee = subject ? parseInt(subject.fee) : 0;
                    return { name: subjectName, fee };
                });
            })
            .catch((error) => {
                console.error(error);
            });
    },

    methods: {
        formatTime(time) {
            const formattedTime = new Date(time);
            const hours = formattedTime.getHours();
            const minutes = formattedTime.getMinutes();
            const period = hours >= 12 ? "PM" : "AM";
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes.toString().padStart(2, "0");

            return `${formattedHours}.${formattedMinutes} ${period}`;
        },
        confirmReceiptBank() {
            axios
                .put(
                    baseAPI +
                        `/api/tuitionfee/receiptbank/${this.tuitionFeeData.idTuitionFee}`
                )
                .then((response) => {
                    const confirmed = response.data;

                    this.toast.success(
                        "Resit Bank Yang Dimuat Naik Oleh Pelajar Telah Disahkan",
                        {
                            timeout: 3000,
                        }
                    );
                    this.$router.back();
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        // show dialog delete
        showDialogCancel() {
            this.showDialog = true;
        },
        cancelReceiptBank() {
            axios
                .delete(
                    baseAPI +
                        `/api/tuitionfee/receiptbank/${this.receiptsBankid}`
                )
                .then((response) => {
                    this.toast.warning(
                        "Resit Bank Yang Dimuat Naik Oleh Pelajar Telah Dibatalkan",
                        {
                            timeout: 3000,
                        }
                    );
                    this.$router.back();
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        formatDate(date) {
            const dateObj = new Date(date);
            const day = dateObj.getDate();
            const month = dateObj.getMonth() + 1;
            const year = dateObj.getFullYear();

            return `${day < 10 ? "0" + day : day}/${
                month < 10 ? "0" + month : month
            }/${year}`;
        },
    },
};
</script>
