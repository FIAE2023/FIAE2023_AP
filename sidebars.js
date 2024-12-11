// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  AP1Sidebar: [{type: 'autogenerated', dirName: 'AP1'}],
  userSidebar: [{type: 'autogenerated', dirName: 'user'}],
  rulesSidebar: [{type: 'autogenerated', dirName: 'helpful'}],
  templatesSidebar: [{type: 'autogenerated', dirName: 'templates'}],
  howToSidebar: [{type: 'autogenerated', dirName: 'howto'}],


  // But you can create a sidebar manually
    /*rulesSidebar: [
    {
      type: 'category',
      label: 'Regeln',
      items: ['helpful/helpful'],
    },
      {
        type: 'category',
        label: 'Formatierungshilfe',
        items: ['helpful/formats'],
      },
    ],
   userSidebar: [
    {
      type: 'category',
      label: 'Ausbilder',
      items: ['user/michel', 'user/holldack']
    },
    {
      type: 'category',
      label: 'Auszubildende Holldack',
      items: ['user/adams', 'user/beyer', 'user/diehl',
        'user/gottschalk', 'user/hoelz', 'user/huebscher',
        'user/meyer', 'user/seefeldt', 'user/ullmann']
    },
    {
      type: 'category',
      label: 'Auszubildende Michel',
      items: ['user/kindler', 'user/langhammer', 'user/loew',
        'user/peeler', 'user/ruecker', 'user/vardakis',
        'user/vrbanic', 'user/zirnig']
    },
  ],*/
};

export default sidebars;
