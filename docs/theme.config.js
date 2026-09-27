/**
 * @type {import("nextra-theme-docs").DocsThemeConfig}
 */
export default {
  project: { link: "https://github.com/bongani-m/hardhatq" },
  docsRepositoryBase: "https://github.com/bongani-m/hardhatq/tree/main/docs",
  useNextSeoProps() {
    return { titleTemplate: "%s – HardhatQ" };
  },
  primaryHue: { dark: 38, light: 36 },
  logo: (
    <>
      <span className="font-bold" style={{ marginRight: 8 }}>
        HardhatQ
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        An AMQP 0.9.1 message broker written in Go
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="HardhatQ: an AMQP 0.9.1 message broker written in Go"
      />
      <meta
        name="og:description"
        content="HardhatQ: an AMQP 0.9.1 message broker written in Go"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:domain" content="https://github.com/bongani-m/hardhatq" />
      <meta name="twitter:url" content="https://github.com/bongani-m/hardhatq" />
      <meta
        name="og:title"
        content="HardhatQ: an AMQP 0.9.1 message broker written in Go"
      />
      <meta name="apple-mobile-web-app-title" content="HardhatQ" />
    </>
  ),
  navigation: true,
  footer: { text: <>MIT {new Date().getFullYear()} © HardhatQ.</> },
  editLink: { text: "Edit this page on GitHub" },
  unstable_faviconGlyph: "⛑",
};
