/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  useTabs: false,
  bracketSpacing: true,
  printWidth: 120,
  tabWidth: 2,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
}
