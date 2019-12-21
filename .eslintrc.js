/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': 'off',
    semi: ['error', 'always'],
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    indent: 'off',
  },
};
