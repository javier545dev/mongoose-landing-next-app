module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
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
  plugins: [
    require('daisyui'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
}
