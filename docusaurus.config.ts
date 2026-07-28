import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PreTeXt.Plus',
  tagline: 'A modern authoring workflow for PreTeXt projects',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.pretext.plus',
  baseUrl: '/',

  organizationName: 'PreTeXtPlus',
  projectName: 'pretext-plus-docs',

  trailingSlash: true,

  onBrokenLinks: 'throw',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/PreTeXtPlus/pretext-plus-docs/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/pretext-plus-social-card.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PreTeXt.Plus',
      logo: {
        alt: 'PreTeXt.Plus Symbol',
        src: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/PreTeXtPlus/pretext-plus-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/creating-a-project',
            },
            {
              label: 'Writing',
              to: '/writing',
            },
            {
              label: 'The Editor',
              to: '/editor/overview',
            },
            {
              label: 'Building & Publishing',
              to: '/building/outputs',
            },
            {
              label: 'Features',
              to: '/features/current-features',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/PreTeXtPlus',
            },
            {
              label: 'PreTeXt Documentation',
              href: 'https://pretextbook.org/doc/guide/html/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PreTeXt.Plus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
