import { Layout, Navbar } from "nextra-theme-docs";
import Footer from "../components/Footer";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
// Required for theme styles, previously was imported under the hood
import "nextra-theme-docs/style.css";

import "../globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  // ... your metadata API
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: {
    default: "又不是不能写博客",
    template: "%s | 又不是不能写博客",
  },
  openGraph: {
    url: "https://dingfan.date",
    siteName: "又不是不能写博客",
    locale: "zh_CN",
    type: "website",
  },
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<span>又不是不能写博客</span>}
    // projectLink="https://github.com/shuding/nextra"
  >
  </Navbar>
);
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        backgroundColor={{
          //  https://stephango.com/flexoki
          //  --bg: #fffcf0; 255, 252, 240
          //  --tx: #100f0f; 16 15 15
          //  --nextra-bg: 255, 252, 240 !important;
          dark: "rgb(15, 23, 42)",
          light: "rgb(255, 252, 240)",
        }}
        // change the link color here
        color={{
          hue: { dark: 207, light: 207 },
          saturation: { dark: 48, light: 48 },
          lightness: { dark: 50, light: 50 },
        }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          //   banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          //   docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          //   editLink="Edit this page on GitHub"
          sidebar={{
            toggleButton: true,
            defaultMenuCollapseLevel: 1,
          }}
          editLink={null}
          feedback={{ content: null }}
          nextThemes={{
            forcedTheme: "light",
          }}
          darkMode={false}
          footer={<Footer />}

          // ...Your additional theme config options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
