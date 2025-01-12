module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        customBg: '#F3F2EC',
        'gfgsc-green': '#00895E',
        'gfgsc-green-200': '#b3e6d4', // Custom GFGSC Green 200
        'white': '#f7f9fa', // Custom White
        'hover-gray': '#f7f9fa', 
      },
      animation: {
        gradientMove1: 'move1 6s ease-in-out infinite',
        gradientMove2: 'move2 6s ease-in-out infinite',
      },
      keyframes: {
        move1: {
          '0%': { transform: 'translate(-10px, 0) scale(1)' },
          '50%': { transform: 'translate(-30px, -30px) scale(1.1)' },
          '100%': { transform: 'translate(-10px, 0) scale(1)' },
        },
        move2: {
          '0%': { transform: 'translate(0, -10px) scale(1)' },
          '50%': { transform: 'translate(-20px, -40px) scale(1.2)' },
          '100%': { transform: 'translate(0, -10px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
