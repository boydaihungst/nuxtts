import { Configuration } from '@nuxt/types';
import * as Colors from 'vuetify/es5/util/colors';
import TerserPlugin from 'terser-webpack-plugin';
const colorList = Colors.default;

const config: Configuration = {
  mode: 'spa',
  srcDir: 'src',
  dev: process.env.NODE_ENV !== 'production',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ['~/plugins/axios', '~/plugins/vuexAccessor'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/router',
    'nuxt-typed-vuex',
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    https: true,
    progress: true,
    retry: { retries: 5 },
    debug: process.env.NODE_ENV !== 'production',
    prefix: 'api/v1',
    credentials: true,
  },
  auth: {
    cookie: false,
    plugins: [],

    redirect: {
      login: '/api/login',
      logout: '/api',
      callback: '/api/login',
      home: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: false,
          },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get', propertyName: 'user' },
        },
      },
    },
  },
  dotenv: {
    path: './',
    /* module options */
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Roboto',
      },
      icons: 'fa',
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colorList.blue.darken2,
          accent: colorList.grey.darken3,
          secondary: colorList.amber.darken3,
          info: colorList.teal.lighten1,
          warning: colorList.amber.base,
          error: colorList.deepOrange.accent4,
          success: colorList.green.accent3,
        },
      },
    },
  },
  routerModule: {
    path: './src/routes',
    fileName: 'routes.ts',
  },
  router: {
    // middleware: ['auth'],
  },
  generate: { routes: ['/'] },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/typed-vuex/],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: false,
        }),
      ],
    },
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  },
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
};
export default config;
