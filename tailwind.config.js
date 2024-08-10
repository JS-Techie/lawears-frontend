/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00397B',
          foreground: '#00397B',
          background: '#0054B7'
        },
        secondary: {
          DEFAULT: "#5F90D7",
          foreground: '#5F90D7',
        },
        error: {
          DEFAULT: '#CD3D64',
          foreground: '#CD3D64',
          background: '#FEE8E7'
        },
        success: {
          DEFAULT: '#09825D',
          foreground: '#09825D',
          background: '#E5FAE4'
        },
        Yellow: {
          DEFAULT: '#DD8604',
          0: '#DD8604',
          1: 'FCF3DE',
        },
        Blue: {
          DEFAULT: '3A97D4',
          0: '#075996',
          1: '#3A97D4',
          2: '#DFF0FF',
          3: '#5F90D7',
          4: '#E4EEF7',
          5: '#CEDDF3'
        },
        Neutral: {
          DEFAULT: '#1A1A1A',
          0: '#000',
          1: '#1A1A1A',
          2: '#303436',
          3: '#484E51',
          4: '#60686C',
          5: '#788287',
          6: '#939B9F',
          7: '#AEB4B7',
          8: '#C9CDCF',
          9: '#FFF',
          10: '#F1F1F1',
          11: '#A7B0B5'
        }
      },
      fontFamily: {
        "cblackitalic": ["Caros-Black-Italic", "sans-serif"],
        "cblack": ["Caros-Black", "sans-serif"],
        "cbolditalic": ["Caros-Bold-Italic", "sans-serif"], 
        "cbold": ["Caros-Bold", "sans-serif"],
        "cextrabolditalic": ["Caros-ExtraBold-Italic", "sans-serif"],
        "cextrabold": ["Caros-ExtraBold", "sans-serif"],
        "cextralightitalic": ["Caros-ExtraLight-Italic", "sans-serif"],
        "cextralight": ["Caros-ExtraLight", "sans-serif"],
        "cheavyitalic": ["Caros-Heavy-Italic", "sans-serif"],
        "cheavy": ["Caros-Heavy", "sans-serif"],
        "citalic": ["Caros-Italic", "sans-serif"],
        "clightitalic": ["Caros-Light-Italic", "sans-serif"],
        "clight": ["Caros-Light", "sans-serif"],
        "cmediumitalic": ["Caros-Medium-Italic", "sans-serif"],
        "cmedium": ["Caros-Medium", "sans-serif"],
        "cthinitalic": ["Caros-Thin-Italic", "sans-serif"],
        "cthin": ["Caros-Thin", "sans-serif"],
        "c": ["Caros", "sans-serif"],
        "r":["raleway"]
      },
    },
  },
  plugins: []
};