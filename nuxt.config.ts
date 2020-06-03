import * as Colors from 'vuetify/es5/util/colors';
import { Configuration } from '@nuxt/types';
import TerserPlugin from 'terser-webpack-plugin';

const colorList = Colors.default;
const config: Configuration = {
  auth: {
    cookie: false,
    plugins: [],
    redirect: {
      callback: '/api/login',
      home: '/',
      login: '/login',
      logout: '/api',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            method: 'post',
            propertyName: false,
            url: '/login',
          },
          logout: {
            method: 'post',
            url: '/logout',
          },
          user: {
            method: 'get',
            propertyName: 'user',
            url: '/user',
          },
        },
      },
    },
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: true,
    debug: process.env.NODE_ENV !== 'production',
    https: true,
    prefix: '',
    progress: true,
    retry: {
      retries: 5,
    },
  },

  /*
   ** Build configuration
   */
  build: {
    analyze: {
      analyzerMode:
        process.env.NODE_ENV !== 'production' ? 'static' : 'disabled',
    },
    babel: {
      presets({ isServer }) {
        return [
          ['@nuxt/babel-preset-app', { loose: true, corejs: { version: 3 } }],
        ];
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = 'source-map';
      }
    },

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          sourceMap: process.env.NODE_ENV !== 'production',
        }),
      ],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    extractCSS: true,
    transpile: [/typed-vuex/],
    devtools: process.env.NODE_ENV !== 'production',
  },

  /**
   * Setting global scss variable
   * https://github.com/nuxt-community/style-resources-module/
   */
  styleResources: {
    sass: [],
    scss: ['~/assets/variables.scss'],
    less: [],
    stylus: [],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios', { src: '~/plugins/vue-plyr', ssr: false }],

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
    '@nuxtjs/style-resources',
  ],

  /*
   ** Global CSS
   */
  css: ['plyr/dist/plyr.css'],
  dev: process.env.NODE_ENV !== 'production',
  dotenv: {
    path: './',
    /* module options */
  },
  generate: {
    routes: ['/'],
  },

  /*
   ** Headers of the page
   */
  head: {
    link: [
      {
        href: '/favicon.ico',
        rel: 'icon',
        type: 'image/x-icon',
      },
    ],
    meta: [
      {
        charset: 'utf-8',
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
      },
      {
        content: process.env.npm_package_description || '',
        hid: 'description',
        name: 'description',
      },
    ],
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - ' + process.env.npm_package_name,
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },
  mode: 'spa',

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  router: {
    // middleware: ['auth'],
  },
  routerModule: {
    path: './src/routes',
    fileName: 'routes.ts',
  },
  srcDir: 'src',
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
  watch: ['./src/**/*.ts'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: {},
    customVariables: [],
    defaultAssets: {
      font: {
        family: 'Roboto',
      },
      icons: 'fa',
    },
  },
};
export default config;
