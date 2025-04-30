const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // обязательно!
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF00',
        secondary: '#FF00FF',
      },
      fontFamily: {
        mono: ['"Courier New"', 'monospace'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, #00FF00, #FF00FF)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px #00ff7f' },
          '50%': { boxShadow: '0 0 20px #39ff14, 0 0 30px #39ff14' },
        },
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
