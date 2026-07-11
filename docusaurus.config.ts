import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// --- i18n single source of truth -------------------------------------------
// The whole locale mechanism (config below, the browser-language detection in
// `localeDetectionScript`, the search index, the locale dropdown) is driven off
// these three constants. Adding a language later = add it to `LOCALES` and give
// it a `localeConfigs` label — detection and switching pick it up with NO other
// code change. `DEFAULT_LOCALE` serves at the site root; every other locale
// serves under `/<locale>/`.
const DEFAULT_LOCALE = 'en';
const LOCALES = ['en', 'ru'];
const BASE_URL = '/enterprise-rag-agents-handbook/';

// Blocking <head> script: on a first visit with no preference cookie, match the
// visitor's `navigator.languages` against LOCALES (English fallback) and redirect
// to the best locale, preserving path + hash. An existing cookie OR an explicit
// non-default locale already in the URL always wins, so we never fight a user's
// choice and never loop. It runs before paint (no flash) and is a no-op for
// non-JS crawlers, which get the requested URL as-is (hreflang still exposes every
// locale). Locale-list-driven: LOCALES/DEFAULT_LOCALE/BASE_URL are injected below.
// The cookie name is mirrored in src/lib/localePreference.ts — keep them in sync.
const localeDetectionScript = `
(function () {
  try {
    var LOCALES = ${JSON.stringify(LOCALES)};
    var DEFAULT = ${JSON.stringify(DEFAULT_LOCALE)};
    var BASE = ${JSON.stringify(BASE_URL)};
    var COOKIE = 'preferred_locale';

    function readCookie(name) {
      var m = document.cookie.match('(?:^|; )' + name + '=([^;]*)');
      return m ? decodeURIComponent(m[1]) : null;
    }
    function writeCookie(name, val) {
      document.cookie =
        name + '=' + encodeURIComponent(val) +
        '; path=' + BASE + '; max-age=' + (60 * 60 * 24 * 365) + '; samesite=lax';
    }

    var path = window.location.pathname;
    if (path.indexOf(BASE) !== 0) return;            // only act within our baseUrl
    var rest = path.slice(BASE.length);              // '' | 'ru/...' | 'llmops/...'
    var firstSeg = rest.split('/')[0];

    var nonDefault = LOCALES.filter(function (l) { return l !== DEFAULT; });
    var urlLocale = nonDefault.indexOf(firstSeg) !== -1 ? firstSeg : DEFAULT;

    // Any established preference (cookie) suppresses detection entirely — we never
    // auto-redirect against a choice the user has already made.
    var cookie = readCookie(COOKIE);
    if (cookie && LOCALES.indexOf(cookie) !== -1) return;

    // No cookie = genuine first visit.
    if (urlLocale !== DEFAULT) {
      // Arrived directly at a locale-prefixed URL → honor it, remember it.
      writeCookie(COOKIE, urlLocale);
      return;
    }

    // Bare default-locale path, no cookie → detect from the browser languages.
    var langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : (navigator.language ? [navigator.language] : []);
    var match = DEFAULT;                             // English fallback
    for (var i = 0; i < langs.length && match === DEFAULT; i++) {
      var tag = String(langs[i]).toLowerCase();
      var primary = tag.split('-')[0];
      for (var j = 0; j < LOCALES.length; j++) {
        var loc = LOCALES[j].toLowerCase();
        if (tag === loc || primary === loc) { match = LOCALES[j]; break; }
      }
    }

    writeCookie(COOKIE, match);
    if (match !== DEFAULT) {
      window.location.replace(
        BASE + match + '/' + rest + window.location.search + window.location.hash,
      );
    }
  } catch (e) {
    // Fail open: detection must never block or break the page.
  }
})();
`;

const config: Config = {
  title: 'Enterprise RAG & Agents Handbook',
  tagline: 'A practical, first-principles guide to production RAG and agentic systems',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://nikolaisachok.github.io',
  baseUrl: BASE_URL,
  organizationName: 'NikolaiSachok', // GitHub user/org
  projectName: 'enterprise-rag-agents-handbook',

  onBrokenLinks: 'throw',

  // Browser-language auto-detect + cookie, injected as a blocking <head> script so
  // it runs before paint (no flash-of-wrong-language). See `localeDetectionScript`.
  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'text/javascript'},
      innerHTML: localeDetectionScript,
    },
  ],

  // Enable Mermaid diagrams in Markdown code blocks (```mermaid).
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    // Local, zero-config offline search. Builds a client-side index at build time
    // (no external service / network calls). Index docs + blog for both locales.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/',
        // Build a search index per locale.
        language: LOCALES,
      },
    ],
  ],

  // i18n: English is the default/canonical locale (served at the site root);
  // Russian serves under /ru/. RU stays audience-primary in authoring (written
  // natively, never machine-translated) — this only sets URL/serving structure.
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    localeConfigs: {
      en: {label: 'English'},
      ru: {label: 'Русский'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Serve the docs (the handbook) at the site root.
          routeBasePath: '/',
          editUrl: 'https://github.com/NikolaiSachok/enterprise-rag-agents-handbook/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/NikolaiSachok/enterprise-rag-agents-handbook/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RAG & Agents Handbook',
      logo: {
        alt: 'Enterprise RAG & Agents Handbook',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'handbookSidebar',
          position: 'left',
          label: 'Handbook',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {href: 'https://github.com/NikolaiSachok/enterprise-rag-agents-handbook', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook',
          items: [
            {label: 'Introduction', to: '/'},
            {label: 'Glossary', to: '/glossary'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nikolai Sachok. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
