const fs = require('fs')
const s = fs.readFileSync('index.html', 'utf8')
const match = s.match(/class\s*=\s*"([^"]*)"/)
if (!match) {
  console.log('No class attribute found in first match')
  process.exit(0)
}
const cls = match[1]
console.log('class attr raw:', cls)
console.log('chars:')
console.log(Array.from(cls).map(ch => ({c: ch, code: ch.charCodeAt(0)})))
