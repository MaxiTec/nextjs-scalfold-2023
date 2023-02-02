const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`
// This apply Eslint an prettier config to all files
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
}
