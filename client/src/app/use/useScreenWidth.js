"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
var vue_1 = require("vue");
function useScreenWidth() {
    var state = (0, vuex_1.useStore)().state;
    var screenWidth = (0, vue_1.computed)(function () { return state.global.screenWidth; });
    return screenWidth;
}
exports["default"] = useScreenWidth;
