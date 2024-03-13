/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens:{
      'sm':'640px',// => @media (min-width: 640px) { ... }
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    colors: {
      'bg-dark-blue': '#080e3e',
      'bg-middle-blue': '#3470C8',
      'bg-light-pink': '#efd4bf',
      'white': '#ffffff',
      'dark-blue': '#031356',
      'red': 'red',
      'transparent': 'transparent'
    },
      container:{
        center: true,
      },
    extend: {
      keyframes:{
        glissade:{
          '0%':{transform: 'translateY(0px)', opacity:1 },
          '100%':{transform: 'translateY(-50vh)',opacity:0}
        },
        animKeys:{
          '0%':{
            'margin-top': '-0px',
          },
          '25%':{
            'margin-top': '-120px',
          },
          '50%':{
            'margin-top': '-240px',
          },
          '75%':{
            'margin-top': '-120px',
          },
          '100%':{
            'margin-top': '-60px',
          },
        }

      },
      animation:{
        glissade: 'glissade 2s ease-in-out 1s 1'
      },
        anim: 'animKeys 12s ease-in-out 3'

    },
  },
  plugins: [],
};
