
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/exodia-website/__docusaurus/debug',
    component: ComponentCreator('/exodia-website/__docusaurus/debug','8f7'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/config',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/config','f87'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/content',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/content','48a'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/globalData','71d'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/metadata','f54'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/registry',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/registry','1e5'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/routes',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/routes','ec1'),
    exact: true
  },
  {
    path: '/exodia-website/',
    component: ComponentCreator('/exodia-website/','63d'),
    exact: true
  },
  {
    path: '/exodia-website/',
    component: ComponentCreator('/exodia-website/','f2e'),
    routes: [
      {
        path: '/exodia-website/credits',
        component: ComponentCreator('/exodia-website/credits','6b8'),
        exact: true,
        sidebar: "config"
      },
      {
        path: '/exodia-website/Keybinding',
        component: ComponentCreator('/exodia-website/Keybinding','949'),
        exact: true,
        sidebar: "config"
      },
      {
        path: '/exodia-website/quickstart/install',
        component: ComponentCreator('/exodia-website/quickstart/install','220'),
        exact: true,
        sidebar: "config"
      },
      {
        path: '/exodia-website/quickstart/post-install',
        component: ComponentCreator('/exodia-website/quickstart/post-install','be0'),
        exact: true,
        sidebar: "config"
      },
      {
        path: '/exodia-website/themes/glassy',
        component: ComponentCreator('/exodia-website/themes/glassy','549'),
        exact: true
      },
      {
        path: '/exodia-website/themes/themelist',
        component: ComponentCreator('/exodia-website/themes/themelist','4f3'),
        exact: true,
        sidebar: "testside"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
