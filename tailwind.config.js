/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Pretendard", "system-ui", "sans-serif"],
                gmarket: ["GmarketSans", "sans-serif"],
                tway: ["Tway Fly", "sans-serif"],
                logo: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                aggro: ["SB Aggro", "system-ui", "sans-serif"],
            },
            colors: {
                primary: {
                    100: "#FFF1F2",
                    200: "#FFE4E6",
                    300: "#FECDD3",
                    400: "#FDA4AF",
                    500: "#FB7185",
                    600: "#F43F5E",
                },
                accent: {
                    peach: "#FFDFD3",
                    lavender: "#E9D5FF",
                    mint: "#99F6E4",
                    coral: "#FFAAA5",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-candy": "linear-gradient(113deg, #FFD1D1 0%, #FFE5F3 30%, #FFF0F0 70%, #FFE5E5 100%)",
                "gradient-sunset": "linear-gradient(to right, #FDA4AF, #F9A8D4, #F0ABFC)",
                "gradient-dawn": "linear-gradient(to right, #FFE4E6, #FDF4FF, #F0F9FF)",
            },
        },
    },
    plugins: [],
};
