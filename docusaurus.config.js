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
          to: "credits",
          sidebarId: 'config',
          position:"left",
          label: "Team",
        },

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
          href: "https://discord.gg/6uX97aWN",
          position: "right",
        },

      ],
    },

    footer: {
      style: 'dark',
      links: [
    
        //  right
        {
          title: 'Publisher',

          items: [

            {
              label: 'GitHub',
              href: "https://github.com/mmsaeed509",
              position: "right",
            },

            {
              label: 'Facebook',
              href: "https://www.facebook.com/engrody.linux.5",
              position: "right",
            },

            {
              label: 'Instagram',
              href: "https://www.instagram.com/mmsaeed509/?theme=dark",
              position: "right",
            },

            
          ],
        

        },

        // center

        {
          items: [

            {
              label: 'reddit',
              href: "https://www.reddit.com/user/mmsaeed509",
              position: "center",
            },


            {
              label: 'LinkedIn',
              href: "https://www.linkedin.com/in/mahmoud-mohamed-a934b21a5/",
              position: "center",
            },

            {
              label: 'Twitter',
              href: "https://twitter.com/Mahmoudzil4",
              position: "center",
            },
            
          ],
        },
      
        // left

        {
          items: [

            {
              label: 'discord',
              href: "https://discordapp.com/users/528010173403365377",
              position: "left",
            },


            {
              label: 'GitLab',
              href: "https://gitlab.com/mmsaeed509",
              position: "left",
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
