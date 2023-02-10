"use strict";
exports.__esModule = true;
require("./vue-shim.d.ts");
require("./scss/main.scss");
var App_1 = require("./libs/App");
require("./root-components");
window.App = App_1["default"];
App_1["default"].vue.main();
