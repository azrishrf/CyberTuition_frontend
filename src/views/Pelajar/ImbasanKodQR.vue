<template>
    <SideBarPelajar linkActive="kedatangan">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">
                IMBASAN KOD QR
            </h1>
            <p class="mb-5 font-semibold text-xs md:text-xs text-black">
                Dashboard &nbsp; > &nbsp; Kedatangan &nbsp;
                <span class="font-semibold text-xs text-red"
                    >> &nbsp; Imbasan Kod QR</span
                >
            </p>
            <!-- Scan QR Codw -->
            <div class="mb-3">
                <div class="flex justify-center">
                    <QRcodeScanner
                        v-bind:qrbox="300"
                        v-bind:fps="10"
                        @scan-success="scanQRCode"
                    />
                </div>
            </div>

            <!-- Imbas Kod QR -->
            <div
                class="shadow-login bg-white pt-4 pb-2 px-4 rounded-2xl w-full md:w-6/12 mx-auto"
            >
                <h1 class="text-base font-semibold">
                    Langkah untuk mengimbas Kod QR
                </h1>
                <div class="flex flex-row">
                    <div>
                        <p
                            class="text-fontgrey font-medium text-xs md:text-sm mt-2 mb-2"
                        >
                            &bull; Mesti membenarkan kebenaran untuk mengakses
                            kamera
                        </p>
                        <p
                            class="text-fontgrey font-medium text-xs md:text-sm mt-2 mb-2"
                        >
                            &bull; Pegang peranti di atas Kod QR sehingga ia
                            kelihatan jelas dalam skrin telefon pintar anda
                        </p>
                    </div>

                    <img src="/scan2.png" class="w-[100px] md:w-32 h-full" />
                </div>
            </div>
            <dialog
                class="z-50 bg-white px-3 pt-4 top-1/3 rounded-xl"
                v-bind:open="dialogAttend"
            >
                <div class="flex">
                    <i
                        class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                    ></i>
                    <div>
                        <h1 class="font-semibold text-base text-left">
                            Info Kedatangan
                        </h1>
                        <p class="font-normal text-xs">
                            {{ errorMessage }}
                        </p>
                    </div>
                </div>
                <button
                    @click="redirect()"
                    class="bg-red text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                >
                    Tutup
                </button>
            </dialog>
            <div
                class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"
                v-bind:class="{ hidden: !dialogAttend }"
            ></div>
        </template>
    </SideBarPelajar>
</template>
<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import QRcodeScanner from "../../components/QRcodeScanner.vue";
import { baseAPI } from "../../stores";
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";

export default {
    components: {
        SideBarPelajar,
        QRcodeScanner,
    },
    data() {
        return {
            studentData: "",
            studentId: "",
            attendanceId: "",
            // qrCodeScanner: null,
            scanResult: "",
            dialogAttend: false,
            errorMessage: "",
        };
    },
    async mounted() {
        document.title = "Imbasan Kod QR | Pelajar";
        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.studentId = response.data.student.idStudent;

            axios
                .get(baseAPI + `/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                    return this.studentData;
                });
        });
    },
    methods: {
        scanQRCode(decodedText) {
            this.scanResult = decodedText;
            const student_subject = {
                idStudent: this.studentId,
                idAttendance: this.scanResult,
            };

            // Check either subject is correct that student takes
            axios
                .post(
                    baseAPI + "/api/student_subject/check-subject-match",
                    student_subject
                )
                .then((response) => {
                    if (response.data === true) {
                        // Check if the student attendance already recorded
                        axios
                            .get(
                                baseAPI +
                                    `/api/student_attendance/${this.scanResult}/${this.studentId}`
                            )
                            .then((response) => {
                                const alreadyAttend = response.data.isAttend;

                                if (alreadyAttend === true) {
                                    this.toggleAlreadyAttend(1);
                                } else {
                                    // Create the student attendance record
                                    axios
                                        .put(
                                            baseAPI +
                                                `/api/student_attendance/${response.data.idStudentAttendance}`,
                                            {
                                                isAttend: true,
                                            }
                                        )
                                        .then((response) => {
                                            router.push(
                                                "/pelajar/kedatangan/imbasankodqr/berjaya/" +
                                                    response.data
                                                        .idStudentAttendance
                                            );
                                        })
                                        .catch((error) => {
                                            console.error(
                                                "Error creating student_attendance:",
                                                error
                                            );
                                        });
                                }
                            })
                            .catch((error) => {
                                console.error(
                                    "Error checking student_attendance:",
                                    error
                                );
                            });
                    } else {
                        this.toggleAlreadyAttend(2);
                    }
                })
                .catch((error) => {
                    console.error("Error match");
                });
        },

        toggleAlreadyAttend(errorMessage) {
            if (errorMessage === 1) {
                this.errorMessage =
                    "Kedatangan anda sudah diambil bagi subjek ini";
            } else if (errorMessage === 2) {
                this.errorMessage = "Bukan subjek yang didaftar oleh pelajar";
            }

            this.dialogAttend = true;
        },

        redirect() {
            this.dialogAttend = false; // Close the dialog
        },
    },
};
</script>
