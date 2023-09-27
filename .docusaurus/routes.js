
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/exodia-website/__docusaurus/debug',
    component: ComponentCreator('/exodia-website/__docusaurus/debug','b6a'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/config',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/config','a46'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/content',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/content','98c'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/globalData','73c'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/metadata','aa2'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/registry',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/registry','675'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/routes',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/routes','e1d'),
    exact: true
  },
  {
    path: '/exodia-website/',
    component: ComponentCreator('/exodia-website/','028'),
    exact: true
  },
  {
    path: '/exodia-website/',
    component: ComponentCreator('/exodia-website/','4b8'),
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
        path: '/exodia-website/keybindings/i3wm',
        component: ComponentCreator('/exodia-website/keybindings/i3wm','6d2'),
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
        path: '/exodia-website/themes/bspwm',
        component: ComponentCreator('/exodia-website/themes/bspwm','e97'),
        exact: true,
        sidebar: "testside"
      },
      {
        path: '/exodia-website/themes/dwm',
        component: ComponentCreator('/exodia-website/themes/dwm','d6b'),
        exact: true,
        sidebar: "testside"
      },
      {
        path: '/exodia-website/themes/glassy',
        component: ComponentCreator('/exodia-website/themes/glassy','549'),
        exact: true
      },
      {
        path: '/exodia-website/themes/i3wm',
        component: ComponentCreator('/exodia-website/themes/i3wm','33a'),
        exact: true,
        sidebar: "testside"
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
