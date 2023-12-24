/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        header: "12.5rem",
        subheader: "4.9rem",
        paragraph: "3.5rem"
      },
      lineHeight: {
        loose: "46px",
        tight: "40px"
      },
      fontFamily: {
        'oswald': ['Oswald', 'Roboto']
      },
      zIndex: {
        max: '999'
      },
      height: {
        xtra_tall: '62vh',
        tall: '500px',
        md: '400px',
        semi_md: '368px',
        sm: '300px',
        chanelIMG: '70px'
      },
      margin: {
        margin_1_75: "1.75rem",
      },
      borderRadius: {
        img: '20px'
      }
    },
    screens: {
      'xs': '200px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1534px',
      'custom': '900px',
    },
  },
  plugins: [],
}
