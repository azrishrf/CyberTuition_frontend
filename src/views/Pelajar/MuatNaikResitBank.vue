<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";
import SubmitButton from "../../components/SubmitButton.vue";
import FileUploader from "../../components/FileUploader.vue";
// import axios from "axios";

document.title = "Muat Naik Resit Bank | Pelajar";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SideBarPelajar linkActive="yuran" />
        <!-- Page Content -->
        <div class="w-full px-6 lg:px-12 pb-4 pt-2">
            <!-- Top Bar -->
            <div
                class="flex justify-end bg-white shadow-login rounded-2xl px-6 py-2"
            >
                <div
                    class="flex items-center justify-between bg-red w-28 text-white text-xs px-4 rounded-3xl py-2 font-semibold"
                >
                    <i class="fa-solid fa-user text-xs"></i>Pelajar
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <!-- Breadcrumbs -->
            <h1 class="mt-2 font-semibold text-xl">YURAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp; > &nbsp; Yuran &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Muat Naik Resit Bank</span
                >
            </p>
            <!-- Maklumat Akaun Bank -->
            <div class="">
                <div
                    class="shadow-login bg-white gap-8 rounded-2xl py-6 px-4 lg:px-6 my-6 max-md:flex-col flex lg:w-3/6"
                >
                    <div>
                        <h1 class="text-base font-semibold mb-3">
                            Maklumat Akaun Bank
                        </h1>
                        <table class="text-sm">
                            <tr>
                                <td class="font-semibold text-black pb-2">
                                    Nama Akaun:
                                </td>
                                <td
                                    class="font-semibold text-fontgrey pl-1 pb-2"
                                >
                                    Cyber Tuition Saujana Utama
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold text-black pb-2">
                                    Nama Bank:
                                </td>
                                <td
                                    class="font-semibold text-fontgrey pl-1 pb-2"
                                >
                                    Bank Islam
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold text-black pb-2">
                                    Nombor Akaun:
                                </td>
                                <td
                                    class="font-semibold text-fontgrey pl-1 pb-2"
                                >
                                    12168020201895
                                </td>
                            </tr>
                        </table>
                    </div>

                    <img
                        src="../../../assets/duitnowqr.png"
                        class="w-52 h-auto mx-auto"
                    />
                </div>
            </div>
            <!-- Upload receipt bank -->
            <div class="">
                <div
                    class="shadow-login bg-white gap-8 rounded-2xl py-6 px-4 lg:px-6 mb-6 lg:w-3/6"
                >
                    <h1 class="text-base font-semibold mb-3">
                        Muat Naik Resit Bank
                    </h1>
                    <div v-if="!filePath">
                        <FileUploader v-on:upload="handleUploaderEvent" />
                    </div>
                    <div v-else class="my-6">
                        <div
                            class="shadow-login bg-gray-200 gap-8 rounded-2xl py-3 px-4 inline"
                        >
                            <a :href="filePath" download target="_blank"
                                ><p
                                    class="inline font-medium mr-6 hover:text-blue-800 hover:underline text-sm"
                                >
                                    {{ fileName }}
                                </p>
                            </a>

                            <i
                                class="fa-solid fa-trash-can bg-slate-500 hover:bg-red text-white rounded-full p-2 cursor-pointer"
                                @click="removeFile"
                            ></i>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <div class="justify-center">
                <SubmitButton
                    type="submit"
                    txt="Sahkan"
                    class="px-9"
                    @click="submit()"
                />
                <button
                    txt="Batalkan"
                    type="button"
                    class="bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                    @click="cancel()"
                >
                    Batalkan
                </button>
            </div>
            <!-- Dialog upload success-->
            <div
                v-if="showDialog"
                class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-30"
            >
                <div class="bg-white rounded-2xl shadow-lg p-6 w-5/12">
                    <h3 class="text-lg font-semibold mb-4 text-center">
                        Pembayaran Yuran Secara Muat Naik Resit Bank
                    </h3>
                    <div class="flex justify-center w-full">
                        <img
                            src="../../../assets/Payment Pending.jpg"
                            alt="Payment Pending"
                            class="w-72 h-full mb-5"
                        />
                    </div>
                    <p
                        class="text-center font-bold text-xl text-yellow-500 px-7"
                    >
                        MENUNGGU PENGESAHAN KERANI
                    </p>
                    <p
                        class="text-center font-bold text-fontgrey text-sm py-4 px-8"
                    >
                        Resit pembayaran bank anda yang dimuat naik akan
                        menjalani pengesahan oleh kerani kami dalam masa 1-2
                        hari perniagaan. Dalam tempoh ini, kami akan menyemak
                        dengan teliti maklumat yang diberikan untuk memastikan
                        ketepatan dan kesahihannya. Setelah proses pengesahan
                        selesai, anda akan menerima kemas kini mengenai status
                        pembayaran anda.
                    </p>
                    <button
                        @click="redirectToYuran()"
                        class="bg-red hover:bg-darkred text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-sm"
                    >
                        Sahkan
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
            fileName: "",
            filePath: "",
            idTuitionFee: "",
            receiptBankId: "",
            toast: useToast(),
            showDialog: false,
        };
    },
    async mounted() {
        window.addEventListener("LR_UPLOAD_FINISH", this.handleUploadFinish);
        // Get existing receipt bank
        this.idTuitionFee = JSON.parse(sessionStorage.getItem("idTuitionFee"));
        try {
            const response = await axios.get(
                `http://localhost:3001/api/receiptbank/${this.idTuitionFee}`
            );
            const existingReceiptBankData = response.data;
            console.log(existingReceiptBankData);
            if (existingReceiptBankData) {
                this.fileName = existingReceiptBankData.fileName;
                this.filePath = existingReceiptBankData.filePath;
                this.receiptBankId = existingReceiptBankData.receiptBankId;
            }
        } catch (error) {
            console.error(error);
        }
    },

    methods: {
        handleUploadFinish(e) {
            const dataUpload = e.detail.data[0];
            this.fileName = dataUpload.name;
            this.filePath = dataUpload.cdnUrl + dataUpload.name;

            // create receipt bank data
            const receiptBankData = {
                fileName: this.fileName,
                filePath: this.filePath,
                idTuitionFee: this.idTuitionFee,
            };
            axios
                .post("http://localhost:3001/api/receiptbank", receiptBankData)
                .then((response) => {
                    const createdReceiptBank = response.data;
                    this.receiptBankId = createdReceiptBank.receiptBankId;
                    console.log(createdReceiptBank);
                    this.toast.success("Fail berjaya dimuat naik", {
                        timeout: 3000,
                    });
                });
        },

        // Remove file uploaded
        async removeFile() {
            await axios.delete(
                `http://localhost:3001/api/receiptbank/${this.receiptBankId}`
            );

            this.fileName = "";
            this.filePath = "";
            window.location.reload();
        },

        // submit file
        async submit() {
            if (this.fileName === "" || this.filePath === "") {
                this.toast.error("Sila Muat Naik Resit Bank Terlebih Dahulu", {
                    timeout: 3000,
                });
            } else {
                this.showDialog = true;
                await axios.put(
                    `http://localhost:3001/api/tuitionfee/uploadreceiptbank/${this.idTuitionFee}`
                );
                this.toast.success("Fail Resit Bank Telah Dihantar Ke Kerani", {
                    timeout: 3000,
                });
            }
        },

        redirectToYuran() {
            router.push("/pelajar/yuran");
        },
        // cancel
        cancel() {},
    },
};
</script>
