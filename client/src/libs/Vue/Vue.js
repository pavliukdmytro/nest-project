"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var store_1 = require("../../store");
var Vue = /** @class */ (function () {
    function Vue() {
        this.components = {};
    }
    Vue.prototype.setComponent = function (component) {
        // eslint-disable-next-line no-underscore-dangle
        var name = (component === null || component === void 0 ? void 0 : component.__name) || (component === null || component === void 0 ? void 0 : component.name);
        if (name) {
            this.components[name] = component;
        }
    };
    Vue.prototype.createPropsFromAttributes = function (data) {
        try {
            var dataset = data.dataset;
            console.dir(dataset);
            var params = {};
            // eslint-disable-next-line no-restricted-syntax
            for (var key in dataset) {
                // eslint-disable-next-line no-continue
                if (key === 'vue')
                    continue;
                // console.log(key);
                params[key] = JSON.parse(dataset[key]);
            }
            return params;
            // return {};
        }
        catch (err) {
            console.error(err);
            return {};
        }
    };
    Vue.prototype.main = function () {
        var _this = this;
        try {
            var domComponents = Array.from(document.querySelectorAll('[data-vue]'));
            domComponents.forEach(function (el) {
                var name = el.dataset.vue;
                if (name && name in _this.components) {
                    var app = (0, vue_1.createApp)(_this.components[name], _this.createPropsFromAttributes(el));
                    app.use(store_1["default"]);
                    app.use(require('vue-universal-modal')["default"], {
                        teleportTarget: '#modals'
                    });
                    app.mount(el);
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    };
    return Vue;
}());
exports["default"] = new Vue();
