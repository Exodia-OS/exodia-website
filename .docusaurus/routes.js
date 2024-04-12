
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/exodia-website/__docusaurus/debug',
    component: ComponentCreator('/exodia-website/__docusaurus/debug','b43'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/config',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/config','dab'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/content',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/content','4f6'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/globalData','ed4'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/metadata','b31'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/registry',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/registry','702'),
    exact: true
  },
  {
    path: '/exodia-website/__docusaurus/debug/routes',
    component: ComponentCreator('/exodia-website/__docusaurus/debug/routes','0a0'),
    exact: true
  },
  {
    path: '/exodia-website/',
    component: ComponentCreator('/exodia-website/','d50'),
    exact: true
  },
  {
    path: '/exodia-website/',
    component: ComponentCreator('/exodia-website/','580'),
    routes: [
      {
        path: '/exodia-website/quickstart/install',
        component: ComponentCreator('/exodia-website/quickstart/install','220'),
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
