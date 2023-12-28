/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        header: "10.5rem",
        subheader: "4.9rem",
        paragraph: "3.5rem",
        caption: "20px"
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
        tall_plus: '542px',
        tall: '500px',
        md_plus: '490px',
        md: '400px',
        semi_md: '368px',
        semi_mid_minus: '348px',
        sm: '300px',
        chanelIMG: '70px'
      },
      margin: {
        margin_1_75: "1.75rem",
        eighteen: "18rem",
        twenty_two: "22rem",
        thirty: "30rem",
        thirty_two: "32rem",
        thirty_nine: "39rem",
        forty_five: "45rem",
        sixty: "60rem",
        sixty_five: "65rem",
        eighty: "80rem",
        eighty_eight: "88rem"
      },
      padding: {
        half: "25%"
      },
      colors: {
        'SB_Blue': '#3663ae'
      },
      borderRadius: {
        img: '20px',
        img2: '1.5rem',
        img3: '2.5rem'
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
