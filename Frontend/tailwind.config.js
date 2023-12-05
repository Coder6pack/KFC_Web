/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', '"mono"']
      },
      fontSize: {
        14: '14 px',
        15: '15 px',
        16: '16 px',
        18: '18 px',
        20: '20 px',
        28: '28 px'
      },
      colors: {
        red: '#e4002b'
      }
    }
  },
  plugins: []
}
