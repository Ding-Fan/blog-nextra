const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  standalone: true,
  latex: true,
});

module.exports = withNextra();
