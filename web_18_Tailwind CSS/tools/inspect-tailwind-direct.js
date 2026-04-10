const fs = require('fs')
const postcss = require('postcss')
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')

async function run() {
  const css = fs.readFileSync('src/styles.css', 'utf8')
  try {
    const result = await postcss([tailwind('./tailwind.config.cjs'), autoprefixer()]).process(css, { from: 'src/styles.css' })
    fs.writeFileSync('dist/inspect-tailwind-direct.css', result.css)
    console.log('Wrote dist/inspect-tailwind-direct.css — length', result.css.length)
  } catch (err) {
    console.error('PostCSS error (direct):', err)
    process.exit(1)
  }
}

run()
