import postcssLit from 'rollup-plugin-postcss-lit';
console.log("HELLO")

export default {
  base: './',
  plugins: [
    postcssLit({include: "**/*.css*"}),
  ],
}
