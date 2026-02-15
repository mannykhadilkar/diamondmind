/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Team colors - Bold sports aesthetic
        'team-red': '#dc2626',
        'team-gold': '#f59e0b',
        'team-blue': '#1e40af',

        // Defensive category colors (blue gradient family)
        'defensive-primary': '#1e40af',
        'defensive-accent': '#0ea5e9',
        'defensive-light': '#3b82f6',
        'defensive-dark': '#1e3a8a',

        // Offensive category colors (orange/red gradient family)
        'offensive-primary': '#dc2626',
        'offensive-accent': '#f59e0b',
        'offensive-light': '#f97316',
        'offensive-dark': '#b91c1c',

        // Softball field colors - Enhanced
        'field-grass': '#16a34a',
        'field-grass-dark': '#15803d',
        'field-dirt': '#d4a574',
        'field-dirt-dark': '#a08050',
        'field-base': '#ffffff',

        // UI accent colors
        'correct': '#22c55e',
        'correct-dark': '#16a34a',
        'incorrect': '#ef4444',
        'incorrect-dark': '#dc2626',
        'warning': '#f59e0b',
        'warning-dark': '#d97706',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(30, 64, 175, 0.5)',
        'glow-red': '0 0 20px rgba(220, 38, 38, 0.5)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.5)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.5)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-defensive': 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
        'gradient-offensive': 'linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)',
        'gradient-correct': 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
        'gradient-incorrect': 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
        'gradient-gold': 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        'stripe-pattern': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)',
      },
      animation: {
        'slide-up': 'slideUpEntrance 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'bounce-correct': 'bounceCorrect 0.5s ease-out',
        'shake-error': 'shakeError 0.4s ease-out',
        'pulse-highlight': 'pulseHighlight 1.5s ease-in-out infinite',
      },
      keyframes: {
        slideUpEntrance: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(245, 158, 11, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.6)' },
        },
        bounceCorrect: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        shakeError: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-8px)' },
          '80%': { transform: 'translateX(8px)' },
        },
        pulseHighlight: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
