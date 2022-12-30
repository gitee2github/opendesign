import type { UserConfig } from 'vitepress';

import sidebarConfigComponents from './config/sidebar-components';
import sidebarConfigDesign from './config/sidebar-design';
import navConfig from './config/nav';

// import { demoBlockPlugin } from 'vitepress-theme-demoblock';

const config: UserConfig = {
  base: '/',
  title: 'OpenDesign',
  description: 'OpenDesign SIG 打造服务开源社区的开源体验系统',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh',
      label: '简体中文',
    },
    '/en/': {
      lang: 'en',
      label: 'English',
    },
  },
  themeConfig: {
    // 导航栏
    nav: navConfig,
    // 侧边栏
    sidebar: [
      { id: 'components', config: sidebarConfigComponents },
      { id: 'design', config: sidebarConfigDesign },
    ],
    doc: ['design', 'components'],
  },
  markdown: {
    config: (md) => {
      // md.use(demoBlockPlugin, {
      //   cssPreprocessor: 'scss',
      // });
    },
  },
};
export default config;
