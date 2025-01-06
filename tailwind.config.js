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
         cardShadow : '0px 10px 60px 0px #1616160D',
         productCardShadow: '1px 1px 8px 2px #00000008',

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
        roboto: ['Roboto', 'sans-serif'], 
        pattaya: ['Pattaya', 'sans-serif'],
        optima:['Optima']
      },
      borderRadius: {
        'custom-radius': '100% 0% 50% 50% / 0% 0% 100% 100%',
      },
    },
  },
  plugins: [],
}