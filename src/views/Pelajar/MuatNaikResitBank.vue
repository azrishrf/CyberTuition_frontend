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
        <!-- <SideBarPelajar linkActive="yuran" /> -->
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
                    <div v-else>
                        <p>{{ storedFileName }}</p>
                        <a :href="storedFilePath" download target="_blank"
                            >Download
                        </a>
                        <button class="btn-remove" @click="removeFile">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <div class="justify-center">
                <SubmitButton type="submit" txt="Sahkan" class="px-9" />
                <button
                    txt="Batalkan"
                    type="button"
                    class="bg-gray-200 text-black ml-8 px-9 py-3 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                    @click="redirectlogin()"
                >
                    Batalkan
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
// const user = JSON.parse(sessionStorage.getItem("idUser"));

export default {
    data() {
        return {
            fileName: "",
            filePath: "",
            createdReceiptBank: {},
            // storedFilePath: "",
            receiptBankId: "",
        };
    },
    computed: {
        storedFileName() {
            return localStorage.getItem("fileName") || this.fileName;
        },
        storedFilePath() {
            return localStorage.getItem("filePath") || this.filePath;
        },
    },
    async mounted() {
        window.addEventListener("LR_UPLOAD_FINISH", this.handleUploadFinish);
        this.filePath = localStorage.getItem("filePath") || "";
        this.fileName = localStorage.getItem("fileName") || "";
        this.receiptBankId = localStorage.getItem("receiptBankId") || "";
    },

    methods: {
        handleUploadFinish(e) {
            const dataUpload = e.detail.data[0];
            this.fileName = dataUpload.name;
            this.filePath = dataUpload.cdnUrl + dataUpload.name;

            const idTuitionFee = JSON.parse(
                sessionStorage.getItem("idTuitionFee")
            );
            // fetch api later
            const receiptBankData = {
                filePath: this.filePath,
                idTuitionFee: idTuitionFee,
            };
            axios
                .post("http://localhost:3001/api/receiptbank", receiptBankData)
                .then((response) => {
                    this.createdReceiptBank = response.data;
                    console.log(this.createdReceiptBank);
                    localStorage.setItem("filePath", this.filePath);
                    localStorage.setItem("fileName", this.fileName);
                    localStorage.setItem(
                        "receiptBankId",
                        this.createdReceiptBank.receiptBankId
                    );
                });
        },

        // Remove file uploaded
        async removeFile() {
            await axios.delete(
                `http://localhost:3001/api/receiptbank/${this.receiptBankId}`
            );
            this.fileName = "";
            this.filePath = "";

            // Also clear the locally stored data
            localStorage.removeItem("fileName");
            localStorage.removeItem("filePath");
        },
    },
};
</script>
