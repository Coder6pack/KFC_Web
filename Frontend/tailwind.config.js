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
        24: '24px',
        28: '28px',
        55: '55px',
        100: '100px',
        22: '22px',
        26: '26px',
        32: '32px',
        35:'35px',
      },

      //color
      colors: {
        red: '#e4002b',
        gray: '#6B6E79',
        grayborder: '#a9a9a9',
        den: '#474747',
        button: '#AD343E',
        categoryBorder: '#DBDFD0',
        categoryText: '#414536',
        xamden: '#999',
        menuTitle: '#495460',
        blog:'#737865',
      },

      //width
      width: {
        3: '3px',
        10: '10%',
        20: '20%',
        22: '20px',
        34: '34px',
        40: '40px',
        50: '50%',
        92: '92px',
        98: '98px',
        100:'100px',
        120: '120px',
        124: '124px',
        138: '138.83px',
        150: '150px',
        163: '163px',
        221:'221px',
        230:'230px',
        306: '306px',
        330: '330px',
        376: '376px',
        400: '400px',
        403: '403px',
        424: '424px',
        500: '500px',
        550:'550px',
        578: '578px',
        729: '729px',
        780: '780px',
        828:'828px',
        832: '832px',
        872: '872px',
        1830: '1830px',
        99: '99%',
        300: '300px',
        303: '303px',
        313: '313.282px',
        333: '333.333px',
        346:'346px',
        360: '360px',
        430: '430px',
        473: '473px',
        460: '460px',
        636:'636px',
        646: '646.8px',
        520: '520px',
        550: '550px',
        676: '676.8px',
        700:'700px',
        775: '775px',
        846: '846px',
        60: '60px',
        70: '70px',
        160: '160px',
        191:'191px',
        224: '224px',
        224: '224px',
        256:'256px',
        260:'260px',
        293: '293px',
        416:'416px',
        1296:'1296px',
        1628: '1628px',
        1679: '1679px',
        900: '900px'
      },

      //height
      height: {
        20: '20px',
        30: '30px',
        46: '46px',
        47: '47.11px',
        64:'64px',
        75: '75px',
        87: '87px',
        90:'90px',
        100: '100px',
        110:'110px',
        140:'140px',
        213:'213px',
        215: '215px',
        232:'232px',
        272: '272px',
        282: '282px',
        296: '296px',
        375: '375px',
        500: '500px',
        533:'533px',
        400: '400px',
        300: '300px',
        712: '712px',
        729: '729px',
        52: '52px',
        54: '54.5px',
        56: '56px',
        92: '92px',
        95: '95px',
        127: '127px',
        136: '136.5px',
        277: '277.109px',
        297: '297.13px',
        350:'350px',
        354:'354px',
        367: '367.11px',
        408:'408px',
        486:'486px',
        732:'732px',
        748: '748.11px',
        860:'860px',
        978: '978.61px',
        25: '25px',
        38: '38px',
        41: '41px',
        70: '70px',
        200: '200px',
        222: '222px',
        1494: '1494.42px'
      },

      //border width
      borderWidth: {
        1: '1px',
        1.5: '1.5px'
      },

      //border radius
      borderRadius: {
        10: '10px',
        12: '12px',
        40: '40px',
        43: '43px',
        50: '50%',
        118: '118px',
        175: '175px'
      },
      //padding
      padding: {
        1.5: '5px',
        11: '11.15px',
        12:'12px',
        15: '15px',
        16: '16px',
        4: '4px',
        5: '5px',
        8: '8.83px',
        9: '9px',
        10: '10px',
        15:'15px',
        18: '18px',
        20: '20px',
        24: '24px',
        27: '27px',
        25: '25px',
        30: '30px',
        32: '32px',
        34: '34px',
        35: '35px',
        40: '40px',
        45:'45px',
        50:'50px',
        60: '60px',
        64:'64px',
        65: '65px',
        70: '70px',
        74: '74px',
        85: '85px',
        92: '92px',
        111.5: '111.5px',
        120: '120px',
        135: '135px',
        137: '137px',
        150: '150px',
        152: '152px',
        154: '154px',
        156: '156px',
        163: '163px',
        180: '180px',
        2: '2px',
        300001: '3px',
        21: '21px',
        55: '55px',
        100: '100px',
        6: '6px',
        67: '67px',
        98:'98px',
      },

      //margin
      margin: {
        2: '2px',
        5: '5px',
        7: '7px',
        10: '10px',
        12: '12px',
        20: '20px',
        15: '15px',
        18: '18px',
        30: '30px',
        32: '32px',
        40: '40px',
        62: '62px',
        64: '64px',
        65: '65px',
        73: '73px',
        88: '88px',
        100: '100px',
        114: '114px',
        125: '125px',
        200: '200px',
        300:'300px',
        314: '314px',
        500:'500px',
        550:'550px',
        600:'600px',
        700:'700px',
        3: '3px',
        8: '8px',
        21: '21px',
        50: '50px',
        56: '56px',
        112: '112.750px',
        392: '392.47px',
        24: '24px'
      },

      //scale
      scale: {
        102: '102%'
      },
      gap: {
        4: '4px',
        8: '8px',
        10: '10px',
        18: '18px',
        20: '20px',
        24: '24px',
        25:'25px',
        30:'30px',
        50:'50px',
        120: '120px',
        122:'122px',
        1: '1.5px',
        5: '5px',
        6: '6px',
        12: '12px',
        30: '30px',
        64:'64px',
        200: '200px',
        250: '250px',
        270: '270px',
        300: '300px'
      },
      backgroundColor: {
        denthui: '#474747',
        xam: 'DBDFD0',
        xanhla: '#4CAF50',
        facebook: '#4267B2',
        google: '#dd4b39',
        apple: '#fff',
        google2: '#c64232',
        apple2: '#f5f5f5',
        facebook2: '#365899',
        xanhla2: '#45a049',
        do: '#E4002B',
        payment: '#f8f7f5',
        adminpage: '#4e73df',
        trang:'#FFF',
      },
      //line height
      lineHeight: {
        24: '24px',
        26: '26px',
        28:'28px',
        30: '30px',
        38.8: '38.4px',
        60.5: '60.5px',
        96: '96px'
      },
      //letter spacing
      letterSpacing: {
        0.72: '-0.72px'
      }
    }
  },
  plugins: []
}
