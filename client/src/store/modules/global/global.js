"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports["default"] = {
    state: function () { return ({
        screenWidth: window.innerWidth,
        loader: false,
        defModal: {
            isOpen: false,
            data: { name: '', width: '' }
        }
    }); },
    mutations: {
        /** change screenWidth * */
        'global/changeScreenWidth': function (state) {
            // eslint-disable-next-line no-param-reassign
            state.screenWidth = window.innerWidth;
        },
        /**
         * @param {string|object} payload - parent selector for preloader default: document.querySelector('body').
         */
        'global/loaderStart': function (state) {
            // eslint-disable-next-line no-param-reassign
            state.loader = true;
        },
        'global/loaderStop': function (state) {
            // eslint-disable-next-line no-param-reassign
            state.loader = false;
        },
        /**
         * methods for modals
         * * */
        'global/modalShow': function (state, payload) {
            // eslint-disable-next-line no-param-reassign
            state.defModal = {
                isOpen: true,
                data: __assign({}, payload)
            };
        },
        'global/modalHide': function (state) {
            // eslint-disable-next-line no-param-reassign
            state.defModal = {
                isOpen: false
            };
        }
    }
};
