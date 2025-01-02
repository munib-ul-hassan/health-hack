/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
           mainWidth: '96%'
      },
      boxShadow: {
        'custom': '2px 4px 10px 4px #0000000A', 
         cardShadow : '0px 10px 60px 0px #1616160D'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, #161616 53.18%, rgba(22, 22, 22, 0) 100%)',
      },
      colors:{
        mainColor: '#20EA6D',
        SecondaryColor: '#006633'
      },
      backgroundColor:{
        mainBgColor: '#E6F0EB',
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', 'serif'], // Custom font family
        roboto: ['Roboto', 'sans-serif'],    // Custom font family
      },
    },
  },
  plugins: [],
}