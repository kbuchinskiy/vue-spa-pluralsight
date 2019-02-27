module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module"
  },
  extends: ["vue", "standard", "plugin:vue/recommended"],
  plugins: ["html", "vue"]
}