module.exports = {
  // Include all files at the project root and src so Tailwind can find classes
  content: ['./index.html', './debug.html', './debug2.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {},
  },
  // If content scanning misses classes for any reason, you can safelist
  // classes that must always be generated (useful for debugging).
  safelist: [
    'ml-10', 'text-4xl', 'font-bold', 'text-blue-500', 'bg-green-600',
    'font-sans', 'font-serif', 'font-mono', 'btn-primary'
  ],
  plugins: [],
}
