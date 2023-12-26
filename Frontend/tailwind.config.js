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
        19: '19px',
        20: '20px',
        28: '28px'
      },

      //color
      colors: {
        red: '#e4002b',
        gray: '#6B6E79',
        grayborder: '#a9a9a9',
        category: '#202124'
      },

      //width
      width: {
        120: '120px',
        138: '138.83px',
        150: '150px',
        303: '303px',
        313: '313.282px',
        324: '324.69px',
        333: '333.333px',
        400: '400px',
        500: '500px',
        1830: '1830px',
        99: '99%'
      },

      //height
      height: {
        30: '30px',
        40: '40px',
        46: '46px',
        52: '52px',
        75: '75px',
        215: '215px',
        272: '272px',
        282: '282px',
        500: '500px',
        400: '400px',
        300: '300px'
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
        3: '3px',
        10: '10px',
        15: '15px',
        16: '16px',
        18: '18px',
        60: '60px'
      },

      //margin
      margin: {
        10: '10px',
        12: '12px',
        15: '15px',
        30: '30px'
      },

      //scale
      scale: {
        102: '102%'
      },

      //duration
      transitionDuration: {
        400: '400ms'
      }
    }
  },
  plugins: []
}
