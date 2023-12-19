/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      //font family
      fontFamily: {
        roboto: ['"Roboto"', '"mono"']
      },

      //font size
      fontSize: {
        15: '15 px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22:'22px',
        28: '28px'
      },

      //color
      colors: {
        red: '#e4002b',
        gray: '#6B6E79',
        grayborder:'#a9a9a9',
      },

      //width
      width: {
        120:'120px',
        138: '138.83px',
        150:'150px',
        246:'246px',
        303: '303px',
        313: '313.282',
        333: '333.333px',
        400:'400px',
        500:'500px',
        930:'930.594px',
        950:'950px',
        1830: '1830px',
        99:'99%',
        768:'768px',
        1381:'1381px',
        5000:'5000px',
        266:'266px',
        20000:'20000px'
      },

      //height
      height: {
        17:'17px',
        30:'30px',
        46: '46px',
        75:'75px',
        215: '215px',
        272: '272px',
        282: '282px',
        422:'422.948px',
        345:'345.984px',
        360:'360.984px',
        500: '500px',
        400:'400px',
        300:'300px',
        200:'200px',
        317:'317.984px',
        370:'370px'
      },

      //border width
      borderWidth: {
        1: '1px'
      },

      //border radius
      borderRadius: {
        10: '10px',
        40: '40px'
      },
      //padding
      padding: {
        1.5: '5px',
        5:'5px',
        15: '15px',
        18: '18px',
        50: '50px',
        28:'28px',
        60: '60px'

      },

      //margin
      margin: {
        10: '10px',
        12: '12px',
        15: '15px',
        20:'20px',
        30:'30px'
      },

      //scale
      scale: {
        102: '102%'
      }
    }
  },
  plugins: []
}
