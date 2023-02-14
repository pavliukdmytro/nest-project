import { join } from 'path';
import * as hbs from 'hbs';

hbs.registerHelper('toJson', function (context) {
  return JSON.stringify(context);
});

hbs.registerHelper('setStore', function (context, options) {
  return `  
    <script>
    window.addEventListener('DOMContentLoaded', () => {
      App.store.commit('setState/${options}', ${JSON.stringify(context)})
    });
    </script>
  `;
});

hbs.registerHelper('setStoreGlobal', function (context, options) {
  return `  
    <script>
    window.addEventListener('DOMContentLoaded', () => {
      App.store.commit('setState/global', ${JSON.stringify({
        [options]: context,
      })});
    });
    </script>
  `;
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hbsutils = require('hbs-utils')(hbs);

export default (app) => {
  hbsutils.registerPartials(join(__dirname, '../../', '/views/partials'));
  hbsutils.registerWatchedPartials(
    join(__dirname, '../../', '/views/partials'),
  );
  app.setBaseViewsDir(join(__dirname, '../../', 'views'));
  app.set('view options', { layout: 'layouts/layout' });
  app.setViewEngine('hbs');
};
