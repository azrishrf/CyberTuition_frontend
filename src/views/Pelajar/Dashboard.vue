<template>
    <SideBarPelajar linkActive="dashboard">
        <template v-slot:content>
            <!-- Welcome Text -->
            <h1 class="mt-5 font-semibold text-base md:text-xl">
                Hi, Selamat Datang
            </h1>
            <p class="mb-5 font-semibold text-xs md:text-sm text-grey2">
                Dashboard
            </p>
            <!-- Total -->
            <div class="flex flex-col md:flex-row justify-center gap-5">
                <div class="flex justify-center gap-4">
                    <div
                        class="bg-white shadow-login flex flex-col md:flex-row py-4 px-5 items-center rounded-2xl"
                    >
                        <div>
                            <img src="/class.png" class="w-20" />
                        </div>
                        <div class="px-7 flex-col-reverse">
                            <p class="text-sm">Subjek</p>
                            <p
                                class="text-xl text-black font-medium text-center"
                            >
                                3
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-login flex flex-col md:flex-row py-4 px-2 items-center rounded-2xl"
                    >
                        <div>
                            <img src="/attendance.png" class="w-20" />
                        </div>
                        <div class="px-6 flex-col-reverse">
                            <p class="text-sm">Kedatangan</p>
                            <p
                                class="text-xl text-black font-medium text-center"
                            >
                                92%
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-white shadow-login flex py-4 px-5 items-center justify-center rounded-2xl w-10/12 mx-auto md:w-64 md:mx-0"
                >
                    <div>
                        <img src="/fee.png" class="w-20" />
                    </div>
                    <div class="px-5 flex-col-reverse">
                        <p class="text-sm text-center">Yuran</p>
                        <p class="text-xl text-black font-medium text-center">
                            RM170.00
                        </p>
                    </div>
                </div>
            </div>
            <!-- <p class="my-128">adsads </p> -->
        </template>
    </SideBarPelajar>
</template>

<script>
import SideBarPelajar from "../../components/SideBarPelajar.vue";

export default {
    data() {
        return {};
    },
    mounted() {
        document.title = "Dashboard | Pelajar";
    },
    components: {
        SideBarPelajar,
    },
};
</script>
