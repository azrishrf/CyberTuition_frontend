/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                login: "0px 0px 13px rgba(0,0,0,0.07);",
                home: "0px 4px 5px rgba(0,0,0,0.25);",
            },
            colors: {
                red: "#DC3D28",
                darkred: "#A70003",
                grey: "#969696",
                greyIcon: "#D6D6D6",
                grey2: "#6C7393",
                hoverSidebar: "#F8F8F9",
                fontgrey: "#757575",
                green: "#18B7B8",
            },
            spacing: {
                128: "32rem",
            },
        },
        fontFamily: {
            sans: '"Inter", sans-serif',
        },
    },
    plugins: [],
};
