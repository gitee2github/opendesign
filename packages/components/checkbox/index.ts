import type { App } from 'vue';
import _Checkbox from './src/checkbox';
import _CheckboxGroup from './src/checkbox-group';

const Checkbox = Object.assign(_Checkbox, {
  install(app: App) {
    app.component(_Checkbox.name, _Checkbox);
  },
});

const CheckboxGroup = Object.assign(_CheckboxGroup, {
  install(app: App) {
    app.component(_CheckboxGroup.name, _CheckboxGroup);
  },
});

export { Checkbox, CheckboxGroup };
