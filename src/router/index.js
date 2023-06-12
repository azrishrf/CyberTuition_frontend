import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "login",
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("../views/SignUpStudent.vue"),
        },
        // Kerani
        {
            path: "/kerani/dashboard",
            name: "keraniDashboard",
            component: () => import("../views/Kerani/Dashboard.vue"),
        },
        {
            path: "/kerani/pelajar/senaraipelajar",
            name: "keraniSenaraiPelajar",
            component: () => import("../views/Kerani/SenaraiPelajar.vue"),
        },
        {
            path: "/kerani/pelajar/senaraipelajar/kemaskinipelajar/:id",
            name: "kemaskiniPelajar",
            component: () => import("../views/Kerani/KemaskiniPelajar.vue"),
            children: [
                {
                    path: "",
                    component: () =>
                        import("../views/Kerani/KemaskiniPelajarBase.vue"),
                },
                {
                    path: "kemaskini",
                    component: () =>
                        import("../views/Kerani/KemaskiniPelajarChild.vue"),
                },
            ],
        },
        {
            path: "/kerani/pelajar/pengesahan",
            name: "keraniPengesahan",
            component: () => import("../views/Kerani/Pengesahan.vue"),
        },
        {
            path: "/kerani/pelajar/pengesahan/maklumatpengesahan/:id",
            name: "maklumatPengesahan",
            component: () => import("../views/Kerani/MaklumatPengesahan.vue"),
        },
        {
            path: "/kerani/pelajar/menambahpelajar",
            name: "keraniMenambahPelajar",
            component: () => import("../views/Kerani/MenambahPelajar.vue"),
        },
        {
            path: "/kerani/guru/senaraiguru",
            name: "keraniSenaraiGuru",
            component: () => import("../views/Kerani/SenaraiGuru.vue"),
        },
        {
            path: "/kerani/guru/senaraiguru/kemaskiniguru/:id",
            name: "kemaskiniGuru",
            component: () => import("../views/Kerani/KemaskiniGuru.vue"),
        },
        {
            path: "/kerani/guru/menambahguru",
            name: "keraniMenambahGuru",
            component: () => import("../views/Kerani/MenambahGuru.vue"),
        },
        {
            path: "/kerani/kelas",
            name: "keraniKelas",
            component: () => import("../views/Kerani/Kelas.vue"),
        },
        {
            path: "/kerani/kelas/maklumatkelas/:id",
            name: "kemaskiniKelas",
            component: () => import("../views/Kerani/MaklumatKelas.vue"),
            children: [
                {
                    path: "",
                    component: () =>
                        import("../views/Kerani/MaklumatKelasBase.vue"),
                },
                {
                    path: "kemaskinikelas",
                    component: () =>
                        import("../views/Kerani/KemaskiniKelas.vue"),
                },
            ],
        },
        {
            path: "/kerani/yuran",
            name: "keraniYuran",
            component: () => import("../views/Kerani/Yuran.vue"),
        },
        {
            path: "/kerani/laporan",
            name: "keraniLaporan",
            component: () => import("../views/Kerani/Laporan.vue"),
        },

        // Pelajar
        {
            path: "/pelajar/dashboard",
            name: "pelajarDashboard",
            component: () => import("../views/Pelajar/Dashboard.vue"),
        },
        {
            path: "/pelajar/profil",
            name: "pelajarProfilDiri",
            component: () => import("../views/Pelajar/Profil.vue"),
        },
        {
            path: "/pelajar/profil/kemaskiniprofildiri",
            name: "kemaskiniProfilDiri",
            component: () => import("../views/Pelajar/KemaskiniProfilDiri.vue"),
        },
        {
            path: "/pelajar/profil/katalaluan",
            name: "pelajarKataLaluan",
            component: () => import("../views/Pelajar/KataLaluan.vue"),
        },
        {
            path: "/pelajar/kelas",
            name: "pelajarKelas",
            component: () => import("../views/Pelajar/Kelas.vue"),
        },
        {
            path: "/pelajar/kedatangan",
            name: "pelajarKedatangan",
            component: () => import("../views/Pelajar/Kedatangan.vue"),
        },
        {
            path: "/pelajar/kedatangan/imbasankodqr",
            name: "pelajarImbasanKodQR",
            component: () => import("../views/Pelajar/ImbasanKodQR.vue"),
        },
        {
            path: "/pelajar/kedatangan/imbasankodqr/berjaya/:id",
            name: "pelajarImbasanKodQRBerjaya",
            component: () => import("../views/Pelajar/ImbasanKodQRBerjaya.vue"),
        },
        {
            path: "/pelajar/yuran",
            name: "pelajarYuran",
            component: () => import("../views/Pelajar/Yuran.vue"),
        },
        {
            path: "/pelajar/yuran/muatnaikresitbank",
            name: "pelajarMuatNaikResitBank",
            component: () => import("../views/Pelajar/MuatNaikResitBank.vue"),
        },
        {
            path: "/pelajar/statuspembayaran",
            name: "pelajarStatusPembayaranYuran",
            component: () => import("../views/Pelajar/StatusPembayaran.vue"),
        },
        {
            path: "/pelajar/laporan",
            name: "pelajarLaporan",
            component: () => import("../views/Pelajar/Laporan.vue"),
        },
        // Guru
        {
            path: "/guru/dashboard",
            name: "guruDashboard",
            component: () => import("../views/Guru/Dashboard.vue"),
        },
        {
            path: "/guru/profil",
            name: "guruProfil",
            component: () => import("../views/Guru/Profil.vue"),
        },
        {
            path: "/guru/profil/kemaskini",
            name: "guruKemaskiniProfil",
            component: () => import("../views/Guru/KemaskiniProfil.vue"),
        },
        {
            path: "/guru/profil/katalaluan",
            name: "guruKataLaluan",
            component: () => import("../views/Guru/KataLaluan.vue"),
        },
        {
            path: "/guru/kelas",
            name: "guruKelas",
            component: () => import("../views/Guru/Kelas.vue"),
        },
        {
            path: "/guru/kelas/maklumatkelas",
            name: "guruMaklumatKelas",
            component: () => import("../views/Guru/MaklumatKelas.vue"),
        },
        {
            path: "/guru/kedatangan",
            name: "guruKedatangan",
            component: () => import("../views/Guru/Kedatangan.vue"),
        },
        {
            path: "/guru/kedatangan/paparankodqr",
            name: "guruKedatanganKodQR",
            component: () => import("../views/Guru/PaparanKodQR.vue"),
        },
        {
            path: "/guru/kedatangan/maklumatkedatangan",
            name: "guruMaklumatKedatangan",
            component: () => import("../views/Guru/MaklumatKedatangan.vue"),
        },
    ],
    // linkActiveClass is for router-link classname in that particular router
    linkActiveClass: "routerlink-active-link",
});

export default router;
