/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Exodia 🇵🇸",
  tagline: "Old website",
  url: "https://github.com",
  baseUrl: "/exodia-website/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "logos/exodia-cyan.png",
  organizationName: "Exodia-OS",
  projectName: "exodia-website",
  deploymentBranch: "gh-pages",
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Exodia OS",
      logo: {
        alt: "Exodia Logo",
        src: "logos/exodia-cyan.png",
        href: "https://exodia-os.github.io",
      },

    },

    footer: {
      style: 'dark',
      links: [
    
        
       
      ],

      copyright: `Exodia OS is licensed under the GPl-3 License © ${new Date().getFullYear()} Exodia OS Development & Cyb3rTh1eveZ Team`,


    },

    prism: {
      
    },

  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/style.css"),
        },
      },
    ],
  ],

  
};
