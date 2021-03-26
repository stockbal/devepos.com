const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DevEpos',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#c43c6c' }],
    ['link', { rel: 'shortcut icon', href: '/img/favicon.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/img/logo.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Projects',
        link: '/projects/'
      },
      {
        text: 'eclipse Update Sites',
        link: 'https://eclipse.devepos.com'
      }
    ],
    sidebar: {
      '/projects/': [
        {
          title: 'ABAP DB Browser',
          collapsable: false,
          children: [['abap-db-browser/', 'Introduction']]
        },
        {
          title: 'ABAP Search and Analysis Tools',
          collapsable: false,
          children: [['abap-search-tools/', 'Introduction']]
        },
        {
          title: 'ABAP Tags',
          collapsable: false,
          children: [['abap-tags/', 'Introduction']]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
};
