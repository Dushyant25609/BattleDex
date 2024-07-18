
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          base:"#DC1327",
          lite: "#ed1527",
          dark: "#bf111f",
        },
        logo_primary: "#ffcc01",
        logo_secondary: "#045698",
        ball:{
          master: "#5e3399",
          ultra: "#e4ce00",
          great: "#077fd1",
        },
        normal:{
          Lite: "#d1d1d1",
          Dark: "#83898e",
        },
        fire:{
          Lite: "#ffcb8c",
          Dark: "#fc8e3f",
        },
        water:{
          Lite: "#a3e3ff",
          Dark: "#4A8AD1",
        },
        grass:{
          Lite: "#98eab2",
          Dark: "#4fb23e",
        },
        electric:{
          Lite: "#ffee99",
          Dark: "#eabf23",
        },
        ice:{
          Lite: "#cefffa",
          Dark: "#5ec1b2",
        },
        fighting:{
          Lite: "#ff7777",
          Dark: "#CF4365",
        },
        poison:{
          Lite: "#f3b2ff",
          Dark: "#A363C7",
        },
        ground:{
          Lite: "#e5af80",
          Dark: "#DE7545",
        },
        flying:{
          Lite: "#afcbff",
          Dark: "#5d7aad",
        },
        psychic:{
          Lite: "#FFA292",
          Dark: "#F66F73",
        },
        bug:{
          Lite: "#ecff84",
          Dark: "#99C32B",
        },
        rock:{
          Lite: "#fcf0ba",
          Dark: "#b5a682",
        },
        ghost:{
          Lite: "#a49eff",
          Dark: "#435796",
        },
        dragon:{
          Lite: "#3799ba",
          Dark: "#0056a8",
        },
        dark:{
          Lite: "#a0a4af",
          Dark: "#403e49",
        },
        steel:{
          Lite: "#a5ffff",
          Dark: "#598696",
        },
        fairy:{
          Lite: "#ffc9f3",
          Dark: "#d37acc",
        },
      },
      fontFamily:{
        pokemon: "Pokemon Solid",
        heading: ["Marhey", "sans-serif"],
        heading_2: ["Tilt Warp","sans-serif"],
        heading_3: ["Bungee Outline", "sans-serif"]
      },
      fontSize: {
        "10xl": "156px",
        "Max": "200px",
      },
      dropShadow: {
        master: "-1px 28px 27px rgba(94, 51, 153, 1)",
        ultra: "-1px 28px 27px rgba(228, 206, 0, 1)",
        great: "-1px 28px 27px rgba(7, 127, 209, 1)"
      },
      backgroundImage:{
        greeny : "url('/src/Components/Static/bg-2.gif')"
      },
      animation: {
        infinity: ' infinity 6000s linear infinite',
      }
      ,
      keyframes: {
        infinity: {
          '0%': { transform: 'translateX(0vw);' },
          '100%': { transform: 'translateX(-374976px);' },
        },
        
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}