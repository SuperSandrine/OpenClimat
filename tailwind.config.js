/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      'bg-dark-blue': '#080e3e',
      'bg-middle-blue': '#3470C8',
      'bg-light-pink': '#efd4bf',
      'white': '#ffffff',
      'dark-blue': '#031356',
      'red': 'red',
    },
    extend: {
      keyframes:{
        glissade:{
          '0%':{transform: 'translateY(0px)', opacity:1 },
          '100%':{transform: 'translateY(-50vh)',opacity:0}
        }
      },
      animation:{
        glissade: 'glissade 2s ease-in-out 1s 1'
      }
    },
  },
  plugins: [],
};
