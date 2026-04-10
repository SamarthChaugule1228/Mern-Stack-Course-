module.exports = {
  plugins: {
    // The PostCSS plugin for tailwind moved to a separate package.
    // Use the dedicated @tailwindcss/postcss plugin so PostCSS + Vite load Tailwind correctly.
    '@tailwindcss/postcss': {},
    // Autoprefixer is commonly used together with Tailwind
    autoprefixer: {},
  },
}
