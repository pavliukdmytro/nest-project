import { createStore } from 'vuex';
import loader from './plugins/loader';

const debug = process.env.NODE_ENV !== 'production';

// Create a new index instance.
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  modules: {
    global: require('./modules/global/global').default,
  },
  mutations: {},
  plugins: [loader],
  strict: debug,
});

export default store;
