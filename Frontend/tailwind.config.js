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
        28: '28px'
      },

      //color
      colors: {
        red: '#e4002b',
        gray: '#6B6E79',
        grayborder:'#a9a9a9',
        den:'#474747',
      },

      //width
      width: {
        10:'10%',
        20:'20%',
        40:'40%',
        50:'50%',
        120:'120px',
        138: '138.83px',
        150:'150px',
        303: '303px',
        313: '313.282',
        330:'330px',
        333: '333.333px',
        400:'400px',
        403:'403px',
        500:'500px',
        1830: '1830px',
        99:'99%'
      },

      //height
      height: {
        30:'30px',
        46: '46px',
        75:'75px',
        215: '215px',
        272: '272px',
        282: '282px',
        500: '500px',
        400:'400px',
        300:'300px'
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
        11:'11.15px',
        15: '15px',
        16:'16px',
        4:'4px',
        5:'5px',
        8:'8.83px',
        9:'9px',
        10:'10px',
        12:'12px',
        18: '18px',
        24:'24px',
        25:'25px',
        60: '60px',
        74:'74px',
        85:'85px',
        120:'120px',
        150:'150px',
        152:'152px',
        154:'154px',
        156:'156px',

      },

      //margin
      margin: {
        2:'2px',
        5:'5px',
        10: '10px',
        12: '12px',
        20: '20px',
        15: '15px',
        30:'30px',
        40:'40px',
        100: '100px',
        200:'200px'

      },

      //scale
      scale: {
        102: '102%'
      },
      gap:{
        4:'4px',
        8:'8px',
        20:'20px',
        120:'120px',
      },
      backgroundColor:{
        denthui:'#474747',
        xam:'DBDFD0',
      }
    }
  },
  plugins: []
}
