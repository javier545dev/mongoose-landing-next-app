module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://wickedblocks.dev/assets/images/placeholders/squareCard.png')",
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(100px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(100px)',
          },
        },
        flipHorizontal: {
          '50%': { transform: 'rotateY(180deg)' },
        },
        swing: {},
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-out-down': 'fade-out-down 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-out-up': 'fade-out-up 1s ease-out',
        'flip-horizontal': 'flipHorizontal 5s infinite',
      },
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f3f4f6',
          secondary: '#ff8200',
          accent: '#65a30d',
          neutral: '#000',
          'base-100': '#1d252d',
          info: '#8CE6F8',
          success: '#26AB5B',
          warning: '#f43f5e',
          error: '#b91c1c',
        },
      },
      'dark',
    ],
  },
  plugins: [require('daisyui')],
}
