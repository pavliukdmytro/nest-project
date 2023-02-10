"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
var loader_1 = require("./plugins/loader");
var debug = process.env.NODE_ENV !== 'production';
// Create a new index instance.
var store = (0, vuex_1.createStore)({
    state: function () {
        return {
            counter: 0
        };
    },
    modules: {
        global: require('./modules/global/global')["default"]
    },
    mutations: {},
    plugins: [loader_1["default"]],
    strict: debug
});
exports["default"] = store;
