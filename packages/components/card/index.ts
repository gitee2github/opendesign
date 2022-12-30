import type { App } from 'vue';
import _Card from './src/card';

const Card = Object.assign(_Card, {
  install(app: App) {
    app.component(_Card.name, _Card);
  },
});

export { Card };
