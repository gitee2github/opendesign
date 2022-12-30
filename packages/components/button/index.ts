import type { App } from 'vue';
import _Button from './src/button';

const Button = Object.assign(_Button, {
  install(app: App) {
    app.component(_Button.name, _Button);
  },
});

export { Button };
