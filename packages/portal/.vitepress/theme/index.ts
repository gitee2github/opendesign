import type { App } from 'vue';
import { createPinia } from 'pinia';
import OpenDesign from 'opendesign';
import OpenDesignThme from '../opendesign-theme';

// import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
// import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
// import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';

export default {
  ...OpenDesignThme,
  enhanceApp({ app }: { app: App }) {
    app.use(createPinia());
    app.use(OpenDesign);

    // app.component('Demo', Demo);
    // app.component('DemoBlock', DemoBlock);
  },
};
