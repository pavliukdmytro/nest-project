import './vue-shim.d.ts';
import './scss/main.scss';
import axios from 'axios';

import { IApp } from './libs/IApp';
import App from './libs/App';
import './root-components';

declare global {
  interface Window {
    App: IApp;
    currentLang: string;
  }
}

axios.defaults.baseURL = `/${window.currentLang}`;

window.App = App;
App.vue.main();
