const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        "submenu": "0 0 10px 3px rgba(0, 0, 0, 0.05)",
        "helpful-card": "0px 4px 40px -10px rgba(0, 0, 0, 0.15)",
        "blog-one": "0px 4px 40px -10px rgba(0, 0, 0, 0.15)",
        "header": "0 10px 15px rgba(25, 25, 25, 0.1)",
        "progress": "inset 0 0 0 2px #d0d0d4",
        "testimonial": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      },
      screens: {
        xxs: { max: "280px" },
        xs: { max: "575px" },
        "xs-to-min": {min: "576px"},
        sm: { min: "576px", max: "767px" },
        md: { min: "768px", max: "991px" },
        lg: { min: "992px", max: "1199px" },
        xl: { min: "1200px", max: "1399px" },
        "2xl": { min: "1400px", max: "1799px" },
        "3xl": { min: "1800px", max: "1999px" },
        "4xl": { min: "2000px", max: "2399px" },
        "5xl": { min: "2400px", max: "2599px" },
        "6xl": { min: "2600px", max: "2799px" },
        "7xl": { min: "2800px", max: "2999px" },
        "xs-to-sm-max": { max: "767px" },
        "xs-to-sm-min": { min: "768px" },
        "xs-to-md-max": { max: "991px" },
        "xs-to-md-min": { min: "992px" },
        "xs-to-lg-max": { max: "1199px" },
        "xs-to-lg-min": { min: "1200px" },
        "xs-to-xl-max": { max: "1399px" },
        "xs-to-xl-min": { min: "1400px" },
        "xs-to-xxl-max": { max: "1599px" },
        "xs-to-xxl-min": { min: "1599px" },
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
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseBorder: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1.5)',
            opacity: '0',
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
        "pulse-border": "pulseBorder 1500ms ease-out infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out"
      },
      backgroundImage: {
        'footer-bg-one': 'linear-gradient(84deg, #222928 0%, #090e0d 99.4%)',
        'hero-bg-two': 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)',
        'breadcrumb-bg': 'linear-gradient(90deg, #00715d 27.6%, rgba(171, 185, 183, 0.13) 72.4%)',
        'breadcrumb-bg-light': 'linear-gradient(90deg, #00715d 27.6%, rgb(83, 137, 129) 72.4%)'
      },
      colors: {
        'primary': '#00715D',
        'primary-light': '#00503f',
        'primary-deep': '#005a4a',
        'secondary': '#FFD502',
        'secondary-light': '#d6b200',
        'tertiary': '#F0783C',
        'info': '#A1DDD2',
        'primary-title': '#090E0D',
        'secondary-title': '#505A59',
        'tertiary-title': '#636B6A',
        'pure-black': '#000000',
        'primary-subtitle': '#23262F',
        'hero-two-subtitle': '#DDDDDD',
        'secondary-subtitle': '#3B3B3B',
        'dark-subtitle': '#949B95',
        'primary-paragraph': '#666666',
        'secondary-paragraph': '#333333',
        'tertiary-paragraph': '#787787',
        'primary-btn': '#00715D',
        'secondary-btn': '#FFD502',
        'tertiary-btn': '#090E0D',
        'ratting-color': '#FFB840',
        'section-bg-one': '#FFFFF3',
        'section-bg-two': '#F5F7F9',
        'section-bg-three': '#E5F1FF',
        'primary-border': 'rgba(168, 168, 168, 0.42)',
        'secondary-border': '#dddddd70',
        'tertiary-border': '#D0D5DD',
        'primary-shadow': 'rgba(0, 0, 0, 0.08)',
        'panel-bg': '#F4F6FA',
        'gray-text': '#969696',
        'info-gray': '#e5e5e5',
        'primary-gray': '#CCCDD3',
        'secondary-gray': '#F8F8F8',
        'footer-border': '#5d6b69',
        'footer-bg': '#2e3433',
        'header-bg3': '#efe0ae',
        'hero-area-three-bg': '#f9f5e8',
        'header-three-bg2': '#c7b476',
        'header-two-slick-bg': '#030712',
        'hero-area-three-bg3': '#FFE0D1',
        'search-border': '#ccc',
        'about-icon': '#eee',
        'about-play-btn': '#ffd5024d',
        'about-divider': '#cacaca',
        'helpful-card-bg-one': '#ffd5024d',
        'helpful-card-bg-two': '#D4FDC8',
        'helpful-card-bg-three': '#B6F1FF',
        'helpful-card-bg-four': '#FFD0B6',
        'helpful-card-icon-one': '#FFD502',
        'helpful-card-icon-two': '#63D044',
        'helpful-card-icon-three': '#30CBF1',
        'helpful-card-icon-four': '#FE7B21',
        'number-one': '#eaf3f2',
        'number-two': '#F1F2F3',
        'number-one-hover': '#157d6a',
        'number-two-hover': '#097E6A',
        'primary-progress': '#C9EFE8',
        'accordion-border': 'rgba(241, 241, 241, 0.5411764706)',
      },
      translate: {
        full: "100%",
      },
      zIndex: {
        100: "100",
      },
      spacing: {},
      fontSize: {
        xxs: "0.625rem", // 10px
        xs: "0.6875rem", // 11px
        sm: "0.75rem", // 12px
        "2sm": "0.8125rem", // 13px
        md: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.375rem", // 22px
        "3xl": "1.5rem", // 24px
        "4xl": "1.625rem", // 26px
        "5xl": "1.75rem", // 28px
        "6xl": "1.875rem", // 30px
        "7xl": "2rem", // 32px
        "8xl": "2.125rem", // 34px
        "9xl": "2.25rem", // 36px
        "10xl": "2.375rem", // 38px
        "11xl": "2.5rem", // 40px
        "12xl": "2.625rem", // 42px
        "13xl": "2.75rem", // 44px
        "14xl": "2.875rem", // 46px
        "15xl": "3rem", // 48px
        "16xl": "3.125rem", // 50px
        "17xl": "3.25rem", // 52px
        "18xl": "3.375rem", // 54px
        "19xl": "3.5rem", // 56px
        "20xl": "3.625rem", // 58px
        "21xl": "3.75rem", // 60px
        "22xl": "3.875rem", // 62px
        "23xl": "4rem", // 64px
        "24xl": "4.125rem", // 66px
        "25xl": "4.25rem", // 68px
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: 'auto',
          padding:'0px 12px',
          '@screen xs-to-min': {
            maxWidth: '540px',
          },  
          '@screen xs-to-sm-min': {
            maxWidth: '720px',
          },
          '@screen xs-to-md-min': {
            maxWidth: '960px',
          },
          '@screen xs-to-lg-min': {
            maxWidth: '1140px',
          },
          '@screen xs-to-xl-min': {
            maxWidth: '1320px',
          },
        }
      });
    })
  ],
};

// Custom Spacing
function generateSpacingValues(start, end, step) {
  const spacing = {};
  for (let i = start; i <= end; i += step) {
    spacing[i] = `${i}px`;
  }
  return spacing;
}

module.exports.theme.extend.spacing = generateSpacingValues(1, 1000, 1);
