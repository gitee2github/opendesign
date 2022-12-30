import type { App } from 'vue';

import './style/variable.scss';

import { Button } from './button';
import { Radio, RadioGroup } from './radio';
import { Checkbox, CheckboxGroup } from './checkbox';
import { Card } from './card';

const components = [Button, Radio, RadioGroup, Checkbox, CheckboxGroup, Card];

export default {
  install(app: App): void {
    components.forEach((component) => {
      app.use(component as any);
    });
  },
};
