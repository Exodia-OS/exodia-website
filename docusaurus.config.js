/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Exodia",
  tagline: "OS For Cyber Security",
  url: "https://github.com",
  baseUrl: "/exodia-website/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Exodia.png",
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
        src: "img/Exodia.png",
      },
      
      items: [

        {
          to: "quickstart/install",
          label: "Wiki",
          position: "left",
          sidebarId: 'config'
        },

        {
          to: "Keybinding",
          label: "Keybinding",
          position: "left",
          sidebarId: 'config'
        },

        {
          to: "themes/themelist",
          label: "Themes",
          position: "left",
          sidebarId: 'themesPage'
        }, 

        {
          href: "https://github.com/Exodia-OS",
          position: "right",
          
        },

        {
          href: "https://discord.gg/wPDyfR5AV9",
          position: "right",
        },

        {
          href: "https://t.me/exodia_os",
          position: "right",
        },

      ],
    },

    footer: {
      style:            'dark',
      links: [
    
        //  right
        {
          title:        'Developers',

          items: [

            {
              label:    'Team',
              href:     "https://exodia-os.github.io/team/",
              position: "center",
            },

            {
              label:    'Publisher GitHub',
              href:     "https://github.com/mmsaeed509",
              position: "right",
            },

            {
              label:    'Publisher LinkedIn',
              href:     "https://www.linkedin.com/in/mahmoud-mohamed-a934b21a5/",
              position: "right",
            },

            {
              label:    'contact Publisher',
              href:     "https://github.com/mmsaeed509#contact-me",
              position: "right",
            },

            
          ],
        

        },

        // center

        {

          title:        'Editions src code',

          items: [

            {
              label:    'Home',
              href:     "https://github.com/Exodia-OS/exodia-home-ISO",
              position: "center",
            },


            {
              label:    'Predator',
              href:     "https://github.com/Exodia-OS/exodia-predator",
              position: "center",
            },


            {
              label:    'Wireless',
              href:     "https://github.com/Exodia-OS/exodia-wireless",
              position: "center",
            },
            
          ],
        },
      
        // left

        {

          title:        'Issues',


          items: [

            {
              label:    'Home',
              href:     "https://github.com/Exodia-OS/exodia-home-ISO/issues",
              position: "center",
            },


            {
              label:    'Predator',
              href:     "https://github.com/Exodia-OS/exodia-predator/issues",
              position: "center",
            },


            {
              label:    'Wireless',
              href:     "https://github.com/Exodia-OS/exodia-wireless/issues",
              position: "center",
            },

          ],
        
        
        },


      ],


      copyright: `Copyright © ${new Date().getFullYear()} Mahmoud Mohamed | Cyb3rTh1eveZ Team`,


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
