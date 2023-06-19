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
                PENYATA KEWANGAN PELAJAR
            </h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Yuran
                <span class="font-semibold text-xs inline text-red">
                    &nbsp; Penyata Kewangan Pelajar
                </span>
            </p>
            <!-- Content -->
            <div class="bg-white my-6 rounded-2xl py-5 px-11 shadow-login flex">
                <div class="flex-1">
                    <h1 class="mb-4 font-semibold text-lg">
                        Penyata Kewangan Pelajar
                    </h1>
                    <table class="text-sm">
                        <tr>
                            <td class="font-semibold pb-3 w-80">
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
                                No Kad Pengenalan:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ studentData.noICStudent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Bulan/Tahun</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ tuitionFeeData.month }} /
                                {{ tuitionFeeData.year }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">Jumlah Yuran:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                RM {{ tuitionFeeData.amount }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">
                                Status Pembayaran:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                <p
                                    class="bg-green text-white px-8 py-1 rounded-xl text-xs inline-block"
                                    v-if="
                                        tuitionFeeData.statusPayment ===
                                        'Telah Dibayar'
                                    "
                                >
                                    Telah Dibayar
                                </p>
                                <p
                                    class="bg-darkred text-white px-8 py-1 rounded-xl text-xs inline-block"
                                    v-if="
                                        tuitionFeeData.statusPayment ===
                                        'Belum Dibayar'
                                    "
                                >
                                    Belum Dibayar
                                </p>
                                <p
                                    class="bg-yellow-400 text-white px-8 py-1 rounded-xl text-xs inline-block"
                                    v-if="
                                        tuitionFeeData.statusPayment ===
                                        'Menunggu Pengesahan'
                                    "
                                >
                                    Menunggu Pengesahan
                                </p>
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
                            RM {{ tuitionFeeData.amount }}
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Maklumat Pembayaran -->
            <div
                class="bg-white my-6 rounded-2xl py-5 px-11 shadow-login"
                v-if="tuitionFeeData.statusPayment === 'Telah Dibayar'"
            >
                <h1 class="mb-4 font-semibold text-lg">Maklumat Pembayaran</h1>
                <table class="text-sm">
                    <tr>
                        <td class="font-semibold pb-3 w-80">
                            Kaedah Pembayaran:
                        </td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ tuitionFeeData.paymentMethod }}
                        </td>
                    </tr>
                    <!-- Payment Gateway -->
                    <tr
                        v-if="
                            tuitionFeeData.paymentMethod === 'Payment Gateway'
                        "
                    >
                        <td class="font-semibold pb-3 w-80">
                            ID Bil Transaksi:
                        </td>
                        <td class="text-fontgrey font-medium pb-3">
                            {{ paymentGatewayData.transactionBill }}
                        </td>
                    </tr>

                    <!-- Resit Bank -->
                    <tr
                        v-if="
                            tuitionFeeData.paymentMethod ===
                            'Muat Naik Resit Bank'
                        "
                    >
                        <td class="font-semibold pb-3 w-80">Resit Bank:</td>
                        <td class="text-fontgrey font-medium pb-3">
                            <div
                                class="shadow-login bg-gray-200 rounded-2xl py-2 px-4 inline"
                            >
                                <a
                                    :href="uploadReceiptBankData.filePath"
                                    download
                                    target="_blank"
                                    ><p
                                        class="inline font-medium mr-3 hover:text-blue-800 hover:underline text-sm"
                                    >
                                        {{ uploadReceiptBankData.fileName }}
                                    </p>
                                </a>
                                <i
                                    class="fa-solid fa-circle-down text-xl text-gray-600"
                                ></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold pb-3 w-80">
                            Tarikh Pembayaran:
                        </td>
                        <td
                            class="text-fontgrey font-medium pb-3"
                            v-if="
                                tuitionFeeData.paymentMethod ===
                                'Payment Gateway'
                            "
                        >
                            {{ paymentGatewayData.transactionDate }}
                        </td>
                        <td
                            class="text-fontgrey font-medium pb-3"
                            v-if="
                                tuitionFeeData.paymentMethod ===
                                'Muat Naik Resit Bank'
                            "
                        >
                            {{ uploadReceiptBankData.createdAt }}
                        </td>
                        <td
                            class="text-fontgrey font-medium pb-3"
                            v-if="tuitionFeeData.paymentMethod === 'Tunai'"
                        >
                            {{ tuitionFeeData.cashTransactionDate }}
                        </td>
                    </tr>
                </table>
            </div>

            <div
                class="shadow-login bg-white py-5 px-11 rounded-2xl my-6 w-1/2"
                v-if="tuitionFeeData.statusPayment === 'Belum Dibayar'"
            >
                <div class="flex gap-10">
                    <div class="w-10/12">
                        <h1 class="text-lg font-semibold my-2">
                            Pembayaran Secara Tunai
                        </h1>
                        <p
                            class="text-fontgrey font-semibold text-sm mt-2 mb-4"
                        >
                            Kaedah pembayaran yang boleh juga digunakan oleh
                            pelajar untuk membuat pembayaran yuran bulanan
                            secara langsung.
                        </p>
                    </div>
                    <div>
                        <img src="/cash.png" class="w-32" />
                    </div>
                </div>

                <!-- Instruction -->
                <div
                    class="bg-slate-100 py-3 px-5 text-sm font-medium rounded-2xl mt-3 mb-8 text-gray-700"
                >
                    <p class="mb-2 text-black font-semibold">Arahan:</p>
                    <ul class="list-decimal list-inside">
                        <li class="mb-2">
                            Rujuk penyata kewangan pelajar yang tertera di atas
                            dan sahkan ketepatan jumlah pembayaran yang
                            dipaparkan.
                        </li>
                        <li class="mb-2">
                            Terima bayaran tunai daripada pelajar.
                        </li>
                        <li class="mb-2">
                            Klik pada butang "Bayaran Diterima" di bawah untuk
                            menunjukkan bahawa pembayaran telah diterima secara
                            tunai.
                        </li>
                    </ul>
                </div>

                <button
                    class="bg-green hover:bg-cyan-700 text-white py-1 px-4 text-sm rounded-2xl font-semibold flex gap-2 items-center mx-auto"
                    @click="acceptCashPayment()"
                >
                    <i class="fa-solid fa-circle-check text-lg"></i>

                    Bayaran Diterima
                </button>
                <!-- Dialog delete subject -->
                <div
                    v-if="showDialog"
                    class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-10"
                >
                    <div class="w-2/6 bg-white px-3 py-4 top-1/3 rounded-xl">
                        <div>
                            <i
                                class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                            ></i>

                            <h1 class="font-semibold text-base text-left">
                                Memadam Data Subjek
                            </h1>
                            <p class="font-normal text-xs text-left">
                                Adakah anda pasti mahu memadamkan subjek bagi
                                pelajar ini?
                            </p>

                            <button
                                @click="acceptCash()"
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
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { baseAPI } from "../../stores";
import SidebarDashboard from "../../components/SidebarDashboard.vue";
import router from "../../router";

export default {
    components: {
        SidebarDashboard,
    },
    data() {
        return {
            receiptsBank: "",
            malayMonths: "",
            idTuitionFee: router.currentRoute.value.params.id,
            tuitionFeeData: {},
            studentData: {},
            paymentGatewayData: {},
            uploadReceiptBankData: {},
            subjectsArray: "",
            showDialog: false,
            toast: useToast(),
        };
    },
    async mounted() {
        document.title = "Pengesahan Resit Bank | Kerani";

        try {
            const response = await axios.get(
                baseAPI + `/api/tuitionfee/${this.idTuitionFee}`
            );
            this.tuitionFeeData = response.data;
            this.studentData = this.tuitionFeeData.student;
            this.paymentGatewayData = this.tuitionFeeData.paymentGateway;
            this.uploadReceiptBankData = this.tuitionFeeData.receiptBank;

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
        } catch (error) {
            console.error("Error:", error);
        }
    },

    methods: {
        acceptCashPayment() {
            this.showDialog = true;
        },

        acceptCash() {
            // update tuition fee status
            // Fetch the Subject data from the server using Prisma
            axios
                .put(baseAPI + `/api/tuitionfee/cash/${this.idTuitionFee}`)
                .then((response) => {
                    const tuitionFee = response.data;

                    this.toast.success("Resit Bank Telah Disahkan ", {
                        timeout: 3000,
                    });
                    this.showDialog = false;
                });
        },
    },
};
</script>
