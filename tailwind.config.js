/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui:{
    themes: false,
  },
  darkMode: 'class',
  content: ["./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
    
  ],
  
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
     require('preline/plugin'),
     require('daisyui'),
  ],
}