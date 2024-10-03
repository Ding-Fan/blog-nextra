import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Footer from "./components/Footer";

const config: DocsThemeConfig = {
  logo: <span>又不是不能写博客</span>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  darkMode: false,
  nextThemes: {
    // enableSystem: false,
    forcedTheme: 'light',
  },
  sidebar: {
    toggleButton: true,
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  footer: {
    component: <Footer />,
  },
};

export default config;
