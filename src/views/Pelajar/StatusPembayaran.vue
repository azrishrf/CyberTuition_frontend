<script setup>
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import router from "../../router";
import KemaskiniPelajar from "../Kerani/KemaskiniPelajar.vue";

document.title = "Dashboard | Pelajar";
</script>

<template>
    <div class="bg-slate-50 w-full min-h-screen flex">
        <!-- Side Bar -->
        <!-- <SideBarPelajar linkActive="profil" /> -->
        <!-- Page Content -->
        <div class="w-full px-6 py-4 lg:px-4">
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

            <!-- Conditionally display div based on statusId -->
            <div v-if="statusId == 1" class="">
                <div class="flex justify-center">
                    <div
                        class="shadow-login bg-white rounded-2xl my-6 py-8 lg:w-6/12"
                    >
                        <!-- <p class="text-green-600">Success</p> -->
                        <div class="flex justify-center w-full">
                            <img
                                src="../../../assets/Payment Successful.jpg"
                                alt="Payment Successful"
                                class="w-72 h-full"
                            />
                        </div>

                        <p class="text-center font-bold text-xl text-green">
                            PEMBAYARAN BERJAYA
                        </p>
                        <p
                            class="text-center font-semibold text-fontgrey text-xs py-2"
                        >
                            Bayaran anda telah diproses! <br />
                            Butiran transaksi disertakan di bawah
                        </p>
                        <p
                            class="text-center font-semibold text-blue-400 text-xs"
                        >
                            ID Transaksi: {{ this.transactionId }}
                        </p>
                        <!-- Details -->
                        <div class="flex justify-center py-5 px-9 gap-3">
                            <div class="flex flex-col gap-2 text-xs">
                                <p class="font-semibold text-black">Yuran:</p>
                                <p class="font-semibold text-black">Emel:</p>
                                <p class="font-semibold text-black">
                                    Jenis Pembayaran:
                                </p>
                                <p class="font-semibold text-black">
                                    Jumlah Pembayaran:
                                </p>
                                <p class="font-semibold text-black">
                                    Tarikh Transaksi:
                                </p>
                            </div>
                            <div
                                class="flex flex-col gap-2 font-medium text-xs"
                            >
                                <p class="text-fontgrey">
                                    Bulan {{ this.tuitionFeeData.month }},
                                    {{ this.tuitionFeeData.year }}
                                </p>
                                <p class="text-fontgrey">
                                    {{ this.userData.email }}
                                </p>
                                <p class="text-fontgrey">Payment Gateway</p>
                                <p class="text-fontgrey">
                                    RM {{ this.tuitionFeeData.amount }}
                                </p>
                                <p class="text-fontgrey">
                                    {{ this.currentDateTime }}
                                </p>
                            </div>
                        </div>
                        <div class="flex justify-center my-2">
                            <SubmitButton
                                type="submit"
                                txt="Dashboard"
                                class="px-3 py-1 text-sm font-semibold"
                                @click="redirectDashboard()"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="statusId == 2" class="mt-4">
                <div class="flex justify-center">
                    <div
                        class="shadow-login bg-white rounded-2xl my-6 py-8 lg:w-6/12"
                    >
                        <!-- <p class="text-green-600">Success</p> -->
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
                            PAYMENT PENDING
                        </p>
                        <p
                            class="text-center font-bold text-fontgrey text-xs py-4 px-8"
                        >
                            Pembayaran anda masih menunggu pengesahan daripada
                            payment gateway.
                        </p>

                        <div class="flex justify-center my-2">
                            <SubmitButton
                                type="submit"
                                txt="Yuran"
                                class="px-8 py-1 text-sm font-semibold"
                                @click="redirectYuran()"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="statusId == 3" class="mt-4">
                <div class="flex justify-center">
                    <div
                        class="shadow-login bg-white rounded-2xl my-6 py-8 lg:w-6/12"
                    >
                        <!-- <p class="text-green-600">Success</p> -->
                        <div class="flex justify-center w-full">
                            <img
                                src="../../../assets/Payment Unsuccessful.png"
                                alt="Payment Successful"
                                class="w-72 h-full mb-5"
                            />
                        </div>

                        <p class="text-center font-bold text-xl text-red px-7">
                            PEMBAYARAN TIDAK BERJAYA
                        </p>
                        <p
                            class="text-center font-bold text-fontgrey text-xs py-4 px-14"
                        >
                            Bayaran anda telah ditolak. <br />
                            Sila cuba lagi kemudian atau gunakan kaedah
                            pembayaran lain.
                        </p>

                        <div class="flex justify-center my-2">
                            <SubmitButton
                                type="submit"
                                txt="Yuran"
                                class="px-8 py-1 text-sm font-semibold"
                                @click="redirectYuran()"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));

export default {
    data() {
        return {
            statusId: "",
            transactionId: "",
            billCode: "",
            tuitionFeeData: "",
            userData: "",
            currentDateTime: "",
        };
    },

    mounted() {
        // Get data user
        axios.get(`http://localhost:3001/api/user/${user}`).then((response) => {
            this.userData = response.data;
        });
        // Get id Tuition Fee
        const idTuitionFee = JSON.parse(sessionStorage.getItem("idTuitionFee"));
        // Get id Tuition Fee
        const paymentGatewayId = JSON.parse(
            sessionStorage.getItem("paymentGatewayId")
        );
        console.log(paymentGatewayId);
        // Get data from param URL
        this.statusId = this.$route.query.status_id;
        this.transactionId = this.$route.query.transaction_id;

        // Create data payment gateway
        const updatePaymentGatewayData = {
            transactionBill: this.transactionId,
            paymentGatewayId: paymentGatewayId,
        };

        axios
            .put(
                "http://localhost:3001/api/paymentgateway",
                updatePaymentGatewayData
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                const errorMessage = error.response.data.error;
                console.log(errorMessage);
            });

        if (this.statusId == 1) {
            this.date();
            axios
                .put(`http://localhost:3001/api/tuitionfee/${idTuitionFee}`)
                .then((response) => {
                    console.log(response.data);
                    this.tuitionFeeData = response.data;
                });
        } else {
            console.log("fk");
        }
    },
    methods: {
        date() {
            const options = {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                timeZone: "Asia/Kuala_Lumpur",
            };
            const formatter = new Intl.DateTimeFormat("ms-MY", options);
            this.currentDateTime = formatter
                .format(new Date())
                .replace("pada", ",")
                .replace("PG", "AM")
                .replace("PTG", "PM");
        },
        redirectDashboard() {
            router.push("/pelajar/dashboard");
        },
        redirectYuran() {
            router.push("/pelajar/yuran");
        },
    },
};
</script>
