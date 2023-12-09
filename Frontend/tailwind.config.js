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
        gray: '#6B6E79'
      },

      //width
      width: {
        138: '138.83px',
        303: '303px',
        313: '313.282',
        333: '333.333px'
      },

      //height
      height: {
        46: '46px',
        215: '215px',
        272: '272px',
        282: '282px'
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
        15: '15px',
        18: '18px',
        60: '60px'
      },

      //margin
      margin: {
        10: '10px',
        15: '15px'
      },

      //scale
      scale: {
        102: '102%'
      }
    }
  },
  plugins: []
}
