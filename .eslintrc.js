/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'vuetify',
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
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/max-attributes-per-line': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'no-unused-vars': 'off',
    semi: 'off',
    indent: 'off',
    '@typescript-eslint/semi': ['warn', 'always'],
  },
};
