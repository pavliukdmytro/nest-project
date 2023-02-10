export default (store) => {
  store.subscribe(({ type, payload }, state) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case 'global/loaderStart':
        if (state.global.loader) {
          let parent = null;

          switch (typeof payload) {
            case 'string':
              parent = document.querySelector(payload);
              break;
            case 'object':
              parent = payload;
              break;
            default:
              parent = document.querySelector('body');
          }

          parent.style.position = 'relative';

          const loader = document.createElement('div');
          loader.classList.add('global-loader');
          loader.style.cssText = `
                        display: flex;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        background-color: rgba(0,0,0, .2);
                        z-index: 10003;
                    `;

          loader.innerHTML = require('./svg-loader').default;

          parent.appendChild(loader);
        }
        break;
      case 'global/loaderStop':
        if (!state.global.loader) {
          const loader = document.querySelector('.global-loader');
          if (loader) loader.remove();
        }
        break;
    }
  });
};
