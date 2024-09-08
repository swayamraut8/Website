/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "be-tab":
          "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')",
        "te-tab":
          "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1542403764-19e1bb75cc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        "se-tab":
          "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1492539161849-b2b18e79c85f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      },
      keyframes: {
        clickbe: {
          "0%": { transform: "translateY(3px)" },
          "100%": { transform: "translateY(0px)" },
        },
        clickte: {
          "0%": { transform: "translateY(3px)" },
          "100%": { transform: "translateY(0px)" },
        },
        clickse: {
          "0%": { transform: "translateY(3px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        clickbe: "clickbe 100ms ease-in-out",
        clickte: "clickte 100ms ease-in-out",
        clickse: "clickse 100ms ease-in-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
