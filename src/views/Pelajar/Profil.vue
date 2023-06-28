<template>
    <SideBarPelajar linkActive="profil">
        <template v-slot:content>
            <!-- Breadcrumbs -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">PROFIL DIRI</h1>
            <p class="mb-5 font-semibold text-xs md:text-xs text-black">
                Dashboard &nbsp;
                <span class="font-semibold text-xs text-red"
                    >> &nbsp; Profil Diri</span
                >
            </p>

            <!-- Profil Diri -->
            <!-- Maklumat Pelajar -->
            <div class="shadow-login bg-white py-4 px-4 md:px-5 rounded-2xl">
                <button
                    class="bg-red hover:bg-darkred text-white py-2 px-5 text-xs rounded-2xl font-semibold float-right"
                    @click="kemaskiniProfilDiri()"
                >
                    <i class="fa-solid fa-pen-to-square text-xs"></i>
                    <span class="hidden md:inline ml-2">Kemaskini</span>
                </button>
                <div>
                    <h1 class="text-base font-semibold mb-4">
                        Maklumat Diri Pelajar
                    </h1>
                    <table class="text-sm md:w-4/5">
                        <tr>
                            <td class="font-semibold pb-2 block w-28">
                                Nama Penuh:
                            </td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.nameStudent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">E-mel:</td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ userEmail }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">No KP:</td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.noICStudent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">Tarikh Lahir:</td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.dateOfBirth }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">Tingkatan:</td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.form }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">No Telefon:</td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.noPhoneStudent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2 block">
                                Alamat Rumah:
                            </td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.address }}
                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <h1 class="text-base block font-semibold mt-5 mb-2">
                        Maklumat Ibu Bapa
                    </h1>
                    <table class="text-sm md:w-8/12">
                        <tr>
                            <td class="font-semibold pb-2 w-28 md:w-44">
                                Nama Penuh:
                            </td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.nameParent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">No KP:</td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.noICParent }}
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold pb-2">No Telefon:</td>
                            <td class="text-fontgrey font-medium pb-2">
                                {{ studentData.noPhoneParent }}
                            </td>
                        </tr>
                    </table>
                </div>
                <!-- Maklumat Ibu Bapa -->
            </div>
            <!-- Ubah kata laluan -->
            <div
                class="shadow-login bg-white py-4 px-4 rounded-2xl my-6 md:w-4/6 lg:w-1/2 flex md:gap-10 items-center"
            >
                <div>
                    <h1 class="text-base font-semibold my-2">
                        Ubah Kata Laluan
                    </h1>
                    <p class="text-fontgrey font-medium text-xs mt-2 mb-4">
                        Untuk melindungi akaun anda, pastikan anda menggunakan
                        kata laluan yang kukuh.
                    </p>
                    <button
                        class="bg-red hover:bg-darkred text-white py-2 px-5 text-xs rounded-2xl font-semibold"
                        @click="ubahKataLaluan()"
                    >
                        Tekan disini
                    </button>
                </div>
                <div>
                    <img src="/password.png" class="w-96" />
                </div>
            </div>
        </template>
    </SideBarPelajar>
</template>

<script>
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("idUser"));
import { baseAPI } from "../../stores";
import SideBarPelajar from "../../components/SideBarPelajar.vue";
import router from "../../router";

export default {
    components: {
        SideBarPelajar,
    },
    data() {
        return {
            studentData: "",
            userEmail: "",
            studentId: "",
        };
    },

    async mounted() {
        document.title = "Profil Diri | Pelajar";
        // Get Student Data
        axios.get(baseAPI + `/api/user/${user}`).then((response) => {
            this.studentId = response.data.student.idStudent;

            axios
                .get(`http://localhost:3001/api/student/${this.studentId}`)
                .then((response) => {
                    this.studentData = response.data;
                });
        });

        // Get Student email from user table
        axios
            .get(baseAPI + `/api/user/${user}`)
            .then((response) => {
                this.userEmail = response.data.email;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        // Kemaskini profil
        kemaskiniProfilDiri() {
            router.push("/pelajar/profil/kemaskiniprofildiri");
        },
        // Ubah Kata Laluan
        ubahKataLaluan() {
            router.push("/pelajar/profil/katalaluan");
        },
    },
};
</script>
