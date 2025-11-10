// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FIAE 2023 Prüfungs Wiki',
  tagline: 'Für Azubis von Azubis',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://smichel89.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/FIAE2023_AP/',

  deploymentBranch: 'gh-pages',
  plugins: [require.resolve('docusaurus-lunr-search')],


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SMichel89', // Usually your GitHub org/user name.
  projectName: 'FIAE2023_AP', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SMichel89/FIAE2023_AP/tree/main',
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SMichel89/FIAE2023_AP/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'FIAE2023_AP',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Das to wird dazu genutzt, um die von der sidebar.js bereitgestellten Routing zu nutzen
          {
            type: 'docSidebar',
            sidebarId: 'rulesSidebar',
            position: 'left',
            label: 'Regeln',
          },
          {
            type: 'docSidebar',
            sidebarId: 'howToSidebar',
            position: 'left',
            label: 'How To ...',
          },
          {
            type: 'docSidebar',
            sidebarId: 'AP1Sidebar',
            position: 'left',
            label: 'AP1',
          },
          {
            type: 'docSidebar',
            sidebarId: 'AP2Sidebar',
            position: 'left',
            label: 'AP2',
          },
          {
            type: 'docSidebar',
            sidebarId: 'userSidebar',
            position: 'left',
            label: 'User',
          },
          {
            type: 'docSidebar',
            sidebarId: 'templatesSidebar',
            position: 'left',
            label: 'Vorlagen',
          },
          /*{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },*/
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SMichel89/FIAE2023_AP/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wichtige Links',
            /* items: [
              {
                label: 'AP1',
                to: '/docs/AP1/overview/ap1_overview',
              },
              {
                label: 'Regeln',
                to: '/docs/category/regeln--hinweise/',
              },
              {
                label: 'User',
                to: '/docs/user/Ausbilder/holldack',
              },
            ], */
          },
          {
            title: 'Wissenswertes',
            items: [
              {
                label: 'Letztes Update: 20.01.2025',
                href: '#',
              },
            ],
          },
          {
            title: 'Mehr',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/SMichel89/FIAE2023_AP',
              },
              {
                label: 'Dock-B',
                href: 'https://dock-b.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gruppe FIAE2023, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
