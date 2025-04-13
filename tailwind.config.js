/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out forwards'
      },
      fontFamily: {
        roboto: ["Roboto", "Arial", "sans-serif"]
      },
      padding: {
        '5': '1.25rem',
        '10': '2.5rem',
        '15': '3.75rem',
        '20': '5rem',
      },
      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '120': '30rem',
        '160': '40rem',
      },
      minWidth: {
        '100': '100px',
        '300': '300px',
        '500': '500px',
        'full': '100%',
      },
      maxWidth: {
        '100': '100px',
        '300': '300px',
        '500': '500px',
        'screen': '100vw',
        'content': '65ch',
      },
      colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
        accent: '#10B981',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
