const fs = require('fs')
const postcss = require('postcss')
const tailwind = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

async function run() {
  const css = fs.readFileSync('src/styles.css', 'utf8')
  try {
    const result = await postcss([tailwind(), autoprefixer()]).process(css, { from: 'src/styles.css' })
    fs.writeFileSync('dist/inspect-tailwind.css', result.css)
    console.log('Wrote dist/inspect-tailwind.css — length', result.css.length)
    if (result.messages && result.messages.length) {
      console.log('PostCSS messages:')
      for (const m of result.messages) console.log('-', m)
    } else {
      console.log('No PostCSS messages')
    }
  } catch (err) {
    console.error('PostCSS error:', err)
    process.exit(1)
  }
}

run()
