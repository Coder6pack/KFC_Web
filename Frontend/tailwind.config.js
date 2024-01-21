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
        15: '15px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22:'22px',
        26:'26px',
        28: '28px',
        32:'32px',
      },

      //color
      colors: {
        red: '#e4002b',
        gray: '#6B6E79',
        grayborder:'#a9a9a9',
        den:'#474747',
        xamden:'#999',
      },

      //width
      width: {
        3:'3px',
        10:'10%',
        20:'20%',
        22:'20px',
        40:'40%',
        50:'50%',
        92:'92px',
        98:'98px',
        120:'120px',
        138: '138.83px',
        150:'150px',
        300:'300px',
        303: '303px',
        313: '313.282',
        330:'330px',
        333: '333.333px',
        360:'360px',
        400:'400px',
        403:'403px',
        430:'430px',
        460:'460px',
        500:'500px',
        520:'520px',
        550:'550px',
        775:'775px',
        1830: '1830px',
        99:'99%'
      },

      //height
      height: {
        20:'20px',
        30:'30px',
        46: '46px',
        52:'52px',
        56:'56px',
        75:'75px',
        92:'92px',
        95:'95px',
        215: '215px',
        272: '272px',
        277:'277.109px',
        282: '282px',
        297:'297.13px',
        367:'367.11px',
        500: '500px',
        400:'400px',
        300:'300px',
        748:'748.11px'
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
        2:'2px',
        300001:'3px',
        12:'12px',
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
        20:'20px',
        21:'21px',
        24:'24px',
        25:'25px',
        30:'30px',
        35:'35px',
        55:'55px',
        60: '60px',
        74:'74px',
        85:'85px',
        100:'100px',
        120:'120px',
        150:'150px',
        152:'152px',
        154:'154px',
        156:'156px',
        6:'6px',
      },

      //margin
      margin: {
        2:'2px',
        3:'3px',
        5:'5px',
        8:'8px',
        10: '10px',
        12: '12px',
        20: '20px',
        21:'21px',
        15: '15px',
        30:'30px',
        40:'40px',
        50:'50px',
        100: '100px',
        112:'112.750px',
        200:'200px'

      },

      //scale
      scale: {
        102: '102%'
      },
      gap:{
        1:'1.5px',
        4:'4px',
        5:'5px',
        6:'6px',
        8:'8px',
        12:'12px',
        20:'20px',
        24:'24px',
        30:'30px',
        120:'120px',
        200:'200px',
        250:'250px',
        270:'270px',
        300:'300px',
      },
      backgroundColor:{
        denthui:'#474747',
        xam:'#DBDFD0',
        xanhla:'#4CAF50',
        facebook:'#4267B2',
        google:'#dd4b39',
        apple:'#fff',
        google2:'#c64232',
        apple2:'#f5f5f5',
        facebook2:'#365899',
        xanhla2:'#45a049',
        do:'#E4002B'
      },
    }
  },
  plugins: []
}
