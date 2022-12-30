import type { App } from 'vue';
import _Radio from './src/radio';
import _RadioGroup from './src/radio-group';

const Radio = Object.assign(_Radio, {
  install(app: App) {
    app.component(_Radio.name, _Radio);
  },
});

const RadioGroup = Object.assign(_RadioGroup, {
  install(app: App) {
    app.component(_RadioGroup.name, _RadioGroup);
  },
});

export { Radio, RadioGroup };
