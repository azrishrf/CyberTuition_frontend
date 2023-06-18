<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";
import SubmitButton from "../../components/SubmitButton.vue";

document.title = "Dashboard | Pelajar";

// Kemaskin profil
async function kemaskiniProfilDiri() {
    router.push("/pelajar/profil/kemaskiniprofildiri");
}
// Ubah Kata Laluan
async function ubahKataLaluan() {
    router.push("/pelajar/profil/katalaluan");
}
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <SideBarPelajar linkActive="yuran" />
        <!-- Page Content -->
        <div class="w-full px-12 py-4">
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
            <h1 class="my-2 font-semibold text-xl">YURAN</h1>
            <p class="font-semibold text-xs inline mb-4">
                Dashboard &nbsp;
                <span class="font-semibold text-xs inline text-red"
                    >> &nbsp; Yuran</span
                >
            </p>

            <!-- Bulan & Tahun -->
            <div class="shadow-login bg-white py-4 px-5 rounded-2xl my-5">
                <div class="flex gap-20">
                    <div class="">
                        <!-- Bulan-->
                        <p class="text-sm mb-3">Bulan</p>
                        <select
                            placeholder="Bulan"
                            name="Bulan"
                            v-model="month"
                            class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-3 text-sm w-80"
                        >
                            <option disabled value="">-- Pilih Bulan --</option>
                            <option
                                v-for="month in filteredMonths"
                                :key="month"
                                :value="month"
                            >
                                {{ month }}
                            </option>
                        </select>
                    </div>
                    <div class="">
                        <!-- Tahun -->
                        <p class="text-sm mb-3">Tahun</p>
                        <select
                            placeholder="Tahun"
                            name="Tahun"
                            v-model="year"
                            class="border-2 border-slate-grey rounded-md py-3 px-4 block mb-3 text-sm w-80"
                        >
                            <option disabled value="">-- Pilih Tahun --</option>
                            <option
                                v-for="year in uniqueYears"
                                :key="year"
                                :value="year"
                            >
                                {{ year }}
                            </option>
                        </select>
                    </div>
                </div>
                <p
                    class="error-message text-xs text-red grow mb-3 font-semibold"
                >
                    {{ errorMessage }}
                </p>
                <div class="flex gap-6">
                    <SubmitButton
                        type="button"
                        txt="Sahkan"
                        class="px-8"
                        @click="confirmForm()"
                    />
                    <button
                        type="button"
                        class="bg-gray-200 text-black px-8 py-2 rounded-2xl hover:bg-slate-300 text-sm font-bold"
                        @click="resetForm()"
                    >
                        Set Semula
                    </button>
                </div>
            </div>

            <!-- Yuran -->
            <div
                class="shadow-login bg-white py-4 px-10 rounded-2xl my-5 flex"
                v-if="isConfirm"
            >
                <div class="flex-1">
                    <h1 class="text-base font-semibold my-2 pb-1">
                        Penyata Kewangan Pelajar
                    </h1>
                    <table class="text-sm w-4/5">
                        <tr>
                            <td class="font-semibold pb-3 w-3/6">
                                Nama Penuh:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ studentData.nameStudent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">E-mel:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ userData.email }}
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
                            <td class="font-semibold pb-3">Bulan/Tahun:</td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ monthYear }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-3">
                                Jumlah Perlu Dibayar:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                RM {{ totalFee.toFixed(2) }}
                            </td>
                        </tr>
                        <tr
                            v-if="
                                tuitionFee.statusPayment === 'Telah Dibayar' ||
                                tuitionFee.statusPayment ===
                                    'Menunggu Pengesahan'
                            "
                        >
                            <td class="font-semibold pb-3">
                                Kaedah Pembayaran:
                            </td>
                            <td class="text-fontgrey font-medium pb-3">
                                {{ tuitionFee.paymentMethod }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">
                                Status Pembayaran:
                            </td>

                            <td class="font-semibold">
                                <p
                                    v-if="
                                        tuitionFee.statusPayment ===
                                        'Telah Dibayar'
                                    "
                                    class="bg-green text-white px-8 py-1 rounded-xl text-xs inline-block"
                                >
                                    Telah Dibayar
                                </p>
                                <p
                                    v-if="
                                        tuitionFee.statusPayment ===
                                        'Belum Dibayar'
                                    "
                                    class="bg-darkred text-white px-8 py-1 rounded-xl text-xs inline-block"
                                >
                                    Belum Dibayar
                                </p>
                                <p
                                    v-if="
                                        tuitionFee.statusPayment ===
                                        'Menunggu Pengesahan'
                                    "
                                    class="bg-yellow-400 text-white px-5 py-1 rounded-xl text-xs inline-block"
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
                            RM {{ totalFee }}
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Kaedah Pembayaran -->
            <div
                class="shadow-login bg-white py-4 px-10 rounded-2xl my-5"
                v-if="tuitionFee.statusPayment === 'Belum Dibayar' && isConfirm"
            >
                <h1 class="text-base font-semibold my-2">
                    Kaedah Pembayaran (Sila Pilih Salah Satu)
                </h1>
                <!-- Payment Gateway -->
                <div class="flex">
                    <button
                        class="shadow-login bg-white p-6 rounded-2xl my-5"
                        @click="createBill()"
                    >
                        <div class="text-center space-x-4">
                            <img
                                src="/fpx.png"
                                class="w-24 h-full inline"
                            />
                            <img
                                src="/toyyibpay.png"
                                class="w-36 h-full inline"
                            />
                        </div>
                        <p class="font-semibold text-center mt-4">
                            Payment Gateway
                        </p>
                        <p class="text-sm text-center font-semibold text-grey">
                            Kad Kredit/Debit/ Pindahan Bank Dalam Talian
                        </p>
                    </button>
                    <!-- Upload bank receipt -->
                    <button
                        class="shadow-login bg-white py-6 px-10 rounded-2xl my-5 inline-block ml-20"
                        @click="redirectTo()"
                    >
                        <div class="text-center">
                            <img
                                src="/duitnow.png"
                                class="w-16 inline text-center"
                            />
                        </div>
                        <p class="font-semibold text-center mt-4">
                            Muat Naik Resit Bank
                        </p>
                        <p class="text-sm text-center font-semibold text-grey">
                            Pindahan Wang Ke Akaun Bank Tuisyen
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { baseAPI } from "../../stores";

export default {
    data() {
        return {
            isTuitionFeePaid: false,
            userData: {},
            studentData: {},
            subjects: [],
            tuitionFees: [],
            month: "",
            year: "",
            totalFee: 0,
            billcode: "",
            studentId: "",
            errorMessage: "",
            isConfirm: false,
            monthYear: "",
            tuitionFee: "",
            subjectsArray: "",
        };
    },
    async mounted() {
        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.userData = response.data;
            this.studentId = response.data.student.idStudent;

            axios
                .get(baseAPI + `/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;

                    this.subjects = response.data.student_Subject.map(
                        (studentSubject) => studentSubject.subject
                    );
                    this.tuitionFees = response.data.tuitionFee;
                });
        });
    },
    computed: {
        // display each month only once and filtered
        filteredMonths() {
            const uniqueMonths = [
                ...new Set(this.tuitionFees.map((fee) => fee.month)),
            ];
            const sortedMonths = uniqueMonths.sort((a, b) => a - b);
            return sortedMonths;
        },
        // display each year only once and filtered
        uniqueYears() {
            const uniqueYears = [
                ...new Set(this.tuitionFees.map((fee) => fee.year)),
            ];
            const sortedYears = uniqueYears.sort((a, b) => a - b);
            return sortedYears;
        },
    },
    watch: {
        month(newMonth) {
            if (newMonth) {
                this.errorMessage = ""; // Clear the error message
            }
        },
        year(newYear) {
            if (newYear) {
                this.errorMessage = ""; // Clear the error message
            }
        },
    },
    methods: {
        // Create bill to toyyibPay payment gateway
        createBill() {
            axios
                .get(
                    baseAPI +
                        `/api/tuitionfee/paymentgateway/${this.tuitionFee.idTuitionFee}`
                )
                .then((response) => {
                    const existingPaymentGatewayData = response.data;
                    if (existingPaymentGatewayData) {
                        this.billcode = existingPaymentGatewayData.billCode;
                        window.location.href = `https://toyyibpay.com/${this.billcode}`;
                    } else {
                        sessionStorage.setItem(
                            "idTuitionFee",
                            JSON.stringify(this.tuitionFee.idTuitionFee)
                        );
                        // Create new bill
                        const formData = new FormData();
                        // Convert totalFee to cent because toyyibPay receive value in cent
                        const totalFeeCent = this.totalFee * 100;

                        // Pass the following parameters to generate Bill Code
                        formData.append(
                            "userSecretKey",
                            import.meta.env.VITE_SECRETKEY_TOYYIBPAY
                        );
                        formData.append("categoryCode", "3wk83ymw");
                        formData.append(
                            "billName",
                            "Yuran Bulanan Cyber Tuition"
                        );
                        formData.append(
                            "billDescription",
                            "Bulan: " +
                                this.month +
                                ", " +
                                "Tahun: " +
                                this.year
                        );
                        formData.append("billPriceSetting", "1");
                        formData.append("billPayorInfo", "1");
                        formData.append("billAmount", "100");
                        formData.append(
                            "billReturnUrl",
                            "http://localhost:5173/pelajar/statuspembayaran"
                        );
                        formData.append("billCallbackUrl", "");
                        formData.append("billExternalReferenceNo", "");
                        formData.append("billTo", this.studentData.nameStudent);
                        formData.append("billEmail", this.userData.email);
                        formData.append(
                            "billPhone",
                            this.studentData.noPhoneStudent
                        );
                        formData.append("billPaymentChannel", "0");
                        formData.append(
                            "billContentEmail",
                            "Terima Kasih kerana telah membayar yuran pada bulan ini!"
                        );

                        fetch(
                            "https://toyyibpay.com/index.php/api/createBill",
                            {
                                method: "POST",
                                body: formData,
                            }
                        )
                            .then((response) => response.json())
                            .then((result) => {
                                console.log(result[0].BillCode);
                                // Create data payment gateway
                                const paymentGatewayData = {
                                    billCode: result[0].BillCode,
                                    idTuitionFee: this.tuitionFee.idTuitionFee,
                                };

                                axios
                                    .post(
                                        "http://localhost:3001/api/paymentgateway",
                                        paymentGatewayData
                                    )
                                    .then((response) => {
                                        const createdPaymentGateway =
                                            response.data;

                                        // Insert paymentGatewayId into session
                                        sessionStorage.setItem(
                                            "paymentGatewayId",
                                            JSON.stringify(
                                                createdPaymentGateway.paymentGatewayId
                                            )
                                        );
                                    })
                                    .catch((error) => {
                                        const errorMessage =
                                            error.response.data.error;
                                        console.log(errorMessage);
                                    });

                                // Redirect the user to the URL
                                window.location.href = `https://toyyibpay.com/${result[0].BillCode}`;
                            })
                            .catch((error) => console.error("Error:", error));
                    }
                });
        },
        // Confirm month and year
        confirmForm() {
            if (!this.month || !this.year) {
                this.errorMessage = "* Sila isi semua maklumat";
            } else {
                this.isConfirm = true;
                this.errorMessage = "";
                this.monthYear = this.month + " / " + this.year;

                const tuitionFeeData = {
                    month: this.month,
                    year: this.year,
                    idStudent: this.studentId,
                };

                // Get Tuition Fee data
                axios
                    .post(baseAPI + `/api/checktuitionfee`, tuitionFeeData)
                    .then((response) => {
                        this.tuitionFee = response.data;

                        // Divide subjectList into separate subjects
                        const subjectNames = this.tuitionFee.subjectsList
                            .split(",")
                            .map((subject) => subject.trim())
                            .filter((subject) => subject !== ""); // Filter out empty subjects

                        // Fetch the Subject data from the server using Prisma
                        axios
                            .get(baseAPI + `/api/subjects`)
                            .then((response) => {
                                const subjects = response.data;

                                // Map the subject names and fees into subjectsArray
                                this.subjectsArray = subjectNames.map(
                                    (subjectName) => {
                                        const subject = subjects.find(
                                            (s) => s.name === subjectName
                                        );
                                        const fee = subject
                                            ? parseInt(subject.fee)
                                            : 0;
                                        return { name: subjectName, fee };
                                    }
                                );

                                this.totalFee = this.tuitionFee.amount;
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    });
            }
        },

        // Reset all input and clear interval
        resetForm() {
            this.month = "";
            this.year = "";
            this.isConfirm = false;
        },

        // Redirect to page Upload receipt Bank
        redirectTo() {
            // Insert tuitionFee into session
            sessionStorage.setItem(
                "idTuitionFee",
                JSON.stringify(this.tuitionFee.idTuitionFee)
            );
            router.push("/pelajar/yuran/muatnaikresitbank");
        },
    },
};
</script>
