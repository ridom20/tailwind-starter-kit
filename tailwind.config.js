/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  variants: {
    // Define a custom variant for `textColor` called `invalid`
    textColor: ({ after }) => after(['invalid']),
  },
  plugins: [
    // Define a custom variant for `invalid` that targets `:invalid` pseudo-class
    plugin(function ({ addVariant, e }) {
      addVariant('invalid', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`;
        });
      });
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Hind Siliguri", "sans-serif"],
        question: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "xs": "0px 2px 2px 0px rgba(15, 28, 51, 0.06)",
        "sm": "0px 2px 4px 0px rgba(15, 28, 51, 0.06), 0px 2px 2px 0px rgba(15, 28, 51, 0.07)",
        "md": "0px 2px 4px -4px rgba(15, 28, 51, 0.04), 0px 3px 8px -2px rgba(15, 28, 51, 0.10)",
        "lg": "0px 2px 8px -4px rgba(15, 28, 51, 0.05), 0px 10px 14px -4px rgba(15, 28, 51, 0.08)",
        "xl": "0px 6px 8px -4px rgba(15, 28, 51, 0.04), 0px 16px 20px -4px rgba(15, 28, 51, 0.10)",
        "top-xl": "0px -6px 8px -4px rgba(15, 28, 51, 0.09), 0px 16px 20px -4px rgba(15, 28, 51, 0.10)",
        "2xl": "0px 10px 20px 0px rgba(0, 0, 0, 0.06)",
        "3xl": "0px 16px 30px -4px rgba(15, 28, 51, 0.08)",
        "4xl": "0px 24px 40px -10px rgba(15, 28, 51, 0.16)",
        "5xl": "0px 32px 56px -12px rgba(15, 28, 51, 0.16)",
        "6xl": "0px 72px 132px 0px rgba(15, 28, 51, 0.06)",
        "card": "0px 10px 30px 0px rgba(15, 28, 51, 0.08)",
        "dashboard-sidebar": "15px 0px 20px 0px rgba(0, 0, 0, 0.04);",
        "radio-shadow": "0px 0px 0px 3px white inset;",
        "radio-shadow-dark": "0px 0px 0px 3px black inset;"
      },
// ────────────────────────────────
//       Media Query
// ────────────────────────────────
      screens: {
        xsm: { max: "575px" },
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1600px",
      },
      inset: {
        "25p": "25%",
        "18p": "18%",
      },
      keyframes: {
        slideRight: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(100%)",
          },
        },
        "button-rotate": {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.5) rotate(180deg)" },
          "100%": { transform: "scale(1) rotate(360deg)" },
        },
      },
      animation: {
        "slide-right": "slideRight 2s infinite",
        "button-rotate": "button-rotate 2s ease-in-out infinite",
      },
// ────────────────────────────────
//         Custom Color
// ────────────────────────────────      
      colors: {
        "white": "#FFFFFF",
        "black": "#0A0A0A",
        "pink": "#FB7BA7",
        "navbar": "#020617",
// ────────────────────────────────
//         Light Version
// ────────────────────────────────
        light: {
          bg: {
            "neutral-50": "#F8FAFC",
            "neutral-100": "#F1F5F9",
            "neutral-200": "#E2E8F0",
            "neutral-300": "#CBD5E1",
            "neutral-400": "#94A3B8",
            "neutral-900": "#0F172A",
            "primary-50": "#E5EEFA",
            "primary-100": "#B2CCF1",
            "primary-200": "#7FAAE8",
            "primary-300": "#4C88DF",
            "primary-500": "#0056D2",
            "primary-600": "#004DBD",
            'primary-700': '#003C93',
            "secondary-50": "#FFF4E6",
            "secondary-100": "#FFDEB5",
            "secondary-500": "#FF9209",
            "secondary-600": "#D97904",
            'secondary-700': '#A95E03',
            "yellow-50": "#FEFCE8",
            "yellow-100": "#FEF9C3",
            "yellow-500": "#EAB308",
            "orange-50": "#FFF7ED",
            "orange-100": "#FFEDD5",
            "orange-500": "#F97316",
            "cyan-50": "#ECFEFF",
            "cyan-100": "#CFFAFE",
            "cyan-500": "#06B6D4",
            "info-50": "#EFF6FF",
            "info-300": "#93C5FD",
            "info-500": "#3B82F6",
            "success-50": "#F0FDF4",
            'success-200': '#BBF7D0',
            "success-300": "#86EFAC",
            "success-500": "#22C55E",
            "warning-50": "#FEFCE8",
            "warning-300": "#FDE047",
            "warning-500": "#EAB308",
            "danger-50": "#FEF2F2",
            "danger-100": "#FEE2E2",
            "danger-200": "#FECACA",
            "danger-500": "#EF4444",
            "danger-600": "#DC2626",
            "danger-800": "#991B1B",

           
          },
          content: {
            "neutral-300": "#CBD5E1",
            "neutral-400": "#94A3B8",
            "neutral-500": "#64748B",
            "neutral-600": "#475569",
            "neutral-900": "#0F172A",
            "primary-300": "#4C88DF",
            "primary-400": "#1966D6",
            "primary-500": "#0056D2",
            "primary-600": "#004DBD",
            "primary-800": "#002B69",
            "secondary-500": "#FF9209",
            "yellow-500": "#EAB308",
            "orange-500": "#F97316",
            "cyan-500": "#06B6D4",
            "info-400": "#60A5FA",
            "info-500": "#3B82F6",
            "success-400": "#4ADE80",
            "success-500": "#22C55E",
            'success-900': '#14532D',
            "warning-500": "#EAB308",
            "danger-300": "#FCA5A5",
            "danger-400": "#F87171",
            "danger-500": "#EF4444",
            "danger-600": "#DC2626",
            "danger-800": "#991B1B",
          },
          border: {
            "neutral-200": "#E2E8F0",
            "neutral-300": "#CBD5E1",
            "neutral-600": "#475569",
            "neutral-900": "#0F172A",
            "primary-300": "#4C88DF",
            "primary-500": "#0056D2",
            "primary-600": "#004DBD",
            "primary-800": "#002B69",
            "info-400": "#60A5FA",
            "success-400": "#4ADE80",
            "warning-400": "#FACC15",
            "danger-300": "#FCA5A5",
            "danger-500": "#EF4444",
          },
        },
// ────────────────────────────────
//         Dark Version
// ────────────────────────────────        
        dark: {
          bg: {
            "neutral-300": "#CBD5E1",
            "neutral-400": "#94A3B8",
            "neutral-500": "#64748B",
            "neutral-600": "#475569",
            "neutral-700": "#334155",
            "neutral-800": "#1E293B",
            "neutral-900": "#0F172A",
            "primary-50": "#E5EEFA",
            "primary-100": "#B2CCF1",
            "primary-200": "#7FAAE8",
            "primary-300": "#4C88DF",
            "primary-400": "#1966D6",
            "primary-500": "#0056D2",
            "primary-600": "#004DBD",
            "primary-800": "#002B69",
            "primary-900": "#00193F",
            "primary-950": "#000815",
            "secondary-500": "#FF9209",
            "secondary-600": "#D97904",
            "secondary-900": "#482801",
            "secondary-950": "#180D00",
            "yellow-500": "#EAB308",
            "yellow-900": "#713F12",
            "yellow-950": "#422006",
            "orange-500": "#F97316",
            "orange-900": "#7C2D12",
            "orange-950": "#431407",
            "cyan-500": "#06B6D4",
            "cyan-900": "#164E63",
            "cyan-950": "#083344",
            "info-500": "#3B82F6",
            "info-600": "#2563EB",
            "info-900": "#1E3A8A",
            "info-950": "#172554",
            "success-500": "#22C55E",
            "success-600": "#16A34A",
            "success-950": "#052E16",
            "warning-500": "#EAB308",
            "warning-600": "#CA8A04",
            "warning-950": "#422006",
            "danger-200": "#FECACA",
            "danger-300": "#FCA5A5",
            "danger-500": "#EF4444",
            "danger-800": "#991B1B",
            "danger-900": "#7F1D1D",
            "danger-950": "#1B0303",
            "navbar": "#020617",
          },
          content: {
            "neutral-300": "#CBD5E1",
            "neutral-400": "#94A3B8",
            "neutral-500": "#64748B",
            "neutral-600": "#475569",
            "primary-200": "#7FAAE8",
            "primary-300": "#4C88DF",
            "primary-400": "#1966D6",
            "primary-500": "#0056D2",
            "primary-600": "#004DBD",
            "primary-800": "#002B69",
            "secondary-500": "#FF9209",
            "yellow-500": "#EAB308",
            "orange-500": "#F97316",
            "cyan-500": "#06B6D4",
            "info-400": "#60A5FA",
            "info-500": "#3B82F6",
            "success-400": "#4ADE80",
            "success-500": "#22C55E",
            "danger-400": "#F87171",
            "danger-500": "#EF4444",
            "danger-600": "#DC2626",
            "danger-800": "#991B1B",
            "danger-900": "#7F1D1D",
          },
          border: {
            'neutral-500': '#64748B',
            'neutral-600': '#475569',
            'neutral-700': '#334155',
            'neutral-800': '#1E293B',
            'neutral-900': '#0F172A',
            "primary-500": "#0056D2",
            "primary-600": "#004DBD",
            "primary-800": "#002B69",
            "info-400": "#60A5FA",
            "success-400": "#4ADE80",
            "warning-400": "#FACC15",
            "danger-300": "#FCA5A5",
            "danger-500": "#EF4444",
          }
        },

     
      },
      translate: {
        full: "100%",
      },
      zIndex: {
        100: "100",
      },
      spacing: {},
      fontSize: {
        "5xl": [
          "56px",
          {
            lineHeight: "72px",
          },
        ],
        "4xl": [
          "40px",
          {
            lineHeight: "48px",
          },
        ],
        "3xl": [
          "32px",
          {
            lineHeight: "40px",
          },
        ],
        "2xl": [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "1xl": [
          "20px",
          {
            lineHeight: "28px",
          },
        ],
        xl: [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        lg: [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
// ────────────────────────────────
//       Custom Spacing Js
// ────────────────────────────────
function generateSpacingValues(start, end, step) {
  const spacing = {};
  for (let i = start; i <= end; i += step) {
    spacing[i] = `${i}px`;
  }
  return spacing;
}

module.exports.theme.extend.spacing = generateSpacingValues(2, 1000, 2);
