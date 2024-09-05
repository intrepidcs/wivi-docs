// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wireless neoVI',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'intrepidcs', // Usually your GitHub org/user name.
  projectName: 'wivi-docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  trailingSlash: true, // Set global trailingSlash configuration 
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          //showLastUpdateAuthor: false, // Hide the author's name
          //showLastUpdateTime: true, // Show the exact time of the last update
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        // sitemap: {
        //   lastmod: 'date',
        //   changefreq: 'weekly',
        //   priority: 0.5,
        //   ignorePatterns: ['/test/**', '/markdown-page/**'],
        //   filename: 'sitemap.xml',
        //   createSitemapItems: async (params) => {
        //     const {defaultCreateSitemapItems, ...rest} = params;
        //     const items = await defaultCreateSitemapItems(rest);
        //     return items.filter((item) => !item.url.includes('/page/'));
        //   },
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/wivi-social-card.jpg',
      navbar: {
        title: 'Wireless neoVI Documentation',
        logo: {
          alt: 'Wireless neoVI Logo',
          src: 'img/logo.svg',
          // srcDark: '/img/logo-dark.svg', 
          // href: '#',
          // target: '_self',
          // style: {border: 'solid red'},
        },
        items: [
          {
            href: 'https://intrepidcs.com/support/support-resources/',
            label: 'All Docs',
            position: 'right',
            className: 'nav-link',
          },
          {
            href: 'https://intrepidcs.com/products/',
            label: 'Products',
            position: 'right',
            className: 'nav-link',
          },
          {
            href: 'https://intrepidcs.com/learning-center/',
            label: 'Learning Center',
            position: 'right',
            className: 'nav-link',
          },
          {
            href: 'https://intrepidcs.com/support/',
            label: 'Support',
            position: 'right',
            className: 'nav-link',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Follow Us',
            items: [
              {
                  html: `<a href="https://www.linkedin.com/company/intrepidcontrol/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a> <a href="https://www.linkedin.com/company/intrepidcontrol/" target="_blank" rel="noopener noreferrer">LinkedIn</a>`,
              },
              {
                html: `<a href="https://youtube.com/@intrepidcontrolsystems" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a> <a href="https://youtube.com/@intrepidcontrolsystems" target="_blank" rel="noopener noreferrer">YouTube</a>`,
              },
              {
                html: `<a href="https://www.facebook.com/IntrepidControl/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a> <a href="https://www.facebook.com/IntrepidControl/" target="_blank" rel="noopener noreferrer">Facebook</a>`,
              },
              {                
                html: `<a href="https://twitter.com/intrepidcontrol" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a> <a href="https://twitter.com/intrepidcontrol" target="_blank" rel="noopener noreferrer">Twitter</a>`,
              },
              {
                html: `<a href="https://www.instagram.com/intrepidcontrol/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a> <a href="https://www.instagram.com/intrepidcontrol/" target="_blank" rel="noopener noreferrer">Instagram</a>`,
              },
              {
                html: `<a href="https://www.threads.net/@intrepidcontrol" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-threads"></i></a> <a href="https://www.threads.net/@intrepidcontrol" target="_blank" rel="noopener noreferrer">Threads</a>`,
              }
            ],
          },
          {
            title: 'Applications',
            items: [
              {
                label: 'Cybersecurity',
                href: 'https://intrepidcs.com/applications/cybersecurity/',
              },
              {
                label: 'Data Logging',
                href: 'https://intrepidcs.com/applications/data-logging/',
              },
              {
                label: 'Simulate ECU Functions',
                href: 'https://intrepidcs.com/applications/simulate-ecu-functions/',
              },
              {
                label: 'Diagnostics, Testing and Validation',
                href: 'https://intrepidcs.com/applications/diagnostics-testing-validation/',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'Vehicle Network Adapters',
                href: 'https://intrepidcs.com/products/vehicle-network-adapters/',
              },
              {
                label: 'Data Loggers',
                href: 'https://intrepidcs.com/products/data-loggers/',
              },
              {
                label: 'Software',
                href: 'https://intrepidcs.com/products/software/',
              },
              {
                label: 'Automotive Ethernet Tools',
                href: 'https://intrepidcs.com/products/automotive-ethernet-tools/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                href: 'https://intrepidcs.com/about/',
              },
              {
                label: 'News',
                href: 'https://intrepidcs.com/news/',
              },
              {
                label: 'Events',
                href: 'https://intrepidcs.com/events/',
              },
              {
                label: 'Contact Us',
                href: 'https://intrepidcs.com/contact-us/',
              },
            ]
          }
        ],

        logo: {
          alt: 'Wireless neoVI',
          src: '/img/logo.svg',
          // href: '#',
          width: 160,
          height: 150,
        },  
        copyright: `<b> Copyright © ${new Date().getFullYear()} <a href="https://intrepidcs.com/" class="ics-link" target="_blank"> Intrepid Control Systems Inc.</a> All Rights Reserved </b>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      }
    }),
      plugins: [
        [
          require.resolve('docusaurus-lunr-search'),
          {
            // languages: ['en'], // Specify the languages, e.g., ['en', 'de']
            indexBaseUrl: true, // Whether to index base URLs
            // excludeRoutes: ['!docs/my-excluded-doc'], // Routes to exclude from indexing
          },
        ],
      ],
      headTags: [
        {
          tagName: 'link',
          attributes: {
            rel: 'icon',
            href: '/img/favicon-16x16.png',
            sizes: '16x16',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'icon',
            href: '/img/favicon-32x32.png',
            sizes: '32x32',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'icon',
            href: '/img/favicon-180x180.png',
            sizes: '180x180',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'icon',
            href: '/img/favicon-192x192.png',
            sizes: '192x192',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'icon',
            href: '/img/favicon-512x512.png',
            sizes: '512x512',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'apple-touch-icon',
            href: '/img/apple-touch-icon.png',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'og:type',
            content: 'website',
            'data-rh': 'true',
          },
        },
      ],
    };
  
  export default config;  