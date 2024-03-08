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
  footer: {
    // text: "Do not shot this.",

    component: <Footer />,
  },
};

export default config;
