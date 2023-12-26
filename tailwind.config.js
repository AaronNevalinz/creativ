/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,ts,js,tsx,jpg}'
  ],
  theme: {
    screens: {
      'mobile':'500px',
      'tablet':'769px',
      'laptop':'1024px'
    },
    extend: {
      colors:{
        "bgTransparent":"rgba(0,0,0,0.4)",
        "color-primary":"#5fc1f1"
      }
    },
  },
  plugins: [],
}

