// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CrossFi Docs',
  tagline: 'Everything you wanted to know how the technology and products of the Cross Finance ecosystem work',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://crossfichain.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'crossfichain', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://gitlab.dfmx.ae/xfi/xfi-front/crossfi.docs.front',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
      },
      navbar: {
        title: 'CrossFi Docs',
        logo: {
          alt: 'CrossFi Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'nodeSidebar',
          //   position: 'left',
          //   label: 'Node',
          // },
          {
            href: "https://crossfi.org/",
            position: 'left',
            html: 'Сrossfi.org',
          },
          {
            href: "https://t.me/crossfichain",
            position: "right",
            className: "icon-link telegram-link",
            "aria-label": "telegram",
          },
          {
            href: "/#",
            position: "right",
            className: "icon-link github-link",
            "aria-label": "github",
          },
          {
            href: "https://medium.com/@crossfichain",
            position: "right",
            className: "icon-link medium-link",
            "aria-label": "medium",
          },
          {
            href: "https://x.com/crossfichain",
            position: "right",
            className: "icon-link x-link",
            "aria-label": "x",
          },
          {
            href: "https://facebook.com/crossfiofficial",
            position: "right",
            className: "icon-link facebook-link",
            "aria-label": "facebook",
          },
          {
            href: "https://discord.gg/crossfi",
            position: "right",
            className: "icon-link discord-link",
            "aria-label": "discord",
          },
          {
            href: "https://www.linkedin.com/company/crossfichain/about/",
            position: "right",
            className: "icon-link linkedin-link",
            "aria-label": "linkedin ",
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} CrossFi, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
