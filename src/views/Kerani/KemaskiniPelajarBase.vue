<script setup>
import router from "../../router";
</script>

<template>
    <div class="shadow-login bg-white py-5 px-11 rounded-2xl my-5">
        <RouterLink
            class="bg-red hover:bg-darkred text-white py-2 px-5 text-xs rounded-2xl font-semibold float-right"
            v-bind:to="
                `/kerani/pelajar/senaraipelajar/kemaskinipelajar/` +
                studentData.idStudent +
                `/kemaskini`
            "
        >
            <i class="fa-solid fa-pen-to-square mr-1"></i>
            Kemaskini
        </RouterLink>
        <h1 class="text-lg font-semibold mt-2 mb-4">Maklumat Diri Pelajar</h1>
        <table class="text-sm">
            <tr>
                <td class="font-semibold pb-3 w-80">Nama Penuh:</td>
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
                <td class="font-semibold pb-3">No Kad Pengenalan:</td>
                <td class="text-fontgrey font-medium pb-3">
                    {{ studentData.noICStudent }}
                </td>
            </tr>
            <tr>
                <td class="font-semibold pb-3">Tarikh Lahir:</td>
                <td class="text-fontgrey font-medium pb-3">
                    {{ studentData.dateOfBirth }}
                </td>
            </tr>
            <tr>
                <td class="font-semibold pb-3">Tingkatan:</td>
                <td class="text-fontgrey font-medium pb-3">
                    {{ studentData.form }}
                </td>
            </tr>
            <tr>
                <td class="font-semibold pb-3">No Telefon:</td>
                <td class="text-fontgrey font-medium pb-3">
                    {{ studentData.noPhoneStudent }}
                </td>
            </tr>
            <tr>
                <td class="font-semibold pb-3">Alamat Rumah:</td>
                <td class="text-fontgrey font-medium pb-3">
                    {{ studentData.address }}
                </td>
            </tr>
        </table>

        <h1 class="text-lg font-semibold mb-4 mt-5">Maklumat Ibu Bapa</h1>
        <table class="text-sm w-5/12">
            <tr>
                <td class="font-semibold pb-3 w-80">Nama Penuh:</td>
                <td class="text-fontgrey font-medium pb-3">
                    {{ studentData.nameParent }}
                </td>
            </tr>
            <tr>
                <td class="font-semibold pb-3">No Kad Pengenalan</td>
                <td class="text-fontgrey font-medium pb-3">
                    {{ studentData.noICParent }}
                </td>
            </tr>
            <tr>
                <td class="font-semibold pb-3">No Telefon</td>
                <td class="text-fontgrey font-medium pb-3">
                    {{ studentData.noPhoneParent }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from "axios";
import { baseAPI } from "../../stores";

export default {
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
        };
    },
    async mounted() {
        const response = await axios.get(
            baseAPI + `/api/student/${this.idStudent}`
        );
        this.studentData = response.data;
        this.userData = this.studentData.user;
    },
};
</script>
