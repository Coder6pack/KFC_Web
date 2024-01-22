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
        24: '24px',
        28: '28px',
        55: '55px',
        100: '100px'
      },

      //color
      colors: {
        red: '#e4002b',
        gray: '#6B6E79',
        grayborder: '#a9a9a9',
        den: '#474747',
        button: '#AD343E',
        categoryBorder: '#DBDFD0',
        categoryText: '#414536'
      },

      //width
      width: {
        10: '10%',
        20: '20%',
        34: '34px',
        40: '40px',
        50: '50%',
        120: '120px',
        124: '124px',
        150: '150px',
        163: '163px',
        306: '306px',
        330: '330px',
        376: '376px',
        400: '400px',
        403: '403px',
        424: '424px',
        500: '500px',
        729: '729px',
        832: '832px',
        872: '872px',
        1830: '1830px',
        99: '99%'
      },

      //height
      height: {
        30: '30px',
        46: '46px',
        75: '75px',
        100: '100px',
        215: '215px',
        272: '272px',
        282: '282px',
        375: '375px',
        500: '500px',
        400: '400px',
        300: '300px',
        712: '712px',
        729: '729px'
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
        15: '15px',
        16: '16px',
        4: '4px',
        5: '5px',
        8: '8.83px',
        9: '9px',
        10: '10px',
        12: '12px',
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
        60: '60px',
        65: '65px',
        74: '74px',
        85: '85px',
        92: '92px',
        120: '120px',
        135: '135px',
        150: '150px',
        152: '152px',
        154: '154px',
        156: '156px',
        180: '180px'
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
        30: '30px',
        32: '32px',
        40: '40px',
        62: '62px',
        64: '64px',
        65: '65px',
        73: '73px',
        100: '100px',
        114: '114px',
        125: '125px',
        200: '200px',
        314: '314px'
      },

      //scale
      scale: {
        102: '102%'
      },
      gap: {
        4: '4px',
        8: '8px',
        10: '10px',
        20: '20px',
        24: '24px',
        120: '120px'
      },
      backgroundColor: {
        denthui: '#474747',
        xam: 'DBDFD0'
      },
      //line height
      lineHeight: {
        24: '24px',
        26: '26px',
        30: '30px',
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
