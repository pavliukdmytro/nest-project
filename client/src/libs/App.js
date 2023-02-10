"use strict";
exports.__esModule = true;
var Vue_1 = require("./Vue/Vue");
var Store_1 = require("./Store/Store");
var App = /** @class */ (function () {
    function App(vue, store) {
        this.vue = vue;
        this.store = store;
        this.main();
    }
    App.prototype.handlerWindowResize = function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.store.commit('global/changeScreenWidth');
        });
    };
    App.prototype.main = function () {
        this.handlerWindowResize();
    };
    return App;
}());
exports["default"] = new App(Vue_1["default"], Store_1["default"]);
