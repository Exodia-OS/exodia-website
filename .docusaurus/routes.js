
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/exodia-website/__docusaurus/debug',
    component: ComponentCreator('/exodia-website/__docusaurus/debug','3fe'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/config',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/config','930'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/content',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/content','346'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/globalData','76d'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/metadata','714'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/registry',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/registry','638'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/routes',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/routes','c91'),
    exact: true
  },
  {
    path: '/exodia-website/',
    component: ComponentCreator('/exodia-website/','1a1'),
    exact: true
  },
  {
    path: '/exodia-website/',
    component: ComponentCreator('/exodia-website/','787'),
    routes: [
      {
        path: '/exodia-website/Contributing/Contributing',
        component: ComponentCreator('/exodia-website/Contributing/Contributing','17b'),
        exact: true
      },
      {
        path: '/exodia-website/Keybinding',
        component: ComponentCreator('/exodia-website/Keybinding','949'),
        exact: true,
        sidebar: "config"
      },
      {
        path: '/exodia-website/keybindings/dwm',
        component: ComponentCreator('/exodia-website/keybindings/dwm','5d5'),
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
      },
      {
        path: '/exodia-website/tips/keyboardLayout',
        component: ComponentCreator('/exodia-website/tips/keyboardLayout','624'),
        exact: true,
        sidebar: "config"
      },
      {
        path: '/exodia-website/tips/monitors',
        component: ComponentCreator('/exodia-website/tips/monitors','2dc'),
        exact: true,
        sidebar: "config"
      },
      {
        path: '/exodia-website/tips/polybar',
        component: ComponentCreator('/exodia-website/tips/polybar','7c0'),
        exact: true,
        sidebar: "config"
      },
      {
        path: '/exodia-website/tips/sddm',
        component: ComponentCreator('/exodia-website/tips/sddm','3c2'),
        exact: true,
        sidebar: "config"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
