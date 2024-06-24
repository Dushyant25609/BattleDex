import Infinite_Scroll from './src/Components/Infinite_Scroll';

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
        }
      },
      fontFamily:{
        pokemon: "Pokemon Solid",
        heading: ["Marhey", "sans-serif"],
        heading_2: ["Tilt Warp","sans-serif"]
      },
      fontSize: {
        "10xl": "156px"
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